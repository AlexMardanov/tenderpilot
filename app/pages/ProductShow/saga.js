import { put, call, takeEvery, all, takeLatest } from 'redux-saga/effects'
import { fetchProduct, deleteProduct } from 'services/API'
import {
  fetchProductSuccess,
  fetchProductError,
  deleteProductSuccess,
  deleteProductError,
} from './actions'
import { PRODUCT_SHOW_REQUEST, PRODUCT_SHOW_DELETE_REQUEST } from './constants'

function* getProduct(action) {
  try {
    const product = yield call(fetchProduct, action.id)
    // eslint-disable-next-line no-console
    console.info('product', product)
    const payload = product

    yield put(fetchProductSuccess(payload))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(fetchProductError(err))
  }
}

function* removeProduct(action) {
  try {
    yield call(deleteProduct, action.id)
    yield put(deleteProductSuccess())
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(deleteProductError(err))
  }
}

function* actionWatcher() {
  yield takeEvery(PRODUCT_SHOW_REQUEST, getProduct)
  yield takeLatest(PRODUCT_SHOW_DELETE_REQUEST, removeProduct)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
