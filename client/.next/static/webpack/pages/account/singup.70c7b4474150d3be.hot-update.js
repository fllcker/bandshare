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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar SingUpPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password2 = ref2[0], setPassword2 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errors = ref3[0], setErrors = ref3[1];\n    var nextButton = function() {\n        if (password != password2) return setErrors(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442!\");\n        var payload = {\n            username: username,\n            password: password\n        };\n        setUserName(\"\");\n        setPassword(\"\");\n        setPassword2(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"SingUp\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"UserName\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: username,\n                    onChange: function(e) {\n                        return setUserName(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password (again)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password2,\n                    onChange: function(e) {\n                        return setPassword2(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"err\",\n                    children: errors\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextButton,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 22\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(SingUpPage, \"UHPYy8SSgSJhDDeIPBlWHHdlC44=\");\n_c = SingUpPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingUpPage);\nvar _c;\n$RefreshReg$(_c, \"SingUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X05fRS8uL3BhZ2VzL2FjY291bnQvc2luZ3VwLnRzeD8yMzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2luZ1VwUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgbGV0IFtwYXNzd29yZDIsIHNldFBhc3N3b3JkMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgbGV0IG5leHRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IHBhc3N3b3JkMikgcmV0dXJuIHNldEVycm9ycygn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCIScpXHJcblxyXG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXJOYW1lKCcnKVxyXG4gICAgICAgIHNldFBhc3N3b3JkKCcnKVxyXG4gICAgICAgIHNldFBhc3N3b3JkMignJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm13XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2luZ1VwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BsYWNlaG9sZGVyJz5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlBhc3N3b3JkIChhZ2Fpbik8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkMn0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQyKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVyclwiPntlcnJvcnN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxici8+PGJ1dHRvbiBvbkNsaWNrPXtuZXh0QnV0dG9ufT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ1VwUGFnZVxyXG4iXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInVzZVN0YXRlIiwiU2luZ1VwUGFnZSIsInVzZXJuYW1lIiwic2V0VXNlck5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmQyIiwic2V0UGFzc3dvcmQyIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwibmV4dEJ1dHRvbiIsInBheWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account/singup.tsx\n");

/***/ })

});