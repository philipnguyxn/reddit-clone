/**
 * @file /allPosts/slice/index.js
 * @author Khoi Nguyen - Phillip
 * @license MIT
 * @copyright Copyright (c) 2023 Khoi Nguyen
 * @since 2023-02-16
 * @description A Redux slice for managing a list of posts
 */

// Importing createSlice function from the redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// Importing loadAllPost async thunk function
import { loadAllPosts } from '../thunks'

// Initial state
const initalallPosts = []

// Redux slice responsible for managing all posts state
export const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    initalallPosts,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Handle loading of all posts
    [loadAllPosts.pending]: (state, action) => {
      state.isLoading = true
      state.hasError = false
    },
    // Handle successful retrieval of all posts
    [loadAllPosts.fulfilled]: (state, action) => {
      state.initalallPosts = action.payload
      state.isLoading = false
      state.hasError = false
    },
    // Handle error in loading all posts
    [loadAllPosts.rejected]: (state, action) => {
      state.isLoading = false
      state.hasError = true
    },
  },
})

// Export the initial state of all posts slice
export { initalallPosts as allPostsSliceInitialState }

// Export the reducer for all posts slice
export default allPostsSlice.reducer
