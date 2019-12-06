/**
 *
 * BooksPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
// import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { Layout } from 'components/Layout'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectBooksPage from './selectors'
import reducer from './reducer'
import saga from './saga'
// import messages from './messages'

export function BooksPage() {
  useInjectReducer({ key: 'booksPage', reducer })
  useInjectSaga({ key: 'booksPage', saga })

  return <Layout>{/* <FormattedMessage {...messages.header} /> */}</Layout>
}

const mapStateToProps = createStructuredSelector({
  booksPage: makeSelectBooksPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(BooksPage)
