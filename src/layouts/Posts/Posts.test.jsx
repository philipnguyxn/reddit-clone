// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import Posts from '.'

describe('Posts component rendering', () => {
  it('renders Posts component', () => {
    renderWithAllProviders(<Posts />)

    screen.debug()
  })
})
