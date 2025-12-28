const { test: base } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const users = require('../test-data/users.json');

exports.test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('/login');
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
    await use(page);
  }
});

exports.expect = base.expect;
