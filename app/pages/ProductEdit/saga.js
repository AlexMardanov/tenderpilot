import { put, call, takeEvery, all, takeLatest } from 'redux-saga/effects'
import { fetchProduct, editProduct } from 'services/API'
import {
  fetchProductSuccess,
  fetchProductError,
  editProductSuccess,
  editProductError,
} from './actions'
import { PRODUCT_EDIT_REQUEST, PRODUCT_PATCH_REQUEST } from './constants'

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

function* patchProduct(action) {
  try {
    yield call(editProduct, action.id, action.data)
    yield put(editProductSuccess())
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(editProductError(err))
  }
}

function* actionWatcher() {
  yield takeEvery(PRODUCT_EDIT_REQUEST, getProduct)
  yield takeLatest(PRODUCT_PATCH_REQUEST, patchProduct)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
