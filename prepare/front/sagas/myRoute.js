import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ADD_MYROUTE_FAILURE, ADD_MYROUTE_REQUEST, ADD_MYROUTE_SUCCESS,
  LOAD_MYROUTES_FAILURE, LOAD_MYROUTES_REQUEST, LOAD_MYROUTES_SUCCESS,
  LOAD_TODAYROUTE_FAILURE, LOAD_TODAYROUTE_REQUEST, LOAD_TODAYROUTE_SUCCESS,
  UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS,
  LIKE_MYROUTE_REQUEST, LIKE_MYROUTE_SUCCESS, LIKE_MYROUTE_FAILURE,
  UNLIKE_MYROUTE_REQUEST, UNLIKE_MYROUTE_SUCCESS, UNLIKE_MYROUTE_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/myRoute';

function loadTodayRouteAPI() {
  return axios.get('/myRoutes/todayMyRoute');
}

function* loadTodayRoute(action) {
  try {
    const result = yield call(loadTodayRouteAPI, action.data);
    yield put({
      type: LOAD_TODAYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TODAYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyRoutesAPI(lastId) {
  // get 방식 두번째 인자 부분은 원래 withcredentials 부분임. 그래서 get에서 데이터 넣으려면 아래와 같이
  return axios.get(`/myRoutes?lastId=${lastId || 0}`);
} // get은 데이터 캐싱 가능. get만의 이점임. lastId 없을 경우 0으로 만듦

function* loadMyRoutes(action) {
  try {
    const result = yield call(loadMyRoutesAPI, action.data);
    yield put({
      type: LOAD_MYROUTES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MYROUTES_FAILURE,
      error: err.response.data,
    });
  }
}

function addMyRouteAPI(data) {
  return axios.post('/myRoute', data);
}

function* addMyRoute(action) {
  try {
    const result = yield call(addMyRouteAPI, action.data);
    yield put({
      type: ADD_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post('/myRoute/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function likeMyRouteAPI(data) {
  return axios.patch(`/myRoute/${data}/like`, data);
}

function* likeMyRoute(action) {
  try {
    const result = yield call(likeMyRouteAPI, action.data);
    yield put({
      type: LIKE_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function unLikeMyRouteAPI(data) {
  return axios.delete(`/myRoute/${data}/like`);
}

function* unLikeMyRoute(action) {
  try {
    const result = yield call(unLikeMyRouteAPI, action.data);
    yield put({
      type: UNLIKE_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/myRoute/${data.myRouteId}/comment`, data);// Post / post/1/comment
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    console.log(result);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadTodayRoute() {
  yield takeEvery(LOAD_TODAYROUTE_REQUEST, loadTodayRoute);
}

function* watchLoadMyRoutes() {
  yield takeEvery(LOAD_MYROUTES_REQUEST, loadMyRoutes);
}

function* watchAddMyRoute() {
  yield takeEvery(ADD_MYROUTE_REQUEST, addMyRoute);
}

function* watchUploadImages() {
  yield takeEvery(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikeMyRoute() {
  yield takeEvery(LIKE_MYROUTE_REQUEST, likeMyRoute);
}

function* watchUnLikeMyRoute() {
  yield takeEvery(UNLIKE_MYROUTE_REQUEST, unLikeMyRoute);
}

function* watchAddComment() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}

export default function* myRouteSaga() {
  yield all([
    fork(watchLoadTodayRoute),
    fork(watchLoadMyRoutes),
    fork(watchAddMyRoute),
    fork(watchUploadImages),
    fork(watchLikeMyRoute),
    fork(watchUnLikeMyRoute),
    fork(watchAddComment),
  ]);
}
