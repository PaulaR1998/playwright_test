import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async isOnProductsPage() {
    return await this.page.url() === 'https://www.saucedemo.com/inventory.html';
  }
  async sortProductsBy(option: 'az' | 'za' | 'Price (low to high)' | 'Price (high to low)') {
    await this.page.locator('.product_sort_container').selectOption(option);
  }
  async getProductNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }
  async getProductPrices() {
    return await this.page.locator('.inventory_item_price').allTextContents();
  }
async addProductToCartByPrice(price: string) {
  const productButton = this.page.locator(`.inventory_item_price:has-text("${price}") >> .. >> button`);
  await productButton.click();
}
async getCartItemCount() {
  const cartCountText = await this.page.locator('.shopping_cart_badge').innerText();
  return parseInt(cartCountText, 10);
}
}
