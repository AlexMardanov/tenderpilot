import request from 'utils/request'
import { PRODUCTS_URL } from './config'

export function fetchProducts() {
  return request(PRODUCTS_URL)
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
