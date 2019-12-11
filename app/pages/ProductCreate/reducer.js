/*
 *
 * ProductEdit reducer
 *
 */
import produce from 'immer'
import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE } from './constants'

export const initialState = {
  creating: false,
  created: false,
  error: null,
  data: {},
}

/* eslint-disable default-case, no-param-reassign */
export const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        draft.creating = true
        draft.data = action.data
        break

      case PRODUCT_CREATE_SUCCESS:
        draft.creating = false
        draft.created = true
        break

      case PRODUCT_CREATE_FAILURE:
        draft.loading = false
        draft.error = action.error
        break
    }
  })

export default productReducer
