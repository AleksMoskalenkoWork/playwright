import { test as base, chromium, Page } from '@playwright/test';
import { GaragePage } from '../page-object/pages/GaragePage';
import { HomePage } from '../page-object/pages/HomePage';
import { Context } from 'vm';
import { SidebarPanelComponent } from '../page-object/components/SidebarPanelComponent';

type fixturesPages = {
  userGaragePage: GaragePage;
  sidebarPanelComponent: SidebarPanelComponent;
};

let garagePageInstance: GaragePage;
let sidebarPanelComponent: SidebarPanelComponent;

export const fixturesUserGaragePage = base.extend<fixturesPages>({
  userGaragePage: async ({}, use) => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      storageState: './e2e/setup/helper/currentUser.json',
    });
    const page = await context.newPage();

    await page.goto('panel/garage');

    garagePageInstance = new GaragePage(page);
    await use(garagePageInstance);
    // garagePageInstance.openPage();
    // sidebarPanelComponent.logOutNavigateButtonClick();
    // garagePageInstance.removeCar();
    // await garagePageInstance.page.close();
  },
});
