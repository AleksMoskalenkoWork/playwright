import test, { expect } from '@playwright/test';
import { SidebarPanelComponent } from '../page-object/components/SidebarPanelComponent';
import { LoginFormGroup } from '../page-object/forms/LoginFormGroup';
import { HomePage } from '../page-object/pages/HomePage';

test.describe('Mock data', () => {
  let sidebarPanelComponentInstance: SidebarPanelComponent;
  let loginFormGroupInstance: LoginFormGroup;
  let homePageInstance: HomePage;
  let profilePageNameLocator;

  let fakeData = {
    status: 'ok',
    data: {
      userId: 168069,
      photoFilename: 'default-user.png',
      lastName: 'Polar',
      name: 'Bear',
      dateBirth: '3000-10-30T00:00:00.000Z',
      country: 'Poland',
    },
  };

  test.beforeEach(async ({ page }) => {
    sidebarPanelComponentInstance = new SidebarPanelComponent(page);
    homePageInstance = new HomePage(page);
    loginFormGroupInstance = new LoginFormGroup(page);

    await page.route('**/api/users/profile', (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(fakeData),
      })
    );

    await homePageInstance.openPage();
    await homePageInstance.openLoginFormGroup();
    await loginFormGroupInstance.enterEmail();
    await loginFormGroupInstance.enterPassword();
    await loginFormGroupInstance.clickLoginButton();

    await sidebarPanelComponentInstance.profileNavigateButtonClick();
    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/profile');
  });

  test('Validate mock data on profile page ', async ({ page }) => {
    profilePageNameLocator = page.locator(
      '//p [@class="profile_name display-4"]'
    );

    await expect(profilePageNameLocator).toBeVisible();
    await expect(profilePageNameLocator).toHaveText(
      fakeData.data.name + ' ' + fakeData.data.lastName
    );
  });
});
