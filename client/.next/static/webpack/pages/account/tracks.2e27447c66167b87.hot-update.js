"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/tracks",{

/***/ "./components/NewTrackMenu.tsx":
/*!*************************************!*\
  !*** ./components/NewTrackMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar NewTrackMenu = function(param) {\n    var jwt = param.jwt;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), trackName = ref[0], setTrackName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\"), menuShow = ref1[0], setMenuShow = ref1[1];\n    var menuShowToggle = function() {\n        if (menuShow == \"none\") {\n            setMenuShow(\"relative\");\n        } else setMenuShow(\"none\");\n    };\n    var newTrack = function() {\n        if (!jwt) return router.push(\"/account/login\");\n        var payload = {\n            name: trackName\n        };\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            url: \"/tracks\",\n            method: \"POST\",\n            data: payload,\n            headers: {\n                \"Authorization\": \"Bearer \" + jwt\n            }\n        }).then(function(response) {\n            router.reload();\n            return response.data;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"toggler\",\n                onClick: menuShowToggle,\n                children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043D\\u043E\\u0432\\u044B\\u0439 \\u0442\\u0440\\u0435\\u043A\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"new-track\",\n                style: {\n                    position: menuShow\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435\",\n                        value: trackName,\n                        onChange: function(e) {\n                            return setTrackName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: newTrack,\n                        children: \"\\u041D\\u043E\\u0432\\u044B\\u0439 \\u0442\\u0440\\u0435\\u043A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewTrackMenu, \"hD44HIbiRsjAgk6K3m8bN7t1lu4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewTrackMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTrackMenu);\nvar _c;\n$RefreshReg$(_c, \"NewTrackMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld1RyYWNrTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1o7QUFDWTs7QUFFdEMsSUFBTUksWUFBWSxHQUFHLGdCQUFnQjtRQUFkQyxHQUFHLFNBQUhBLEdBQUc7O0lBQ3RCLElBQUlDLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUN4QixJQUFnQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5oRCxTQU1rQixHQUFrQkEsR0FBWSxHQUE5QixFQU5sQixZQU1nQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzVCLElBQThCQSxJQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFQbEQsUUFPaUIsR0FBaUJBLElBQWdCLEdBQWpDLEVBUGpCLFdBTzhCLEdBQUlBLElBQWdCLEdBQXBCO0lBRTFCLElBQU1VLGNBQWMsR0FBRyxXQUFNO1FBQ3pCLElBQUlGLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDcEJDLFdBQVcsQ0FBQyxVQUFVLENBQUM7U0FDMUIsTUFBTUEsV0FBVyxDQUFDLE1BQU0sQ0FBQztLQUM3QjtJQUVELElBQU1FLFFBQVEsR0FBRyxXQUFNO1FBQ25CLElBQUksQ0FBQ1AsR0FBRyxFQUFFLE9BQU9DLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRTlDLElBQUlDLE9BQU8sR0FBRztZQUNWQyxJQUFJLEVBQUVSLFNBQVM7U0FDbEI7UUFFRCxJQUFJUyxNQUFNLEdBQUdkLDRDQUFLLENBQUM7WUFDZmUsR0FBRyxFQUFFLFNBQVM7WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFTCxPQUFPO1lBQ2JNLE9BQU8sRUFBRTtnQkFDTCxlQUFlLEVBQUUsU0FBUyxHQUFHZixHQUFHO2FBQ25DO1NBQ0osQ0FBQyxDQUNHZ0IsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNoQmhCLE1BQU0sQ0FBQ2lCLE1BQU0sRUFBRTtZQUNmLE9BQU9ELFFBQVEsQ0FBQ0gsSUFBSTtTQUN2QixDQUFDO0tBQ1Q7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNLLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTO2dCQUFDQyxPQUFPLEVBQUVmLGNBQWM7MEJBQUUsMEdBQW1COzs7OztxQkFBcUI7MEJBQ3ZFLDhEQUFoQmdCLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxXQUFXO2dCQUFDRyxLQUFLLEVBQUU7b0JBQUNDLFFBQVEsRUFBRXBCLFFBQVE7aUJBQUM7O2tDQUNsRCw4REFBQ3FCLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxXQUFXLEVBQUMsa0RBQVU7d0JBQVNDLEtBQUssRUFBRTFCLFNBQVM7d0JBQUUyQixRQUFRLEVBQUVDLFNBQUFBLENBQUM7bUNBQUkzQixZQUFZLENBQUMyQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFBRztrQ0FDMUcsOERBQVBJLFFBQU07d0JBQUNYLE9BQU8sRUFBRWQsUUFBUTtrQ0FBRSx5REFBVTs7Ozs7NkJBQVM7Ozs7OztxQkFDNUM7O29CQUNQLENBQ0w7Q0FDTDtHQXpDS1IsWUFBWTs7UUFDREQsa0RBQVM7OztBQURwQkMsS0FBQUEsWUFBWTtBQTJDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld1RyYWNrTWVudS50c3g/NGIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5ld1RyYWNrTWVudSA9ICh7and0fTogYW55KSA9PiB7XHJcbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGxldCBbdHJhY2tOYW1lLCBzZXRUcmFja05hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBsZXQgW21lbnVTaG93LCBzZXRNZW51U2hvd10gPSB1c2VTdGF0ZSgnbm9uZScpXHJcblxyXG4gICAgY29uc3QgbWVudVNob3dUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lbnVTaG93ID09ICdub25lJykge1xyXG4gICAgICAgICAgICBzZXRNZW51U2hvdygncmVsYXRpdmUnKVxyXG4gICAgICAgIH0gZWxzZSBzZXRNZW51U2hvdygnbm9uZScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3VHJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFqd3QpIHJldHVybiByb3V0ZXIucHVzaCgnL2FjY291bnQvbG9naW4nKVxyXG5cclxuICAgICAgICBsZXQgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogdHJhY2tOYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmw6ICcvdHJhY2tzJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgand0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZ2dsZXJcIiBvbkNsaWNrPXttZW51U2hvd1RvZ2dsZX0+0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INGC0YDQtdC6PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy10cmFja1wiIHN0eWxlPXt7cG9zaXRpb246IG1lbnVTaG93fX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtScgdmFsdWU9e3RyYWNrTmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0VHJhY2tOYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXdUcmFja30+0J3QvtCy0YvQuSDRgtGA0LXQujwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdUcmFja01lbnU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIk5ld1RyYWNrTWVudSIsImp3dCIsInJvdXRlciIsInRyYWNrTmFtZSIsInNldFRyYWNrTmFtZSIsIm1lbnVTaG93Iiwic2V0TWVudVNob3ciLCJtZW51U2hvd1RvZ2dsZSIsIm5ld1RyYWNrIiwicHVzaCIsInBheWxvYWQiLCJuYW1lIiwicmVzdWx0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWxvYWQiLCJwIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewTrackMenu.tsx\n");

/***/ })

});