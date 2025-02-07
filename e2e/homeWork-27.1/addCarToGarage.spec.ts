import { test } from '../fixture/fixturesBase';
import { SidebarPanelComponent } from '../page-object/components/SidebarPanelComponent';
import { GaragePage } from '../page-object/pages/GaragePage';

test.describe('add car to garage', () => {
  test('add BMW X6', async ({ page, userGaragePage }) => {
    // userGaragePage.openPage();
    userGaragePage.openAddCarFormGroup();

    // const sidebarPanelComponent = new SidebarPanelComponent(page);
    // sidebarPanelComponent.logOutNavigateButtonClick();
    // const GaragePageInstance = new GaragePage(page);
    // await GaragePageInstance.openPage();
    // await GaragePageInstance.openAddCarFormGroup();
  });
});
