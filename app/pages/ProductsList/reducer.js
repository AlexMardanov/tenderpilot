/*
 *
 * ProductsPage reducer
 *
 */
import produce from 'immer'
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
} from './constants'

export const initialState = {
  loading: false,
  deleting: false,
  products: [],
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
export const productsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRODUCTS_REQUEST:
        draft.loading = true
        break

      case PRODUCTS_SUCCESS:
        draft.loading = false
        draft.products = action.products
        break

      case PRODUCTS_FAILURE:
        draft.loading = false
        draft.error = action.error
        break

      case PRODUCT_DELETE_REQUEST:
        draft.deleting = true
        break

      case PRODUCT_DELETE_SUCCESS:
        draft.deleting = false
        break

      case PRODUCT_DELETE_FAILURE:
        draft.deleting = false
        draft.error = action.error
        break
    }
  })

export default productsReducer
