const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  env:{
    apiKey: process.env.API_KEY
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    experimaentalStudio: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    // to test api (this for local)
    // baseUrl: 'http://localhost:3000',

  },
});
