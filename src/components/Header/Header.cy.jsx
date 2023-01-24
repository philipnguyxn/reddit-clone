import React from "react";
import Header from "./Header";

describe("Full Header component rendering", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });

  it("when type into the search field, should search the post based on their title or belonging communities", () => {});

  it("when click on the setting dropdown, displays user's avatar and name", () => {});

  it("when click on the setting dropdown, displays the dark mode switch", () => {});
});
