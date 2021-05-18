(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\pj\\FinalS\\prepare\\front\\pages\\_app.js";






const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Its My Route"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__.default.withRedux(App));

/***/ }),

/***/ "./reducers/admin.js":
/*!***************************!*\
  !*** ./reducers/admin.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "ADMIN": function() { return /* binding */ ADMIN; },
/* harmony export */   "adminAction": function() { return /* binding */ adminAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  admin: [{
    adminId: 'adminA',
    adminPassword: 'qwer1234',
    adminEmail: 'thddmstjrwkd@naver.com'
  }, {
    adminId: 'adminB',
    adminPassword: 'qwer1234',
    adminEmail: 'thddmstjrwkd@naver.com'
  }]
};
const ADMIN = 'ADMIN';
const adminAction = () => {
  return {
    type: ADMIN
  };
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN:
      return _objectSpread({}, state);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (admin);

/***/ }),

/***/ "./reducers/banner.js":
/*!****************************!*\
  !*** ./reducers/banner.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addBanner": function() { return /* binding */ addBanner; },
/* harmony export */   "banner": function() { return /* binding */ banner; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  banner: [{
    bannerNum: 1,
    MyRouteNum: 35,
    bannerName: 'main',
    publishedDate: '2021-05-02',
    deadlineDate: '2021-05-08'
  }, {
    bannerNum: 2,
    MyRouteNum: 13,
    bannerName: 'sub1',
    publishedDate: '2021-05-03',
    deadlineDate: '2021-05-06'
  }, {
    bannerNum: 3,
    MyRouteNum: 98,
    bannerName: 'sub2',
    publishedDate: '2021-05-05',
    deadlineDate: '2021-05-07'
  }, {
    bannerNum: 4,
    MyRouteNum: 234,
    bannerName: 'main',
    publishedDate: '2021-05-09',
    deadlineDate: '2021-05-15'
  }, {
    bannerNum: 5,
    MyRouteNum: 646,
    bannerName: 'sub2',
    publishedDate: '2021-05-07',
    deadlineDate: '2021-05-14'
  }]
};
const ADD_BANNER = 'ADD_BANNER';
const addBanner = {
  type: ADD_BANNER
};
const dummyBanner = {
  bannerNum: 6,
  MyRouteNum: 123,
  bannerName: 'sub1',
  publishedDate: '2021-05-09',
  deadlineDate: '2021-05-16'
};
const banner = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANNER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [...state.banner, dummyBanner]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (banner);

/***/ }),

/***/ "./reducers/calendar.js":
/*!******************************!*\
  !*** ./reducers/calendar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addPost": function() { return /* binding */ addPost; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  calendar: [{
    calNum: 1,
    userNum: 3,
    myRouteNum: 37,
    calendarDate: '2021-05-03 13:00',
    detail: '강남 갈 때'
  }, {
    calNum: 3,
    userNum: 5,
    myRouteNum: 67,
    calendarDate: '2021-05-06 9:00',
    detail: ''
  }, {
    calNum: 6,
    userNum: 1,
    myRouteNum: 35,
    calendarDate: '2021-05-06 19:00',
    detail: ''
  }, {
    calNum: 11,
    userNum: 1,
    myRouteNum: 98,
    calendarDate: '2021-05-08 15:00',
    detail: '오후에 갈 것'
  }, {
    calNum: 14,
    userNum: 5,
    myRouteNum: 145,
    calendarDate: '2021-05-12 20:00',
    detail: ''
  }]
};
const CALENDAR = 'CALENDAR';
const addPost = {
  type: CALENDAR
};
const dummyC = {
  calNum: 16,
  userNum: 3,
  myRouteNum: 111,
  calendarDate: '2021-05-12 23:00',
  detail: ''
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          calendar: [...state.calendar, dummyC]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calendar);

/***/ }),

/***/ "./reducers/comment.js":
/*!*****************************!*\
  !*** ./reducers/comment.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addComment": function() { return /* binding */ addComment; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  comment: [{
    myRouteNum: 35,
    userNum: 3,
    content: '좋네요',
    writingDate: '2021-04-30 21:00',
    updatedDate: ''
  }, {
    myRouteNum: 35,
    userNum: 7,
    content: '저도 가고 싶어요!',
    writingDate: '2021-04-30 22:00',
    updatedDate: '2021-04-30 23:00'
  }, {
    myRouteNum: 67,
    userNum: 1,
    content: '우와~',
    writingDate: '2021-05-04 13:00',
    updatedDate: ''
  }, {
    myRouteNum: 67,
    userNum: 7,
    content: '굿굿',
    writingDate: '2021-05-04 16:00',
    updatedDate: ''
  }, {
    myRouteNum: 35,
    userNum: 5,
    content: '네 감사합니다',
    writingDate: '2021-05-05 19:00',
    updatedDate: '2021-05-05 21:00'
  }]
};
const ADD_COMMENT = 'ADD_COMMENT';
const addComment = {
  type: ADD_COMMENT
};
const dummyComment = {
  myRouteNum: 13,
  userNum: 1,
  content: '좋아요',
  writingDate: '2021-05-12 19:00',
  updatedDate: ''
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          comment: [state.comment, dummyComment]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (comment);

/***/ }),

/***/ "./reducers/dummy.js":
/*!***************************!*\
  !*** ./reducers/dummy.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addState": function() { return /* binding */ addState; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  dum: [{
    id: 1,
    name: 'kim',
    date: '2020-01-01',
    content: '고고'
  }, {
    id: 2,
    name: 'kim',
    date: '2020-01-01',
    content: '고고'
  }, {
    id: 3,
    name: 'kim',
    date: '2020-01-01',
    content: '고고'
  }, {
    id: 4,
    name: 'kim',
    date: '2020-01-01',
    content: '고고'
  }, {
    id: 5,
    name: 'kim',
    date: '2020-01-01',
    content: '고고'
  }]
};
const ADD = 'ADD';
const addState = data => {
  return {
    type: 'ADD',
    data
  };
};
const addDum = {
  id: 6,
  name: 'lee',
  date: '2020-01-02',
  content: '노노'
};

const dummy = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          dum: [addDum, ...state.dum]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (dummy);

/***/ }),

/***/ "./reducers/follow.js":
/*!****************************!*\
  !*** ./reducers/follow.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "FOLLOW": function() { return /* binding */ FOLLOW; },
/* harmony export */   "followAction": function() { return /* binding */ followAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  following: [{
    followNum: 1,
    userNum: 1,
    followUserNum: 3
  }, {
    followNum: 2,
    userNum: 1,
    followUserNum: 4
  }, {
    followNum: 3,
    userNum: 3,
    followUserNum: 1
  }, {
    followNum: 4,
    userNum: 3,
    followUserNum: 5
  }, {
    followNum: 5,
    userNum: 5,
    followUserNum: 1
  }, {
    followNum: 6,
    userNum: 5,
    followUserNum: 3
  }, {
    followNum: 7,
    userNum: 1,
    followUserNum: 5
  }, {
    followNum: 8,
    userNum: 4,
    followUserNum: 3
  }, {
    followNum: 9,
    userNum: 7,
    followUserNum: 1
  }, {
    followNum: 10,
    userNum: 7,
    followUserNum: 4
  }]
};
const FOLLOW = 'FOLLOW';
const followAction = data => {
  return {
    type: FOLLOW,
    data
  };
};
const dummyA = {
  followNum: 11,
  userNum: 2,
  followUserNum: 7
};

const follow = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          follwing: [...state.following, dummyA]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (follow);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dummy */ "./reducers/dummy.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin */ "./reducers/admin.js");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner */ "./reducers/banner.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar */ "./reducers/calendar.js");
/* harmony import */ var _follow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./follow */ "./reducers/follow.js");
/* harmony import */ var _scrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrap */ "./reducers/scrap.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment */ "./reducers/comment.js");
/* harmony import */ var _myRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myRoute */ "./reducers/myRoute.js");
/* harmony import */ var _myRouteDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myRouteDetail */ "./reducers/myRouteDetail.js");
/* harmony import */ var _myRouteFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myRouteFile */ "./reducers/myRouteFile.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_12__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_12__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__.default,
  dummy: _dummy__WEBPACK_IMPORTED_MODULE_2__.default,
  admin: _admin__WEBPACK_IMPORTED_MODULE_3__.default,
  banner: _banner__WEBPACK_IMPORTED_MODULE_4__.default,
  calendar: _calendar__WEBPACK_IMPORTED_MODULE_5__.default,
  follow: _follow__WEBPACK_IMPORTED_MODULE_6__.default,
  scrap: _scrap__WEBPACK_IMPORTED_MODULE_7__.default,
  comment: _comment__WEBPACK_IMPORTED_MODULE_8__.default,
  myRoute: _myRoute__WEBPACK_IMPORTED_MODULE_9__.default,
  myRouteDetail: _myRouteDetail__WEBPACK_IMPORTED_MODULE_10__.default,
  myRouteFile: _myRouteFile__WEBPACK_IMPORTED_MODULE_11__.default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/myRoute.js":
/*!*****************************!*\
  !*** ./reducers/myRoute.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addMyRoute": function() { return /* binding */ addMyRoute; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  myRoute: [{
    myRouteNum: 13,
    userNum: 3,
    MyRouteName: '강남 맛집탐방',
    writingDate: '2021-04-12 9:00',
    updatedDate: '',
    content: 'qweryuioasdfhjklqweryu',
    userPublish: true,
    adminPublish: true,
    heart: [{
      userNum: 3
    }, {
      userNum: 5
    }, {
      userNum: 6
    }]
  }, {
    myRouteNum: 35,
    userNum: 5,
    MyRouteName: '문득 혼밥',
    writingDate: '2021-04-30 9:00',
    updatedDate: '2021-05-01',
    content: 'qweryuioasdfhjㅁㄴㅇㄹklqweryu',
    userPublish: true,
    adminPublish: true,
    heart: [{
      userNum: 3
    }, {
      userNum: 5
    }, {
      userNum: 6
    }]
  }, {
    myRouteNum: 37,
    userNum: 1,
    MyRouteName: '데이트 인 송파',
    writingDate: '2021-05-01 9:00',
    updatedDate: '',
    content: 'qwerlqweryu',
    userPublish: true,
    adminPublish: true,
    heart: [{
      userNum: 3
    }, {
      userNum: 5
    }, {
      userNum: 6
    }]
  }, {
    myRouteNum: 67,
    userNum: 3,
    MyRouteName: '오늘의 걸음',
    writingDate: '2021-05-03 9:00',
    updatedDate: '',
    content: 'ㅅㄱㅈㄷqweryu',
    userPublish: true,
    adminPublish: false,
    heart: [{
      userNum: 3
    }, {
      userNum: 5
    }, {
      userNum: 6
    }]
  } // {
  //     myRouteNum: 98,
  //     userNum: 5,
  //     MyRouteName: '여기, 길을 걷다',
  //     writingDate: '2021-05-06 9:00',
  //     updatedDate: '2021-05-09',
  //     content: 'qweryuioasdfhjㄹㄴㅁㅇklqweryu',
  //     userPublish: true,
  //     adminPublish: true,
  //     heart: [
  //         {userNum: 3},
  //         {userNum: 5},
  //         {userNum: 6},
  //     ],
  // },
  // {
  //     myRouteNum: 145,
  //     userNum: 7,
  //     MyRouteName: '석촌 레이크',
  //     writingDate: '2021-05-06 9:00',
  //     updatedDate: '',
  //     content: 'qweryuioaqweryu',
  //     userPublish: false,
  //     adminPublish: true,
  //     heart: [
  //         {userNum: 3},
  //         {userNum: 5},
  //         {userNum: 6},
  //     ],
  // },
  // {
  //     myRouteNum: 234,
  //     userNum: 5,
  //     MyRouteName: '오랜만이야',
  //     writingDate: '2021-05-06 9:00',
  //     updatedDate: '',
  //     content: 'hjklqweryu',
  //     userPublish: true,
  //     adminPublish: true,
  //     heart: [
  //         {userNum: 3},
  //         {userNum: 5},
  //         {userNum: 6},
  //     ],
  // },
  // {
  //     myRouteNum: 646,
  //     userNum: 4,
  //     MyRouteName: '일상 루트',
  //     writingDate: '2021-05-10 9:00',
  //     updatedDate: '2021-05-13',
  //     content: 'klqweryu',
  //     userPublish: true,
  //     adminPublish: true,
  //     heart: [
  //         {userNum: 3},
  //         {userNum: 5},
  //         {userNum: 6},
  //     ],
  // },
  ]
};
const ADD_MYROUTE = 'ADD_MYROUTE';
const addMyRoute = {
  type: ADD_MYROUTE
};
const dummyMyRoute = {
  myRouteNum: 806,
  userNum: 6,
  MyRouteName: '루트!!',
  writingDate: '2021-05-17 9:00',
  updatedDate: '',
  content: 'klqwqewreryu',
  userPublish: true,
  adminPublish: true
};

const myRoute = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MYROUTE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myRoute: [dummyMyRoute, ...state.myRoute]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myRoute);

/***/ }),

/***/ "./reducers/myRouteDetail.js":
/*!***********************************!*\
  !*** ./reducers/myRouteDetail.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addDetail": function() { return /* binding */ addDetail; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  myRouteDetail: [{
    detailNum: 1,
    myRouteNum: 13,
    locationValue: 51423.5,
    locationName: 'abc',
    routeOrder: 1,
    requiredMoney: 10000,
    requiredTime: 49
  }, {
    detailNum: 2,
    myRouteNum: 13,
    locationValue: 23455.53,
    locationName: 'asd',
    routeOrder: 2,
    requiredMoney: 20000,
    requiredTime: 53
  }, {
    detailNum: 3,
    myRouteNum: 35,
    locationValue: 2543.56,
    locationName: 'sfgdbh',
    routeOrder: 1,
    requiredMoney: 20000,
    requiredTime: 12
  }, {
    detailNum: 4,
    myRouteNum: 35,
    locationValue: 5423.6575,
    locationName: 'vdsf',
    routeOrder: 2,
    requiredMoney: 20000,
    requiredTime: 41
  }, {
    detailNum: 5,
    myRouteNum: 35,
    locationValue: 4567.7,
    locationName: 'wer',
    routeOrder: 3,
    requiredMoney: 20000,
    requiredTime: 52
  }, {
    detailNum: 6,
    myRouteNum: 35,
    locationValue: 8476.5,
    locationName: 'wre',
    routeOrder: 4,
    requiredMoney: 20000,
    requiredTime: 34
  }, {
    detailNum: 7,
    myRouteNum: 37,
    locationValue: 5432.876,
    locationName: 'sfd',
    routeOrder: 1,
    requiredMoney: 20000,
    requiredTime: 42
  }, {
    detailNum: 8,
    myRouteNum: 37,
    locationValue: 45868.87,
    locationName: 'vxcb',
    routeOrder: 2,
    requiredMoney: 20000,
    requiredTime: 63
  }, {
    detailNum: 9,
    myRouteNum: 67,
    locationValue: 346.56,
    locationName: 'xcvb',
    routeOrder: 1,
    requiredMoney: 10000,
    requiredTime: 49
  }, {
    detailNum: 10,
    myRouteNum: 67,
    locationValue: 51423.5,
    locationName: 'abc',
    routeOrder: 1,
    requiredMoney: 10000,
    requiredTime: 49
  }]
};
const ADD_DETAIL = 'ADD_DETAIL';
const addDetail = {
  type: ADD_DETAIL
};
const dummyDetail = {
  detailNum: 11,
  myRouteNum: 67,
  locationValue: 521423.5,
  locationName: 'ab4c',
  routeOrder: 2,
  requiredMoney: 10000,
  requiredTime: 49
};

const myRouteDetail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myRouteDetail: [...state.myRouteDetail, dummyDetail]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myRouteDetail);

/***/ }),

/***/ "./reducers/myRouteFile.js":
/*!*********************************!*\
  !*** ./reducers/myRouteFile.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addFile": function() { return /* binding */ addFile; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  myRouteFile: [{
    myRouteNum: 35,
    fileName: 'route1',
    fileRoute: '../route1.jpg'
  }, {
    myRouteNum: 67,
    fileName: 'route2',
    fileRoute: '../route2.jpg'
  }, {
    myRouteNum: 145,
    fileName: 'route3',
    fileRoute: '../route3.jpg'
  }, {
    myRouteNum: 200,
    fileName: 'route4',
    fileRoute: '../route4.jpg'
  }, {
    myRouteNum: 234,
    fileName: 'route5',
    fileRoute: '../route5.jpg'
  }]
};
const ADD_FILE = 'ADD_FILE';
const addFile = {
  type: ADD_FILE
};
const dummyFile = {
  myRouteNum: 345,
  fileName: 'route6',
  fileRoute: '../route6.jpg'
};

const myRouteFile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myRouteFile: [...state.myRouteFile, dummyFile]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myRouteFile);

/***/ }),

/***/ "./reducers/scrap.js":
/*!***************************!*\
  !*** ./reducers/scrap.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addSCRAP": function() { return /* binding */ addSCRAP; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  scrap: [{
    scrapNum: 3,
    userNum: 1,
    myRouteNum: 234,
    scrapDate: '2021-05-10 20:00'
  }, {
    scrapNum: 7,
    userNum: 5,
    myRouteNum: 37,
    scrapDate: '2021-05-10 23:00'
  }, {
    scrapNum: 13,
    userNum: 7,
    myRouteNum: 37,
    scrapDate: '2021-05-12 9:00'
  }, {
    scrapNum: 23,
    userNum: 7,
    myRouteNum: 98,
    scrapDate: '2021-05-13 11:00'
  }, {
    scrapNum: 31,
    userNum: 3,
    myRouteNum: 98,
    scrapDate: '2021-05-13 20:00'
  }]
};
const SCRAP = 'SCRAP';
const addSCRAP = {
  type: SCRAP
};
const dummyScrap = {
  scrapNum: 34,
  userNum: 1,
  myRouteNum: 12,
  scrapDate: '2021-05-15 20:00'
};

const scrap = (state = initialState, action) => {
  switch (action.type) {
    case SCRAP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [...state.scrap, dummyScrap]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scrap);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "loginAction": function() { return /* binding */ loginAction; },
/* harmony export */   "logoutAction": function() { return /* binding */ logoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
};
const loginAction = data => {
  return {
    type: 'LOG_IN',
    data
  };
};
const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");




const configureStore = () => {
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default);
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2NhbGVuZGFyLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL2R1bW15LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvZm9sbG93LmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9teVJvdXRlLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvbXlSb3V0ZURldGFpbC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL215Um91dGVGaWxlLmpzIiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvc2NyYXAuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsImluaXRpYWxTdGF0ZSIsImFkbWluIiwiYWRtaW5JZCIsImFkbWluUGFzc3dvcmQiLCJhZG1pbkVtYWlsIiwiQURNSU4iLCJhZG1pbkFjdGlvbiIsInR5cGUiLCJzdGF0ZSIsImFjdGlvbiIsImJhbm5lciIsImJhbm5lck51bSIsIk15Um91dGVOdW0iLCJiYW5uZXJOYW1lIiwicHVibGlzaGVkRGF0ZSIsImRlYWRsaW5lRGF0ZSIsIkFERF9CQU5ORVIiLCJhZGRCYW5uZXIiLCJkdW1teUJhbm5lciIsIm1haW5Qb3N0cyIsImNhbGVuZGFyIiwiY2FsTnVtIiwidXNlck51bSIsIm15Um91dGVOdW0iLCJjYWxlbmRhckRhdGUiLCJkZXRhaWwiLCJDQUxFTkRBUiIsImFkZFBvc3QiLCJkdW1teUMiLCJjb21tZW50IiwiY29udGVudCIsIndyaXRpbmdEYXRlIiwidXBkYXRlZERhdGUiLCJBRERfQ09NTUVOVCIsImFkZENvbW1lbnQiLCJkdW1teUNvbW1lbnQiLCJkdW0iLCJpZCIsIm5hbWUiLCJkYXRlIiwiQUREIiwiYWRkU3RhdGUiLCJkYXRhIiwiYWRkRHVtIiwiZHVtbXkiLCJmb2xsb3dpbmciLCJmb2xsb3dOdW0iLCJmb2xsb3dVc2VyTnVtIiwiRk9MTE9XIiwiZm9sbG93QWN0aW9uIiwiZHVtbXlBIiwiZm9sbG93IiwiZm9sbHdpbmciLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInNjcmFwIiwibXlSb3V0ZSIsIm15Um91dGVEZXRhaWwiLCJteVJvdXRlRmlsZSIsIk15Um91dGVOYW1lIiwidXNlclB1Ymxpc2giLCJhZG1pblB1Ymxpc2giLCJoZWFydCIsIkFERF9NWVJPVVRFIiwiYWRkTXlSb3V0ZSIsImR1bW15TXlSb3V0ZSIsImRldGFpbE51bSIsImxvY2F0aW9uVmFsdWUiLCJsb2NhdGlvbk5hbWUiLCJyb3V0ZU9yZGVyIiwicmVxdWlyZWRNb25leSIsInJlcXVpcmVkVGltZSIsIkFERF9ERVRBSUwiLCJhZGREZXRhaWwiLCJkdW1teURldGFpbCIsImZpbGVOYW1lIiwiZmlsZVJvdXRlIiwiQUREX0ZJTEUiLCJhZGRGaWxlIiwiZHVtbXlGaWxlIiwic2NyYXBOdW0iLCJzY3JhcERhdGUiLCJTQ1JBUCIsImFkZFNDUkFQIiwiZHVtbXlTY3JhcCIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUMxQixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUEsa0JBREo7QUFTSCxDQVZEOztBQVlBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0I7QUFDWkQsV0FBUyxFQUFFRSwwRUFBZ0NDO0FBRC9CLENBQWhCO0FBSUEsK0RBQWVDLG9FQUFBLENBQWtCTCxHQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJPLE1BQU1NLFlBQVksR0FBRztBQUN4QkMsT0FBSyxFQUFFLENBQUM7QUFDSkMsV0FBTyxFQUFFLFFBREw7QUFFSkMsaUJBQWEsRUFBRSxVQUZYO0FBR0pDLGNBQVUsRUFBRTtBQUhSLEdBQUQsRUFLUDtBQUNJRixXQUFP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QUFHSCxDQUpNOztBQU9QLE1BQU1xRCxJQUFJLEdBQUcsQ0FBQ3BELEtBQUssR0FBR1IsWUFBVCxFQUF1QlMsTUFBdkIsS0FBa0M7QUFDM0MsVUFBUUEsTUFBTSxDQUFDRixJQUFmO0FBQ0ksU0FBSyxRQUFMO0FBQ0ksNkNBQ1dDLEtBRFg7QUFFUW1GLGtCQUFVLEVBQUUsSUFGcEI7QUFHUUMsVUFBRSxFQUFFbkYsTUFBTSxDQUFDaUM7QUFIbkI7O0FBS0osU0FBSyxTQUFMO0FBQ0ksNkNBQ1dsQyxLQURYO0FBRVFtRixrQkFBVSxFQUFFLEtBRnBCO0FBR1FDLFVBQUUsRUFBRTtBQUhaOztBQU1KO0FBQ0ksYUFBT3BGLEtBQVA7QUFmUjtBQWlCSCxDQWxCRDs7QUFvQkEsK0RBQWVvRCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNcUMsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsS0FBSyxHQUFHQyxrREFBVyxDQUFDQyw4Q0FBRCxDQUF6QjtBQUNBLFNBQU9GLEtBQVA7QUFDSCxDQUhEOztBQUtBLE1BQU1uRyxPQUFPLEdBQUdzRyxpRUFBYSxDQUFDSixjQUFELEVBQWlCO0FBQzFDSyxPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSUEsK0RBQWV2RyxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEFwcCA9KHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SXRzIE15IFJvdXRlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGFkbWluOiBbe1xyXG4gICAgICAgIGFkbWluSWQ6ICdhZG1pbkEnLFxyXG4gICAgICAgIGFkbWluUGFzc3dvcmQ6ICdxd2VyMTIzNCcsXHJcbiAgICAgICAgYWRtaW5FbWFpbDogJ3RoZGRtc3RqcndrZEBuYXZlci5jb20nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGFkbWluSWQ6ICdhZG1pbkInLFxyXG4gICAgICAgIGFkbWluUGFzc3dvcmQ6ICdxd2VyMTIzNCcsXHJcbiAgICAgICAgYWRtaW5FbWFpbDogJ3RoZGRtc3RqcndrZEBuYXZlci5jb20nXHJcbiAgICB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQURNSU4gPSAnQURNSU4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkbWluQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRE1JTlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhZG1pbiA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAgQURNSU4gIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZG1pbjtcclxuXHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgIGJhbm5lcjogW3tcclxuICAgICAgICBiYW5uZXJOdW06IDEsXHJcbiAgICAgICAgTXlSb3V0ZU51bTogMzUsXHJcbiAgICAgICAgYmFubmVyTmFtZTogJ21haW4nLFxyXG4gICAgICAgIHB1Ymxpc2hlZERhdGU6ICcyMDIxLTA1LTAyJyxcclxuICAgICAgICBkZWFkbGluZURhdGU6ICcyMDIxLTA1LTA4JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmFubmVyTnVtOiAyLFxyXG4gICAgICAgIE15Um91dGVOdW06IDEzLFxyXG4gICAgICAgIGJhbm5lck5hbWU6ICdzdWIxJyxcclxuICAgICAgICBwdWJsaXNoZWREYXRlOiAnMjAyMS0wNS0wMycsXHJcbiAgICAgICAgZGVhZGxpbmVEYXRlOiAnMjAyMS0wNS0wNicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJhbm5lck51bTogMyxcclxuICAgICAgICBNeVJvdXRlTnVtOiA5OCxcclxuICAgICAgICBiYW5uZXJOYW1lOiAnc3ViMicsXHJcbiAgICAgICAgcHVibGlzaGVkRGF0ZTogJzIwMjEtMDUtMDUnLFxyXG4gICAgICAgIGRlYWRsaW5lRGF0ZTogJzIwMjEtMDUtMDcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBiYW5uZXJOdW06IDQsXHJcbiAgICAgICAgTXlSb3V0ZU51bTogMjM0LFxyXG4gICAgICAgIGJhbm5lck5hbWU6ICdtYWluJyxcclxuICAgICAgICBwdWJsaXNoZWREYXRlOiAnMjAyMS0wNS0wOScsXHJcbiAgICAgICAgZGVhZGxpbmVEYXRlOiAnMjAyMS0wNS0xNScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJhbm5lck51bTogNSxcclxuICAgICAgICBNeVJvdXRlTnVtOiA2NDYsXHJcbiAgICAgICAgYmFubmVyTmFtZTogJ3N1YjInLFxyXG4gICAgICAgIHB1Ymxpc2hlZERhdGU6ICcyMDIxLTA1LTA3JyxcclxuICAgICAgICBkZWFkbGluZURhdGU6ICcyMDIxLTA1LTE0JyxcclxuICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IEFERF9CQU5ORVIgPSAnQUREX0JBTk5FUic7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQmFubmVyID0ge1xyXG4gICAgdHlwZTogQUREX0JBTk5FUixcclxufVxyXG5cclxuY29uc3QgZHVtbXlCYW5uZXIgPSB7XHJcbiAgICBiYW5uZXJOdW06IDYsXHJcbiAgICBNeVJvdXRlTnVtOiAxMjMsXHJcbiAgICBiYW5uZXJOYW1lOiAnc3ViMScsXHJcbiAgICBwdWJsaXNoZWREYXRlOiAnMjAyMS0wNS0wOScsXHJcbiAgICBkZWFkbGluZURhdGU6ICcyMDIxLTA1LTE2JyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJhbm5lciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfQkFOTkVSOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogWy4uLnN0YXRlLmJhbm5lciwgZHVtbXlCYW5uZXJdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5uZXI7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhbGVuZGFyOiBbe1xyXG4gICAgICAgIGNhbE51bTogMSxcclxuICAgICAgICB1c2VyTnVtOiAzLFxyXG4gICAgICAgIG15Um91dGVOdW06IDM3LFxyXG4gICAgICAgIGNhbGVuZGFyRGF0ZTogJzIwMjEtMDUtMDMgMTM6MDAnLFxyXG4gICAgICAgIGRldGFpbDogJ+qwleuCqCDqsIgg65WMJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2FsTnVtOiAzLFxyXG4gICAgICAgIHVzZXJOdW06IDUsXHJcbiAgICAgICAgbXlSb3V0ZU51bTogNjcsXHJcbiAgICAgICAgY2FsZW5kYXJEYXRlOiAnMjAyMS0wNS0wNiA5OjAwJyxcclxuICAgICAgICBkZXRhaWw6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYWxOdW06IDYsXHJcbiAgICAgICAgdXNlck51bTogMSxcclxuICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICBjYWxlbmRhckRhdGU6ICcyMDIxLTA1LTA2IDE5OjAwJyxcclxuICAgICAgICBkZXRhaWw6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYWxOdW06IDExLFxyXG4gICAgICAgIHVzZXJOdW06IDEsXHJcbiAgICAgICAgbXlSb3V0ZU51bTogOTgsXHJcbiAgICAgICAgY2FsZW5kYXJEYXRlOiAnMjAyMS0wNS0wOCAxNTowMCcsXHJcbiAgICAgICAgZGV0YWlsOiAn7Jik7ZuE7JeQIOqwiCDqsoMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYWxOdW06IDE0LFxyXG4gICAgICAgIHVzZXJOdW06IDUsXHJcbiAgICAgICAgbXlSb3V0ZU51bTogMTQ1LFxyXG4gICAgICAgIGNhbGVuZGFyRGF0ZTogJzIwMjEtMDUtMTIgMjA6MDAnLFxyXG4gICAgICAgIGRldGFpbDogJycsXHJcbiAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBDQUxFTkRBUiA9ICdDQUxFTkRBUic7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IENBTEVOREFSLFxyXG59XHJcblxyXG5jb25zdCBkdW1teUMgPSAge1xyXG4gICAgY2FsTnVtOiAxNixcclxuICAgIHVzZXJOdW06IDMsXHJcbiAgICBteVJvdXRlTnVtOiAxMTEsXHJcbiAgICBjYWxlbmRhckRhdGU6ICcyMDIxLTA1LTEyIDIzOjAwJyxcclxuICAgIGRldGFpbDogJycsXHJcbn1cclxuXHJcbmNvbnN0IGNhbGVuZGFyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDQUxFTkRBUiA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXI6Wy4uLnN0YXRlLmNhbGVuZGFyLCBkdW1teUNdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdCA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsZW5kYXI7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM1LFxyXG4gICAgICAgICAgICB1c2VyTnVtOiAzLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7KKL64Sk7JqUJyxcclxuICAgICAgICAgICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA0LTMwIDIxOjAwJyxcclxuICAgICAgICAgICAgdXBkYXRlZERhdGU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICAgICAgdXNlck51bTogNyxcclxuICAgICAgICAgICAgY29udGVudDogJ+yggOuPhCDqsIDqs6Ag7Iu27Ja07JqUIScsXHJcbiAgICAgICAgICAgIHdyaXRpbmdEYXRlOiAnMjAyMS0wNC0zMCAyMjowMCcsXHJcbiAgICAgICAgICAgIHVwZGF0ZWREYXRlOiAnMjAyMS0wNC0zMCAyMzowMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDY3LFxyXG4gICAgICAgICAgICB1c2VyTnVtOiAxLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAficsXHJcbiAgICAgICAgICAgIHdyaXRpbmdEYXRlOiAnMjAyMS0wNS0wNCAxMzowMCcsXHJcbiAgICAgICAgICAgIHVwZGF0ZWREYXRlOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogNjcsXHJcbiAgICAgICAgICAgIHVzZXJOdW06IDcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfqtb/qtb8nLFxyXG4gICAgICAgICAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMDQgMTY6MDAnLFxyXG4gICAgICAgICAgICB1cGRhdGVkRGF0ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM1LFxyXG4gICAgICAgICAgICB1c2VyTnVtOiA1LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn64SkIOqwkOyCrO2VqeuLiOuLpCcsXHJcbiAgICAgICAgICAgIHdyaXRpbmdEYXRlOiAnMjAyMS0wNS0wNSAxOTowMCcsXHJcbiAgICAgICAgICAgIHVwZGF0ZWREYXRlOiAnMjAyMS0wNS0wNSAyMTowMCcsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSB7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0ge1xyXG4gICAgbXlSb3V0ZU51bTogMTMsXHJcbiAgICB1c2VyTnVtOiAxLFxyXG4gICAgY29udGVudDogJ+yii+yVhOyalCcsXHJcbiAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMTIgMTk6MDAnLFxyXG4gICAgdXBkYXRlZERhdGU6ICcnLFxyXG59XHJcblxyXG5jb25zdCBjb21tZW50ID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IFtzdGF0ZS5jb21tZW50LCBkdW1teUNvbW1lbnRdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnQ7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGR1bTpbXHJcbiAgICAgICAge2lkOjEsIG5hbWU6ICdraW0nLCBkYXRlOiAnMjAyMC0wMS0wMScsIGNvbnRlbnQ6ICfqs6Dqs6AnfSxcclxuICAgICAgICB7aWQ6MiwgbmFtZTogJ2tpbScsIGRhdGU6ICcyMDIwLTAxLTAxJywgY29udGVudDogJ+qzoOqzoCd9LFxyXG4gICAgICAgIHtpZDozLCBuYW1lOiAna2ltJywgZGF0ZTogJzIwMjAtMDEtMDEnLCBjb250ZW50OiAn6rOg6rOgJ30sXHJcbiAgICAgICAge2lkOjQsIG5hbWU6ICdraW0nLCBkYXRlOiAnMjAyMC0wMS0wMScsIGNvbnRlbnQ6ICfqs6Dqs6AnfSxcclxuICAgICAgICB7aWQ6NSwgbmFtZTogJ2tpbScsIGRhdGU6ICcyMDIwLTAxLTAxJywgY29udGVudDogJ+qzoOqzoCd9LFxyXG4gICAgXSxcclxuICAgIFxyXG59XHJcbmNvbnN0IEFERCA9ICdBREQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0YXRlID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiAge1xyXG4gICAgICAgIHR5cGU6ICdBREQnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZER1bSA9IHtcclxuICAgIGlkOiA2LCBuYW1lOiAnbGVlJywgZGF0ZTogJzIwMjAtMDEtMDInLCBjb250ZW50OiAn64W464W4JywgXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15ID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERCA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZHVtOiBbYWRkRHVtLCAuLi5zdGF0ZS5kdW1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHVtbXk7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvbGxvd2luZzogW3tcclxuICAgICAgICBmb2xsb3dOdW06IDEsXHJcbiAgICAgICAgdXNlck51bTogMSxcclxuICAgICAgICBmb2xsb3dVc2VyTnVtOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZvbGxvd051bTogMixcclxuICAgICAgICB1c2VyTnVtOiAxLFxyXG4gICAgICAgIGZvbGxvd1VzZXJOdW06IDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZm9sbG93TnVtOiAzLFxyXG4gICAgICAgIHVzZXJOdW06IDMsXHJcbiAgICAgICAgZm9sbG93VXNlck51bTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmb2xsb3dOdW06IDQsXHJcbiAgICAgICAgdXNlck51bTogMyxcclxuICAgICAgICBmb2xsb3dVc2VyTnVtOiA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZvbGxvd051bTogNSxcclxuICAgICAgICB1c2VyTnVtOiA1LFxyXG4gICAgICAgIGZvbGxvd1VzZXJOdW06IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZm9sbG93TnVtOiA2LFxyXG4gICAgICAgIHVzZXJOdW06IDUsXHJcbiAgICAgICAgZm9sbG93VXNlck51bTogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmb2xsb3dOdW06IDcsXHJcbiAgICAgICAgdXNlck51bTogMSxcclxuICAgICAgICBmb2xsb3dVc2VyTnVtOiA1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGZvbGxvd051bTogOCxcclxuICAgICAgICB1c2VyTnVtOiA0LFxyXG4gICAgICAgIGZvbGxvd1VzZXJOdW06IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZm9sbG93TnVtOiA5LFxyXG4gICAgICAgIHVzZXJOdW06IDcsXHJcbiAgICAgICAgZm9sbG93VXNlck51bTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBmb2xsb3dOdW06IDEwLFxyXG4gICAgICAgIHVzZXJOdW06IDcsXHJcbiAgICAgICAgZm9sbG93VXNlck51bTogNFxyXG4gICAgfSxdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1cgPSAnRk9MTE9XJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBGT0xMT1csXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlBID0ge1xyXG4gICAgZm9sbG93TnVtOiAxMSxcclxuICAgIHVzZXJOdW06IDIsXHJcbiAgICBmb2xsb3dVc2VyTnVtOiA3XHJcblxyXG59XHJcblxyXG5jb25zdCBmb2xsb3cgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRk9MTE9XIDp7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9sbHdpbmc6IFsgLi4uc3RhdGUuZm9sbG93aW5nLCBkdW1teUEgXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93OyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IGR1bW15IGZyb20gJy4vZHVtbXknO1xyXG5pbXBvcnQgYWRtaW4gZnJvbSAnLi9hZG1pbic7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnLi9iYW5uZXInO1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhcic7XHJcbmltcG9ydCBmb2xsb3cgZnJvbSAnLi9mb2xsb3cnO1xyXG5pbXBvcnQgc2NyYXAgZnJvbSAnLi9zY3JhcCc7XHJcbmltcG9ydCBjb21tZW50IGZyb20gJy4vY29tbWVudCc7XHJcbmltcG9ydCBteVJvdXRlIGZyb20gJy4vbXlSb3V0ZSc7XHJcbmltcG9ydCBteVJvdXRlRGV0YWlsIGZyb20gJy4vbXlSb3V0ZURldGFpbCc7XHJcbmltcG9ydCBteVJvdXRlRmlsZSBmcm9tICcuL215Um91dGVGaWxlJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgICAgXHJcbiAgICB1c2VyLFxyXG4gICAgZHVtbXksXHJcbiAgICBhZG1pbixcclxuICAgIGJhbm5lcixcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgZm9sbG93LFxyXG4gICAgc2NyYXAsXHJcbiAgICBjb21tZW50LFxyXG4gICAgbXlSb3V0ZSxcclxuICAgIG15Um91dGVEZXRhaWwsXHJcbiAgICBteVJvdXRlRmlsZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBteVJvdXRlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAxMyxcclxuICAgICAgICAgICAgdXNlck51bTogMyxcclxuICAgICAgICAgICAgTXlSb3V0ZU5hbWU6ICfqsJXrgqgg66eb7KeR7YOQ67CpJyxcclxuICAgICAgICAgICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA0LTEyIDk6MDAnLFxyXG4gICAgICAgICAgICB1cGRhdGVkRGF0ZTogJycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdxd2VyeXVpb2FzZGZoamtscXdlcnl1JyxcclxuICAgICAgICAgICAgdXNlclB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGFkbWluUHVibGlzaDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhcnQ6IFtcclxuICAgICAgICAgICAgICAgIHt1c2VyTnVtOiAzfSxcclxuICAgICAgICAgICAgICAgIHt1c2VyTnVtOiA1fSxcclxuICAgICAgICAgICAgICAgIHt1c2VyTnVtOiA2fSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICAgICAgdXNlck51bTogNSxcclxuICAgICAgICAgICAgTXlSb3V0ZU5hbWU6ICfrrLjrk50g7Zi867ClJyxcclxuICAgICAgICAgICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA0LTMwIDk6MDAnLFxyXG4gICAgICAgICAgICB1cGRhdGVkRGF0ZTogJzIwMjEtMDUtMDEnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAncXdlcnl1aW9hc2RmaGrjhYHjhLTjhYfjhLlrbHF3ZXJ5dScsXHJcbiAgICAgICAgICAgIHVzZXJQdWJsaXNoOiB0cnVlLFxyXG4gICAgICAgICAgICBhZG1pblB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYXJ0OiBbXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogM30sXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogNX0sXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogNn0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM3LFxyXG4gICAgICAgICAgICB1c2VyTnVtOiAxLFxyXG4gICAgICAgICAgICBNeVJvdXRlTmFtZTogJ+uNsOydtO2KuCDsnbgg7Iah7YyMJyxcclxuICAgICAgICAgICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA1LTAxIDk6MDAnLFxyXG4gICAgICAgICAgICB1cGRhdGVkRGF0ZTogJycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdxd2VybHF3ZXJ5dScsXHJcbiAgICAgICAgICAgIHVzZXJQdWJsaXNoOiB0cnVlLFxyXG4gICAgICAgICAgICBhZG1pblB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGhlYXJ0OiBbXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogM30sXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogNX0sXHJcbiAgICAgICAgICAgICAgICB7dXNlck51bTogNn0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDY3LFxyXG4gICAgICAgICAgICB1c2VyTnVtOiAzLFxyXG4gICAgICAgICAgICBNeVJvdXRlTmFtZTogJ+yYpOuKmOydmCDqsbjsnYwnLFxyXG4gICAgICAgICAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMDMgOTowMCcsXHJcbiAgICAgICAgICAgIHVwZGF0ZWREYXRlOiAnJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+OFheOEseOFiOOEt3F3ZXJ5dScsXHJcbiAgICAgICAgICAgIHVzZXJQdWJsaXNoOiB0cnVlLFxyXG4gICAgICAgICAgICBhZG1pblB1Ymxpc2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBoZWFydDogW1xyXG4gICAgICAgICAgICAgICAge3VzZXJOdW06IDN9LFxyXG4gICAgICAgICAgICAgICAge3VzZXJOdW06IDV9LFxyXG4gICAgICAgICAgICAgICAge3VzZXJOdW06IDZ9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBteVJvdXRlTnVtOiA5OCxcclxuICAgICAgICAvLyAgICAgdXNlck51bTogNSxcclxuICAgICAgICAvLyAgICAgTXlSb3V0ZU5hbWU6ICfsl6zquLAsIOq4uOydhCDqsbfri6QnLFxyXG4gICAgICAgIC8vICAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMDYgOTowMCcsXHJcbiAgICAgICAgLy8gICAgIHVwZGF0ZWREYXRlOiAnMjAyMS0wNS0wOScsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICdxd2VyeXVpb2FzZGZoauOEueOEtOOFgeOFh2tscXdlcnl1JyxcclxuICAgICAgICAvLyAgICAgdXNlclB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIGFkbWluUHVibGlzaDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgaGVhcnQ6IFtcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiAzfSxcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiA1fSxcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiA2fSxcclxuICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbXlSb3V0ZU51bTogMTQ1LFxyXG4gICAgICAgIC8vICAgICB1c2VyTnVtOiA3LFxyXG4gICAgICAgIC8vICAgICBNeVJvdXRlTmFtZTogJ+yEney0jCDroIjsnbTtgawnLFxyXG4gICAgICAgIC8vICAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMDYgOTowMCcsXHJcbiAgICAgICAgLy8gICAgIHVwZGF0ZWREYXRlOiAnJyxcclxuICAgICAgICAvLyAgICAgY29udGVudDogJ3F3ZXJ5dWlvYXF3ZXJ5dScsXHJcbiAgICAgICAgLy8gICAgIHVzZXJQdWJsaXNoOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgYWRtaW5QdWJsaXNoOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBoZWFydDogW1xyXG4gICAgICAgIC8vICAgICAgICAge3VzZXJOdW06IDN9LFxyXG4gICAgICAgIC8vICAgICAgICAge3VzZXJOdW06IDV9LFxyXG4gICAgICAgIC8vICAgICAgICAge3VzZXJOdW06IDZ9LFxyXG4gICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBteVJvdXRlTnVtOiAyMzQsXHJcbiAgICAgICAgLy8gICAgIHVzZXJOdW06IDUsXHJcbiAgICAgICAgLy8gICAgIE15Um91dGVOYW1lOiAn7Jik656c66eM7J207JW8JyxcclxuICAgICAgICAvLyAgICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA1LTA2IDk6MDAnLFxyXG4gICAgICAgIC8vICAgICB1cGRhdGVkRGF0ZTogJycsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICdoamtscXdlcnl1JyxcclxuICAgICAgICAvLyAgICAgdXNlclB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIGFkbWluUHVibGlzaDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgaGVhcnQ6IFtcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiAzfSxcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiA1fSxcclxuICAgICAgICAvLyAgICAgICAgIHt1c2VyTnVtOiA2fSxcclxuICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbXlSb3V0ZU51bTogNjQ2LFxyXG4gICAgICAgIC8vICAgICB1c2VyTnVtOiA0LFxyXG4gICAgICAgIC8vICAgICBNeVJvdXRlTmFtZTogJ+ydvOyDgSDro6jtirgnLFxyXG4gICAgICAgIC8vICAgICB3cml0aW5nRGF0ZTogJzIwMjEtMDUtMTAgOTowMCcsXHJcbiAgICAgICAgLy8gICAgIHVwZGF0ZWREYXRlOiAnMjAyMS0wNS0xMycsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICdrbHF3ZXJ5dScsXHJcbiAgICAgICAgLy8gICAgIHVzZXJQdWJsaXNoOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBhZG1pblB1Ymxpc2g6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIGhlYXJ0OiBbXHJcbiAgICAgICAgLy8gICAgICAgICB7dXNlck51bTogM30sXHJcbiAgICAgICAgLy8gICAgICAgICB7dXNlck51bTogNX0sXHJcbiAgICAgICAgLy8gICAgICAgICB7dXNlck51bTogNn0sXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgIF0sXHJcbn1cclxuXHJcbmNvbnN0IEFERF9NWVJPVVRFPSAnQUREX01ZUk9VVEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE15Um91dGUgPSB7XHJcbiAgICB0eXBlOiBBRERfTVlST1VURSxcclxufVxyXG5cclxuY29uc3QgZHVtbXlNeVJvdXRlID0ge1xyXG4gICAgbXlSb3V0ZU51bTogODA2LFxyXG4gICAgdXNlck51bTogNixcclxuICAgIE15Um91dGVOYW1lOiAn66Oo7Yq4ISEnLFxyXG4gICAgd3JpdGluZ0RhdGU6ICcyMDIxLTA1LTE3IDk6MDAnLFxyXG4gICAgdXBkYXRlZERhdGU6ICcnLFxyXG4gICAgY29udGVudDogJ2tscXdxZXdyZXJ5dScsXHJcbiAgICB1c2VyUHVibGlzaDogdHJ1ZSxcclxuICAgIGFkbWluUHVibGlzaDogdHJ1ZSxcclxufVxyXG5cclxuY29uc3QgbXlSb3V0ZSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9NWVJPVVRFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG15Um91dGU6IFtkdW1teU15Um91dGUsIC4uLnN0YXRlLm15Um91dGVdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15Um91dGU7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG15Um91dGVEZXRhaWw6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogMSxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMTMsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDUxNDIzLjUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ2FiYycsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDEsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDEwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDQ5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDIsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDEzLFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiAyMzQ1NS41MyxcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnYXNkJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMixcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMjAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogNTMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogMyxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMzUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDI1NDMuNTYsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3NmZ2RiaCcsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDEsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDQsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM1LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiA1NDIzLjY1NzUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3Zkc2YnLFxyXG4gICAgICAgICAgICByb3V0ZU9yZGVyOiAyLFxyXG4gICAgICAgICAgICByZXF1aXJlZE1vbmV5OiAyMDAwMCxcclxuICAgICAgICAgICAgcmVxdWlyZWRUaW1lOiA0MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiA1LFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogNDU2Ny43LFxyXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICd3ZXInLFxyXG4gICAgICAgICAgICByb3V0ZU9yZGVyOiAzLFxyXG4gICAgICAgICAgICByZXF1aXJlZE1vbmV5OiAyMDAwMCxcclxuICAgICAgICAgICAgcmVxdWlyZWRUaW1lOiA1MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiA2LFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogODQ3Ni41LFxyXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICd3cmUnLFxyXG4gICAgICAgICAgICByb3V0ZU9yZGVyOiA0LFxyXG4gICAgICAgICAgICByZXF1aXJlZE1vbmV5OiAyMDAwMCxcclxuICAgICAgICAgICAgcmVxdWlyZWRUaW1lOiAzNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiA3LFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNyxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogNTQzMi44NzYsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3NmZCcsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDEsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDQyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDgsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM3LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiA0NTg2OC44NyxcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAndnhjYicsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDYzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDksXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDY3LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiAzNDYuNTYsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3hjdmInLFxyXG4gICAgICAgICAgICByb3V0ZU9yZGVyOiAxLFxyXG4gICAgICAgICAgICByZXF1aXJlZE1vbmV5OiAxMDAwMCxcclxuICAgICAgICAgICAgcmVxdWlyZWRUaW1lOiA0OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiAxMCxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogNjcsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDUxNDIzLjUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ2FiYycsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDEsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDEwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDQ5LFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuY29uc3QgQUREX0RFVEFJTCA9ICdBRERfREVUQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGREZXRhaWwgPSB7XHJcbiAgICB0eXBlOiBBRERfREVUQUlMLFxyXG59XHJcblxyXG5jb25zdCBkdW1teURldGFpbCA9IHtcclxuICAgIGRldGFpbE51bTogMTEsXHJcbiAgICBteVJvdXRlTnVtOiA2NyxcclxuICAgIGxvY2F0aW9uVmFsdWU6IDUyMTQyMy41LFxyXG4gICAgbG9jYXRpb25OYW1lOiAnYWI0YycsXHJcbiAgICByb3V0ZU9yZGVyOiAyLFxyXG4gICAgcmVxdWlyZWRNb25leTogMTAwMDAsXHJcbiAgICByZXF1aXJlZFRpbWU6IDQ5LFxyXG59XHJcblxyXG5jb25zdCBteVJvdXRlRGV0YWlsID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9ERVRBSUwgOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG15Um91dGVEZXRhaWw6IFsuLi5zdGF0ZS5teVJvdXRlRGV0YWlsLCBkdW1teURldGFpbF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteVJvdXRlRGV0YWlsOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBteVJvdXRlRmlsZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMzUsIFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ3JvdXRlMScsXHJcbiAgICAgICAgICAgIGZpbGVSb3V0ZTogJy4uL3JvdXRlMS5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDY3LCBcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdyb3V0ZTInLFxyXG4gICAgICAgICAgICBmaWxlUm91dGU6ICcuLi9yb3V0ZTIuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAxNDUsIFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ3JvdXRlMycsXHJcbiAgICAgICAgICAgIGZpbGVSb3V0ZTogJy4uL3JvdXRlMy5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDIwMCwgXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAncm91dGU0JyxcclxuICAgICAgICAgICAgZmlsZVJvdXRlOiAnLi4vcm91dGU0LmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMjM0LCBcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdyb3V0ZTUnLFxyXG4gICAgICAgICAgICBmaWxlUm91dGU6ICcuLi9yb3V0ZTUuanBnJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgQUREX0ZJTEUgPSAnQUREX0ZJTEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEZpbGUgPSB7XHJcbiAgICB0eXBlOiBBRERfRklMRSxcclxufVxyXG5cclxuY29uc3QgZHVtbXlGaWxlID0geyBcclxuICAgIG15Um91dGVOdW06IDM0NSwgXHJcbiAgICBmaWxlTmFtZTogJ3JvdXRlNicsXHJcbiAgICBmaWxlUm91dGU6ICcuLi9yb3V0ZTYuanBnJ1xyXG59XHJcblxyXG5jb25zdCBteVJvdXRlRmlsZSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfRklMRToge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBteVJvdXRlRmlsZTogWy4uLnN0YXRlLm15Um91dGVGaWxlLCBkdW1teUZpbGVdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15Um91dGVGaWxlOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzY3JhcDogW3tcclxuICAgICAgICBzY3JhcE51bTogMyxcclxuICAgICAgICB1c2VyTnVtOiAxLFxyXG4gICAgICAgIG15Um91dGVOdW06IDIzNCxcclxuICAgICAgICBzY3JhcERhdGU6ICcyMDIxLTA1LTEwIDIwOjAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2NyYXBOdW06IDcsXHJcbiAgICAgICAgdXNlck51bTogNSxcclxuICAgICAgICBteVJvdXRlTnVtOiAzNyxcclxuICAgICAgICBzY3JhcERhdGU6ICcyMDIxLTA1LTEwIDIzOjAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2NyYXBOdW06IDEzLFxyXG4gICAgICAgIHVzZXJOdW06IDcsXHJcbiAgICAgICAgbXlSb3V0ZU51bTogMzcsXHJcbiAgICAgICAgc2NyYXBEYXRlOiAnMjAyMS0wNS0xMiA5OjAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2NyYXBOdW06IDIzLFxyXG4gICAgICAgIHVzZXJOdW06IDcsXHJcbiAgICAgICAgbXlSb3V0ZU51bTogOTgsXHJcbiAgICAgICAgc2NyYXBEYXRlOiAnMjAyMS0wNS0xMyAxMTowMCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNjcmFwTnVtOiAzMSxcclxuICAgICAgICB1c2VyTnVtOiAzLFxyXG4gICAgICAgIG15Um91dGVOdW06IDk4LFxyXG4gICAgICAgIHNjcmFwRGF0ZTogJzIwMjEtMDUtMTMgMjA6MDAnLFxyXG4gICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgU0NSQVAgPSAnU0NSQVAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFNDUkFQID17XHJcbiAgICB0eXBlOiBTQ1JBUCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlTY3JhcCA9e1xyXG4gICAgc2NyYXBOdW06IDM0LFxyXG4gICAgdXNlck51bTogMSxcclxuICAgIG15Um91dGVOdW06IDEyLFxyXG4gICAgc2NyYXBEYXRlOiAnMjAyMS0wNS0xNSAyMDowMCcsXHJcbn1cclxuXHJcbmNvbnN0IHNjcmFwID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNDUkFQIDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFsuLi5zdGF0ZS5zY3JhcCwgZHVtbXlTY3JhcF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JhcDsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19PVVQnLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9