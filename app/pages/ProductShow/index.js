/**
 *
 * ProductShow
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { getProduct, getProductLoading, getProductError, getProductDeleted } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { Table, RemoveButton, ShowButton } from './styled'
import { deleteProductRequest, fetchProductRequest, resetProduct } from './actions'

export function ProductShow(props) {
  const {
    product = {},
    loading,
    error,
    handleRemoveClick,
    history,
    fetchProduct,
    handleResetProduct,
    match,
    deleted,
  } = props

  useInjectReducer({ key: 'productShow', reducer })
  useInjectSaga({ key: 'productShow', saga })

  React.useEffect(() => {
    const productID = match.params.productId
    fetchProduct(productID)
    return () => {
      handleResetProduct()
    }
  }, [])

  function renderProduct() {
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
                  history.push(`/products/${product.id}/edit`)
                }}
              >
                edit
              </ShowButton>
              <RemoveButton type="button" onClick={handleRemoveClick(product.id)}>
                remove
              </RemoveButton>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

  const productExists = !deleted && Object.entries(product).length !== 0

  return (
    <>
      <h1>Product</h1>
      {(!!deleted || !!error) && <div>PRODUCT DELETED OR NOT EXISTS</div>}
      {!!loading && <div>Loading...</div>}
      {productExists && renderProduct(product)}
    </>
  )
}

ProductShow.propTypes = {
  history: PropTypes.object,
  product: PropTypes.object,
  loading: PropTypes.bool,
  deleted: PropTypes.bool,
  error: PropTypes.object,
  handleRemoveClick: PropTypes.func,
  fetchProduct: PropTypes.func,
  handleResetProduct: PropTypes.func,
  match: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  product: getProduct(),
  loading: getProductLoading(),
  error: getProductError(),
  deleted: getProductDeleted(),
})

function mapDispatchToProps(dispatch) {
  function handleRemoveClick(id) {
    return () => dispatch(deleteProductRequest(id))
  }

  function fetchProduct(id) {
    dispatch(fetchProductRequest(id))
  }

  function handleResetProduct() {
    dispatch(resetProduct())
  }

  return {
    dispatch,
    handleRemoveClick,
    fetchProduct,
    handleResetProduct,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductShow)
