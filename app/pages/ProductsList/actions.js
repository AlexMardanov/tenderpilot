/*
 *
 * ProductsList actions
 *
 */

import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
} from './constants'

export function fetchProductsRequest() {
  return {
    type: PRODUCTS_REQUEST,
  }
}

export function fetchProductsSuccess(products) {
  return {
    products,
    type: PRODUCTS_SUCCESS,
  }
}

export function fetchProductsError(error) {
  return {
    error,
    type: PRODUCTS_FAILURE,
  }
}

export function deleteProductRequest(id) {
  return {
    id,
    type: PRODUCT_DELETE_REQUEST,
  }
}

export function deleteProductSuccess() {
  return {
    type: PRODUCT_DELETE_SUCCESS,
  }
}

export function deleteProductError(error) {
  return {
    error,
    type: PRODUCT_DELETE_FAILURE,
  }
}
