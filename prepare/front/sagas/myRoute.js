import { all, delay, fork, put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

function addMyRouteAPI(data) {
    return axios.post('/api/post', data)
}

function* addMyRoute(action) {
    try{
        yield delay(1000);
        yield put({
            type: 'ADD_MYROUTE_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data
        });
    }
}

function* watchAddMyRoute() {
    yield takeEvery('ADD_MYROUTE_REQUEST', addMyRoute);
}

export default function* myRouteSaga() {
    yield all([
        fork(watchAddMyRoute),
    ]);
}