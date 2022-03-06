import type { Dispatch, SetStateAction } from 'react'

export type City = {
  id: number
  name: string
  country: string
  visited: boolean
  wishlist: boolean
}

export type CitiesResult = {
  cities: City[]
  total: number
}

export type SetCitiesState = Dispatch<SetStateAction<City[]>>
