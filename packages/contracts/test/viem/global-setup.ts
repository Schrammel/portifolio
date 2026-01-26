import { spawn } from "node:child_process";

export const MNEMONIC =
  "test test test test test test test test test test test junk";

export default async function globalSetup() {
  const proc = spawn(
    "anvil",
    ["--chain-id", "31337", "--mnemonic", MNEMONIC],
    { stdio: ["ignore", "pipe", "pipe"] }
  );

  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const onData = (data: Buffer) => {
      const text = data.toString();
      if (text.includes("Listening on")) {
        settled = true;
        proc.stdout.off("data", onData);
        resolve();
      }
    };
    proc.stdout.on("data", onData);
    proc.stderr.on("data", (data: Buffer) => {
      if (!settled) {
        reject(new Error(data.toString()));
      }
    });
    proc.on("exit", (code) => {
      if (!settled) reject(new Error(`anvil exited with code ${code}`));
    });
  });

  return async () => {
    proc.kill("SIGTERM");
  };
}
