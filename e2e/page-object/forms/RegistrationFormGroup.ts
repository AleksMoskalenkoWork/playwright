import { expect, type Locator, type Page } from '@playwright/test';
import { testUserData } from '../../helpers/testUserData';

export class RegistrationFormGroup {
  readonly page: Page;

  readonly getInputNameField: Locator;
  readonly getInputLastNameField: Locator;
  readonly getInputEmailField: Locator;
  readonly getInputPasswordField: Locator;
  readonly getInputReEnterPasswordField: Locator;

  readonly getButtonRegister: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInputNameField = page.locator('//input[@formcontrolname="name"]');
    this.getInputLastNameField = page.locator(
      '//input[@formcontrolname="lastName"]'
    );
    this.getInputEmailField = page.locator('//input[@formcontrolname="email"]');
    this.getInputPasswordField = page.locator(
      '//input[@formcontrolname="password"]'
    );
    this.getInputReEnterPasswordField = page.locator(
      '//input[@formcontrolname="repeatPassword"]'
    );
    this.getButtonRegister = page.getByRole('button', { name: 'Register' });
  }

  async triggerFieldError(field) {
    await field.focus();
    await field.blur();
  }

  async verifyBorderColorValue(field) {
    await expect(field).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  }

  async verifyTextErrorValue(textErrorValue: string) {
    const locator = '//div[@class="invalid-feedback"]//p';
    await expect(
      this.page.locator(locator).getByText(textErrorValue)
    ).toHaveText(textErrorValue);
  }

  async fillInputField(field, value: string) {
    await field.fill(value);
  }

  async clickRegisterButton() {
    await expect(this.getButtonRegister).toBeVisible();
    await this.getButtonRegister.click();
  }
}
