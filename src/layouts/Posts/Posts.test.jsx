// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import Posts from ".";

describe("Posts component rendering", () => {
  it("renders Posts component", () => {
    renderWithRouter(<Posts />);

    screen.debug();
  });
})