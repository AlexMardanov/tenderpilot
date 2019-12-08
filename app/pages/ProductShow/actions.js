/*
 *
 * ProductShow actions
 *
 */

import {
  PRODUCT_SHOW_REQUEST,
  PRODUCT_SHOW_SUCCESS,
  PRODUCT_SHOW_FAILURE,
  PRODUCT_SHOW_RESET,
  PRODUCT_SHOW_DELETE_REQUEST,
  PRODUCT_SHOW_DELETE_SUCCESS,
  PRODUCT_SHOW_DELETE_FAILURE,
} from './constants'

export function fetchProductRequest(id) {
  return {
    id,
    type: PRODUCT_SHOW_REQUEST,
  }
}

export function fetchProductSuccess(product) {
  return {
    product,
    type: PRODUCT_SHOW_SUCCESS,
  }
}

export function fetchProductError(error) {
  return {
    error,
    type: PRODUCT_SHOW_FAILURE,
  }
}

export function resetProduct() {
  return {
    type: PRODUCT_SHOW_RESET,
  }
}

export function deleteProductRequest(id) {
  return {
    id,
    type: PRODUCT_SHOW_DELETE_REQUEST,
  }
}

export function deleteProductSuccess() {
  return {
    type: PRODUCT_SHOW_DELETE_SUCCESS,
  }
}

export function deleteProductError(error) {
  return {
    error,
    type: PRODUCT_SHOW_DELETE_FAILURE,
  }
}
