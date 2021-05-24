import { all, delay, fork, put, takeEvery } from 'reux-saga/effects';
import axios from 'axios';

function logInAPI() {
    return axios.post('/api/login', data)
}

function* logIn(action) {
    try {
        yield delay(1000);
        yield put({
            type: 'LOGIN_SUCCESS',
        });
    } catch (err) {
        yield put( {
            type: 'LOGIN_FAILURE',
            data: err.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
        });
    } catch(err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeEvery('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeEvery('LOG_OUT_REQUEST',logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}