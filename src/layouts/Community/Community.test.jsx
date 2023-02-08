// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import Community from ".";

// Data
import communities from "../../data/communities";

describe("Community component rendering", () => {
  it("renders Community component", () => {
    renderWithRouter(<Community />);

    screen.debug();
  });
})