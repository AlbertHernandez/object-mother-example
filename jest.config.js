module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  coveragePathIgnorePatterns: [
    'index.ts'
  ]
};
