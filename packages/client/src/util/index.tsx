export * from './reportWebVitals'
export * as serviceWorker from './serviceWorker'
import type { City } from '../types'

export const nameFilter = (city: City, name?: string): boolean => {
  return name ? city.name.toLowerCase() === name.toLowerCase() : true
}

export const findCityIndexById = (cities: City[], cityId: number): number | undefined => {
  console.log(cities, cityId)
  let cityIndex: number | undefined
  cities.forEach((city, i) => {
    console.log(city.id, cityId, cityId.toString() === city.id.toString(), i)
    if (cityId.toString() === city.id.toString()) {
      cityIndex = i
    }
  })
  console.log(cityIndex)
  return cityIndex
}
