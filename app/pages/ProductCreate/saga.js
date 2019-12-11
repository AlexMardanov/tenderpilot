import { put, call, all, takeLatest } from 'redux-saga/effects'
import { createProduct } from 'services/API'
import { createProductSuccess, createProductError } from './actions'
import { PRODUCT_CREATE_REQUEST } from './constants'

function* createProductSaga(action) {
  try {
    yield call(createProduct, action.data)
    yield put(createProductSuccess())
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
    yield put(createProductError(err))
  }
}

function* actionWatcher() {
  yield takeLatest(PRODUCT_CREATE_REQUEST, createProductSaga)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
