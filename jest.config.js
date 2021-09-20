module.exports = {
    roots: [
      '<rootDir>/test'
    ],
    testMatch: [
      '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node'
}