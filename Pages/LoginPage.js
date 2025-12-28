class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = '[data-testid="SI-username-input-password"]';
    this.password = '[data-testid="SI-password-input-password"]';
    this.loginBtn = 'button[type="submit"]';
  }

  async login(user, pass) {
    await this.page.waitForLoadState("networkidle");

    await this.page.locator(this.username).waitFor({ state: "visible" });
    await this.page.fill(this.username, user);

    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);

    // Browser pause 
    await this.page.pause();
    
  }
}

module.exports = LoginPage;
