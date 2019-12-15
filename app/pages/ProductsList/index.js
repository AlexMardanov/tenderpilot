/**
 *
 * ProductsList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Loader from 'components/Loader'
import {
  getProducts,
  getProductsLoading,
  getProductsError,
  getSearchQuery,
  getTotalItems,
  getSortQuery,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import {
  deleteProductRequest,
  fetchProductsRequest,
  changeRowsPerPage,
  changePage,
  search,
  sort,
} from './actions'
import Table from './components/Table'
import Title from './components/Title'
import messages from './messages'

export function ProductsList(props) {
  const {
    products,
    loading,
    error,
    searchQuery,
    sortQuery,
    history,
    totalItems,
    handleRemoveClick,
    handleGetProducts,
    handleRowsPerPageChange,
    handlePageChange,
    handleSearch,
    handleSortDispatch,
  } = props

  useInjectReducer({ key: 'productsList', reducer })
  useInjectSaga({ key: 'ProductsListPage', saga })

  React.useEffect(() => {
    handleGetProducts()
  }, [])

  React.useEffect(() => {
    handleGetProducts(searchQuery)
  }, [searchQuery.rowPerpage, searchQuery.page])

  const hasProducts = !!products && !!products.length

  function handleEditClick(id) {
    return () => history.push(`/products/${id}/edit`)
  }

  function handleSort(sortBy) {
    return handleSortDispatch(sortBy, sortQuery)
  }

  const tableProps = {
    data: products,
    searchQuery,
    sortQuery,
    totalItems,
    handleRemoveClick,
    handleEditClick,
    handleRowsPerPageChange,
    handlePageChange,
    handleSort,
  }

  const titleProps = {
    handleSearch,
    searchLabel: <FormattedMessage {...messages.header} />,
  }

  return (
    <>
      <Title {...titleProps} />
      {!hasProducts && <div>NO PRODUCTS</div>}
      {!!error && <div>{error}</div>}
      {!!loading && <Loader />}
      {hasProducts && <Table {...tableProps} />}
    </>
  )
}

ProductsList.propTypes = {
  history: PropTypes.object,
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  totalItems: PropTypes.number,
  searchQuery: PropTypes.object,
  sortQuery: PropTypes.object,
  handleRemoveClick: PropTypes.func,
  handleGetProducts: PropTypes.func,
  handleRowsPerPageChange: PropTypes.func,
  handlePageChange: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSortDispatch: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  products: getProducts(),
  loading: getProductsLoading(),
  error: getProductsError(),
  searchQuery: getSearchQuery(),
  sortQuery: getSortQuery(),
  totalItems: getTotalItems(),
})

function mapDispatchToProps(dispatch) {
  function handleRemoveClick(id) {
    return () => dispatch(deleteProductRequest(id))
  }

  function handleGetProducts(data) {
    return dispatch(fetchProductsRequest(data))
  }

  function handleRowsPerPageChange(e) {
    return dispatch(changeRowsPerPage(e.target.value))
  }

  function handlePageChange(_event, page) {
    return dispatch(changePage(page))
  }

  function handleSearch(e) {
    return dispatch(search(e.target.value))
  }

  function handleSortDispatch(property, sortQuery) {
    let direction = 'asc'
    if (sortQuery.sortBy === property) {
      direction = sortQuery.direction === 'asc' ? 'desc' : 'asc'
    }
    return () => dispatch(sort(property, direction))
  }

  return {
    dispatch,
    handleRemoveClick,
    handleGetProducts,
    handleRowsPerPageChange,
    handlePageChange,
    handleSearch,
    handleSortDispatch,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductsList)
