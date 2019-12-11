/*
 *
 * ProductCreate actions
 *
 */

import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE } from './constants'

export function createProductRequest(data) {
  return {
    data,
    type: PRODUCT_CREATE_REQUEST,
  }
}

export function createProductSuccess() {
  return {
    type: PRODUCT_CREATE_SUCCESS,
  }
}

export function createProductError(error) {
  return {
    error,
    type: PRODUCT_CREATE_FAILURE,
  }
}
