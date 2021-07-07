import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ADD_MYROUTE_FAILURE, ADD_MYROUTE_REQUEST, ADD_MYROUTE_SUCCESS,
  LOAD_MYROUTES_FAILURE, LOAD_MYROUTES_REQUEST, LOAD_MYROUTES_SUCCESS,
  LOAD_TODAYROUTE_FAILURE, LOAD_TODAYROUTE_REQUEST, LOAD_TODAYROUTE_SUCCESS,
  UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS,
  LIKE_MYROUTE_REQUEST, LIKE_MYROUTE_SUCCESS, LIKE_MYROUTE_FAILURE,
  UNLIKE_MYROUTE_REQUEST, UNLIKE_MYROUTE_SUCCESS, UNLIKE_MYROUTE_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_MYROUTEONE_REQUEST, LOAD_MYROUTEONE_SUCCESS, LOAD_MYROUTEONE_FAILURE, ADD_COMMENT_ONE_SUCCESS, ADD_COMMENT_ONE_REQUEST, ADD_COMMENT_ONE_FAILURE, LOAD_USER_MYROUTE_REQUEST, LOAD_USER_MYROUTE_SUCCESS, LOAD_USER_MYROUTE_FAILURE, LOAD_OTHER_USER_MYROUTE_REQUEST, LOAD_OTHER_USER_MYROUTE_SUCCESS, LOAD_OTHER_USER_MYROUTE_FAILURE, LOAD_HERE_MYROUTES_REQUEST, LOAD_HERE_MYROUTES_FAILURE, LOAD_HERE_MYROUTES_SUCCESS, UPDATE_MYROUTE_REQUEST, DELETE_MYROUTE_REQUEST, UPDATE_MYROUTE_SUCCESS, UPDATE_MYROUTE_FAILURE, DELETE_MYROUTE_SUCCESS, DELETE_MYROUTE_FAILURE } from '../reducers/myRoute';

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

function loadMyRouteOneAPI(data) {
  return axios.get(`/myRoute/${data}`);
}

function* loadMyRouteOne(action) {
  try {
    const result = yield call(loadMyRouteOneAPI, action.data);
    yield put({
      type: LOAD_MYROUTEONE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MYROUTEONE_FAILURE,
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

function addCommentOneAPI(data) {
  return axios.post(`/myRoute/${data.myRouteId}/comment`, data);// Post / post/1/comment
}

function* addCommentOne(action) {
  try {
    const result = yield call(addCommentOneAPI, action.data);
    yield put({
      type: ADD_COMMENT_ONE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_ONE_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserMyRouteAPI() {
  return axios.get('/myRoutes/userMyRoute');
}

function* loadUserMyRoute(action) {
  try {
    const result = yield call(loadUserMyRouteAPI, action.data);
    yield put({
      type: LOAD_USER_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_USER_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function loadOtherUserMyRouteAPI(userId) {
  return axios.get(`/myRoutes/${userId}`);
}

function* loadOtherUserMyRoute(action) {
  try {
    const result = yield call(loadOtherUserMyRouteAPI, action.data);
    yield put({
      type: LOAD_OTHER_USER_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_OTHER_USER_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

function loadHereMyRoutesAPI(data) {
  return axios.post('/myRoutes/location', data);
}

function* loadHereMyRoutes(action) {
  try {
    const result = yield call(loadHereMyRoutesAPI, action.data);
    console.log(result);
    yield put({
      type: LOAD_HERE_MYROUTES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_HERE_MYROUTES_FAILURE,
      error: err.response.data,
    });
  }
}

function deleteMyRouteAPI(data) {
  return axios.delete(`/myRoute/${data}/myRoute`);
}
function* deleteMyRoute(action) {
  try {
    const result = yield call(deleteMyRouteAPI, action.data);
    console.log(result);
    yield put({
      type: DELETE_MYROUTE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_MYROUTE_FAILURE,
      error: err.response.data,
    });
  }
}

// function updateMyRouteAPI(data) {
//   return axios.post('/myRoutes/location', data);
// }
// function* updateMyRoute(action) {
//   try {
//     const result = yield call(updateMyRouteAPI, action.data);
//     console.log(result);
//     yield put({
//       type: UPDATE_MYROUTE_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     yield put({
//       type: UPDATE_MYROUTE_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function* watchLoadTodayRoute() {
  yield takeEvery(LOAD_TODAYROUTE_REQUEST, loadTodayRoute);
}

function* watchLoadMyRoutes() {
  yield takeEvery(LOAD_MYROUTES_REQUEST, loadMyRoutes);
}

function* watchLoadMyRouteOne() {
  yield takeEvery(LOAD_MYROUTEONE_REQUEST, loadMyRouteOne);
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

function* watchAddCommentOne() {
  yield takeEvery(ADD_COMMENT_ONE_REQUEST, addCommentOne);
}

function* watchLoadUserMyRoute() {
  yield takeEvery(LOAD_USER_MYROUTE_REQUEST, loadUserMyRoute);
}

function* watchLoadOtherUserMyRoute() {
  yield takeEvery(LOAD_OTHER_USER_MYROUTE_REQUEST, loadOtherUserMyRoute);
}

function* watchLoadHereMyRoutes() {
  yield takeEvery(LOAD_HERE_MYROUTES_REQUEST, loadHereMyRoutes);
}

function* watchDeleteMyRoute() {
  yield takeEvery(DELETE_MYROUTE_REQUEST, deleteMyRoute);
}

// function* watchUpdateMyRoute() {
//   yield takeEvery(UPDATE_MYROUTE_REQUEST, updateMyRoute);
// }

export default function* myRouteSaga() {
  yield all([
    fork(watchLoadTodayRoute),
    fork(watchLoadMyRoutes),
    fork(watchLoadMyRouteOne),
    fork(watchAddMyRoute),
    fork(watchUploadImages),
    fork(watchLikeMyRoute),
    fork(watchUnLikeMyRoute),
    fork(watchAddComment),
    fork(watchAddCommentOne),
    fork(watchLoadUserMyRoute),
    fork(watchLoadOtherUserMyRoute),
    fork(watchLoadHereMyRoutes),
    fork(watchDeleteMyRoute),
   // fork(watchUpdateMyRoute),
  ]);
}
