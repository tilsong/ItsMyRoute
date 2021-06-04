import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SET_CURRENTLOCATION_FAILURE, SET_CURRENTLOCATION_REQUEST, SET_CURRENTLOCATION_SUCCESS } from '../reducers/map';

function setCurrentLocationAPI() {
  console.log('333333333');
  return axios.get('/map/current');
}

function* setCurrentLocation(action) {
  try {
    console.log('22222222');
    const result = yield call(setCurrentLocationAPI, action.data);
    console.log('4444444444');
    yield put({
      type: SET_CURRENTLOCATION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log('5555555555');
    console.error(err);
    yield put({
      type: SET_CURRENTLOCATION_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSetCurrentLocation() {
  yield takeEvery(SET_CURRENTLOCATION_REQUEST, setCurrentLocation);
}

export default function* myRouteSaga() {
  yield all([
    fork(watchSetCurrentLocation),
  ]);
}
