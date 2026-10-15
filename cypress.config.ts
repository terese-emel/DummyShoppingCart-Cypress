import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "tests/**/*.cy.js",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
