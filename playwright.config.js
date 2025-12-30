const qa = require('./config/qa.config');

module.exports = {
  testDir: './tests',

  use: {
    baseURL: qa.baseURL,

    // 👇 Existing settings (UNCHANGED)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // 👇 Added for slow execution (DEBUG / DEMO)
    headless: false,   // browser visible
    slowMo: 800,       // each action 300ms slow
  },
};
