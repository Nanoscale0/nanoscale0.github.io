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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3217012586", [hover ? "red" : "inherit"]]]) + " " + (styles.postListItem || ""),
    children: [coverUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3217012586", [hover ? "red" : "inherit"]]]) + " " + (Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.cover, Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
        background: "url(".concat(coverUrl, ") center/cover")
      })) || "")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3217012586", [hover ? "red" : "inherit"]]]) + " " + "title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3217012586", [hover ? "red" : "inherit"]]]),
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3217012586",
      dynamic: [hover ? "red" : "inherit"],
      children: ".title.__jsx-style-dynamic-selector{color:".concat(hover ? "red" : "inherit", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEb2N1bWVudFxcUHJvamVjdHNcXGJsb2dcXGNvbXBvbmVudHNcXHBvc3QtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUlRLG1DQUFDIiwiZmlsZSI6IkU6XFxEb2N1bWVudFxcUHJvamVjdHNcXGJsb2dcXGNvbXBvbmVudHNcXHBvc3QtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNzcyc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUG9zdExpc3RQcm9wcyB7XG4gIGRhdGE6IFBvc3RMaXN0VHlwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCh7IGRhdGEgfTogUG9zdExpc3RQcm9wcykge1xuICByZXR1cm4oXG4gICAgPE1hc29ucnlcbiAgICAgIGJyZWFrcG9pbnRDb2xzPXsyfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFzb25yeUdyaWR9XG4gICAgICBjb2x1bW5DbGFzc05hbWU9e3N0eWxlcy5tYXNvbnJ5R3JpZENvbHVtbn1cbiAgICA+XG4gICAgICB7ZGF0YS5tYXAoaXRlbSA9PiBcbiAgICAgICAgPFBvc3RMaXN0SXRlbVxuICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgIGNvdmVyVXJsPXtpdGVtLmNvdmVyfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPiAgXG4gICAgICApfVxuICAgIDwvTWFzb25yeT5cbiAgKVxufVxuXG5pbnRlcmZhY2UgUG9zdExpc3RJdGVtUHJvcHMge1xuICBjb3ZlclVybD86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gUG9zdExpc3RJdGVtKHsgY292ZXJVcmwsIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBQb3N0TGlzdEl0ZW1Qcm9wcykge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0TGlzdEl0ZW19IG9uTW91c2VFbnRlcj17KCk9PntzZXRIb3Zlcih0cnVlKX19PlxuICAgICAge2NvdmVyVXJsPyA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvdmVyLCBjc3Moe1xuICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7Y292ZXJVcmx9KSBjZW50ZXIvY292ZXJgXG4gICAgICB9KSl9PjwvZGl2PiA6IG51bGx9XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAke2hvdmVyPyBcInJlZFwiIDogXCJpbmhlcml0XCJ9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG1hc29ucnlHcmlkOiBjc3Moe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiXG4gIH0pLFxuICBtYXNvbnJ5R3JpZENvbHVtbjogY3NzKHtcbiAgICBtYXJnaW46IFwiMCAyMHB4XCIsXG4gICAgXCI6bnRoLWNoaWxkKGV2ZW4pXCI6IHtcbiAgICAgIG1hcmdpblRvcDogNDBcbiAgICB9XG4gIH0pLFxuICBwb3N0TGlzdEl0ZW06IGNzcyh7XG4gICAgbWFyZ2luQm90dG9tOiA2MFxuICB9KSxcbiAgY292ZXI6IGNzcyh7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogMzAwLFxuICAgIGJvcmRlclJhZGl1czogOFxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBQb3N0TGlzdEl0ZW1UeXBlID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBjb3Zlcj86IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBQb3N0TGlzdFR5cGUgPSBQb3N0TGlzdEl0ZW1UeXBlW107XG5cblxuXG4iXX0= */\n/*@ sourceURL=E:\\\\Document\\\\Projects\\\\blog\\\\components\\\\post-list.tsx */")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWxpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RMaXN0IiwiZGF0YSIsInN0eWxlcyIsIm1hc29ucnlHcmlkIiwibWFzb25yeUdyaWRDb2x1bW4iLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJjb3ZlciIsImRlc2NyaXB0aW9uIiwiUG9zdExpc3RJdGVtIiwiY292ZXJVcmwiLCJ1c2VTdGF0ZSIsImhvdmVyIiwic2V0SG92ZXIiLCJwb3N0TGlzdEl0ZW0iLCJjeCIsImNzcyIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFFBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQ3hELHNCQUNFLHFFQUFDLHdEQUFEO0FBQ0Usa0JBQWMsRUFBRSxDQURsQjtBQUVFLGFBQVMsRUFBRUMsTUFBTSxDQUFDQyxXQUZwQjtBQUdFLG1CQUFlLEVBQUVELE1BQU0sQ0FBQ0UsaUJBSDFCO0FBQUEsY0FLR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLDBCQUNaLHFFQUFDLFlBQUQ7QUFDRSxhQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FEZDtBQUVFLGdCQUFRLEVBQUVELElBQUksQ0FBQ0UsS0FGakI7QUFHRSxtQkFBVyxFQUFFRixJQUFJLENBQUNHO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDtLQWhCdUJULFE7O0FBd0J4QixTQUFTVSxZQUFULFFBQTJFO0FBQUE7O0FBQUEsTUFBbkRDLFFBQW1ELFNBQW5EQSxRQUFtRDtBQUFBLE1BQXpDSixLQUF5QyxTQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0UsV0FBa0MsU0FBbENBLFdBQWtDOztBQUFBLGtCQUMvQ0csc0RBQVEsQ0FBQyxLQUFELENBRHVDO0FBQUEsTUFDbEVDLEtBRGtFO0FBQUEsTUFDM0RDLFFBRDJEOztBQUd6RSxzQkFDRTtBQUFxQyxnQkFBWSxFQUFFLHdCQUFJO0FBQUNBLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFBZSxLQUF2RTtBQUFBLGdHQVFlRCxLQUFLLEdBQUUsS0FBRixHQUFVLFNBUjlCLGNBQWdCWCxNQUFNLENBQUNhLFlBQXZCO0FBQUEsZUFDR0osUUFBUSxnQkFBRTtBQUFBLGtHQU9FRSxLQUFLLEdBQUUsS0FBRixHQUFVLFNBUGpCLGNBQWdCRyx1REFBRSxDQUFDZCxNQUFNLENBQUNNLEtBQVIsRUFBZVMsd0RBQUcsQ0FBQztBQUM5Q0Msa0JBQVUsZ0JBQVNQLFFBQVQ7QUFEb0MsT0FBRCxDQUFsQixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRixHQUVLLElBSGhCLGVBSUU7QUFBQSxrR0FJYUUsS0FBSyxHQUFFLEtBQUYsR0FBVSxTQUo1QixhQUFjLE9BQWQ7QUFBQSxnQkFBdUJOO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUEsa0dBR2FNLEtBQUssR0FBRSxLQUFGLEdBQVUsU0FINUI7QUFBQSxnQkFBTUo7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBLGdCQVFlSSxLQUFLLEdBQUUsS0FBRixHQUFVLFNBUjlCO0FBQUEsb0VBUWVBLEtBQUssR0FBRSxLQUFGLEdBQVUsU0FSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWpCUUgsWTs7TUFBQUEsWTtBQW1CVCxJQUFNUixNQUFNLEdBQUc7QUFDYkMsYUFBVyxFQUFFYyx3REFBRyxDQUFDO0FBQ2ZFLFdBQU8sRUFBRTtBQURNLEdBQUQsQ0FESDtBQUliZixtQkFBaUIsRUFBRWEsd0RBQUcsQ0FBQztBQUNyQkcsVUFBTSxFQUFFLFFBRGE7QUFFckIsd0JBQW9CO0FBQ2xCQyxlQUFTLEVBQUU7QUFETztBQUZDLEdBQUQsQ0FKVDtBQVViTixjQUFZLEVBQUVFLHdEQUFHLENBQUM7QUFDaEJLLGdCQUFZLEVBQUU7QUFERSxHQUFELENBVko7QUFhYmQsT0FBSyxFQUFFUyx3REFBRyxDQUFDO0FBQ1RNLFNBQUssRUFBRSxNQURFO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLGdCQUFZLEVBQUU7QUFITCxHQUFEO0FBYkcsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YmIwZGQ4MGE2MjQ5Njk3MjBiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jc3MnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFBvc3RMaXN0UHJvcHMge1xuICBkYXRhOiBQb3N0TGlzdFR5cGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhIH06IFBvc3RMaXN0UHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxNYXNvbnJ5XG4gICAgICBicmVha3BvaW50Q29scz17Mn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hc29ucnlHcmlkfVxuICAgICAgY29sdW1uQ2xhc3NOYW1lPXtzdHlsZXMubWFzb25yeUdyaWRDb2x1bW59XG4gICAgPlxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4gXG4gICAgICAgIDxQb3N0TGlzdEl0ZW1cbiAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICBjb3ZlclVybD17aXRlbS5jb3Zlcn1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz4gIFxuICAgICAgKX1cbiAgICA8L01hc29ucnk+XG4gIClcbn1cblxuaW50ZXJmYWNlIFBvc3RMaXN0SXRlbVByb3BzIHtcbiAgY292ZXJVcmw/OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFBvc3RMaXN0SXRlbSh7IGNvdmVyVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogUG9zdExpc3RJdGVtUHJvcHMpIHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdExpc3RJdGVtfSBvbk1vdXNlRW50ZXI9eygpPT57c2V0SG92ZXIodHJ1ZSl9fT5cbiAgICAgIHtjb3ZlclVybD8gPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb3ZlciwgY3NzKHtcbiAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2NvdmVyVXJsfSkgY2VudGVyL2NvdmVyYFxuICAgICAgfSkpfT48L2Rpdj4gOiBudWxsfVxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHtob3Zlcj8gXCJyZWRcIiA6IFwiaW5oZXJpdFwifVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBtYXNvbnJ5R3JpZDogY3NzKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIlxuICB9KSxcbiAgbWFzb25yeUdyaWRDb2x1bW46IGNzcyh7XG4gICAgbWFyZ2luOiBcIjAgMjBweFwiLFxuICAgIFwiOm50aC1jaGlsZChldmVuKVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IDQwXG4gICAgfVxuICB9KSxcbiAgcG9zdExpc3RJdGVtOiBjc3Moe1xuICAgIG1hcmdpbkJvdHRvbTogNjBcbiAgfSksXG4gIGNvdmVyOiBjc3Moe1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBib3JkZXJSYWRpdXM6IDhcbiAgfSlcbn1cblxuZXhwb3J0IHR5cGUgUG9zdExpc3RJdGVtVHlwZSA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgY292ZXI/OiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgUG9zdExpc3RUeXBlID0gUG9zdExpc3RJdGVtVHlwZVtdO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==