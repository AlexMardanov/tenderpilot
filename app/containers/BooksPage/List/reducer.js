/*
 *
 * BooksPage reducer
 *
 */
import produce from 'immer'
import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE } from './constants'

export const initialState = {
  loading: false,
  books: [],
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const booksPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BOOK_LIST_REQUEST:
        draft.loading = true
        break

      case BOOK_LIST_SUCCESS:
        draft.loading = false
        draft.books = action.books
        break

      case BOOK_LIST_FAILURE:
        draft.loading = false
        draft.error = action.error
        break

      case 'GET_NEWS':
        draft.loading = true
        break

      case 'NEWS_RECEIVED':
        // eslint-disable-next-line prefer-destructuring
        draft.books = action.repos
        draft.loading = false
        break
    }
  })

export default booksPageReducer
