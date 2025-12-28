const qa = require('./config/qa.config');

module.exports = {
  testDir: './tests',
  use: {
    baseURL: qa.baseURL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
};
