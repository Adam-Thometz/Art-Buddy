module.exports = {
  // setupFiles: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/_testUtils/mocks/styleMock.js',
    '\\.(mp3|png|jpeg)$': '<rootDir>/src/_testUtils/mocks/fileMock.js'
  }
}