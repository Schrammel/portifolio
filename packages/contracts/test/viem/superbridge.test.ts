import { describe, expect, it } from "vitest";
import {
  createPublicClient,
  createWalletClient,
  getContract,
  http,
  parseEther,
} from "viem";
import { foundry } from "viem/chains";
import { Address, mnemonicToAccount } from "viem/accounts";
import { MNEMONIC } from "./global-setup";
import {
  mockBridgeTokenAbi,
  mockBridgeTokenBytecode,
  superBridgeAbi,
  superBridgeBytecode,
} from "../../src/generated/contracts";

const transport = http("http://127.0.0.1:8545");

describe("SuperBridge (viem)", () => {
  const publicClient = createPublicClient({ chain: foundry, transport });

  const user = mnemonicToAccount(MNEMONIC, { accountIndex: 1 });
  const userClient = createWalletClient({
    chain: foundry,
    transport,
    account: user,
  });

  const operator = mnemonicToAccount(MNEMONIC, { accountIndex: 0 });
  const operatorClient = createWalletClient({
    chain: foundry,
    transport,
    account: operator,
  });

  const destinationUser = mnemonicToAccount(MNEMONIC, { accountIndex: 2 });

  const deployMockToken = async () => {
    // Deploy the mockToken
    const mockTokenHash = await operatorClient.deployContract({
      abi: mockBridgeTokenAbi,
      bytecode: mockBridgeTokenBytecode,
      args: [],
    });
    const { contractAddress: tokenAddress } =
      await publicClient.waitForTransactionReceipt({
        hash: mockTokenHash,
      });
    if (!tokenAddress) throw "No tokenAddress";
    const token = getContract({
      address: tokenAddress,
      abi: mockBridgeTokenAbi,
      client: { public: publicClient, wallet: operatorClient },
    });
    return token;
  };

  const deployBridgeToken = async (tokenAddress: Address) => {
    // Deploy the bridge
    const bridgeHash = await operatorClient.deployContract({
      abi: superBridgeAbi,
      bytecode: superBridgeBytecode,
      args: [tokenAddress, operator.address],
    });
    const { contractAddress: bridgeAddress } =
      await publicClient.waitForTransactionReceipt({
        hash: bridgeHash,
      });

    if (!bridgeAddress) throw "No bridgeAddress";
    const bridge = getContract({
      address: bridgeAddress,
      abi: superBridgeAbi,
      client: { public: publicClient, wallet: operatorClient },
    });

    return bridge;
  };

  it("finishes request with operator signature and prevents replay", async () => {
    // Create user account and send 1 ether.
    await operatorClient.sendTransaction({
      to: user.address,
      value: parseEther("1"),
    });

    const token = await deployMockToken();
    const bridge = await deployBridgeToken(token.address);

    const tokenAsUser = getContract({
      address: token.address,
      abi: mockBridgeTokenAbi,
      client: { public: publicClient, wallet: userClient },
    });
    const bridgeAsUser = getContract({
      address: bridge.address,
      abi: superBridgeAbi,
      client: { public: publicClient, wallet: userClient },
    });

    const amount = parseEther("1");
    const chainId = 31337;
    const destinationChain = 31337n;
    const sourceChain = 1n;

    await token.write.mint([user.address, amount]);
    await tokenAsUser.write.approve([bridge.address, amount]);
    await bridgeAsUser.write.requestBridge([
      amount,
      destinationChain,
      destinationUser.address,
    ]);

    const events = await bridge.getEvents.BridgeRequested();
    expect(events.length, "Expect right number of events").toBe(1);

    const arg = events[0].args;
    if (!arg) throw "No Arg";

    expect(arg.destinationUser, "expected right user").toBe(
      destinationUser.address,
    );
    expect(arg.amount, "expected same amount").toBe(amount);

    //bridge starts here
    const id = arg.id!;

    const pendingStatus = await bridge.read.requests([id]);
    expect(pendingStatus[5]).toBe(0); // 0 means Pending
    console.log(pendingStatus);

    await bridge.write.conclude([id]);
    const concludeStatus = await bridge.read.requests([id]);
    console.log(concludeStatus);
    expect(concludeStatus[5]).toBe(2); // 2 means Concluded

    //Run bridge
    const deadline = BigInt(Math.floor(Date.now() / 1000) + 3600);
    const signature = await operatorClient.signTypedData({
      domain: {
        name: "SuperBridge",
        version: "1",
        chainId,
        verifyingContract: bridge.address,
      },
      types: {
        BridgeRequest: [
          { name: "id", type: "uint256" },
          { name: "sourceChain", type: "uint256" },
          { name: "user", type: "address" },
          { name: "destinationUser", type: "address" },
          { name: "amount", type: "uint256" },
          { name: "destinationChain", type: "uint256" },
          { name: "token", type: "address" },
          { name: "bridge", type: "address" },
          { name: "deadline", type: "uint256" },
        ],
      },
      primaryType: "BridgeRequest",
      message: {
        id,
        sourceChain,
        user: user.address,
        destinationUser: destinationUser.address,
        amount,
        destinationChain,
        token: token.address,
        bridge: bridge.address,
        deadline,
      },
    });

    await bridge.write.finishRquest([
      id,
      sourceChain,
      user.address,
      destinationUser.address,
      amount,
      destinationChain,
      deadline,
      signature,
    ]);

    const destBalance = await token.read.balanceOf([destinationUser.address]);
    expect(destBalance).toBe(amount);

    await expect(
      bridge.write.finishRquest([
        id,
        sourceChain,
        user.address,
        destinationUser.address,
        amount,
        destinationChain,
        deadline,
        signature,
      ]),
    ).rejects.toThrow();

    //should throw ALREADY_EXECUTED
    await expect(
      bridge.write.finishRquest([
        id,
        sourceChain,
        user.address,
        destinationUser.address,
        amount,
        destinationChain,
        deadline,
        signature,
      ]),
    ).rejects.toMatchObject({
      shortMessage: expect.stringContaining("ALREADY_EXECUTED"),
    });
  });
});
