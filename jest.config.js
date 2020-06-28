module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {},
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
}
