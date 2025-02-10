import { expect, type Locator, type Page } from '@playwright/test';

export class AddCarFormGroup {
  readonly page: Page;
  readonly brandSelectField: Locator;
  readonly modelSelectField: Locator;
  readonly mileageInputField: Locator;
  readonly cancelButton: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.brandSelectField = page.locator('//select [@id="addCarBrand"]');
    this.modelSelectField = page.getByLabel('Model');
    this.mileageInputField = page.getByLabel('Mileage');
  }

  async selectBrand(brand) {
    await this.brandSelectField.fill(brand);
  }

  async selectModel(model) {
    await this.modelSelectField.fill(model);
  }

  async typeMileage(number) {
    await this.mileageInputField.fill(number);
  }

  async addButtonClick() {
    await this.addButton.getByRole('button', { name: 'Add' }).click();
  }

  async cancelButtonClick() {
    await this.cancelButton.getByRole('button', { name: 'Cancel' }).click();
  }
}
