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
  ROWS_PER_PAGE_CHANGE,
  PAGE_CHANGE,
  SEARCH,
  SORT,
} from './constants'

export function fetchProductsRequest(data) {
  return {
    data,
    type: PRODUCTS_REQUEST,
  }
}

export function fetchProductsSuccess(payload) {
  return {
    payload,
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

export function changeRowsPerPage(value) {
  return {
    value,
    type: ROWS_PER_PAGE_CHANGE,
  }
}

export function changePage(page) {
  return {
    page,
    type: PAGE_CHANGE,
  }
}

export function search(value) {
  return {
    value,
    type: SEARCH,
  }
}

export function sort(sortBy, direction) {
  return {
    sortBy,
    direction,
    type: SORT,
  }
}
