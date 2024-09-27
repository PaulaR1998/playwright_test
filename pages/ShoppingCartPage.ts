import { Page } from '@playwright/test';

export class ShoppingCartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
  async isProductInCart(productName: string) {
    const product = await this.page.locator('.inventory_item_name', { hasText: productName });
    return await product.isVisible();
  }
  async clickCheckoutButton() {
    await this.page.click('.btn.btn_action.btn_medium.checkout_button');
  }
}
