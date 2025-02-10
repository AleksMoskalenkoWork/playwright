import { expect, type Locator, type Page } from '@playwright/test';

export class EditCarFormGroup {
  readonly page: Page;
  readonly removeCarButton: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async removeCarButtonClick() {
    await this.removeCarButton
      .getByRole('button', { name: 'Remove car' })
      .click();
  }
}
