// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithAllProviders } from "../../utils/renders";

// Components
import HomePage from ".";

describe("HomePage component rendering", () => {
  it("renders HomePage component", () => {
    renderWithAllProviders(<HomePage />);

    screen.debug();
  });
});
