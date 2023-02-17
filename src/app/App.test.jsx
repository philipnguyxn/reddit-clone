// Node Modules
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

// App
import App from './App'

// Helper rendering functions
import { renderWithAllProviders } from '../utils/renders'

describe('full app rendering/navigating', () => {
  it('sucessfully renders App component', () => {
    renderWithAllProviders(<App />)

    screen.debug()
  })
})
