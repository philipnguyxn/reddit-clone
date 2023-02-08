// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import Post from ".";

describe("Post component rendering", () => {
  it("renders Post component", () => {
    renderWithRouter(<Post />);

    screen.debug();
  });
});
