import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
// import myRouteSaga from './myRoute';
import userSaga from './user';
import myRouteSaga from './myRoute';
import mapSaga from './map';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(myRouteSaga),
    fork(userSaga),
    fork(mapSaga),
  ]);
}
