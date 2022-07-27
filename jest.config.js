module.exports = {
  roots: ["<rootDir>/src"],
  collectCovergeForm: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverare",
  testEnvoriment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
