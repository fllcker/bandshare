"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/view/[trackId]",{

/***/ "./pages/account/view/[trackId].tsx":
/*!******************************************!*\
  !*** ./pages/account/view/[trackId].tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var _components_PlatformLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/PlatformLink */ \"./components/PlatformLink.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TrackView = function(param) {\n    var track = param.track, links = param.links;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), platformChoose = ref[0], setPlatformChoose = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"tw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        track.name,\n                        \" (\",\n                        track.author,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"\\u041F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u044B: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, _this),\n                links.map(function(el) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlatformLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        platform: el.platform,\n                        link: el.trackRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 37\n                    }, _this1);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"new-platform-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: platformChoose,\n                            onChange: function(e) {\n                                return setPlatformChoose(e.target.value);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Apple Music\",\n                                    children: \"Apple Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Spotify\",\n                                    children: \"Spotify\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\",\n                                    children: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Yandex Music\",\n                                    children: \"Yandex Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"YouTube Music\",\n                                    children: \"YouTube Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"new-platform-input\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrackView, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = TrackView;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackView);\nvar _c;\n$RefreshReg$(_c, \"TrackView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3ZpZXcvW3RyYWNrSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBRWtCO0FBQ0k7O0FBRTVELElBQU1JLFNBQVMsR0FBRyxnQkFBeUI7UUFBdkJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7OztJQUM1QixJQUEwQ0wsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU4xRCxjQU11QixHQUF1QkEsR0FBWSxHQUFuQyxFQU52QixpQkFNMEMsR0FBSUEsR0FBWSxHQUFoQjtJQUV0QyxxQkFDSSw4REFBQ0MsOERBQVU7a0JBQ1AsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLElBQUk7OzhCQUNmLDhEQUFDQyxJQUFFOzt3QkFBRU4sS0FBSyxDQUFDTyxJQUFJO3dCQUFDLElBQUU7d0JBQUNQLEtBQUssQ0FBQ1EsTUFBTTt3QkFBQyxHQUFDOzs7Ozs7eUJBQUs7OEJBRXRDLDhEQUFDQyxJQUFFOzhCQUFDLDBEQUFXOzs7Ozt5QkFBYztnQkFFaEJSLEtBQUosQ0FBQ1MsR0FBRyxDQUFDQyxTQUFBQSxFQUFFO3lDQUFJLDhEQUFDYixnRUFBWTt3QkFBQ2MsUUFBUSxFQUFFRCxFQUFFLENBQUNDLFFBQVE7d0JBQUVDLElBQUksRUFBRUYsRUFBRSxDQUFDRyxRQUFROzs7Ozs4QkFBRztpQkFBQSxDQUFDOzhCQUk5RSw4REFBQ0MsR0FBQzs4QkFBQywyR0FBb0I7Ozs7O3lCQUFxQjs4QkFFM0IsOERBQWhCWCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsbUJBQW1COztzQ0FDOUIsOERBQUNXLFFBQU07NEJBQUNDLEtBQUssRUFBRWYsY0FBYzs0QkFBRWdCLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzt1Q0FBSWhCLGlCQUFpQixDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzs2QkFBQTs7OENBQzNFLDhEQUFDSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsRUFBRTs4Q0FBQyx5R0FBa0I7Ozs7O3lDQUEwQjs4Q0FDNUMsOERBQWhCSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsYUFBYTs4Q0FBQyxhQUFXOzs7Ozt5Q0FBUzs4Q0FDaEQsOERBQUNJLFFBQU07b0NBQUNKLEtBQUssRUFBQyxTQUFTOzhDQUFDLFNBQU87Ozs7O3lDQUFTOzhDQUN4Qyw4REFBQ0ksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLHlDQUFXOzhDQUFPLHlDQUFTOzs7Ozt5Q0FBZTs4Q0FDNUMsOERBQVhJLFFBQU07b0NBQUNKLEtBQUssRUFBQyxjQUFjOzhDQUFDLGNBQVk7Ozs7O3lDQUFTOzhDQUNsRCw4REFBQ0ksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLGVBQWU7OENBQUMsZUFBYTs7Ozs7eUNBQVM7Ozs7OztpQ0FDL0M7c0NBRVQsOERBQUNLLE9BQUs7NEJBQUNDLElBQUksRUFBQyxNQUFNOzRCQUFDbEIsU0FBUyxFQUFDLG9CQUFvQjs7Ozs7aUNBQUU7c0NBRW5ELDhEQUFDbUIsUUFBTTtzQ0FBQyxrREFBUTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDdkI7Ozs7OztpQkFDSjs7Ozs7YUFDRyxDQUNmO0NBQ0w7R0FqQ0t6QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBbUNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC92aWV3L1t0cmFja0lkXS50c3g/ZWJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IFBsYXRmb3JtTGluayBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9QbGF0Zm9ybUxpbmtcIjtcclxuXHJcbmNvbnN0IFRyYWNrVmlldyA9ICh7dHJhY2ssIGxpbmtzfTogYW55KSA9PiB7XHJcbiAgICBsZXQgW3BsYXRmb3JtQ2hvb3NlLCBzZXRQbGF0Zm9ybUNob29zZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RyYWNrLm5hbWV9ICh7dHJhY2suYXV0aG9yfSk8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMj7Qn9C70LDRgtGE0L7RgNC80Ys6IDwvaDI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MubWFwKGVsID0+IDxQbGF0Zm9ybUxpbmsgcGxhdGZvcm09e2VsLnBsYXRmb3JtfSBsaW5rPXtlbC50cmFja1JlZn0vPilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHA+0JTQvtCx0LDQstC40YLRjCDQv9C70LDRgtGE0L7RgNC80YM6IDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1wbGF0Zm9ybS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cGxhdGZvcm1DaG9vc2V9IG9uQ2hhbmdlPXtlID0+IHNldFBsYXRmb3JtQ2hvb3NlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7QktGL0LHQtdGA0LjRgtC1INC/0LvQsNGC0YTQvtGA0LzRgzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXBwbGUgTXVzaWNcIj5BcHBsZSBNdXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3BvdGlmeVwiPlNwb3RpZnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZLINCc0YPQt9GL0LrQsFwiPlZLINCc0YPQt9GL0LrQsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWFuZGV4IE11c2ljXCI+WWFuZGV4IE11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZb3VUdWJlIE11c2ljXCI+WW91VHViZSBNdXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J25ldy1wbGF0Zm9ybS1pbnB1dCcvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tWaWV3O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnN0IHt0cmFja0lkfSA9IGNvbnRleHQucXVlcnlcclxuXHJcbiAgICBsZXQgdHJhY2sgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsOiAnL3RyYWNrcy9pZC8nICsgdHJhY2tJZFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxyXG5cclxuICAgIGxldCBsaW5rcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICB1cmw6ICcvbGlua3MvaWQvJyArIHRyYWNrSWRcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICBpZiAoIWxpbmtzKSBsaW5rcyA9IFtdXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3RyYWNrLCBsaW5rc30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNYWluTGF5b3V0IiwiUGxhdGZvcm1MaW5rIiwiVHJhY2tWaWV3IiwidHJhY2siLCJsaW5rcyIsInBsYXRmb3JtQ2hvb3NlIiwic2V0UGxhdGZvcm1DaG9vc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJhdXRob3IiLCJoMiIsIm1hcCIsImVsIiwicGxhdGZvcm0iLCJsaW5rIiwidHJhY2tSZWYiLCJwIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account/view/[trackId].tsx\n");

/***/ })

});