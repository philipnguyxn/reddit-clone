// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../../../tests/setup";

// Components
import CommunitySection from "./CommunitySection";

// Data
import communities from "../../../../data/communities";

describe("CommunitySection component rendering", () => {
  it("renders CommunitySection component", () => {
    renderWithRouter(<CommunitySection />);

    screen.debug();
  });

  it("display the heading the community list", () => {
    renderWithRouter(<CommunitySection />);

    // Find the list of communities with the specific headings and avatars
    expect(
      screen.getByRole("heading", { name: "Communities", level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: /user icon/i }));

    // Check between different headings for each community
    communities.map((community) => {
      expect(
        screen.getByRole("heading", { level: 4, name: community.name })
      ).toBeInTheDocument();
    });
  });
});
