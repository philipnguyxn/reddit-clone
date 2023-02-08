// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import Header from ".";

describe("Header component rendering/navigating between routes", () => {
  it("renders Header component", () => {
    renderWithRouter(<Header />);

    screen.debug();
  });
});
