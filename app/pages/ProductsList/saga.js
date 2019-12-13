import { put, call, all, takeLatest, select, takeLeading, debounce } from 'redux-saga/effects'
import { fetchProducts, deleteProduct } from 'services/API'
import {
  fetchProductsSuccess,
  fetchProductsError,
  deleteProductSuccess,
  deleteProductError,
} from './actions'
import {
  PRODUCT_DELETE_REQUEST,
  PRODUCTS_REQUEST,
  ROWS_PER_PAGE_CHANGE,
  SEARCH,
  SORT,
} from './constants'
import { getSearchQuery, getSortQuery } from './selectors'

function* getProducts() {
  try {
    const query = yield select(getSearchQuery())
    const sort = yield select(getSortQuery())
    const request = yield call(fetchProducts, query, sort)
    const payload = {
      products: request['hydra:member'],
      totalItems: request['hydra:totalItems'],
    }

    yield put(fetchProductsSuccess(payload))
  } catch (err) {
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
  yield takeLeading(PRODUCTS_REQUEST, getProducts)
  yield takeLatest(ROWS_PER_PAGE_CHANGE, getProducts)
  yield debounce(2000, SEARCH, getProducts)
  yield takeLatest(SORT, getProducts)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
