/**
 * File for utility functions for rendering React components in a testing environment
 */

// Import the React `Component` module
import { Component } from 'react'

// Import the React Testing Library's `render` function
import { render } from '@testing-library/react'

// Import the React Testing Library's `userEvent` module
import userEvent from '@testing-library/user-event'

// Import the `setupStore` function from the app's store file
import { setupStore } from '../../app/store'

// Import the `Provider` component from the providers file
import Providers from '../providers'

/**
 * Renders a React component with all Providers wrapper.
 *
 * @param {Component} ui - The React component to render
 * @param {Object} [route] - The route to push to the browser history.
 * @param {Object} [preloadedState] - The initial state for the store
 * @param {Object} [store] - An instance of the store to use for this component.
 * @param {Object} [renderOptions] - Additional options to pass to the render function.
 * @returns {Object} An object with a `user` property and the result of `render`.
 */
export const renderWithAllProviders = (
  ui,
  { route = '/' } = {},
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  // Push a new state to the browser history with the specified route
  window.history.pushState({}, 'Reddit Clone', route)

  // Return an object with the `user` property and the result of the `render` function
  return {
    // Set up the userEvent library
    user: userEvent.setup(),

    // The store object
    store,

    // Spread the result of the `render` function into the return object
    ...render(ui, { wrapper: Providers, ...renderOptions }),
  }
}
