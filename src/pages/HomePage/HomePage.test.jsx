// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import HomePage from "./HomePage";

describe("HomePage component rendering", () => {
  it("renders HomePage component", () => {
    renderWithRouter(<HomePage />);

    screen.debug();
  });
});