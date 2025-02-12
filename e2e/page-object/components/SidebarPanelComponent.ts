import { expect, type Locator, type Page } from '@playwright/test';

export class SidebarPanelComponent {
  readonly page: Page;
  readonly logOutNavigateButton: Locator;
  readonly profileNavigateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logOutNavigateButton = page.locator(
      '//a [@class="btn btn-link text-danger btn-sidebar sidebar_btn"]'
    );

    this.profileNavigateButton = page.locator(
      '//a [@class="btn btn-white btn-sidebar sidebar_btn -profile"]'
    );
  }

  async profileNavigateButtonClick() {
    await this.profileNavigateButton.click();
  }

  async logOutNavigateButtonClick() {
    await this.logOutNavigateButton.click();
  }
}
