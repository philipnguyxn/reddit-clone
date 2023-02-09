/**
 * File for creating a Redux store for the application
*/

// Import the `configureStore` function from the @reduxjs/toolkit package
import { configureStore } from "@reduxjs/toolkit";

// Import the `searchTermReducer` from the searchTermSlice's features file
import searchTermReducer from "../features/searchTerm/slice";

/**
 * Creates a new Redux store with the specified preloaded state
 * @param {Object} preloadedState - The initial state for the store
 * @returns {Object} A new Redux store instance with the specified preloaded state
 */
const setupStore = (preloadedState) => {
  return configureStore({
    // Specify the searchTerm reducer to be used in the store
    reducer: {
      searchTerm: searchTermReducer
    },
    // Pass in the preloaded state if available
    preloadedState
  });
};

// Export the setupStore function as the default export
export default setupStore;
