import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async isOnInventoryPage() {
    return await this.page.url() === 'https://www.saucedemo.com/inventory.html';
  }
  async getSauceProducts() {
    return await this.page.locator('.inventory_item_name').allTextContents().then(products => {
      return products.filter(product => product.startsWith('Sauce'));
    });
  }
  async getNonSauceProducts() {
    return await this.page.locator('.inventory_item_name').allTextContents().then(products => {
      return products.filter(product => !product.startsWith('Sauce'));
    });
  }
}
