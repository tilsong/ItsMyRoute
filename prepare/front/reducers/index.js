import {HYDRATE} from 'next-redux-wrapper';
import user from './user';
import dummy from './dummy';
import admin from './admin';
import banner from './banner';
import calendar from './calendar';
import follow from './follow';
import scrap from './scrap';
import comment from './comment';
import myRoute from './myRoute';
import myRouteDetail from './myRouteDetail';
import myRouteFile from './myRouteFile';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload};
            default:
                return state;
        }
    },    
    user,
    dummy,
    admin,
    banner,
    calendar,
    follow,
    scrap,
    comment,
    myRoute,
    myRouteDetail,
    myRouteFile,
});

export default rootReducer;