export type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export interface FetchOptions {
  method?: HTTPMethod
  body?: string
  headers?: Headers
}

export const makeFetch = (endpoint: string, { method = 'GET', body }: FetchOptions): Promise<Response> => {
  const headers = new Headers({ 'Content-Type': 'application/json' })

  const fetchOpts: FetchOptions = { method, headers }

  if (method === 'GET' && body) {
    throw new Error('Error: Body will be stripped on request')
  }

  if (body) {
    fetchOpts.body = body
  }

  const request = new Request(`//${endpoint}`, fetchOpts)

  const res = fetch(request)
  return res
}
