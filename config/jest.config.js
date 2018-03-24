module.exports = {
    bail: false,
    cacheDirectory: ".jest-cache",
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      }
    },
    moduleFileExtensions: ["js", "json", "ts", "tsx"],
    globals: {
      "ts-jest": {
        tsConfigFile: "tsconfig.json"
      }
    },
    testMatch: ["<rootDir>/src/**/__tests__/**/*.(test|spec).{ts,tsx}"],
    transform: {
        ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    verbose: true,
};
