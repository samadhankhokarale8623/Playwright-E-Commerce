const Configuration = require('../E-Commerce/Configuration/Configuration.js');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Login locators
    this.username = '[data-testid="SI-username-input-password"]';
    this.password = '[data-testid="SI-password-input-password"]';
    this.loginBtn = 'button[type="submit"]';

    // Init Configuration page
    this.configuration = new Configuration(page);
  }

  async login(user, pass) {
    // Login
    await this.page.waitForLoadState('networkidle');
    await this.page.locator(this.username).waitFor({ state: 'visible' });
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);

    // After login wait
    await this.page.waitForLoadState('networkidle');

    // 👉 Call Configuration
    await this.configuration.navigateToConfiguration();
  }
}

module.exports = LoginPage;
