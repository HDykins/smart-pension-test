import { handleSearch } from '../pages'

describe('handleSearch function', () => {
  it('handles searchTerm correctly', () => {
    let searchTerm = 'berlin'
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
    expect(handleSearch(searchTerm, cities)).toEqual([
      { id: 3, name: 'Berlin', country: 'Germany', visited: true, wishlist: false },
    ])
    expect(handleSearch(searchTerm, cities)[0].id).toBe(3)
    searchTerm = ''
    expect(handleSearch(searchTerm, cities)).toEqual([])
  })
})
