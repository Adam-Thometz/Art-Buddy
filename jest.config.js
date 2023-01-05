module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/_testUtils/mocks/styleMock.js',
    '\\.(mp3|png|jpeg)$': '<rootDir>/src/_testUtils/mocks/fileMock.js',
    // used for relative imports
    'src(.*)$': "<rootDir>/src$1"
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js',
    '<rootDir>/src/_testUtils/mocks/localStorageMock.js',
    'jest-date-mock'
  ],
};