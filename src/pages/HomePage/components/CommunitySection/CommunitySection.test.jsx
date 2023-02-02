// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../../../tests/setup";

// Components
import CommunitySection from "./CommunitySection";

describe("CommunitySection component rendering", () => {
  it("renders CommunitySection component", () => {
    renderWithRouter(<CommunitySection />);

    screen.debug();
  });
})