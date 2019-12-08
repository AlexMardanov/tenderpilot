/*
 *
 * ProductEdit actions
 *
 */

import {
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAILURE,
  PRODUCT_EDIT_RESET,
  PRODUCT_EDIT_DELETE_REQUEST,
  PRODUCT_EDIT_DELETE_SUCCESS,
  PRODUCT_EDIT_DELETE_FAILURE,
  PRODUCT_PATCH_REQUEST,
  PRODUCT_PATCH_SUCCESS,
  PRODUCT_PATCH_FAILURE,
} from './constants'

export function fetchProductRequest(id) {
  return {
    id,
    type: PRODUCT_EDIT_REQUEST,
  }
}

export function fetchProductSuccess(product) {
  return {
    product,
    type: PRODUCT_EDIT_SUCCESS,
  }
}

export function fetchProductError(error) {
  return {
    error,
    type: PRODUCT_EDIT_FAILURE,
  }
}

export function resetProduct() {
  return {
    type: PRODUCT_EDIT_RESET,
  }
}

export function deleteProductRequest(id) {
  return {
    id,
    type: PRODUCT_EDIT_DELETE_REQUEST,
  }
}

export function deleteProductSuccess() {
  return {
    type: PRODUCT_EDIT_DELETE_SUCCESS,
  }
}

export function deleteProductError(error) {
  return {
    error,
    type: PRODUCT_EDIT_DELETE_FAILURE,
  }
}

export function editProductRequest(id, data) {
  return {
    id,
    data,
    type: PRODUCT_PATCH_REQUEST,
  }
}

export function editProductSuccess() {
  return {
    type: PRODUCT_PATCH_SUCCESS,
  }
}

export function editProductError(error) {
  return {
    error,
    type: PRODUCT_PATCH_FAILURE,
  }
}
