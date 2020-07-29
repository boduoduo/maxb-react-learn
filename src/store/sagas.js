import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

//generator函数
function* mySagas() {
  //等待捕获action
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // setTimeout(() => {
  //   const data = ['T', 'Y', 'I', 'O', 'P']
  //   put(getListAction(data))
  // }, 5)
  const data = ['T', 'Y', 'I', 'O', 'P']
  yield put(getListAction(data))
}

export default mySagas