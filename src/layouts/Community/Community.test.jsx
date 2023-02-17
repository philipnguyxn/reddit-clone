// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import Community from '.'

// Data
import communities from '../../data/communities'

describe('Community component rendering', () => {
  it('renders Community component', () => {
    renderWithAllProviders(<Community />)

    screen.debug()
  })
})
