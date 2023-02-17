// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import Post from '.'

describe('Post component rendering', () => {
  it('renders Post component', () => {
    renderWithAllProviders(<Post />)

    screen.debug()
  })
})
