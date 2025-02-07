import test, { expect } from '@playwright/test';
// import { test } from '../fixture/fixturesBase';
import { LoginFormGroup } from '../page-object/forms/LoginFormGroup';
import { HomePage } from '../page-object/pages/HomePage';

// test.describe('Login and save user state', () => {
//   test('Successful login and save storage', async ({
//     page,
//     loginWithSaveState,
//   }) => {});
// });

test.describe('Login and save user state', () => {
  let loginFormGroupInstance: LoginFormGroup;
  let homePageInstance: HomePage;

  test.beforeEach(async ({ page }) => {
    homePageInstance = new HomePage(page);
    loginFormGroupInstance = new LoginFormGroup(page);

    await homePageInstance.openPage();
    await homePageInstance.openLoginFormGroup();
  });

  test('Successful login and save storage', async ({ page }) => {
    await loginFormGroupInstance.enterEmail();
    await loginFormGroupInstance.enterPassword();
    await loginFormGroupInstance.clickLoginButton();

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');

    await page
      .context()
      .storageState({ path: 'e2e/setup/helper/currentUser.json' });
  });
});
