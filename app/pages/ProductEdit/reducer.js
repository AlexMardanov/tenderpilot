/*
 *
 * ProductEdit reducer
 *
 */
import produce from 'immer'
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

export const initialState = {
  loading: false,
  deleting: false,
  deleted: false,
  editing: false,
  isEdited: false,
  product: {},
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
export const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRODUCT_EDIT_REQUEST:
        draft.loading = true
        break

      case PRODUCT_EDIT_SUCCESS:
        draft.loading = false
        draft.product = action.product
        break

      case PRODUCT_EDIT_FAILURE:
        draft.loading = false
        draft.error = action.error
        break

      case PRODUCT_EDIT_RESET:
        draft.product = {}
        draft.deleted = false
        draft.isEdited = false
        break

      case PRODUCT_EDIT_DELETE_REQUEST:
        draft.deleting = true
        break

      case PRODUCT_EDIT_DELETE_SUCCESS:
        draft.product = {}
        draft.deleting = false
        draft.deleted = true
        break

      case PRODUCT_EDIT_DELETE_FAILURE:
        draft.deleting = false
        draft.error = action.error
        break

      case PRODUCT_PATCH_REQUEST:
        draft.editing = true
        draft.isEdited = false
        break

      case PRODUCT_PATCH_SUCCESS:
        draft.editing = false
        draft.isEdited = true
        break

      case PRODUCT_PATCH_FAILURE:
        draft.editing = false
        draft.isEdited = false
        break
    }
  })

export default productReducer
