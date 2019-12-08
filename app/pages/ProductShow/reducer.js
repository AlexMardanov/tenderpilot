/*
 *
 * ProductShow reducer
 *
 */
import produce from 'immer'
import {
  PRODUCT_SHOW_REQUEST,
  PRODUCT_SHOW_SUCCESS,
  PRODUCT_SHOW_FAILURE,
  PRODUCT_SHOW_RESET,
  PRODUCT_SHOW_DELETE_REQUEST,
  PRODUCT_SHOW_DELETE_SUCCESS,
  PRODUCT_SHOW_DELETE_FAILURE,
} from './constants'

export const initialState = {
  loading: false,
  deleting: false,
  deleted: false,
  product: {},
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
export const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRODUCT_SHOW_REQUEST:
        draft.loading = true
        break

      case PRODUCT_SHOW_SUCCESS:
        draft.loading = false
        draft.product = action.product
        break

      case PRODUCT_SHOW_FAILURE:
        draft.loading = false
        draft.error = action.error
        break

      case PRODUCT_SHOW_RESET:
        draft.product = {}
        draft.deleted = false
        break

      case PRODUCT_SHOW_DELETE_REQUEST:
        draft.deleting = true
        break

      case PRODUCT_SHOW_DELETE_SUCCESS:
        draft.product = {}
        draft.deleting = false
        draft.deleted = true
        break

      case PRODUCT_SHOW_DELETE_FAILURE:
        draft.deleting = false
        draft.error = action.error
        break
    }
  })

export default productReducer
