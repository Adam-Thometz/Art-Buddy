module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/_testUtils/mocks/styleMock.js',
    '\\.(mp3|png|jpeg)$': '<rootDir>/src/_testUtils/mocks/fileMock.js',
    'src(.*)$': "<rootDir>/src$1"
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: '<rootDir>/src/setupTests.js',
  setupTestFrameworkScriptFile: '<rootDir>/src/_testUtils/mocks/localStorageMock.js'
}