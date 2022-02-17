import { interopImportCJSDefault } from "node-cjs-interop";

async function main(): Promise<void> {
  console.log("poyo", interopImportCJSDefault);
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
