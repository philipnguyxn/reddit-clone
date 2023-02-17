// Node Modules
import { screen } from '@testing-library/react'

// Helper functions
import { renderWithAllProviders } from '../../utils/renders'

// Components
import Communities from '.'

// Data
import communities from '../../data/communities'

describe('Communities component rendering', () => {
  it('renders Communities component', () => {
    renderWithAllProviders(<Communities />)

    screen.debug()
  })

  it('display the heading the community list', () => {
    renderWithAllProviders(<Communities />)

    // Find the list of communities with the specific headings and avatars
    expect(
      screen.getByRole('heading', { name: 'Communities', level: 2 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /user icon/i }))

    // Check between different headings for each community
    communities.map((community) => {
      expect(
        screen.getByRole('heading', { level: 4, name: community.name }),
      ).toBeInTheDocument()
    })
  })
})
