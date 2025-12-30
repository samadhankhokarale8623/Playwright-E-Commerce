const { test, expect } = require('../../fixtures/baseFixture');

test('Login smoke test', async ({ loggedInPage }) => {
  // Only app health check
  await expect(
    loggedInPage.locator('[data-testid="menu-item-e-commerce"]')
  ).toBeVisible();
});
