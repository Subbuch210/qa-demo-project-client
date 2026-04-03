import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  trashAssetsBeforeRuns: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});