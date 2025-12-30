const ProductCategory = require('./Product_Catgory.js');

class Configuration {
  constructor(page) {
    this.page = page;

    this.eCommerceMenu = '[data-testid="menu-item-e-commerce"]';
    this.configurationSubMenu = '[data-testid="submenu-item-configuration"]';

    // Init Product Category
    this.productCategory = new ProductCategory(page);
  }

  async navigateToConfiguration() {
    await this.page.waitForLoadState('networkidle');

    // Click E-Commerce
    await this.page.locator(this.eCommerceMenu).waitFor({ state: 'visible' });
    await this.page.click(this.eCommerceMenu);

    // Click Configuration
    await this.page
      .locator(this.configurationSubMenu)
      .waitFor({ state: 'visible' });
    await this.page.click(this.configurationSubMenu);

    // 👉 Call Product Category
    await this.productCategory.openAddCategory();
  }
}

module.exports = Configuration;
