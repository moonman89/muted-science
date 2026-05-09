import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "lib/**/src/**/*.test.ts",
      "artifacts/**/src/**/*.test.ts",
    ],
  },
});
