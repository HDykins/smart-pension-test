import type { FC } from 'react'
import type { City, CitiesResult } from '../types'
import type { FetchOptions } from '../api'

import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { useFetch } from '../hooks'
import { CityList } from '../components'

export const Visited: FC = () => {
  const [visited, setVisited] = React.useState<City[]>([])

  const endpoint = `//localhost:4000/rest/cities/`
  const options: FetchOptions = { method: 'GET' }
  const { data: cities }: { data?: CitiesResult; errors: string[]; isFetching: boolean } = useFetch(endpoint, options)

  React.useEffect(() => {
    if (cities) {
      const filteredVisited = cities.cities.filter(city => !!city.visited)
      setVisited(filteredVisited)
    }
  }, [cities])

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container centerContent maxW="container.md" flexDir="row"></Container>
      <CityList cities={visited} />
    </>
  )
}
