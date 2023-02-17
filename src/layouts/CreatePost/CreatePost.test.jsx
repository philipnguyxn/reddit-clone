// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import CreatePost from '.'

describe('CreatePost component rendering', () => {
  it('renders CreatePost component', () => {
    renderWithAllProviders(<CreatePost />)

    screen.debug()
  })

  it('display the section', () => {
    renderWithAllProviders(<CreatePost />)

    expect(screen.getByRole('img', { name: /user icon/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/create post/i)).toBeInTheDocument()
  })
})
