/**
 * File for creating a Redux store for the application
 */

// Import the `configureStore` function from the @reduxjs/toolkit package
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Import the `searchTermReducer` from the searchTermSlice's features file
import searchTermReducer from '../features/searchTerm/slice'

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
})

/**
 * Creates and export a new Redux store with the specified preloaded state
 * @param {Object} preloadedState - The initial state for the store
 * @returns {Object} A new Redux store instance with the specified preloaded state
 */
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    // Pass in the preloaded state if available
    preloadedState,
  })
}

// Create and export a store instance with the specified preloaded state
export const store = setupStore({})
