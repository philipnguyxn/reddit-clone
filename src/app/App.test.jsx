// Node Modules
import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

// App
import App from "./App";

describe('full app rendering/navigating', () => {
  it('sucessfully renders App component', () => {
    render(<App />, { wrapper: BrowserRouter })

    screen.debug();
  })
})