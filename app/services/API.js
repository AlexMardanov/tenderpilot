import request from 'utils/request'
import { PRODUCTS_URL } from './config'

export function fetchProducts(query, sort) {
  const { rowsPerPage, page, name } = query
  const { sortBy, direction } = sort

  const search = name ? `&name=${name}` : ''
  const order = sort.sortBy ? `&order[${sortBy}]=${direction}` : ''
  const url = `${PRODUCTS_URL}?perPage=${rowsPerPage}&page=${page + 1}${search}${order}`

  return request(url)
}

export function fetchProduct(id) {
  return request(`${PRODUCTS_URL}/${id}`)
}

export function deleteProduct(id) {
  return request(`${PRODUCTS_URL}/${id}`, { method: 'DELETE' })
}

export function editProduct(id, data) {
  return request(`${PRODUCTS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      accept: 'application/ld+json',
      'Content-Type': 'application/merge-patch+json',
    },
    body: JSON.stringify(data),
  })
}

export function createProduct(data) {
  return request(`${PRODUCTS_URL}`, {
    method: 'POST',
    headers: {
      accept: 'application/ld+json',
      'Content-Type': 'application/ld+json',
    },
    body: JSON.stringify(data),
  })
}
