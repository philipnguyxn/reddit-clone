// Node Modules
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '59ns47',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      },
    },
  },
);
