class EcommercePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToDashboard() {
    await this.page.goto('https://qa.d3kq8oy4csoq2n.amplifyapp.com/dashboard');
  }

  async clickEcommerceButton() {
    // Using getByRole for e-commerce button
    const ecommerceButton = this.page.getByRole('button', { name: 'E-Commerce' });
    await ecommerceButton.waitFor({ state: 'visible' });
    await ecommerceButton.click();
  }

  async verifyEcommercePage() {
    await expect(this.page).toHaveURL(/.*ecommerce/);
  }
}

module.exports = EcommercePage;