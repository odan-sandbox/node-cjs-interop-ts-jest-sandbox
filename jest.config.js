export default {
  preset: "ts-jest/presets/js-with-ts",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html"],
  transformIgnorePatterns: ["/node_modules/(?!(ky))"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
