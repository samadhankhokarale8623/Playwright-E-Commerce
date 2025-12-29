class LoginPage {
  constructor(page) {
    this.page = page;

    // Login locators
    this.username = '[data-testid="SI-username-input-password"]';
    this.password = '[data-testid="SI-password-input-password"]';
    this.loginBtn = 'button[type="submit"]';

    // E-Commerce main menu
    this.eCommerceMenu = '[data-testid="menu-item-e-commerce"]';

    // E-Commerce → Configuration submenu item
    this.configurationSubMenu = '[data-testid="submenu-item-configuration"]';
  }

  async login(user, pass) {
    // Login page load
    await this.page.waitForLoadState('networkidle');

    // Fill login details
    await this.page.locator(this.username).waitFor({ state: 'visible' });
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);

    // Login successful wait
    await this.page.waitForLoadState('networkidle');

    // 🔹 Click E-Commerce main menu
    await this.page.locator(this.eCommerceMenu).waitFor({ state: 'visible' });
    await this.page.click(this.eCommerceMenu);

    // 🔹 Wait for Configuration submenu
    await this.page
      .locator(this.configurationSubMenu)
      .waitFor({ state: 'visible' });

    // 🔹 Click Configuration submenu
    await this.page.click(this.configurationSubMenu);
  }
}

module.exports = LoginPage;
