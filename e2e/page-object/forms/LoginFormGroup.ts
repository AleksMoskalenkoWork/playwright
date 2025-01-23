import { expect, type Locator, type Page } from '@playwright/test';
import { testUserData } from '../../helpers/testUserData';

export class LoginFormGroup {
  readonly page: Page;
  readonly getInputEmailField: Locator;
  readonly getInputPasswordField: Locator;
  readonly getButtonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInputEmailField = page.getByLabel('signinEmail');
    this.getInputPasswordField = page.getByLabel('Password');
  }

  async enterEmail() {
    await this.getInputEmailField.fill(testUserData.correct.currentEmail);
  }

  async enterPassword() {
    await this.getInputEmailField.fill(testUserData.correct.password);
  }

  async clickLoginButton() {
    await this.getInputEmailField.fill(testUserData.correct.password);
  }
}
