webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post-list.tsx":
/*!**********************************!*\
  !*** ./components/post-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.es5.js");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\Document\\Projects\\blog\\components\\post-list.tsx",
    _s = $RefreshSig$();




function PostList(_ref) {
  var _this = this;

  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 2,
    className: styles.masonryGrid,
    columnClassName: styles.masonryGridColumn,
    children: data.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostListItem, {
        title: item.title,
        coverUrl: item.cover,
        description: item.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = PostList;

function PostListItem(_ref2) {
  _s();

  var coverUrl = _ref2.coverUrl,
      title = _ref2.title,
      description = _ref2.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hover = _useState[0],
      setHover = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.postListItem,
    onMouseEnter: function onMouseEnter() {
      setHover(true);
    },
    children: [coverUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.cover, Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
        background: "url(".concat(coverUrl, ") center/cover")
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
        color: hover ? "red" : "inherit"
      }),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(PostListItem, "bRXmKus9fOZFlca/6zXTYU+twGY=");

_c2 = PostListItem;
var styles = {
  masonryGrid: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
    display: "flex"
  }),
  masonryGridColumn: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
    margin: "0 20px",
    ":nth-child(even)": {
      marginTop: 40
    }
  }),
  postListItem: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
    marginBottom: 60
  }),
  cover: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])({
    width: "100%",
    height: 300,
    borderRadius: 8
  })
};

var _c, _c2;

$RefreshReg$(_c, "PostList");
$RefreshReg$(_c2, "PostListItem");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWxpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RMaXN0IiwiZGF0YSIsInN0eWxlcyIsIm1hc29ucnlHcmlkIiwibWFzb25yeUdyaWRDb2x1bW4iLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb3ZlciIsImRlc2NyaXB0aW9uIiwiUG9zdExpc3RJdGVtIiwiY292ZXJVcmwiLCJ1c2VTdGF0ZSIsImhvdmVyIiwic2V0SG92ZXIiLCJwb3N0TGlzdEl0ZW0iLCJjeCIsImNzcyIsImJhY2tncm91bmQiLCJjb2xvciIsImRpc3BsYXkiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTWUsU0FBU0EsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFDeEQsc0JBQ0UscUVBQUMsd0RBQUQ7QUFDRSxrQkFBYyxFQUFFLENBRGxCO0FBRUUsYUFBUyxFQUFFQyxNQUFNLENBQUNDLFdBRnBCO0FBR0UsbUJBQWUsRUFBRUQsTUFBTSxDQUFDRSxpQkFIMUI7QUFBQSxjQUtHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsMEJBQ1oscUVBQUMsWUFBRDtBQUNFLGFBQUssRUFBRUEsSUFBSSxDQUFDQyxLQURkO0FBRUUsZ0JBQVEsRUFBRUQsSUFBSSxDQUFDRSxLQUZqQjtBQUdFLG1CQUFXLEVBQUVGLElBQUksQ0FBQ0c7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEO0tBaEJ1QlQsUTs7QUF3QnhCLFNBQVNVLFlBQVQsUUFBMkU7QUFBQTs7QUFBQSxNQUFuREMsUUFBbUQsU0FBbkRBLFFBQW1EO0FBQUEsTUFBekNKLEtBQXlDLFNBQXpDQSxLQUF5QztBQUFBLE1BQWxDRSxXQUFrQyxTQUFsQ0EsV0FBa0M7O0FBQUEsa0JBQy9DRyxzREFBUSxDQUFDLEtBQUQsQ0FEdUM7QUFBQSxNQUNsRUMsS0FEa0U7QUFBQSxNQUMzREMsUUFEMkQ7O0FBR3pFLHNCQUNFO0FBQUssYUFBUyxFQUFFWixNQUFNLENBQUNhLFlBQXZCO0FBQXFDLGdCQUFZLEVBQUUsd0JBQUk7QUFBQ0QsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUFlLEtBQXZFO0FBQUEsZUFDR0gsUUFBUSxnQkFBRTtBQUFLLGVBQVMsRUFBRUssdURBQUUsQ0FBQ2QsTUFBTSxDQUFDTSxLQUFSLEVBQWVTLHdEQUFHLENBQUM7QUFDOUNDLGtCQUFVLGdCQUFTUCxRQUFUO0FBRG9DLE9BQUQsQ0FBbEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFGLEdBRUssSUFIaEIsZUFJRTtBQUFJLGVBQVMsRUFBRU0sd0RBQUcsQ0FBQztBQUFDRSxhQUFLLEVBQUVOLEtBQUssR0FBRSxLQUFGLEdBQVU7QUFBdkIsT0FBRCxDQUFsQjtBQUFBLGdCQUF3RE47QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSxnQkFBTUU7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FaUUMsWTs7TUFBQUEsWTtBQWNULElBQU1SLE1BQU0sR0FBRztBQUNiQyxhQUFXLEVBQUVjLHdEQUFHLENBQUM7QUFDZkcsV0FBTyxFQUFFO0FBRE0sR0FBRCxDQURIO0FBSWJoQixtQkFBaUIsRUFBRWEsd0RBQUcsQ0FBQztBQUNyQkksVUFBTSxFQUFFLFFBRGE7QUFFckIsd0JBQW9CO0FBQ2xCQyxlQUFTLEVBQUU7QUFETztBQUZDLEdBQUQsQ0FKVDtBQVViUCxjQUFZLEVBQUVFLHdEQUFHLENBQUM7QUFDaEJNLGdCQUFZLEVBQUU7QUFERSxHQUFELENBVko7QUFhYmYsT0FBSyxFQUFFUyx3REFBRyxDQUFDO0FBQ1RPLFNBQUssRUFBRSxNQURFO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLGdCQUFZLEVBQUU7QUFITCxHQUFEO0FBYkcsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNWNlNDk3YWM3NjIyZmE2MzhjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jc3MnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFBvc3RMaXN0UHJvcHMge1xuICBkYXRhOiBQb3N0TGlzdFR5cGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhIH06IFBvc3RMaXN0UHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxNYXNvbnJ5XG4gICAgICBicmVha3BvaW50Q29scz17Mn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hc29ucnlHcmlkfVxuICAgICAgY29sdW1uQ2xhc3NOYW1lPXtzdHlsZXMubWFzb25yeUdyaWRDb2x1bW59XG4gICAgPlxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4gXG4gICAgICAgIDxQb3N0TGlzdEl0ZW1cbiAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICBjb3ZlclVybD17aXRlbS5jb3Zlcn1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz4gIFxuICAgICAgKX1cbiAgICA8L01hc29ucnk+XG4gIClcbn1cblxuaW50ZXJmYWNlIFBvc3RMaXN0SXRlbVByb3BzIHtcbiAgY292ZXJVcmw/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFBvc3RMaXN0SXRlbSh7IGNvdmVyVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogUG9zdExpc3RJdGVtUHJvcHMpIHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdExpc3RJdGVtfSBvbk1vdXNlRW50ZXI9eygpPT57c2V0SG92ZXIodHJ1ZSl9fT5cbiAgICAgIHtjb3ZlclVybD8gPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb3ZlciwgY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2NvdmVyVXJsfSkgY2VudGVyL2NvdmVyYFxuICAgICAgfSkpfT48L2Rpdj4gOiBudWxsfVxuICAgICAgPGgyIGNsYXNzTmFtZT17Y3NzKHtjb2xvcjogaG92ZXI/IFwicmVkXCIgOiBcImluaGVyaXRcIn0pfT57dGl0bGV9PC9oMj5cbiAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbWFzb25yeUdyaWQ6IGNzcyh7XG4gICAgZGlzcGxheTogXCJmbGV4XCJcbiAgfSksXG4gIG1hc29ucnlHcmlkQ29sdW1uOiBjc3Moe1xuICAgIG1hcmdpbjogXCIwIDIwcHhcIixcbiAgICBcIjpudGgtY2hpbGQoZXZlbilcIjoge1xuICAgICAgbWFyZ2luVG9wOiA0MFxuICAgIH1cbiAgfSksXG4gIHBvc3RMaXN0SXRlbTogY3NzKHtcbiAgICBtYXJnaW5Cb3R0b206IDYwXG4gIH0pLFxuICBjb3ZlcjogY3NzKHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgYm9yZGVyUmFkaXVzOiA4XG4gIH0pXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0SXRlbVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNvdmVyPzogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0VHlwZSA9IFBvc3RMaXN0SXRlbVR5cGVbXTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=