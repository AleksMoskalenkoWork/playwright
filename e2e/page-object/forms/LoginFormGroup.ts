import { expect, type Locator, type Page } from '@playwright/test';
import { testUserData } from '../../helpers/testUserData';

export class LoginFormGroup {
  readonly page: Page;
  readonly getInputEmailField: Locator;
  readonly getInputPasswordField: Locator;
  readonly getButtonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInputEmailField = page.getByLabel('Email');
    this.getInputPasswordField = page.getByLabel('Password');
    this.getButtonLogin = page.getByRole('button', { name: 'Login' });
  }

  async enterEmail() {
    await this.getInputEmailField.fill(testUserData.correct.currentEmail);
  }

  async enterPassword() {
    await this.getInputPasswordField.fill(testUserData.correct.password);
  }

  async clickLoginButton() {
    await this.getButtonLogin.click();
  }
}
