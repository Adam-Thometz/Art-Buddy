module.exports = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/src/_testUtils/coverage",
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/_testUtils/mocks/styleMock.js",
    "\\.(mp3|png|jpeg)$": "<rootDir>/src/_testUtils/mocks/fileMock.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
    "<rootDir>/src/_testUtils/mocks/localStorageMock.js",
    "jest-date-mock",
  ],
};