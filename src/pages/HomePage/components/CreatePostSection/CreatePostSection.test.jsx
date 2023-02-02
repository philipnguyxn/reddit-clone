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

  it("display the section", () => {
    renderWithRouter(<CreatePostSection />);

    expect(screen.getByRole("img", { name: /user icon/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/create post/i)).toBeInTheDocument();
  });
});
