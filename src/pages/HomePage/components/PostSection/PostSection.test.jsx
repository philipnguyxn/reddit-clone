// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../../../tests/setup";

// Components
import PostSection from "./PostSection";

describe("PostSection component rendering", () => {
  it("renders PostSection component", () => {
    renderWithRouter(<PostSection />);

    screen.debug();
  });
})