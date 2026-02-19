import "dotenv/config";
import { spawnSync } from "node:child_process";
import {
  createPublicClient,
  createWalletClient,
  encodeAbiParameters,
  getAddress,
  http,
  isHex,
} from "viem";
import { Address, privateKeyToAccount } from "viem/accounts";
import {
  bridgeTokenAbi,
  bridgeTokenBytecode,
  superBridgeAbi,
  superBridgeBytecode,
} from "../src/generated/contracts";
import { sepolia } from "viem/chains";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env ${name}`);
  return value;
}

function normalizePk(pk: string) {
  return pk.startsWith("0x") ? pk : `0x${pk}`;
}

async function main() {
  const rpcUrl = requireEnv("RPC_URL");
  const privateKey = normalizePk(requireEnv("PRIVATE_KEY"));
  if (!isHex(privateKey)) throw new Error("PRIVATE_KEY must be hex");

  const account = privateKeyToAccount(privateKey);
  const publicClient = createPublicClient({ transport: http(rpcUrl) });
  const walletClient = createWalletClient({ transport: http(rpcUrl), account });

  const chainId = await publicClient.getChainId();
  const expectedChainId = process.env.CHAIN_ID
    ? Number(process.env.CHAIN_ID)
    : undefined;
  if (expectedChainId && expectedChainId !== chainId) {
    throw new Error(
      `CHAIN_ID mismatch. expected=${expectedChainId} got=${chainId}`
    );
  }

  const operatorAddress = process.env.OPERATOR_ADDRESS ?? account.address;
  let tokenAddress = process.env.TOKEN_ADDRESS;

  if (!tokenAddress) {
    const tokenName = process.env.TOKEN_NAME ?? "BridgeToken";
    const tokenSymbol = process.env.TOKEN_SYMBOL ?? "BRG";
    const tokenDecimals = Number(process.env.TOKEN_DECIMALS ?? "18");
    const minterAddress = (process.env.MINTER_ADDRESS ?? account.address )as Address;

    const tokenTx = await walletClient.deployContract({
      abi: bridgeTokenAbi,
      bytecode: bridgeTokenBytecode,
      args: [tokenName, tokenSymbol, tokenDecimals, minterAddress],
      chain: sepolia
    });
    const tokenReceipt = await publicClient.waitForTransactionReceipt({
      hash: tokenTx,
    });
    tokenAddress = tokenReceipt.contractAddress!;
    console.log("BridgeToken deployed:", tokenAddress);
  } else {
    console.log("Using existing BridgeToken:", tokenAddress);
  }

  const bridgeTx = await walletClient.deployContract({
    abi: superBridgeAbi,
    bytecode: superBridgeBytecode,
    args: [ getAddress(tokenAddress), getAddress(operatorAddress)],
    chain: sepolia
  });
  const bridgeReceipt = await publicClient.waitForTransactionReceipt({
    hash: bridgeTx,
  });
  const bridgeAddress = bridgeReceipt.contractAddress!;
  console.log("SuperBridge deployed:", bridgeAddress);

  const shouldVerify = process.env.VERIFY === "true";
  const etherscanKey = process.env.ETHERSCAN_API_KEY;
  if (shouldVerify) {
    if (!etherscanKey) throw new Error("Missing env ETHERSCAN_API_KEY");

    const tokenArgs = encodeAbiParameters(
      [
        { type: "string" },
        { type: "string" },
        { type: "uint8" },
        { type: "address" },
      ],
      [
        process.env.TOKEN_NAME ?? "BridgeToken",
        process.env.TOKEN_SYMBOL ?? "BRG",
        Number(process.env.TOKEN_DECIMALS ?? "18"),
        getAddress(process.env.MINTER_ADDRESS ?? account.address),
      ]
    );

    const bridgeArgs = encodeAbiParameters(
      [{ type: "address" }, { type: "address" }],
      [getAddress(tokenAddress), getAddress(operatorAddress)]
    );

    const watchFlag = process.env.VERIFY_WATCH === "true" ? ["--watch"] : [];

    spawnSync(
      "forge",
      [
        "verify-contract",
        "--verifier",
        "etherscan",
        "--chain",
        String(chainId),
        "--etherscan-api-key",
        etherscanKey,
        "--constructor-args",
        tokenArgs,
        tokenAddress,
        "src/BridgeToken.sol:BridgeToken",
        ...watchFlag,
      ],
      { stdio: "inherit" }
    );

    spawnSync(
      "forge",
      [
        "verify-contract",
        "--verifier",
        "etherscan",
        "--chain",
        String(chainId),
        "--etherscan-api-key",
        etherscanKey,
        "--constructor-args",
        bridgeArgs,
        bridgeAddress,
        "src/SuperBridge.sol:SuperBridge",
        ...watchFlag,
      ],
      { stdio: "inherit" }
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
