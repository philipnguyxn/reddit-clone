/**
 * File for setting up wrapper components for rendering
 */

// Import React library
import React, { Component } from "react";

// Import `Provider` component from react-redux
import { Provider } from "react-redux";

// Import `BrowserRouter` component from react-redux
import { BrowserRouter } from "react-router-dom";

// Import the initial store from the app's store file
import { store } from "../renders";

/**
 * A React component that wraps around the Provider component from react-redux
 * @param {Object} children - The inner components that will be rendered
 * @returns {Component} The Provider component instance
 */
const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export default Providers;
