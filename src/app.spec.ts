import { interopImportCJSDefault } from "node-cjs-interop";

describe("app", (): void => {
  describe("add", (): void => {
    it("should be correct", (): void => {
      expect.assertions(1);
      expect(32 + 10).toBe(42);
      console.log({ interopImportCJSDefault });
    });
  });
});
