import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";
import { bytecodePlugin } from "./wagmi.bytecode.plugin";

export default defineConfig({
  out: "src/generated/contracts.ts",
  plugins: [
    foundry({
      project: ".",
      include: ["SuperBridge.json", "BridgeToken.json", "MockBridgeToken.json"],
    }),
    bytecodePlugin({ project: ".", artifacts: "out" }),
  ],
});
