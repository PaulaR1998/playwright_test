import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('the user login with success', async ({ page }) => {
    const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(await loginPage.getPageTitle()).toBe('Swag Labs');
  await loginPage.loginWithValidCredentials();
  await expect(await loginPage.getCurrentUrl()).toBe('https://www.saucedemo.com/inventory.html');
});

test('the user login with invalid credentials and sees error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginWithInvalidCredentials();
    const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
});
