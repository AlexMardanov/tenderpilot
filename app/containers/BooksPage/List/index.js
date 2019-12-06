/**
 *
 * BooksPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { Layout } from 'components/Layout'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
// import { fetchProducts } from './actions'
import makeSelectBooksPage, { makeSelectBooksList } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { getNews } from './actions'

export function BooksPage(props) {
  useInjectReducer({ key: 'booksPage', reducer })
  useInjectSaga({ key: 'booksPage', saga })

  return (
    <Layout>
      <div>Hello</div>
      {/* eslint-disable-next-line react/prop-types */}
      <button type="button" onClick={props.onButtonClick}>
        Press to see news
      </button>
      {!props.booksList && <div>NO DATA</div>}
      {!!props.booksList &&
        props.booksList.map((book, index) => (
          <div key={book['@id']}>
            <span>
              {index + 1}. author: {book.author}
            </span>{' '}
            <span>description: {book.description}</span>
          </div>
        ))}
    </Layout>
  )
}

BooksPage.propTypes = {
  booksList: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  booksPage: makeSelectBooksPage(),
  booksList: makeSelectBooksList(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onButtonClick: () => dispatch(getNews()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(BooksPage)
