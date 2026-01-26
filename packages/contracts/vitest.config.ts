import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/viem/**/*.test.ts"],
    testTimeout: 30000,
    hookTimeout: 30000,
    globalSetup: ["./test/viem/global-setup.ts"],
  },
});
