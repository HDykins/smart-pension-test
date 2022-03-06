import type { FC } from 'react'
import type { City, SetCitiesState } from '../types'
import type { FetchOptions } from '../api'

import React from 'react'
import { VStack, HStack, Box, Text, Tooltip } from '@chakra-ui/react'
import { StarIcon, ViewIcon } from '@chakra-ui/icons'
import { makeFetch } from '../api'
import { findCityIndexById } from '../util'

type CityListProps = { cities: City[] }

const handleVisitedClick = (cities: City[], cityId: number, setCityList: SetCitiesState, visited: boolean) => {
  const body = JSON.stringify({ visited })
  handleFetch(cities, cityId, setCityList, body)
}

const handleWishListClick = (cities: City[], cityId: number, setCityList: SetCitiesState, wishlist: boolean) => {
  const body = JSON.stringify({ wishlist })
  handleFetch(cities, cityId, setCityList, body)
}

const handleFetch = (cities: City[], cityId: number, setCityList: SetCitiesState, body: string) => {
  const endpoint = `//localhost:4000/rest/cities/${cityId}`
  const options: FetchOptions = { method: 'PUT', body }
  return makeFetch(endpoint, options).then(res => {
    res.json().then(resp => {
      const cityIndex = findCityIndexById(cities, cityId)
      if (!cityIndex && cityIndex !== 0) {
        return
      }
      const newCities = [...cities]
      newCities[cityIndex] = resp
      setCityList(newCities)
    })
  })
}

export const CityList: FC<CityListProps> = ({ cities }) => {
  const [cityList, setCityList] = React.useState(cities)
  React.useEffect(() => {
    setCityList(cities)
  }, [cities])

  return (
    <VStack>
      {cityList.map(city => {
        return (
          <Box bg="#77f" w="25%" p={4} mt={8} color="white" key={city.name}>
            <VStack>
              <HStack spacing={4}>
                <Tooltip label="I want to visit!">
                  <StarIcon
                    role="wishListIcon"
                    onClick={() => handleWishListClick(cityList, city.id, setCityList, !city.wishlist)}
                    color={city.wishlist ? 'orange' : 'white'}
                  />
                </Tooltip>
                <Text>{city.name}</Text>
                <Tooltip label="Already been :)">
                  <ViewIcon
                    role="visitedIcon"
                    onClick={() => handleVisitedClick(cityList, city.id, setCityList, !city.visited)}
                    color={city.visited ? 'orange' : 'white'}
                  />
                </Tooltip>
              </HStack>
            </VStack>
          </Box>
        )
      })}
    </VStack>
  )
}
