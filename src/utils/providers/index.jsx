// AllProviders.jsx
// A React component that wraps around the Provider component from react-redux

// Import React library
import React from "react";

// Import Provider component from react-redux
import { Provider } from "react-redux";

// Import BrowserRouter component from react-router-dom
import { BrowserRouter } from "react-router-dom";

// Import the global store
import store from "../../app/store";

// Define the AllProviders component
const AllProviders = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

export default AllProviders;
