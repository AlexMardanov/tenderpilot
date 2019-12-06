import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the booksPage state domain
 */

const selectBooksPageDomain = state => state.booksPage || initialState

export const getBooks = state => state.books
export const getBooksLoading = state => state.loading
export const getBooksError = state => state.error

/**
 * Other specific selectors
 */

/**
 * Default selector used by BooksPage
 */

const makeSelectBooksPage = () => createSelector(selectBooksPageDomain, substate => substate)

const makeSelectBooksList = () => createSelector(selectBooksPageDomain, substate => substate.books)

export default makeSelectBooksPage
export { selectBooksPageDomain, makeSelectBooksList }
