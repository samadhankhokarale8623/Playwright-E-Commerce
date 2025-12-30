const { test, expect } = require('../../fixtures/baseFixture');

test('Add product category', async ({ loggedInPage }) => {
  const addBtn = loggedInPage.locator('[data-testid="EC-CAT-btn-add"]');

  await addBtn.waitFor({ state: 'visible' });
  await addBtn.click({ force: true });
});


