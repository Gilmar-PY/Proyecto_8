// jest.config.cjs

module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.cjs'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  roots: ['<rootDir>/pruebas'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
