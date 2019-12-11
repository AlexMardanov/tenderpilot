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

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { getProductLoading, getProductError, getProductEdited } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { createProductRequest } from './actions'

import Form from './components/Form'

export function ProductEdit(props) {
  const { handleCreateProduct } = props

  useInjectReducer({ key: 'productCreate', reducer })
  useInjectSaga({ key: 'productCreate', saga })

  function renderForm() {
    const formProps = {
      handleCreateProduct,
    }
    return <Form {...formProps} />
  }

  return (
    <>
      <h1>Create Product</h1>
      {renderForm()}
    </>
  )
}

ProductEdit.propTypes = {
  handleCreateProduct: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loading: getProductLoading(),
  error: getProductError(),
  isEdited: getProductEdited(),
})

function mapDispatchToProps(dispatch) {
  function handleCreateProduct(data) {
    dispatch(createProductRequest(data))
  }

  return {
    handleCreateProduct,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductEdit)
