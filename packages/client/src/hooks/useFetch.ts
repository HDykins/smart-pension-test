import type { Dispatch, SetStateAction } from 'react'
import type { FetchOptions } from '../api'

import { useState, useEffect } from 'react'
import { makeFetch } from '../api'

export type FetchData<D> = {
  data?: D
  setData: Dispatch<SetStateAction<D | undefined>>
  errors: string[]
  isFetching: boolean
}

export const useFetch = <D>(endpoint: string, options: FetchOptions): FetchData<D> => {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [errors, setErrors] = useState<string[]>([])
  const [fetchData, setData] = useState<D>()

  useEffect(() => {
    makeFetch(endpoint, options)
      .then(responseObj => {
        if (responseObj.ok) {
          return responseObj.json()
        } else {
          setErrors(['400: Bad request'])
        }
      })
      .then(response => {
        if (response) {
          setData(response)
        }
        setIsFetching(false)
      })
      .catch(err => (Array.isArray(err) ? setErrors(err) : setErrors([err])))
  }, [endpoint, JSON.stringify(options)])

  return { data: fetchData, setData, errors, isFetching }
}
