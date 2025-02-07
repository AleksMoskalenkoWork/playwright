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
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: './e2e/setup/helper/currentUser.json',
    });
    await use(context);
    await context.close();
  },

  userGaragePage: async ({ context }, use) => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext({
    //   storageState: './e2e/setup/helper/currentUser.json',
    // });
    const page = await context.newPage();

    garagePageInstance = new GaragePage(page);

    await garagePageInstance.openPage();
    await use(garagePageInstance);
    await garagePageInstance.removeCar();
  },
});
