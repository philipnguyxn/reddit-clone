/**
 * @file: SearchBar.test.js
 * @author Khoi Nguyen
 * @license MIT
 * @copyright Copyright (c) 2023 Khoi Nguyen
 * @since 2023-02-08
 * @description The file tests if the component is correctly rendering and if it can perform a search and clear the search term.
 */

// Import screen object from react testing library for element queries
import { screen } from "@testing-library/react";

// Import the render function that is wrapped by renderOptions and providers
import { renderWithAllProviders } from "../../../utils/renders";

// Import the componet that is tested with
import SearchBar from ".";

// Import actions for setting and clearing the search term
import {
  clearSearchTerm,
  setSearchTerm,
} from "../../../features/searchTerm/slice";

// Import the store object for dispatching actions
import { store } from "../../../app/store";

/**
 * Test suite for the SearchBar component.
 *
 * The tests are focused on verifying that the component is rendering as expected,
 * and that it can perform searches and clear search terms.
 */
describe("SearchBar component rendering/searching posts", () => {
  /**
   * Test case for verifying that the SearchBar component is rendered correctly.
   */
  it("renders SearchBar component", () => {
    renderWithAllProviders(<SearchBar />);

    screen.debug();
  });

  /**
   * Test case for verifying that the search bar is displayed correctly.
   */
  it("display the search bar", () => {
    renderWithAllProviders(<SearchBar />);

    // Find the search bar form
    expect(screen.getByRole("search")).toBeInTheDocument();

    // Find the search button, input tag, and cancel button
    expect(
      screen.getByRole("button", { name: /search icon/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search reddit/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /cancel icon/i })).toBeNull();
  });
});

/**
 * Test suite for the searchTermSlice.
 *
 * The tests are focused on verifying that the search term is correctly being set and cleared.
 */
describe("testing searchTermSlice", () => {
  /**
   * Test case for verifying that the new search term is being set correctly.
   */
  test("should set the new searchTerm based on changes in the search input", () => {
    store.dispatch(setSearchTerm("redux"));

    expect(store.getState().searchTerm).toStrictEqual("redux");
  });

  /**
   * Test case for verifying that the search term can be cleared correctly.
   */
  test("should clear the searchTerm when the clear button is clicked", async () => {
    const { user } = renderWithAllProviders(<SearchBar />);

    await user.click(screen.getByRole("img", { name: /cancel icon/i }));

    store.dispatch(clearSearchTerm());
    expect(store.getState().searchTerm).toStrictEqual("");
  });
});
