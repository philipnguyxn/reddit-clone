/**
 * @file SearchBar.js
 * @author Khoi Nguyen - Phillip
 * @license MIT
 * @copyright Copyright (c) 2023 Khoi Nguyen
 * @since 2023-02-08
 * @description A search bar component for the Reddit search feature. Implements a search input field with a clear button that updates the search term in the global state.
 */

// Import React library
import React from 'react'

// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from 'react-redux'

// Import actions for setting and clearing the search term
import {
  setSearchTerm,
  clearSearchTerm,
} from '../../../features/searchTerm/slice'

// Import selector for accessing the search term from the global state
import { selectSearchTerm } from '../../../features/searchTerm/selectors'

// Import icons for the search bar
import { ReactComponent as Search } from '../../../assets/icons/search.svg'
import { ReactComponent as Cancel } from '../../../assets/icons/cancel.svg'

/**
 * SearchBar component that implements a search input field with a clear button
 * and updates the search term in the global state.
 * @returns {JSX} The JSX for the search bar component.
 */
const SearchBar = () => {
  // Get the search term from the global state using the useSelector hook
  const searchTerm = useSelector(selectSearchTerm)

  // Get the dispatch function for sending actions to the store using the useDispatch hook
  const dispatch = useDispatch()

  /**
   * Handle the event when the user changes the value of the search term
   * @param {Object} e - The event object for the searchTerm's input onChange
   */
  const handleSearchTermChange = (e) => {
    // Get the user input from the event target
    const userInput = e.target.value

    // Dispatch the setSearchTerm action to set the new search term in the global state
    dispatch(setSearchTerm(userInput))
  }

  /**
   * Handle the event when the user clicks the clear button
   */
  const handleClearSearchTermClick = () => {
    // Dispatch the clearSearchTerm action to clear the search term from the global state
    dispatch(clearSearchTerm())
  }

  // Return the JSX for the SearchBar component
  return (
    <div
      className="w-search-bar bg-field mr-1.5 px-6 rounded-full 
                border-1 border-solid border-primary
              hover:border-field-hover"
    >
      <form
        // onSubmit={handleSearchTermSubmit}
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
            text-primary ${searchTerm && 'text-black'}`}
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
  )
}

export default SearchBar
