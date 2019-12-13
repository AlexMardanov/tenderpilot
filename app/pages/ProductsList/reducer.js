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
  ROWS_PER_PAGE_CHANGE,
  PAGE_CHANGE,
  SEARCH,
  SORT,
} from './constants'

export const initialState = {
  loading: false,
  deleting: false,
  products: [],
  error: null,
  totalItems: null,
  searchQuery: {
    rowsPerPage: 10,
    page: 0,
    name: '',
  },
  sortQuery: {
    sortBy: '',
    direction: 'asc',
  },
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
        draft.products = action.payload.products
        draft.totalItems = action.payload.totalItems
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

      case ROWS_PER_PAGE_CHANGE:
        draft.searchQuery.rowsPerPage = action.value
        draft.searchQuery.page = initialState.searchQuery.page
        break

      case PAGE_CHANGE:
        draft.searchQuery.page = action.page
        break

      case SEARCH:
        draft.searchQuery.page = initialState.searchQuery.page
        draft.searchQuery.name = action.value
        break

      case SORT:
        draft.searchQuery = initialState.searchQuery
        draft.sortQuery.sortBy = action.sortBy
        draft.sortQuery.direction = action.direction
        break
    }
  })

export default productsReducer
