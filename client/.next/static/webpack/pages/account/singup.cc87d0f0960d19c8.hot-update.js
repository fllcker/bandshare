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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingUpPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), username = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), password2 = ref2[0], setPassword2 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), errors = ref3[0], setErrors = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var nextButton = function() {\n        var _ref = _asyncToGenerator(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var payload, token, isJwt;\n            return C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(username.length == 0 || password.length == 0)) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", setErrors(\"\\u0417\\u0430\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\"));\n                    case 2:\n                        if (!(password != password2)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", setErrors(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u0438 \\u043D\\u0435 \\u0441\\u043E\\u0432\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442!\"));\n                    case 4:\n                        payload = {\n                            username: username,\n                            password: password\n                        };\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default()({\n                            url: \"/users/registration\",\n                            method: \"POST\",\n                            data: payload\n                        }).then(function(response) {\n                            return response.data;\n                        });\n                    case 7:\n                        token = _ctx.sent;\n                        isJwt = token.split(\".\").length == 3;\n                        if (!isJwt) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.setCookies)(\"jwt\", token, {\n                            maxAge: 60 * 60 * 48\n                        });\n                        _ctx.next = 13;\n                        return router.push(\"/\");\n                    case 13:\n                        _ctx.next = 16;\n                        break;\n                    case 15:\n                        setErrors(token);\n                    case 16:\n                        setUserName(\"\");\n                        setPassword(\"\");\n                        setPassword2(\"\");\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function nextButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"mw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"SingUp\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"UserName\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: username,\n                    onChange: function(e) {\n                        return setUserName(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password (again)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password2,\n                    onChange: function(e) {\n                        return setPassword2(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"err\",\n                    children: errors\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"dw\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: nextButton,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"/account/login\",\n                            children: \"\\u0415\\u0441\\u0442\\u044C \\u0430\\u043A\\u043A\\u0430\\u0443\\u043D\\u0442?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\singup.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, _this);\n};\n_s(SingUpPage, \"BJzY2T0GAJn1lQcMCujxHNK3qsg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = SingUpPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingUpPage);\nvar _c;\n$RefreshReg$(_c, \"SingUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILEtBQUssQ0FBQztxQkFBQTs7Ozs7eUJBQUc7OEJBRWpGLDhEQUFDSCxHQUFDO29CQUFDRixTQUFTLEVBQUMsYUFBYTs4QkFBQyxVQUFROzs7Ozt5QkFBSTs4QkFDdkMsOERBQUNHLE9BQUs7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxLQUFLLEVBQUUxQixRQUFRO29CQUFFMkIsUUFBUSxFQUFFQyxTQUFBQSxDQUFDOytCQUFJM0IsV0FBVyxDQUFDMkIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztxQkFBQTs7Ozs7eUJBQUc7OEJBRXJGLDhEQUFDSCxHQUFDO29CQUFDRixTQUFTLEVBQUMsYUFBYTs4QkFBQyxrQkFBZ0I7Ozs7O3lCQUFJOzhCQUMvQyw4REFBQ0csT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFVBQVU7b0JBQUNDLEtBQUssRUFBRXhCLFNBQVM7b0JBQUV5QixRQUFRLEVBQUVDLFNBQUFBLENBQUM7K0JBQUl6QixZQUFZLENBQUN5QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3FCQUFBOzs7Ozt5QkFBRzs4QkFFdkYsOERBQUNILEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxLQUFLOzhCQUFFakIsTUFBTTs7Ozs7eUJBQUs7OEJBRS9CLDhEQUFDZ0IsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLElBQUk7O3NDQUNmLDhEQUFDUyxRQUFNOzRCQUFDQyxPQUFPLEVBQUV4QixVQUFVO3NDQUFFLE1BQUk7Ozs7O2lDQUFTO3NDQUMxQyw4REFBQ1gsa0RBQUk7NEJBQUNvQyxJQUFJLEVBQUMsZ0JBQWdCO3NDQUFDLHNFQUFhOzs7OztpQ0FBTzs7Ozs7O3lCQUM5Qzs7Ozs7O2lCQUNKOzs7OzthQUNHLENBQ2hCO0NBQ0o7R0E1REtuQyxVQUFVOztRQUtDRixrREFBUzs7O0FBTHBCRSxLQUFBQSxVQUFVO0FBOERoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L3Npbmd1cC50c3g/MjMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3NldENvb2tpZXN9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU2luZ1VwUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgbGV0IFtwYXNzd29yZDIsIHNldFBhc3N3b3JkMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT0gMCkgcmV0dXJuIHNldEVycm9ycygn0JfQsNC/0L7Qu9C90LjRgtC1INC00LDQvdC90YvQtScpXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IHBhc3N3b3JkMikgcmV0dXJuIHNldEVycm9ycygn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCIScpXHJcblxyXG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsOiAnL3VzZXJzL3JlZ2lzdHJhdGlvbicsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWRcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgICBjb25zdCBpc0p3dCA9IHRva2VuLnNwbGl0KCcuJykubGVuZ3RoID09IDNcclxuXHJcbiAgICAgICAgaWYgKGlzSnd0KSB7XHJcbiAgICAgICAgICAgIHNldENvb2tpZXMoJ2p3dCcsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiA0OFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0gZWxzZSBzZXRFcnJvcnModG9rZW4pXHJcblxyXG4gICAgICAgIHNldFVzZXJOYW1lKCcnKVxyXG4gICAgICAgIHNldFBhc3N3b3JkKCcnKVxyXG4gICAgICAgIHNldFBhc3N3b3JkMignJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm13XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2luZ1VwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BsYWNlaG9sZGVyJz5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlBhc3N3b3JkIChhZ2Fpbik8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkMn0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQyKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVyclwiPntlcnJvcnN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRCdXR0b259Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9sb2dpbic+0JXRgdGC0Ywg0LDQutC60LDRg9C90YI/PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ1VwUGFnZVxyXG4iXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzZXRDb29raWVzIiwidXNlUm91dGVyIiwiTGluayIsIlNpbmdVcFBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkMiIsInNldFBhc3N3b3JkMiIsImVycm9ycyIsInNldEVycm9ycyIsInJvdXRlciIsIm5leHRCdXR0b24iLCJwYXlsb2FkIiwidG9rZW4iLCJpc0p3dCIsImxlbmd0aCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJzcGxpdCIsIm1heEFnZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account/singup.tsx\n");

/***/ })

});