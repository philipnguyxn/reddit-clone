// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithRouter } from "../../../../tests/setup";

// Components
import SearchBar from ".";

describe("SearchBar component rendering/searching posts", () => {
  it("renders SearchBar component", () => {
    renderWithRouter(<SearchBar />);

    screen.debug();
  });

  it("display the search bar", () => {
    renderWithRouter(<SearchBar />);

    // Find the search bar form
    expect(screen.getByRole("search")).toBeInTheDocument();

    // Find the search button, input tag, and cancel button
    expect(
      screen.getByRole("button", { name: /search icon/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search reddit/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /cancel icon/i })
    ).toBeNull();

    /**
     * TODO: Check the existence of the cancel button if the searchTerm is not empty
     */
  });
});
