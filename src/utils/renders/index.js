/**
 * File for utility functions for rendering React components in a testing environment
 */

import { Component } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import StoreProvider component as the wrapper for testing rendering
import AllProviders from "../providers";

/**
 * Renders a React component with a BrowserRouter wrapper.
 * @param {Component} ui - The React component to render
 * @param {Object} [route="/"] - The route to push to the browser history.
 * @returns {Object} An object with a `user` property and the result of `render`.
 */
export const renderWithAllProviders = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Reddit Clone", route);
  
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders }),
  };
};
