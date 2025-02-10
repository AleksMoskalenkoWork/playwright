import { expect, type Locator, type Page } from '@playwright/test';
export class RemoveCarModal {
  readonly page: Page;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async removeButtonClick() {
    await this.removeButton.getByRole('button', { name: 'Remove' }).click();
  }
}
