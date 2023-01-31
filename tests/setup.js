// Node Modules
import { expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { Component } from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

/**
 * Runs when want to render a component
 * Should wrap the component with a BrowserRouter
 * @param {Component} ui
 * @param {Object} route
 * @returns an object with userEvent initialization
 * and render the component with the wrapper of BrowserRouter
 */
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Reddit Clone', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  }
}