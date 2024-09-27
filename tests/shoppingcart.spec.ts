import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Shopping Cart Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); 
  });

  test('should add Sauce Labs Backpack to the cart', async ({ page }) => {
    await loginPage.loginWithValidCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToCartButton.click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('should click on the cart and verify the product', async ({ page }) => {
    await loginPage.loginWithValidCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToCartButton.click();
      const cartIcon = page.locator('a.shopping_cart_link[data-test="shopping-cart-link"]');
    await cartIcon.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
      const cartProduct = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
    await expect(cartProduct).toBeVisible();
      const cartProductPrice = page.locator('.inventory_item_price', { hasText: '29.99' });
    await expect(cartProductPrice).toBeVisible();
  });

  test('should proceed to checkout and verify URL', async ({ page }) => {
    await loginPage.loginWithValidCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToCartButton.click();
      const cartIcon = page.locator('a.shopping_cart_link[data-test="shopping-cart-link"]');
    await cartIcon.click();
      const checkoutButton = page.locator('button[data-test="checkout"]');
    await checkoutButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  });

  test('should fill out checkout information', async ({ page }) => {
    await loginPage.loginWithValidCredentials();
      const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToCartButton.click();
      const cartIcon = page.locator('a.shopping_cart_link[data-test="shopping-cart-link"]');
    await cartIcon.click();
      const checkoutButton = page.locator('button[data-test="checkout"]');
    await checkoutButton.click();
    await page.fill('input[data-test="firstName"]', 'Paula'); 
    await page.fill('input[data-test="lastName"]', 'Teste');  
    await page.fill('input[data-test="postalCode"]', '00000000'); 
      const firstNameValue = await page.inputValue('input[data-test="firstName"]');
      const lastNameValue = await page.inputValue('input[data-test="lastName"]');
      const postalCodeValue = await page.inputValue('input[data-test="postalCode"]');    
    expect(firstNameValue).toBe('Paula');
    expect(lastNameValue).toBe('Teste');
    expect(postalCodeValue).toBe('00000000');
  });

  test('should display error message when postal code is missing', async ({ page }) => {
    await loginPage.loginWithValidCredentials();
      const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToCartButton.click();
      const cartIcon = page.locator('a.shopping_cart_link[data-test="shopping-cart-link"]');
    await cartIcon.click();
      const checkoutButton = page.locator('button[data-test="checkout"]');
    await checkoutButton.click();
    await page.fill('input[data-test="firstName"]', 'teste'); 
    await page.fill('input[data-test="lastName"]', 'teste'); 
      const continueButton = page.locator('input[data-test="continue"]');
    await continueButton.click();
      const errorMessage = page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Error: Postal Code is required');
  });
});
