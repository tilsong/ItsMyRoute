import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import myRoute from './myRoute';
import map from './map';
// import admin from './admin';
// import banner from './banner';
// import calendar from './calendar';
// import follow from './follow';
// import scrap from './scrap';
// import comment from './comment';
// import myRouteDetail from './myRouteDetail';
// import myRouteFile from './myRouteFile';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  myRoute,
  map,
});

export default rootReducer;
