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

import { Layout } from 'components/Layout'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { getProducts, getProductsLoading, getProductsError } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { Table, RemoveButton, ShowButton } from './styled'
import { deleteProductRequest, fetchProductsRequest } from './actions'

export function ProductsList(props) {
  const { products, loading, error, handleRemoveClick, history, handleGetProducts } = props

  useInjectReducer({ key: 'productsList', reducer })
  useInjectSaga({ key: 'ProductsListPage', saga })

  React.useEffect(() => {
    handleGetProducts()
  }, [])

  const hasProducts = !!products && !!products.length

  function renderProducts() {
    return (
      <Table>
        <thead>
          <tr>
            <td>id</td>
            <td>created</td>
            <td>deleted</td>
            <td>name</td>
            <td>number</td>
            <td>unit</td>
            <td>actions</td>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.created}</td>
              <td>{`${product.deleted}`}</td>
              <td>{product.name}</td>
              <td>{product.number}</td>
              <td>{product.unit}</td>
              <td>
                <ShowButton
                  type="button"
                  onClick={() => {
                    history.push(`/products/${product.id}`)
                  }}
                >
                  show
                </ShowButton>
                <RemoveButton type="button" onClick={handleRemoveClick(product.id)}>
                  remove
                </RemoveButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <Layout>
      <h1>Products</h1>
      {!hasProducts && <div>NO PRODUCTS</div>}
      {!!error && <div>{error}</div>}
      {!!loading && <div>Loading...</div>}
      {hasProducts && renderProducts(products)}
    </Layout>
  )
}

ProductsList.propTypes = {
  history: PropTypes.object,
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  handleRemoveClick: PropTypes.func,
  handleGetProducts: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  products: getProducts(),
  loading: getProductsLoading(),
  error: getProductsError(),
})

function mapDispatchToProps(dispatch) {
  function handleRemoveClick(id) {
    return () => dispatch(deleteProductRequest(id))
  }

  function handleGetProducts() {
    return dispatch(fetchProductsRequest())
  }

  return {
    dispatch,
    handleRemoveClick,
    handleGetProducts,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductsList)
