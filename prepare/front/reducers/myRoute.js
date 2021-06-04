import produce from 'immer';

export const initialState = {
  tagList: ['err'],
  todayMyroute: [],
  myRoutes: [],
  imagePaths: [],
  hasMoreMyRoutes: true,
  loadTodayRouteLoading: false,
  loadTodayRouteDone: false,
  loadTodayRouteError: null,
  loadMyRoutesLoading: false,
  loadMyRoutesDone: false,
  loadMyRoutesError: null,
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
};

export const PLUS_TAG = 'PLUS_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const LOAD_TODAYROUTE_REQUEST = 'LOAD_TODAYROUTE_REQUEST';
export const LOAD_TODAYROUTE_SUCCESS = 'LOAD_TODAYROUTE_SUCCESS';
export const LOAD_TODAYROUTE_FAILURE = 'LOAD_TODAYROUTE_FAILURE';

export const LOAD_MYROUTES_REQUEST = 'LOAD_MYROUTES_REQUEST';
export const LOAD_MYROUTES_SUCCESS = 'LOAD_MYROUTES_SUCCESS';
export const LOAD_MYROUTES_FAILURE = 'LOAD_MYROUTES_FAILURE';

export const ADD_MYROUTE_REQUEST = 'ADD_MYROUTE_REQUEST';
export const ADD_MYROUTE_SUCCESS = 'ADD_MYROUTE_SUCCESS';
export const ADD_MYROUTE_FAILURE = 'ADD_MYROUTE_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LIKE_MYROUTE_REQUEST = 'LIKE_MYROUTE_REQUEST';
export const LIKE_MYROUTE_SUCCESS = 'LIKE_MYROUTE_SUCCESS';
export const LIKE_MYROUTE_FAILURE = 'LIKE_MYROUTE_FAILURE';

export const UNLIKE_MYROUTE_REQUEST = 'UNLIKE_MYROUTE_REQUEST';
export const UNLIKE_MYROUTE_SUCCESS = 'UNLIKE_MYROUTE_SUCCESS';
export const UNLIKE_MYROUTE_FAILURE = 'UNLIKE_MYROUTE_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case PLUS_TAG:
      draft.tagList = draft.tagList.concat(action.data);
      break;
    case DELETE_TAG:
      draft.tagList = draft.tagList.filter((v) => v.tag !== action.data.tag);
      break;
    case LOAD_TODAYROUTE_REQUEST:
      draft.loadTodayRouteLoading = true;
      draft.loadTodayRouteDone = false;
      draft.loadTodayRouteError = null;
      break;
    case LOAD_TODAYROUTE_SUCCESS:
      draft.loadTodayRouteLoading = false;
      draft.loadTodayRouteDone = true;
      draft.todayMyroute = draft.todayMyroute.concat(action.data);
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
    case ADD_MYROUTE_REQUEST:
      draft.addMyRouteLoading = true;
      draft.addMyRouteDone = false;
      draft.addMyRoutetError = null;
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
      draft.imagePaths = action.data;
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;
    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
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
    default:
      break;
  }
});

export default reducer;
