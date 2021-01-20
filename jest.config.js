const testMatch = () => {
  if (process.env.INTEGRATION)
    return [`**/?(*.)+(intg).[jt]s?(x)`]

  return [`**/?(*.)+(spec|test).[jt]s?(x)`]
}

module.exports = {
  testMatch: testMatch(),
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],

  "jest-junit": {
    "addFileAttribute": true
  },
}
