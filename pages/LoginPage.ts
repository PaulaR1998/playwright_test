import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginWithValidCredentials() {
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="password"]').fill('secret_sauce');
    await this.page.locator('[data-test="login-button"]').click();
  }

  async loginWithInvalidCredentials() {
    await this.page.locator('[data-test="username"]').fill('invalid_user');
    await this.page.locator('[data-test="password"]').fill('wrong_password');
    await this.page.locator('[data-test="login-button"]').click();
  }

  async isLoginSuccessful() {
    return this.page.url() === 'https://www.saucedemo.com/inventory.html';
  }

  async getPageTitle() {
    return this.page.title();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async getErrorMessage() {
    return this.page.locator('h3[data-test="error"]');
  }
}
