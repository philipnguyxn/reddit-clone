/**
 * @file /allPosts/selectors/index.js
 * @author Khoi Nguyen - Phillip
 * @license MIT
 * @copyright Copyright (c) 2023 Khoi Nguyen
 * @since 2023-02-16
 * @description Selectors for the allPostsSlice
 */

/**
 * This function selects all the posts from the Redux store
 *
 * @param {Object} state The current state of the Redux store
 * @returns {Array} The array of all posts
 */
export const selectAllPosts = (state) => state.allPosts.posts
