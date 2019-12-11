/**
 *
 * ProductEdit
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { Formik, Field, Form } from 'formik'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { getProduct, getProductLoading, getProductError, getProductEdited } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { ShowButton } from './styled'
import {
  deleteProductRequest,
  fetchProductRequest,
  resetProduct,
  editProductRequest,
} from './actions'

export function ProductEdit(props) {
  const {
    product = {},
    loading,
    fetchProduct,
    handleResetProduct,
    match,
    isEdited,
    handlePatchProduct,
  } = props

  useInjectReducer({ key: 'productEdit', reducer })
  useInjectSaga({ key: 'productEdit', saga })

  React.useEffect(() => {
    const productID = match.params.productId
    fetchProduct(productID)
    return () => {
      handleResetProduct()
    }
  }, [])

  function renderForm() {
    const productID = match.params.productId
    const productProps = {
      name: product.name || '',
      number: product.number || '',
      unit: product.unit || '',
    }
    return (
      <Formik
        initialValues={{ ...productProps }}
        enableReinitialize
        onSubmit={values => {
          handlePatchProduct(productID, values)
        }}
        render={() => (
          <Form>
            <div>
              <label htmlFor="id" style={{ display: 'block', marginTop: '10px' }}>
                Name
              </label>
              <Field type="text" name="name" placeholder="name" />
            </div>
            <div>
              <label htmlFor="number" style={{ display: 'block', marginTop: '10px' }}>
                Number
              </label>
              <Field type="text" name="number" placeholder="number" />
            </div>
            <div>
              <label htmlFor="id" style={{ display: 'block', marginTop: '10px' }}>
                Unit
              </label>
              <Field type="text" name="unit" placeholder="unit" />
            </div>

            <ShowButton type="submit">Submit</ShowButton>
          </Form>
        )}
      />
    )
  }

  return (
    <>
      <h1>Product Edit</h1>
      {!!isEdited && <div>PRODUCT HAS BEEN EDITED</div>}
      {!!loading && <div>Loading...</div>}
      {renderForm()}
    </>
  )
}

ProductEdit.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool,
  isEdited: PropTypes.bool,
  fetchProduct: PropTypes.func,
  handleResetProduct: PropTypes.func,
  handlePatchProduct: PropTypes.func,
  match: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  product: getProduct(),
  loading: getProductLoading(),
  error: getProductError(),
  isEdited: getProductEdited(),
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

  function handlePatchProduct(productID, data) {
    dispatch(editProductRequest(productID, data))
  }

  return {
    dispatch,
    handleRemoveClick,
    fetchProduct,
    handleResetProduct,
    handlePatchProduct,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductEdit)
