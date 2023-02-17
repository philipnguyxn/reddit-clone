/**
 * @file /allPosts/thunks/index.js
 * @author Khoi Nguyen - Phillip
 * @license MIT
 * @copyright Copyright (c) 2023 Khoi Nguyen
 * @since 2023-02-16
 * @description A Redux async thunk which can be used to fetch a list of posts
 * from a specific subreddit
 */

// Importing createAsyncThunk function from the redux toolkit
import { createAsyncThunk } from '@reduxjs/toolkit'

// Importing getSubredditPosts async function
import { getSubredditPosts } from '../../../services/reddit'

/**
 * An async thunk that can be dispatched to load a list of posts from a specific subreddit.
 * @param {Object} options - An object containing options for the API request
 * @param {string} options.subreddit - The name of the subreddit to fetch posts from.
 * @param {Object} thunkAPI - The `thunkAPI` object provided by `createAsyncThunk`.
 * @returns {Promise} A promise that resolves with the list of posts as a JSON object.
 */
export const loadAllPosts = createAsyncThunk(
  'allPosts/loadAllallPosts',
  async ({ subreddit }, thunkAPI) => {
    const res = await getSubredditPosts(subreddit)
    const json = res.json()

    return json
  },
)
