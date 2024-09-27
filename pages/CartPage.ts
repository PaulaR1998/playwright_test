import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
  async removeProductFromCart(productName: string) {
    const productElement = this.page.locator('.inventory_item_name', { hasText: productName });
    
    if (await productElement.isVisible()) {
      const removeButton = productElement.locator('xpath=../..').locator('.cart_button');
      await removeButton.click();
    } else {
      throw new Error(`Product "${productName}" not found in the cart.`);
    }
  }
  async isCartEmpty() {
    const cartItems = await this.page.locator('.cart_item').count();
    return cartItems === 0;
  }
}
