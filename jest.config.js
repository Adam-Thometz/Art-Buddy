module.exports = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/src/test/coverage",
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/test/mocks/styleMock.js",
    "\\.(mp3|png|jpeg)$": "<rootDir>/src/test/mocks/fileMock.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
    "<rootDir>/src/test/mocks/localStorageMock.js",
    "jest-date-mock",
  ],
};