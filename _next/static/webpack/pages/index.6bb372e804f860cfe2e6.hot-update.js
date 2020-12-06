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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.es5.js");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\Document\\Projects\\blog\\components\\post-list.tsx",
    _s = $RefreshSig$();





function PostList(_ref) {
  var _this = this;

  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_masonry_css__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      hover = _useState[0],
      setHover = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onMouseEnter: function onMouseEnter() {
      setHover(true);
    },
    className: "jsx-2058881360" + " " + (styles.postListItem || ""),
    children: [coverUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2058881360" + " " + (Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.cover, Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
        background: "url(".concat(coverUrl, ") center/cover")
      })) || "")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-2058881360" + " " + "title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2058881360",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2058881360",
      children: ".title.jsx-2058881360{color:#FFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEb2N1bWVudFxcUHJvamVjdHNcXGJsb2dcXGNvbXBvbmVudHNcXHBvc3QtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUlRLFdBQUMiLCJmaWxlIjoiRTpcXERvY3VtZW50XFxQcm9qZWN0c1xcYmxvZ1xcY29tcG9uZW50c1xccG9zdC1saXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY3NzJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQb3N0TGlzdFByb3BzIHtcbiAgZGF0YTogUG9zdExpc3RUeXBlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RMaXN0KHsgZGF0YSB9OiBQb3N0TGlzdFByb3BzKSB7XG4gIHJldHVybihcbiAgICA8TWFzb25yeVxuICAgICAgYnJlYWtwb2ludENvbHM9ezJ9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXNvbnJ5R3JpZH1cbiAgICAgIGNvbHVtbkNsYXNzTmFtZT17c3R5bGVzLm1hc29ucnlHcmlkQ29sdW1ufVxuICAgID5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IFxuICAgICAgICA8UG9zdExpc3RJdGVtXG4gICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgY292ZXJVcmw9e2l0ZW0uY292ZXJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgIC8+ICBcbiAgICAgICl9XG4gICAgPC9NYXNvbnJ5PlxuICApXG59XG5cbmludGVyZmFjZSBQb3N0TGlzdEl0ZW1Qcm9wcyB7XG4gIGNvdmVyVXJsPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBQb3N0TGlzdEl0ZW0oeyBjb3ZlclVybCwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IFBvc3RMaXN0SXRlbVByb3BzKSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RMaXN0SXRlbX0gb25Nb3VzZUVudGVyPXsoKT0+e3NldEhvdmVyKHRydWUpfX0+XG4gICAgICB7Y292ZXJVcmw/IDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY292ZXIsIGNzcyh7XG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtjb3ZlclVybH0pIGNlbnRlci9jb3ZlcmBcbiAgICAgIH0pKX0+PC9kaXY+IDogbnVsbH1cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICNGRkZcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbWFzb25yeUdyaWQ6IGNzcyh7XG4gICAgZGlzcGxheTogXCJmbGV4XCJcbiAgfSksXG4gIG1hc29ucnlHcmlkQ29sdW1uOiBjc3Moe1xuICAgIG1hcmdpbjogXCIwIDIwcHhcIixcbiAgICBcIjpudGgtY2hpbGQoZXZlbilcIjoge1xuICAgICAgbWFyZ2luVG9wOiA0MFxuICAgIH1cbiAgfSksXG4gIHBvc3RMaXN0SXRlbTogY3NzKHtcbiAgICBtYXJnaW5Cb3R0b206IDYwXG4gIH0pLFxuICBjb3ZlcjogY3NzKHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgYm9yZGVyUmFkaXVzOiA4XG4gIH0pXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0SXRlbVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNvdmVyPzogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0VHlwZSA9IFBvc3RMaXN0SXRlbVR5cGVbXTtcblxuXG5cbiJdfQ== */\n/*@ sourceURL=E:\\\\Document\\\\Projects\\\\blog\\\\components\\\\post-list.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(PostListItem, "bRXmKus9fOZFlca/6zXTYU+twGY=");

_c2 = PostListItem;
var styles = {
  masonryGrid: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    display: "flex"
  }),
  masonryGridColumn: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    margin: "0 20px",
    ":nth-child(even)": {
      marginTop: 40
    }
  }),
  postListItem: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    marginBottom: 60
  }),
  cover: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWxpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RMaXN0IiwiZGF0YSIsInN0eWxlcyIsIm1hc29ucnlHcmlkIiwibWFzb25yeUdyaWRDb2x1bW4iLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb3ZlciIsImRlc2NyaXB0aW9uIiwiUG9zdExpc3RJdGVtIiwiY292ZXJVcmwiLCJ1c2VTdGF0ZSIsImhvdmVyIiwic2V0SG92ZXIiLCJwb3N0TGlzdEl0ZW0iLCJjeCIsImNzcyIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ3hELHNCQUNFLHFFQUFDLHdEQUFEO0FBQ0Usa0JBQWMsRUFBRSxDQURsQjtBQUVFLGFBQVMsRUFBRUMsTUFBTSxDQUFDQyxXQUZwQjtBQUdFLG1CQUFlLEVBQUVELE1BQU0sQ0FBQ0UsaUJBSDFCO0FBQUEsY0FLR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLDBCQUNaLHFFQUFDLFlBQUQ7QUFDRSxhQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FEZDtBQUVFLGdCQUFRLEVBQUVELElBQUksQ0FBQ0UsS0FGakI7QUFHRSxtQkFBVyxFQUFFRixJQUFJLENBQUNHO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDtLQWhCdUJULFE7O0FBd0J4QixTQUFTVSxZQUFULFFBQTJFO0FBQUE7O0FBQUEsTUFBbkRDLFFBQW1ELFNBQW5EQSxRQUFtRDtBQUFBLE1BQXpDSixLQUF5QyxTQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0UsV0FBa0MsU0FBbENBLFdBQWtDOztBQUFBLGtCQUMvQ0csc0RBQVEsQ0FBQyxLQUFELENBRHVDO0FBQUEsTUFDbEVDLEtBRGtFO0FBQUEsTUFDM0RDLFFBRDJEOztBQUd6RSxzQkFDRTtBQUFxQyxnQkFBWSxFQUFFLHdCQUFJO0FBQUNBLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFBZSxLQUF2RTtBQUFBLHlDQUFnQlosTUFBTSxDQUFDYSxZQUF2QjtBQUFBLGVBQ0dKLFFBQVEsZ0JBQUU7QUFBQSwyQ0FBZ0JLLHVEQUFFLENBQUNkLE1BQU0sQ0FBQ00sS0FBUixFQUFlUyx3REFBRyxDQUFDO0FBQzlDQyxrQkFBVSxnQkFBU1AsUUFBVDtBQURvQyxPQUFELENBQWxCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFGLEdBRUssSUFIaEIsZUFJRTtBQUFBLDBDQUFjLE9BQWQ7QUFBQSxnQkFBdUJKO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUE7QUFBQSxnQkFBTUU7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0FqQlFDLFk7O01BQUFBLFk7QUFtQlQsSUFBTVIsTUFBTSxHQUFHO0FBQ2JDLGFBQVcsRUFBRWMsd0RBQUcsQ0FBQztBQUNmRSxXQUFPLEVBQUU7QUFETSxHQUFELENBREg7QUFJYmYsbUJBQWlCLEVBQUVhLHdEQUFHLENBQUM7QUFDckJHLFVBQU0sRUFBRSxRQURhO0FBRXJCLHdCQUFvQjtBQUNsQkMsZUFBUyxFQUFFO0FBRE87QUFGQyxHQUFELENBSlQ7QUFVYk4sY0FBWSxFQUFFRSx3REFBRyxDQUFDO0FBQ2hCSyxnQkFBWSxFQUFFO0FBREUsR0FBRCxDQVZKO0FBYWJkLE9BQUssRUFBRVMsd0RBQUcsQ0FBQztBQUNUTSxTQUFLLEVBQUUsTUFERTtBQUVUQyxVQUFNLEVBQUUsR0FGQztBQUdUQyxnQkFBWSxFQUFFO0FBSEwsR0FBRDtBQWJHLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmJiMzcyZTgwNGY4NjBjZmUyZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY3NzJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQb3N0TGlzdFByb3BzIHtcbiAgZGF0YTogUG9zdExpc3RUeXBlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RMaXN0KHsgZGF0YSB9OiBQb3N0TGlzdFByb3BzKSB7XG4gIHJldHVybihcbiAgICA8TWFzb25yeVxuICAgICAgYnJlYWtwb2ludENvbHM9ezJ9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXNvbnJ5R3JpZH1cbiAgICAgIGNvbHVtbkNsYXNzTmFtZT17c3R5bGVzLm1hc29ucnlHcmlkQ29sdW1ufVxuICAgID5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IFxuICAgICAgICA8UG9zdExpc3RJdGVtXG4gICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgY292ZXJVcmw9e2l0ZW0uY292ZXJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgIC8+ICBcbiAgICAgICl9XG4gICAgPC9NYXNvbnJ5PlxuICApXG59XG5cbmludGVyZmFjZSBQb3N0TGlzdEl0ZW1Qcm9wcyB7XG4gIGNvdmVyVXJsPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBQb3N0TGlzdEl0ZW0oeyBjb3ZlclVybCwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IFBvc3RMaXN0SXRlbVByb3BzKSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RMaXN0SXRlbX0gb25Nb3VzZUVudGVyPXsoKT0+e3NldEhvdmVyKHRydWUpfX0+XG4gICAgICB7Y292ZXJVcmw/IDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY292ZXIsIGNzcyh7XG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtjb3ZlclVybH0pIGNlbnRlci9jb3ZlcmBcbiAgICAgIH0pKX0+PC9kaXY+IDogbnVsbH1cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICNGRkZcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbWFzb25yeUdyaWQ6IGNzcyh7XG4gICAgZGlzcGxheTogXCJmbGV4XCJcbiAgfSksXG4gIG1hc29ucnlHcmlkQ29sdW1uOiBjc3Moe1xuICAgIG1hcmdpbjogXCIwIDIwcHhcIixcbiAgICBcIjpudGgtY2hpbGQoZXZlbilcIjoge1xuICAgICAgbWFyZ2luVG9wOiA0MFxuICAgIH1cbiAgfSksXG4gIHBvc3RMaXN0SXRlbTogY3NzKHtcbiAgICBtYXJnaW5Cb3R0b206IDYwXG4gIH0pLFxuICBjb3ZlcjogY3NzKHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgYm9yZGVyUmFkaXVzOiA4XG4gIH0pXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0SXRlbVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNvdmVyPzogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFBvc3RMaXN0VHlwZSA9IFBvc3RMaXN0SXRlbVR5cGVbXTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=