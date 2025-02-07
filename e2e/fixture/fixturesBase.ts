import { mergeTests } from '@playwright/test';
import { fixturesLoginWithSaveState } from './fixturesLoginWithSaveState';
import { fixturesUserGaragePage } from './fixturesUserGaragePage';

export const test = mergeTests(
  fixturesLoginWithSaveState,
  fixturesUserGaragePage
);
