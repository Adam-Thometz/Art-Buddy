module.exports = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/src/testUtils/coverage",
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/testUtils/mocks/styleMock.js",
    "\\.(mp3|png|jpeg)$": "<rootDir>/src/testUtils/mocks/fileMock.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
    "<rootDir>/src/testUtils/mocks/localStorageMock.js",
    "jest-date-mock",
  ],
};