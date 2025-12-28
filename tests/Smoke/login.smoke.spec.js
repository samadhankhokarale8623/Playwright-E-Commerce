const { test, expect } = require('../../fixtures/baseFixture');

test('Login smoke test', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/dashboard/);
});
