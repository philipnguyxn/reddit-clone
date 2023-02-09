// SearchBar.jsx
// A React component that implements a search bar

// Import React library
import React from "react";

// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import actions for setting and clearing the search term
import {
  setSearchTerm,
  clearSearchTerm,
} from "../../../features/searchTerm/slice";

// Import selector for accessing the search term from the global state
import { selectSearchTerm } from "../../../features/searchTerm/selectors";

// Import icons for the search bar
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import { ReactComponent as Cancel } from "../../../assets/icons/cancel.svg";

// Define the SearchBar component
const SearchBar = () => {
  // Get the search term from the global state using the useSelector hook
  const searchTerm = useSelector(selectSearchTerm);

  // Get the dispatch function for sending actions to the store using the useDispatch hook
  const dispatch = useDispatch();

  // Handle the event when the user submits the form (presses enter or clicks the search icon)
  const handleSubmit = () => {};

  // Handle the event when the user changes the value of the search term
  const handleSearchTermChange = (e) => {
    // Get the user input from the event target
    const userInput = e.target.value;

    // Dispatch the setSearchTerm action to set the new search term in the global state
    dispatch(setSearchTerm(userInput));
  };

  // Handle the event when the user clicks the clear button
  const handleClearSearchTermClick = () => {

    // Dispatch the clearSearchTerm action to clear the search term from the global state
    dispatch(clearSearchTerm());
  };

  // Return the JSX for the SearchBar component
  return (
    <div
      className="w-search-bar bg-field mr-1.5 px-6 rounded-full 
                border-1 border-solid border-primary
              hover:border-field-hover"
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex items-center w-full"
      >
        {/* Search Icon */}
        <button className="bg-field border-none w-header-buttons h-header-buttons mr-1">
          <span className="fill-primary h-header-buttons w-header-buttons">
            <Search />
          </span>
        </button>

        {/* Input field for the search term */}
        <input
          type="text"
          className={`w-full bg-field border-none focus:outline-none text-base 
          text-primary ${searchTerm && "text-black"}`}
          placeholder="Search Reddit"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />

        {/* Clear button for the search term */}
        {searchTerm && (
          <button
            className="bg-field border-none w-header-buttons h-header-buttons"
            onClick={handleClearSearchTermClick}
          >
            <span className="fill-primary h-header-buttons w-header-buttons">
              <Cancel />
            </span>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
