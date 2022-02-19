// import { describe, it, expect } from "vitest";

import ky from "ky";
// import { interopImportCJSDefault } from "node-cjs-interop";

describe("app", () => {
  describe("add", () => {
    it("should be correct", () => {
      expect.assertions(1);
      expect(32 + 10).toBe(42);
      console.log({ ky });
      // console.log({ interopImportCJSDefault });
    });
  });
});
