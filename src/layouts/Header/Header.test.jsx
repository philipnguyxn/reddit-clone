// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import Header from '.'

describe('Header component rendering/navigating between routes', () => {
  it('renders Header component', () => {
    renderWithAllProviders(<Header />)

    screen.debug()
  })
})
