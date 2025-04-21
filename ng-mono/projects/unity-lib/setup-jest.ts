import {setupZoneTestEnv} from 'jest-preset-angular/setup-env/zone';
import {Mock} from 'ts-mockery';
import './jestGlobalMocks';

Object.defineProperty(window, 'DragEvent', {
  value: class DragEvent {},
});

Mock.configure('jest');

setupZoneTestEnv();
