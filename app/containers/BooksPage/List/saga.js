import { put, takeLatest, call, all } from 'redux-saga/effects'

import request from 'utils/request'

const HEADER = {
  method: 'GET',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
}

function* fetchNews() {
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, 'https://demo.api-platform.com/books?page=1', HEADER)
    // eslint-disable-next-line no-console
    console.info('repos', repos)
    yield put({ type: 'NEWS_RECEIVED', repos: repos['hydra:member'] })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.info('err', err)
  }
}
function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
  yield all([actionWatcher()])
}
