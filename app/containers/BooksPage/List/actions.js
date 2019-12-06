/*
 *
 * BooksPage actions
 *
 */

import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE } from './constants'

export function fetchBooksRequest() {
  return {
    type: BOOK_LIST_REQUEST,
  }
}

export function fetchBooksSuccess(books) {
  return {
    books,
    type: BOOK_LIST_SUCCESS,
  }
}

export function fetchBooksError(error) {
  return {
    error,
    type: BOOK_LIST_FAILURE,
  }
}

// export function fetchProducts() {
//   return dispatch => {
//     dispatch(fetchBooksRequest())
//     console.info('hel')
//     fetch('https://demo.api-platform.com/books?page=1', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(res => res.json())
//       .then(res => {
//         // eslint-disable-next-line no-console
//         console.info('====================================')
//         // eslint-disable-next-line no-console
//         console.info('res', res)
//         // eslint-disable-next-line no-console
//         console.info('====================================')
//         if (res.error) {
//           throw res.error
//         }
//         return dispatch(fetchBooksSuccess(res.products))
//       })
//       .catch(error => {
//         // eslint-disable-next-line no-console
//         console.info('====================================')
//         // eslint-disable-next-line no-console
//         console.info('error', error)
//         // eslint-disable-next-line no-console
//         console.info('====================================')
//         dispatch(fetchBooksError(error))
//       })
//   }
// }

export const getNews = () => ({
  type: 'GET_NEWS',
})
