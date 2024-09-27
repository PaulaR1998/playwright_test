
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Product sorting in products page', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
    await loginPage.loginWithValidCredentials();
    await expect(productsPage.isOnProductsPage()).toBeTruthy();
  });

  test('Sort products by name A to Z', async () => {
    await productsPage.sortProductsBy('az');
    const productNames = await productsPage.getProductNames();
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames);
  });

  test('Sort products by name Z to A', async () => {
    await productsPage.sortProductsBy('za');
    const productNames = await productsPage.getProductNames();
    const sortedNames = [...productNames].sort().reverse();
      expect(productNames).toEqual(sortedNames);
  });

  test('sort products by price low to high', async () => {
    await productsPage.sortProductsBy('Price (low to high)');
    const productPrices = await productsPage.getProductPrices();
    const numericPrices = productPrices.map(price => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => a - b);
      expect(numericPrices).toEqual(sortedPrices);
  });

  test('sort products by price high to low', async () => {
    await productsPage.sortProductsBy('Price (high to low)');
    const productPrices = await productsPage.getProductPrices();
    const numericPrices = productPrices.map(price => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => b - a);
      expect(numericPrices).toEqual(sortedPrices);
    
  });
});
