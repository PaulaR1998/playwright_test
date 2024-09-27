import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('The user logs in and verifies all products starting with "Sauce"', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.goto();
  await loginPage.loginWithValidCredentials();
  await expect(await inventoryPage.isOnInventoryPage()).toBeTruthy();
 
  const sauceProducts = await inventoryPage.getSauceProducts();
  console.log('Produtos que começam com "Sauce":', sauceProducts);
  const nonSauceProducts = await inventoryPage.getNonSauceProducts();
  console.log('Produtos que NÃO começam com "Sauce":', nonSauceProducts);

  await expect(sauceProducts.length).toBeGreaterThan(0);
  await expect(nonSauceProducts.length).toBeGreaterThan(0);
});
