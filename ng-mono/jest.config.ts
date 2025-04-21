import type {Config} from 'jest';
import presets from 'jest-preset-angular/presets';

const presetConfig = presets.createCjsPreset({});

const jestConfig: Config = {
  ...presetConfig,
  coverageDirectory: 'dist/coverage',
  collectCoverageFrom: ['projects/unity-lib/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/projects/unity-lib/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/test-util/index.ts', '.stories.ts'],
  snapshotSerializers: ['jest-preset-angular/build/serializers/ng-snapshot', 'jest-preset-angular/build/serializers/html-comment'],
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '@dummy/unity-lib/confirm': '<rootDir>/projects/unity-lib/confirm/src/public_api.ts',
  },
  roots: ['projects/unity-lib'],
};

export default jestConfig;
