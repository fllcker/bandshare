"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/singup",{

/***/ "./pages/account/singup.tsx":
/*!**********************************!*\
  !*** ./pages/account/singup.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar SingUpPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password2 = ref2[0], setPassword2 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errors = ref3[0], setErrors = ref3[1];\n    var nextButton = function() {\n        if (password != password2) return setErrors(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442!\");\n        setUserName(\"\");\n        setPassword(\"\");\n        setPassword2(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"SingUp\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"UserName\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: username,\n                    onChange: function(e) {\n                        return setUserName(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password (again)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password2,\n                    onChange: function(e) {\n                        return setPassword2(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"err\",\n                    children: errors\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextButton,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 22\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this);\n};\n_s(SingUpPage, \"UHPYy8SSgSJhDDeIPBlWHHdlC44=\");\n_c = SingUpPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingUpPage);\nvar _c;\n$RefreshReg$(_c, \"SingUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3Npbmd1cC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ3FEO0FBQ3RCOztBQUUvQixJQUFNRSxVQUFVLEdBQWEsV0FBTTs7SUFDL0IsSUFBOEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMOUMsUUFLaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFMakIsV0FLOEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU45QyxRQU1pQixHQUFpQkEsSUFBWSxHQUE3QixFQU5qQixXQU04QixHQUFJQSxJQUFZLEdBQWhCO0lBQzFCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUGhELFNBT2tCLEdBQWtCQSxJQUFZLEdBQTlCLEVBUGxCLFlBT2dDLEdBQUlBLElBQVksR0FBaEI7SUFFNUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUMUMsTUFTZSxHQUFlQSxJQUFZLEdBQTNCLEVBVGYsU0FTMEIsR0FBSUEsSUFBWSxHQUFoQjtJQUV0QixJQUFJVSxVQUFVLEdBQUcsV0FBTTtRQUNuQixJQUFJTixRQUFRLElBQUlFLFNBQVMsRUFBRSxPQUFPRyxTQUFTLENBQUMsMkdBQXNCLENBQUM7UUFFbkVOLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDZkUsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUNmRSxZQUFZLENBQUMsRUFBRSxDQUFDO0tBQ25CO0lBRUQscUJBQ0ksOERBQUNSLDhEQUFVO2tCQUNQLDRFQUFDWSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxJQUFJOzs4QkFDZiw4REFBQ0MsSUFBRTs4QkFBQyxRQUFNOzs7Ozt5QkFBSzs4QkFDZiw4REFBQ0MsR0FBQztvQkFBQ0YsU0FBUyxFQUFDLGFBQWE7OEJBQUMsVUFBUTs7Ozs7eUJBQUk7OEJBQ3ZDLDhEQUFDRyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsS0FBSyxFQUFFZixRQUFRO29CQUFFZ0IsUUFBUSxFQUFFQyxTQUFBQSxDQUFDOytCQUFJaEIsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztxQkFBQTs7Ozs7eUJBQUc7OEJBRWpGLDhEQUFDSCxHQUFDO29CQUFDRixTQUFTLEVBQUMsYUFBYTs4QkFBQyxVQUFROzs7Ozt5QkFBSTs4QkFDdkMsOERBQUNHLE9BQUs7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxLQUFLLEVBQUViLFFBQVE7b0JBQUVjLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzsrQkFBSWQsV0FBVyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3FCQUFBOzs7Ozt5QkFBRzs4QkFFckYsOERBQUNILEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxhQUFhOzhCQUFDLGtCQUFnQjs7Ozs7eUJBQUk7OEJBQy9DLDhEQUFDRyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsS0FBSyxFQUFFWCxTQUFTO29CQUFFWSxRQUFRLEVBQUVDLFNBQUFBLENBQUM7K0JBQUlaLFlBQVksQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztxQkFBQTs7Ozs7eUJBQUc7OEJBRXZGLDhEQUFDSCxHQUFDO29CQUFDRixTQUFTLEVBQUMsS0FBSzs4QkFBRUosTUFBTTs7Ozs7eUJBQUs7OEJBRS9CLDhEQUFDYSxJQUFFOzs7O3lCQUFFOzhCQUFBLDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUViLFVBQVU7OEJBQUUsTUFBSTs7Ozs7eUJBQVM7Ozs7OztpQkFDN0M7Ozs7O2FBQ0csQ0FDaEI7Q0FDSjtHQWxDS1QsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBb0NoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L3Npbmd1cC50c3g/MjMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNpbmdVcFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBsZXQgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCBbcGFzc3dvcmQyLCBzZXRQYXNzd29yZDJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgbGV0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBsZXQgbmV4dEJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gcGFzc3dvcmQyKSByZXR1cm4gc2V0RXJyb3JzKCfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YIhJylcclxuXHJcbiAgICAgICAgc2V0VXNlck5hbWUoJycpXHJcbiAgICAgICAgc2V0UGFzc3dvcmQoJycpXHJcbiAgICAgICAgc2V0UGFzc3dvcmQyKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXdcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5TaW5nVXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+VXNlck5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+UGFzc3dvcmQgKGFnYWluKTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmQyfSBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZDIoZS50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyXCI+e2Vycm9yc308L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyLz48YnV0dG9uIG9uQ2xpY2s9e25leHRCdXR0b259Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nVXBQYWdlXHJcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwidXNlU3RhdGUiLCJTaW5nVXBQYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VyTmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZDIiLCJzZXRQYXNzd29yZDIiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJuZXh0QnV0dG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account/singup.tsx\n");

/***/ })

});