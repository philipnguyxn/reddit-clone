// Node modules
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import searchTermReducer from "../features/searchTerm/slice";

// Store initialization
const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer
  }
})

export default store;