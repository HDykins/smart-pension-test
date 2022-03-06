import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import { CityList } from '../components'

describe('<CityList component renders correctly>', () => {
  it('renders a list of cities correctly', async () => {
    const cities = [
      {
        id: 0,
        name: 'Moscow',
        country: 'Russia',
        visited: false,
        wishlist: false,
      },
      {
        id: 1,
        name: 'London',
        country: 'United Kingdom',
        visited: true,
        wishlist: false,
      },
      {
        id: 2,
        name: 'Saint Petersburg',
        country: 'Russia',
        visited: false,
        wishlist: false,
      },
      {
        id: 3,
        name: 'Berlin',
        country: 'Germany',
        visited: true,
        wishlist: false,
      },
      {
        id: 4,
        name: 'Madrid',
        country: 'Spain',
        visited: false,
        wishlist: false,
      },
      {
        id: 5,
        name: 'Kyiv',
        country: 'Ukraine',
        visited: false,
        wishlist: true,
      },
    ]
    render(
      <BrowserRouter>
        <CityList cities={cities} />
      </BrowserRouter>
    )
    const MoscowBox = screen.getByText(/^Moscow$/i)
    expect(MoscowBox).toBeInTheDocument()
    const LondonBox = screen.getByText(/^London$/i)
    expect(LondonBox).toBeInTheDocument()
    const StPBox = screen.getByText(/^Saint Petersburg$/i)
    expect(StPBox).toBeInTheDocument()
    const BerlinBox = screen.getByText(/^Berlin$/i)
    expect(BerlinBox).toBeInTheDocument()
    const MadridBox = screen.getByText(/^Madrid$/i)
    expect(MadridBox).toBeInTheDocument()
    const KyivBox = screen.getByText(/^Kyiv$/i)
    expect(KyivBox).toBeInTheDocument()
    const visitedIcons = await screen.findAllByRole('visitedIcon')
    expect(visitedIcons[1]).toHaveStyle({ color: 'orange' })
    expect(visitedIcons[3]).toHaveStyle({ color: 'orange' })
    const wishListIcons = await screen.findAllByRole('wishListIcon')
    expect(wishListIcons[5]).toHaveStyle({ color: 'orange' })
  })
})
