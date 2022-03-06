import type { FC, ChangeEvent, FormEvent } from 'react'
import type { City, CitiesResult } from '../types'
import type { FetchOptions } from '../api'
import type { FetchData } from '../hooks'

import React from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { CityList } from '../components'
import { useFetch } from '../hooks'
import { nameFilter } from '../util'

export const handleSearch = (searchTerm: string, cities?: City[]): City[] => {
  if (!searchTerm) return []
  const filtered = cities ? cities.filter(city => nameFilter(city, searchTerm)) : []
  return filtered
}

const handleSubmit = (event: FormEvent<HTMLFormElement>, searchTerm: string, cities?: City[]) => {
  event.preventDefault()
  return handleSearch(searchTerm, cities)
}

export const Home: FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filtered, setFiltered] = React.useState<City[]>([])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)

  const endpoint = `//localhost:4000/rest/cities/`
  const options: FetchOptions = { method: 'GET' }
  const { data: cities }: FetchData<CitiesResult> = useFetch(endpoint, options)

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <form onSubmit={e => setFiltered(handleSubmit(e, searchTerm, cities?.cities))}>
          <InputGroup>
            <Input onChange={handleChange} />
            <InputRightElement
              onClick={() => setFiltered(handleSearch(searchTerm, cities?.cities))}
              children={<IconButton aria-label="" icon={<Search2Icon />} />}
            />
          </InputGroup>
        </form>
        <CityList cities={filtered} />
      </Container>
    </VStack>
  )
}
