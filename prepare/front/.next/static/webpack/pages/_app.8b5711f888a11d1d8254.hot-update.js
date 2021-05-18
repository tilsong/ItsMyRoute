self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/dummy.js":
/*!***************************!*\
  !*** ./reducers/dummy.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addState": function() { return /* binding */ addState; }
/* harmony export */ });
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD = 'ADD';
var addState = function addState(data) {
  return {
    type: 'ADD',
    data: data
  };
};
var addDum = {
  id: 6,
  name: 'lee',
  date: '2020-01-02',
  content: '노노'
};

var dummy = function dummy() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          dum: [addDum].concat((0,C_pj_FinalS_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.dum))
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (dummy);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvZHVtbXkuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZHVtIiwiaWQiLCJuYW1lIiwiZGF0ZSIsImNvbnRlbnQiLCJBREQiLCJhZGRTdGF0ZSIsImRhdGEiLCJ0eXBlIiwiYWRkRHVtIiwiZHVtbXkiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxLQUFHLEVBQUMsQ0FDQTtBQUFDQyxNQUFFLEVBQUMsQ0FBSjtBQUFPQyxRQUFJLEVBQUUsS0FBYjtBQUFvQkMsUUFBSSxFQUFFLFlBQTFCO0FBQXdDQyxXQUFPLEVBQUU7QUFBakQsR0FEQSxFQUVBO0FBQUNILE1BQUUsRUFBQyxDQUFKO0FBQU9DLFFBQUksRUFBRSxLQUFiO0FBQW9CQyxRQUFJLEVBQUUsWUFBMUI7QUFBd0NDLFdBQU8sRUFBRTtBQUFqRCxHQUZBLEVBR0E7QUFBQ0gsTUFBRSxFQUFDLENBQUo7QUFBT0MsUUFBSSxFQUFFLEtBQWI7QUFBb0JDLFFBQUksRUFBRSxZQUExQjtBQUF3Q0MsV0FBTyxFQUFFO0FBQWpELEdBSEEsRUFJQTtBQUFDSCxNQUFFLEVBQUMsQ0FBSjtBQUFPQyxRQUFJLEVBQUUsS0FBYjtBQUFvQkMsUUFBSSxFQUFFLFlBQTFCO0FBQXdDQyxXQUFPLEVBQUU7QUFBakQsR0FKQSxFQUtBO0FBQUNILE1BQUUsRUFBQyxDQUFKO0FBQU9DLFFBQUksRUFBRSxLQUFiO0FBQW9CQyxRQUFJLEVBQUUsWUFBMUI7QUFBd0NDLFdBQU8sRUFBRTtBQUFqRCxHQUxBO0FBRG9CLENBQXJCO0FBVVAsSUFBTUMsR0FBRyxHQUFHLEtBQVo7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDOUIsU0FBUTtBQUNKQyxRQUFJLEVBQUUsS0FERjtBQUVKRCxRQUFJLEVBQUpBO0FBRkksR0FBUjtBQUlILENBTE07QUFPUCxJQUFNRSxNQUFNLEdBQUc7QUFDWFIsSUFBRSxFQUFFLENBRE87QUFDSkMsTUFBSSxFQUFFLEtBREY7QUFDU0MsTUFBSSxFQUFFLFlBRGY7QUFDNkJDLFNBQU8sRUFBRTtBQUR0QyxDQUFmOztBQUlBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7QUFBQSxNQUFYYSxNQUFXOztBQUM1QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDSSxTQUFLSCxHQUFMO0FBQVc7QUFDUCwrQ0FDT00sS0FEUDtBQUVJWCxhQUFHLEdBQUdTLE1BQUgscUlBQWNFLEtBQUssQ0FBQ1gsR0FBcEI7QUFGUDtBQUlIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT1csS0FEUDtBQUdIO0FBWEw7QUFhSCxDQWREOztBQWdCQSwrREFBZUQsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhiNTcxMWY4ODhhMTFkMWQ4MjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZHVtOltcclxuICAgICAgICB7aWQ6MSwgbmFtZTogJ2tpbScsIGRhdGU6ICcyMDIwLTAxLTAxJywgY29udGVudDogJ+qzoOqzoCd9LFxyXG4gICAgICAgIHtpZDoyLCBuYW1lOiAna2ltJywgZGF0ZTogJzIwMjAtMDEtMDEnLCBjb250ZW50OiAn6rOg6rOgJ30sXHJcbiAgICAgICAge2lkOjMsIG5hbWU6ICdraW0nLCBkYXRlOiAnMjAyMC0wMS0wMScsIGNvbnRlbnQ6ICfqs6Dqs6AnfSxcclxuICAgICAgICB7aWQ6NCwgbmFtZTogJ2tpbScsIGRhdGU6ICcyMDIwLTAxLTAxJywgY29udGVudDogJ+qzoOqzoCd9LFxyXG4gICAgICAgIHtpZDo1LCBuYW1lOiAna2ltJywgZGF0ZTogJzIwMjAtMDEtMDEnLCBjb250ZW50OiAn6rOg6rOgJ30sXHJcbiAgICBdLFxyXG4gICAgXHJcbn1cclxuY29uc3QgQUREID0gJ0FERCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICB7XHJcbiAgICAgICAgdHlwZTogJ0FERCcsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYWRkRHVtID0ge1xyXG4gICAgaWQ6IDYsIG5hbWU6ICdsZWUnLCBkYXRlOiAnMjAyMC0wMS0wMicsIGNvbnRlbnQ6ICfrhbjrhbgnLCBcclxufVxyXG5cclxuY29uc3QgZHVtbXkgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREIDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBkdW06IFthZGREdW0sIC4uLnN0YXRlLmR1bV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkdW1teTsiXSwic291cmNlUm9vdCI6IiJ9