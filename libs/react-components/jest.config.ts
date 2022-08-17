/* eslint-disable */
export default {
  displayName: 'react-components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/react-components',
  setupFilesAfterEnv: ['./src/scripts/jest-setup.config.ts'],
};