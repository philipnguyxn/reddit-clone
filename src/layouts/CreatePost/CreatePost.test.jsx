// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../tests/setup";

// Components
import CreatePost from ".";

describe("CreatePost component rendering", () => {
  it("renders CreatePost component", () => {
    renderWithRouter(<CreatePost />);

    screen.debug();
  });

  it("display the section", () => {
    renderWithRouter(<CreatePost />);

    expect(screen.getByRole("img", { name: /user icon/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/create post/i)).toBeInTheDocument();
  });
});
