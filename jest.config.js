module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  collectCoverageFrom: ['**/src/**/*.ts'],
  coveragePathIgnorePatterns: ['index.ts']
};
