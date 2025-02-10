import { test as base, expect } from '@playwright/test';
import { LoginFormGroup } from '../page-object/forms/LoginFormGroup';
import { HomePage } from '../page-object/pages/HomePage';

let loginFormGroupInstance: LoginFormGroup;
let homePageInstance: HomePage;

export const fixturesLoginWithSaveState = base.extend({
  loginWithSaveState: async ({ page }, use) => {
    loginFormGroupInstance = new LoginFormGroup(page);
    homePageInstance = new HomePage(page);

    await homePageInstance.openPage();
    await homePageInstance.openLoginFormGroup();
    await use(loginFormGroupInstance);
    await loginFormGroupInstance.enterEmail();
    await loginFormGroupInstance.enterPassword();
    await loginFormGroupInstance.clickLoginButton();
    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');

    await page
      .context()
      .storageState({ path: 'e2e/setup/helper/currentUser.json' });
  },

  loginWithoutSaveState: async ({ page }, use) => {
    loginFormGroupInstance = new LoginFormGroup(page);
    homePageInstance = new HomePage(page);

    await homePageInstance.openPage();
    await homePageInstance.openLoginFormGroup();
    await use(loginFormGroupInstance);
    await loginFormGroupInstance.enterEmail();
    await loginFormGroupInstance.enterPassword();
    await loginFormGroupInstance.clickLoginButton();
    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
  },
});
