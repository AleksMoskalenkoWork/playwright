import { expect, type Locator, type Page } from '@playwright/test';
import { AddCarFormGroup } from '../forms/AddCarFormGroup';
import { brand } from '../../helpers/brand';
import { model } from '../../helpers/model';
import { EditCarFormGroup } from '../forms/EditCarFormGroup';

export class GaragePage {
  readonly page: Page;
  readonly addCarButton: Locator;
  readonly editCarIcon: Locator;
  readonly addCarFormGroup: AddCarFormGroup;
  readonly editCarFormGroup: EditCarFormGroup;

  constructor(page: Page) {
    this.page = page;
    this.addCarButton = page.getByRole('button', { name: 'Add car' });
    this.editCarIcon = page.locator('//button [@class="icon-edit"]');
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

  async addCar() {
    await this.addCarFormGroup.selectBrand(brand.BMW);
    await this.addCarFormGroup.selectModel(model.BMW.X6);
    await this.addCarFormGroup.typeMileage(111);
    await this.addCarFormGroup.addButtonClick();
  }
  async removeCar() {
    const items = this.page.locator('//li [@class="car-item"] ');
    const count = await items.count();
    for (let i = 0; i < count; i++) {
      await this.openEditCarFormGroup();
      await this.editCarFormGroup.removeCarButtonClick;
    }
  }
}
