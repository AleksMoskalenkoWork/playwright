import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
  }

  async openPage() {
    await this.page.goto('/');
  }

  async openLoginFormGroup() {
    await expect(this.signInButton).toBeVisible();
    await this.signInButton.click();
  }

  async openRegistrationFormGroup() {
    await expect(this.signUpButton).toBeVisible();
    await this.signUpButton.click();
  }
}
