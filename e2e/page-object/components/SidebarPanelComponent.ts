import { expect, type Locator, type Page } from '@playwright/test';

export class SidebarPanelComponent {
  readonly page: Page;
  readonly logOutNavigateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logOutNavigateButton = page.locator(
      '//a [@class="btn btn-link text-danger btn-sidebar sidebar_btn"]'
    );
  }

  async logOutNavigateButtonClick() {
    await this.logOutNavigateButton.click();
  }
}
