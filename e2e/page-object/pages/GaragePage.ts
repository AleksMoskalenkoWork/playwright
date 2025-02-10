import { expect, type Locator, type Page } from '@playwright/test';
import { AddCarFormGroup } from '../forms/AddCarFormGroup';
import { EditCarFormGroup } from '../forms/EditCarFormGroup';

export class GaragePage {
  readonly page: Page;
  readonly addCarButton: Locator;
  readonly editCarIcon: Locator;
  readonly brandSelectField: Locator;
  readonly modelSelectField: Locator;
  readonly mileageInputField: Locator;
  readonly cancelButton: Locator;
  readonly addButton: Locator;
  readonly removeCarButton: Locator;
  readonly approveRemoveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addCarButton = page.getByRole('button', { name: 'Add car' });
    this.editCarIcon = page.locator('//span [@class="icon icon-edit"]');
    this.brandSelectField = page.locator('//select [@id="addCarBrand"]');
    this.modelSelectField = page.getByLabel('Model');
    this.mileageInputField = page.getByLabel('Mileage');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.removeCarButton = page.locator(
      '//button [@class="btn btn-outline-danger"]'
    );
    this.approveRemoveButton = page.locator(
      '//button[@class="btn btn-danger"]'
    );
  }

  async selectBrand(brand) {
    await this.brandSelectField.selectOption(brand);
  }

  async selectModel(model) {
    await this.modelSelectField.selectOption(model);
  }

  async typeMileage(number) {
    await this.mileageInputField.fill(number);
  }

  async addButtonClick() {
    await this.addButton.click();
  }

  async cancelButtonClick() {
    await this.cancelButton.getByRole('button', { name: 'Cancel' }).click();
  }

  async removeCarButtonClick() {
    await this.removeCarButton.click();
  }
  async approveRemoveButtonClick() {
    await this.approveRemoveButton.click();
  }

  async openPage() {
    await this.page.goto('panel/garage');
  }

  async openEditCarFormGroup() {
    await this.editCarIcon.click();
  }

  async openAddCarFormGroup() {
    await this.addCarButton.click();
  }

  async addCar(brandOption, modelOption, mileage) {
    await this.selectBrand(brandOption);
    await this.selectModel(modelOption);
    await this.typeMileage(mileage);
    await this.addButtonClick();
  }

  async removeCar() {
    const items = this.page.locator('//span [@class="icon icon-edit"]');
    const count = await items.count();
    for (let i = 0; i <= count; i++) {
      await items.first().click();
      await this.removeCarButtonClick();
      await this.approveRemoveButtonClick();
    }
  }
}
