// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../../../tests/setup";

// Components
import CreatePostSection from "./CreatePostSection";

describe("CreatePostSection component rendering", () => {
  it("renders CreatePostSection component", () => {
    renderWithRouter(<CreatePostSection />);

    screen.debug();
  });
})