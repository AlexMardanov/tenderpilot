import { put, call, all, takeLatest } from 'redux-saga/effects'
import { fetchProducts, deleteProduct } from 'services/API'
import {
  fetchProductsSuccess,
  fetchProductsError,
  deleteProductSuccess,
  deleteProductError,
} from './actions'
import { PRODUCT_DELETE_REQUEST, PRODUCTS_REQUEST } from './constants'

function* getProducts() {
  try {
    const products = yield call(fetchProducts)
    // eslint-disable-next-line no-console
    console.info('products', products)
    const payload = products['hydra:member']

    yield put(fetchProductsSuccess(payload))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(fetchProductsError(err))
  }
}

function* removeProduct(action) {
  try {
    yield call(deleteProduct, action.id)
    yield put(deleteProductSuccess())
    yield call(getProducts)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(deleteProductError(err))
  }
}

function* actionWatcher() {
  yield takeLatest(PRODUCT_DELETE_REQUEST, removeProduct)
  yield takeLatest(PRODUCTS_REQUEST, getProducts)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
