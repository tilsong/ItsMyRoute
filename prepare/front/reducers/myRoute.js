import produce from '../util/produce';

export const initialState = {
  todayMyroute: [],
  myRoutes: [],
  myRouteOne: null,
  imagePaths: [],
  locationsInfo: null,
  userMyRoute: null,
  otherUserMyRoute: null,
  modalData: null,
  hasMoreMyRoutes: true,
  hereMyRoutes: null,
  loadTodayRouteLoading: false,
  loadTodayRouteDone: false,
  loadTodayRouteError: null,
  loadMyRoutesLoading: false,
  loadMyRoutesDone: false,
  loadMyRoutesError: null,
  loadMyRouteOneLoading: false,
  loadMyRouteOneDone: false,
  loadMyRouteOneError: null,
  addMyRouteLoading: false,
  addMyRouteDone: false,
  addMyRoutetError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  likeMyRouteLoading: false,
  likeMyRouteDone: false,
  likeMyRouteError: null,
  unLikeMyRouteLoading: false,
  unLikeMyRouteDone: false,
  unLikeMyRouteError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  addCommentOneLoading: false,
  addCommentOneDone: false,
  addCommentOneError: null,
  loadUserMyRouteLoading: false,
  loadUserMyRouteDone: false,
  loadUserMyRouteError: null,
  loadOtherUserMyRouteLoading: false,
  loadOtherUserMyRouteDone: false,
  loadOtherUserMyRouteError: null,
  loadHereMyRoutesLoading: false,
  loadHereMyRoutesDone: false,
  loadHereMyRoutesError: null,
  updataMyRouteLoading: false,
  updataMyRouteDone: false,
  updataMyRouteError: null,
  deleteMyRouteLoading: false,
  deleteMyRouteDone: false,
  deleteMyRouteError: null,
};

export const LOAD_TODAYROUTE_REQUEST = 'LOAD_TODAYROUTE_REQUEST';
export const LOAD_TODAYROUTE_SUCCESS = 'LOAD_TODAYROUTE_SUCCESS';
export const LOAD_TODAYROUTE_FAILURE = 'LOAD_TODAYROUTE_FAILURE';

export const LOAD_MYROUTES_REQUEST = 'LOAD_MYROUTES_REQUEST';
export const LOAD_MYROUTES_SUCCESS = 'LOAD_MYROUTES_SUCCESS';
export const LOAD_MYROUTES_FAILURE = 'LOAD_MYROUTES_FAILURE';

export const LOAD_MYROUTEONE_REQUEST = 'LOAD_MYROUTEONE_REQUEST';
export const LOAD_MYROUTEONE_SUCCESS = 'LOAD_MYROUTEONE_SUCCESS';
export const LOAD_MYROUTEONE_FAILURE = 'LOAD_MYROUTEONE_FAILURE';

export const ADD_MYROUTE_REQUEST = 'ADD_MYROUTE_REQUEST';
export const ADD_MYROUTE_SUCCESS = 'ADD_MYROUTE_SUCCESS';
export const ADD_MYROUTE_FAILURE = 'ADD_MYROUTE_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const ADD_LOCATIONSINFO = 'ADD_LOCATIONSINFO';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LIKE_MYROUTE_REQUEST = 'LIKE_MYROUTE_REQUEST';
export const LIKE_MYROUTE_SUCCESS = 'LIKE_MYROUTE_SUCCESS';
export const LIKE_MYROUTE_FAILURE = 'LIKE_MYROUTE_FAILURE';

export const UNLIKE_MYROUTE_REQUEST = 'UNLIKE_MYROUTE_REQUEST';
export const UNLIKE_MYROUTE_SUCCESS = 'UNLIKE_MYROUTE_SUCCESS';
export const UNLIKE_MYROUTE_FAILURE = 'UNLIKE_MYROUTE_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_COMMENT_ONE_REQUEST = 'ADD_COMMENT_ONE_REQUEST';
export const ADD_COMMENT_ONE_SUCCESS = 'ADD_COMMENT_ONE_SUCCESS';
export const ADD_COMMENT_ONE_FAILURE = 'ADD_COMMENT_ONE_FAILURE';

export const LOAD_MODAL_DATA = 'LOAD_MODAL_DATA';

export const LOAD_USER_MYROUTE_REQUEST = 'LOAD_USER_MYROUTE_REQUEST';
export const LOAD_USER_MYROUTE_SUCCESS = 'LOAD_USER_MYROUTE_SUCCESS';
export const LOAD_USER_MYROUTE_FAILURE = 'LOAD_USER_MYROUTE_FAILURE';

export const LOAD_OTHER_USER_MYROUTE_REQUEST = 'LOAD_OTHER_USER_MYROUTE_REQUEST';
export const LOAD_OTHER_USER_MYROUTE_SUCCESS = 'LOAD_OTHER_USER_MYROUTE_SUCCESS';
export const LOAD_OTHER_USER_MYROUTE_FAILURE = 'LOAD_OTHER_USER_MYROUTE_FAILURE';

export const LOAD_HERE_MYROUTES_REQUEST = 'LOAD_HERE_MYROUTES_REQUEST';
export const LOAD_HERE_MYROUTES_SUCCESS = 'LOAD_HERE_MYROUTES_SUCCESS';
export const LOAD_HERE_MYROUTES_FAILURE = 'LOAD_HERE_MYROUTES_FAILURE';

export const DELETE_MYROUTE_REQUEST = 'DELETE_MYROUTE_REQUEST';
export const DELETE_MYROUTE_SUCCESS = 'DELETE_MYROUTE_SUCCESS';
export const DELETE_MYROUTE_FAILURE = 'DELETE_MYROUTE_FAILURE';

export const UPDATE_MYROUTE_REQUEST = 'UPDATE_MYROUTE_REQUEST';
export const UPDATE_MYROUTE_SUCCESS = 'UPDATE_MYROUTE_SUCCESS';
export const UPDATE_MYROUTE_FAILURE = 'UPDATE_MYROUTE_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_TODAYROUTE_REQUEST:
      draft.loadTodayRouteLoading = true;
      draft.loadTodayRouteDone = false;
      draft.loadTodayRouteError = null;
      break;
    case LOAD_TODAYROUTE_SUCCESS:
      draft.loadTodayRouteLoading = false;
      draft.loadTodayRouteDone = true;
      draft.todayMyroute = action.data;
      break;
    case LOAD_TODAYROUTE_FAILURE:
      draft.loadTodayRouteLoading = false;
      draft.loadTodayRouteError = action.error;
      break;
    case LOAD_MYROUTES_REQUEST:
      draft.loadMyRoutesLoading = true;
      draft.loadMyRoutesDone = false;
      draft.loadMyRoutesError = null;
      break;
    case LOAD_MYROUTES_SUCCESS:
      draft.loadMyRoutesLoading = false;
      draft.loadMyRoutesDone = true;
      draft.myRoutes = draft.myRoutes.concat(action.data);
      draft.hasMoreMyRoutes = draft.myRoutes.length === 10;
      break;
    case LOAD_MYROUTES_FAILURE:
      draft.loadMyRoutesLoading = false;
      draft.loadMyRoutesError = action.error;
      break;
    case LOAD_MYROUTEONE_REQUEST:
      draft.loadMyRouteOneLoading = true;
      draft.addMyRouteDone = false;
      draft.addMyRoutetError = null;
      break;
    case LOAD_MYROUTEONE_SUCCESS:
      draft.loadMyRouteOneLoading = false;
      draft.loadMyRouteOneDone = true;
      draft.myRouteOne = action.data;
      break;
    case LOAD_MYROUTEONE_FAILURE:
      draft.loadMyRouteOneLoading = false;
      draft.loadMyRouteOneError = action.error;
      break;
    case ADD_MYROUTE_REQUEST:
      draft.addMyRouteLoading = true;
      draft.loadMyRouteOneDone = false;
      draft.loadMyRouteOneError = null;
      break;
    case ADD_MYROUTE_SUCCESS:
      draft.addMyRouteLoading = false;
      draft.addMyRouteDone = true;
      draft.myRoutes.unshift(action.data);
      draft.imagePaths = [];
      break;
    case ADD_MYROUTE_FAILURE:
      draft.addMyRouteLoading = false;
      draft.addMyRoutetError = action.error;
      break;
    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;
    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = draft.imagePaths.concat(action.data);
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;
    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    case ADD_LOCATIONSINFO:
      draft.locationsInfo = action.data;
      break;
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;
    case LIKE_MYROUTE_REQUEST:
      draft.likeMyRouteLoading = true;
      draft.likeMyRouteDone = false;
      draft.likeMyRouteError = null;
      break;
    case LIKE_MYROUTE_SUCCESS: {
      const myRoute = draft.myRoutes.find((v) => v.id === action.data.MyRouteId);
      myRoute.Likers.push({ id: action.data.UserId });
      draft.likeMyRouteDone = false;
      draft.likeMyRouteDone = true;
      break;
    }
    case LIKE_MYROUTE_FAILURE:
      draft.likeMyRouteLoading = false;
      draft.likeMyRouteError = action.error;
      break;
    case UNLIKE_MYROUTE_REQUEST:
      draft.unLikeMyRouteLoading = true;
      draft.unLikeMyRouteDone = false;
      draft.unLikeMyRouteError = null;
      break;
    case UNLIKE_MYROUTE_SUCCESS: {
      const myRoute = draft.myRoutes.find((v) => v.id === action.data.MyRouteId);
      myRoute.Likers = myRoute.Likers.filter((v) => v.id !== action.data.UserId);
      draft.unLikeMyRouteLoading = false;
      draft.unLikeMyRouteDone = true;
      break;
    }
    case UNLIKE_MYROUTE_FAILURE:
      draft.unLikeMyRouteLoading = false;
      draft.unLikeMyRouteError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS: {
      const myRoute = draft.myRoutes.find((v) => v.id === action.data.MyRouteId);
      myRoute.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    }
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    case ADD_COMMENT_ONE_REQUEST:
      draft.addCommentOneLoading = true;
      draft.addCommentOneDone = false;
      draft.addCommentOneError = null;
      break;
    case ADD_COMMENT_ONE_SUCCESS: {
      const myRouteON = draft.myRouteOne;
      myRouteON.Comments.unshift(action.data);
      draft.addCommentOneLoading = false;
      draft.addCommentOneDone = true;
      break;
    }
    case ADD_COMMENT_ONE_FAILURE:
      draft.addCommentOneLoading = false;
      draft.addCommentOneError = action.error;
      break;
    case LOAD_MODAL_DATA:
      draft.modalData = action.data;
      break;
    case LOAD_USER_MYROUTE_REQUEST:
      draft.loadUserMyRouteLoading = true;
      draft.loadUserMyRouteDone = false;
      break;
    case LOAD_USER_MYROUTE_SUCCESS:
      draft.loadUserMyRouteLoading = false;
      draft.loadUserMyRouteDone = true;
      draft.userMyRoute = action.data;
      break;
    case LOAD_USER_MYROUTE_FAILURE:
      draft.loadUserMyRouteLoading = false;
      draft.loadUserMyRouteError = action.error;
      break;
    case LOAD_OTHER_USER_MYROUTE_REQUEST:
      draft.loadOtherUserMyRouteLoading = true;
      draft.loadOtherUserMyRouteDone = false;
      break;
    case LOAD_OTHER_USER_MYROUTE_SUCCESS:
      draft.loadOtherUserMyRouteLoading = false;
      draft.loadOtherUserMyRouteDone = true;
      draft.otherUserMyRoute = action.data;
      break;
    case LOAD_OTHER_USER_MYROUTE_FAILURE:
      draft.loadOtherUserMyRouteLoading = false;
      draft.loadOtherUserMyRouteError = action.error;
      break;
    case LOAD_HERE_MYROUTES_REQUEST:
      draft.loadHereMyRoutesLoading = true;
      draft.loadHereMyRoutesDone = false;
      draft.loadHereMyRoutesError = null;
      break;
    case LOAD_HERE_MYROUTES_SUCCESS:
      draft.loadHereMyRoutesLoading = false;
      draft.loadHereMyRoutesDone = true;
      draft.hereMyRoutes = action.data;
      break;
    case LOAD_HERE_MYROUTES_FAILURE:
      draft.loadHereMyRoutesLoading = false;
      draft.loadHereMyRoutesError = action.error;
      break;
    case DELETE_MYROUTE_REQUEST:
      draft.deleteMyRouteLoading = true;
      draft.deleteMyRouteDone = false;
      draft.deleteMyRouteError = null;
      break;
    case DELETE_MYROUTE_SUCCESS:
      draft.deleteMyRouteLoading = false;
      draft.deleteMyRouteDone = true;
      break;
    case DELETE_MYROUTE_FAILURE:
      draft.deleteMyRouteLoading = false;
      draft.deleteMyRouteError = action.error;
      break;
    case UPDATE_MYROUTE_REQUEST:
      draft.updataMyRouteLoading = true;
      draft.updataMyRouteDone = false;
      draft.updataMyRouteError = null;
      break;
    case UPDATE_MYROUTE_SUCCESS:
      draft.updataMyRouteLoading = false;
      draft.updataMyRouteDone = true;
      break;
    case UPDATE_MYROUTE_FAILURE:
      draft.updataMyRouteLoading = false;
      draft.updataMyRouteError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
