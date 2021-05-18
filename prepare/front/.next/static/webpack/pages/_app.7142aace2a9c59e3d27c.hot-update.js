self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dummy */ "./reducers/dummy.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin */ "./reducers/admin.js");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner */ "./reducers/banner.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar */ "./reducers/calendar.js");
/* harmony import */ var _follow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./follow */ "./reducers/follow.js");
/* harmony import */ var _scrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scrap */ "./reducers/scrap.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment */ "./reducers/comment.js");
/* harmony import */ var _myRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myRoute */ "./reducers/myRoute.js");
/* harmony import */ var _myRouteDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myRouteDetail */ "./reducers/myRouteDetail.js");
/* harmony import */ var _myRouteFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myRouteFile */ "./reducers/myRouteFile.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_13__.combineReducers)({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  dummy: _dummy__WEBPACK_IMPORTED_MODULE_3__.default,
  admin: _admin__WEBPACK_IMPORTED_MODULE_4__.default,
  banner: _banner__WEBPACK_IMPORTED_MODULE_5__.default,
  calendar: _calendar__WEBPACK_IMPORTED_MODULE_6__.default,
  follow: _follow__WEBPACK_IMPORTED_MODULE_7__.default,
  scrap: _scrap__WEBPACK_IMPORTED_MODULE_8__.default,
  comment: _comment__WEBPACK_IMPORTED_MODULE_9__.default,
  myRoute: _myRoute__WEBPACK_IMPORTED_MODULE_10__.default,
  myRouteDetail: _myRouteDetail__WEBPACK_IMPORTED_MODULE_11__.default,
  myRouteFile: _myRouteFile__WEBPACK_IMPORTED_MODULE_12__.default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./reducers/myRouteDetail.js":
/*!***********************************!*\
  !*** ./reducers/myRouteDetail.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addDetail": function() { return /* binding */ addDetail; }
/* harmony export */ });
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD_DETAIL = 'ADD_DETAIL';
var addDetail = {
  type: ADD_DETAIL
};
var dummyDetail = {
  detailNum: 11,
  myRouteNum: 67,
  locationValue: 521423.5,
  locationName: 'ab4c',
  routeOrder: 2,
  requiredMoney: 10000,
  requiredTime: 49
};

var myRouteDetail = function myRouteDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_DETAIL:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myRouteDetail: [].concat((0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.myRouteDetail), [dummyDetail])
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myRouteDetail);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./reducers/myRouteFile.js":
/*!*********************************!*\
  !*** ./reducers/myRouteFile.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addFile": function() { return /* binding */ addFile; }
/* harmony export */ });
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD_FILE = 'ADD_FILE';
var addFile = {
  type: ADD_FILE
};
var dummyFile = {
  myRouteNum: 345,
  fileName: 'route6',
  fileRoute: '../route6.jpg'
};

var myRouteFile = function myRouteFile() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_FILE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myRouteFile: [].concat((0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.myRouteFile), [dummyFile])
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (myRouteFile);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL215Um91dGVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL215Um91dGVGaWxlLmpzIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiZHVtbXkiLCJhZG1pbiIsImJhbm5lciIsImNhbGVuZGFyIiwiZm9sbG93Iiwic2NyYXAiLCJjb21tZW50IiwibXlSb3V0ZSIsIm15Um91dGVEZXRhaWwiLCJteVJvdXRlRmlsZSIsImluaXRpYWxTdGF0ZSIsImRldGFpbE51bSIsIm15Um91dGVOdW0iLCJsb2NhdGlvblZhbHVlIiwibG9jYXRpb25OYW1lIiwicm91dGVPcmRlciIsInJlcXVpcmVkTW9uZXkiLCJyZXF1aXJlZFRpbWUiLCJBRERfREVUQUlMIiwiYWRkRGV0YWlsIiwiZHVtbXlEZXRhaWwiLCJmaWxlTmFtZSIsImZpbGVSb3V0ZSIsIkFERF9GSUxFIiwiYWRkRmlsZSIsImR1bW15RmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx1REFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUUsaUJBQXdCO0FBQUEsUUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYQyxNQUFXOztBQUMzQixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxXQUFLQyx1REFBTDtBQUNJQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLCtDQUFZRCxLQUFaLEdB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d0lBQU1qQixLQUFLLENBQUNpQixXQUFaLElBQXlCZ0IsU0FBekI7QUFGZjtBQUlIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT2pDLEtBRFA7QUFHSDtBQVhMO0FBYUgsQ0FkRDs7QUFnQkEsK0RBQWVpQixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzE0MmFhY2UyYTljNTllM2QyN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IGR1bW15IGZyb20gJy4vZHVtbXknO1xyXG5pbXBvcnQgYWRtaW4gZnJvbSAnLi9hZG1pbic7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnLi9iYW5uZXInO1xyXG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhcic7XHJcbmltcG9ydCBmb2xsb3cgZnJvbSAnLi9mb2xsb3cnO1xyXG5pbXBvcnQgc2NyYXAgZnJvbSAnLi9zY3JhcCc7XHJcbmltcG9ydCBjb21tZW50IGZyb20gJy4vY29tbWVudCc7XHJcbmltcG9ydCBteVJvdXRlIGZyb20gJy4vbXlSb3V0ZSc7XHJcbmltcG9ydCBteVJvdXRlRGV0YWlsIGZyb20gJy4vbXlSb3V0ZURldGFpbCc7XHJcbmltcG9ydCBteVJvdXRlRmlsZSBmcm9tICcuL215Um91dGVGaWxlJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgICAgXHJcbiAgICB1c2VyLFxyXG4gICAgZHVtbXksXHJcbiAgICBhZG1pbixcclxuICAgIGJhbm5lcixcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgZm9sbG93LFxyXG4gICAgc2NyYXAsXHJcbiAgICBjb21tZW50LFxyXG4gICAgbXlSb3V0ZSxcclxuICAgIG15Um91dGVEZXRhaWwsXHJcbiAgICBteVJvdXRlRmlsZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbXlSb3V0ZURldGFpbDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiAxLFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAxMyxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogNTE0MjMuNSxcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnYWJjJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMSxcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMTAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogNDksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogMixcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMTMsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDIzNDU1LjUzLFxyXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICdhc2QnLFxyXG4gICAgICAgICAgICByb3V0ZU9yZGVyOiAyLFxyXG4gICAgICAgICAgICByZXF1aXJlZE1vbmV5OiAyMDAwMCxcclxuICAgICAgICAgICAgcmVxdWlyZWRUaW1lOiA1MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGV0YWlsTnVtOiAzLFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogMjU0My41NixcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnc2ZnZGJoJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMSxcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMjAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogMTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogNCxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMzUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDU0MjMuNjU3NSxcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAndmRzZicsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDQxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDUsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM1LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiA0NTY3LjcsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3dlcicsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDMsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDUyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDYsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM1LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiA4NDc2LjUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ3dyZScsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDQsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDIwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDM0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDcsXHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDM3LFxyXG4gICAgICAgICAgICBsb2NhdGlvblZhbHVlOiA1NDMyLjg3NixcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnc2ZkJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMSxcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMjAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogNDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogOCxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMzcsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDQ1ODY4Ljg3LFxyXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICd2eGNiJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMixcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMjAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogNjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRldGFpbE51bTogOSxcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogNjcsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uVmFsdWU6IDM0Ni41NixcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAneGN2YicsXHJcbiAgICAgICAgICAgIHJvdXRlT3JkZXI6IDEsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkTW9uZXk6IDEwMDAwLFxyXG4gICAgICAgICAgICByZXF1aXJlZFRpbWU6IDQ5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXRhaWxOdW06IDEwLFxyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiA2NyxcclxuICAgICAgICAgICAgbG9jYXRpb25WYWx1ZTogNTE0MjMuNSxcclxuICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnYWJjJyxcclxuICAgICAgICAgICAgcm91dGVPcmRlcjogMSxcclxuICAgICAgICAgICAgcmVxdWlyZWRNb25leTogMTAwMDAsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkVGltZTogNDksXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5jb25zdCBBRERfREVUQUlMID0gJ0FERF9ERVRBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZERldGFpbCA9IHtcclxuICAgIHR5cGU6IEFERF9ERVRBSUwsXHJcbn1cclxuXHJcbmNvbnN0IGR1bW15RGV0YWlsID0ge1xyXG4gICAgZGV0YWlsTnVtOiAxMSxcclxuICAgIG15Um91dGVOdW06IDY3LFxyXG4gICAgbG9jYXRpb25WYWx1ZTogNTIxNDIzLjUsXHJcbiAgICBsb2NhdGlvbk5hbWU6ICdhYjRjJyxcclxuICAgIHJvdXRlT3JkZXI6IDIsXHJcbiAgICByZXF1aXJlZE1vbmV5OiAxMDAwMCxcclxuICAgIHJlcXVpcmVkVGltZTogNDksXHJcbn1cclxuXHJcbmNvbnN0IG15Um91dGVEZXRhaWwgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX0RFVEFJTCA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbXlSb3V0ZURldGFpbDogWy4uLnN0YXRlLm15Um91dGVEZXRhaWwsIGR1bW15RGV0YWlsXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15Um91dGVEZXRhaWw7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG15Um91dGVGaWxlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAzNSwgXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAncm91dGUxJyxcclxuICAgICAgICAgICAgZmlsZVJvdXRlOiAnLi4vcm91dGUxLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogNjcsIFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ3JvdXRlMicsXHJcbiAgICAgICAgICAgIGZpbGVSb3V0ZTogJy4uL3JvdXRlMi5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG15Um91dGVOdW06IDE0NSwgXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAncm91dGUzJyxcclxuICAgICAgICAgICAgZmlsZVJvdXRlOiAnLi4vcm91dGUzLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXlSb3V0ZU51bTogMjAwLCBcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdyb3V0ZTQnLFxyXG4gICAgICAgICAgICBmaWxlUm91dGU6ICcuLi9yb3V0ZTQuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBteVJvdXRlTnVtOiAyMzQsIFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ3JvdXRlNScsXHJcbiAgICAgICAgICAgIGZpbGVSb3V0ZTogJy4uL3JvdXRlNS5qcGcnXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBBRERfRklMRSA9ICdBRERfRklMRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRmlsZSA9IHtcclxuICAgIHR5cGU6IEFERF9GSUxFLFxyXG59XHJcblxyXG5jb25zdCBkdW1teUZpbGUgPSB7IFxyXG4gICAgbXlSb3V0ZU51bTogMzQ1LCBcclxuICAgIGZpbGVOYW1lOiAncm91dGU2JyxcclxuICAgIGZpbGVSb3V0ZTogJy4uL3JvdXRlNi5qcGcnXHJcbn1cclxuXHJcbmNvbnN0IG15Um91dGVGaWxlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9GSUxFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG15Um91dGVGaWxlOiBbLi4uc3RhdGUubXlSb3V0ZUZpbGUsIGR1bW15RmlsZV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlSb3V0ZUZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==