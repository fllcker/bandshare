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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar NewTrackMenu = function(param) {\n    var jwt = param.jwt;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), trackName = ref[0], setTrackName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showToggle = ref1[0], setShowToggle = ref1[1];\n    var menuShowToggle = function() {\n        setShowToggle(!showToggle);\n    };\n    var newTrack = function() {\n        if (!jwt) return router.push(\"/account/login\");\n        var payload = {\n            name: trackName\n        };\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            url: \"/tracks\",\n            method: \"POST\",\n            data: payload,\n            headers: {\n                \"Authorization\": \"Bearer \" + jwt\n            }\n        }).then(function(response) {\n            router.reload();\n            return response.data;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"toggler\",\n                onClick: menuShowToggle,\n                children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043D\\u043E\\u0432\\u044B\\u0439 \\u0442\\u0440\\u0435\\u043A\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            showToggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"new-track\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435\",\n                        value: trackName,\n                        onChange: function(e) {\n                            return setTrackName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"\\u041A\\u0430\\u0440\\u0442\\u0438\\u043D\\u043A\\u0430\",\n                        value: trackName,\n                        onChange: function(e) {\n                            return setTrackName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: newTrack,\n                        children: \"\\u041D\\u043E\\u0432\\u044B\\u0439 \\u0442\\u0440\\u0435\\u043A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\components\\\\NewTrackMenu.tsx\",\n                lineNumber: 42,\n                columnNumber: 21\n            }, _this) : null\n        ]\n    }, void 0, true);\n};\n_s(NewTrackMenu, \"21dPIzL30LTtSPtrYMA5HObEh9U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewTrackMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTrackMenu);\nvar _c;\n$RefreshReg$(_c, \"NewTrackMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld1RyYWNrTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1o7QUFDWTs7QUFFdEMsSUFBTUksWUFBWSxHQUFHLGdCQUFnQjtRQUFkQyxHQUFHLFNBQUhBLEdBQUc7O0lBQ3RCLElBQUlDLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUN4QixJQUFnQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5oRCxTQU1rQixHQUFrQkEsR0FBWSxHQUE5QixFQU5sQixZQU1nQyxHQUFJQSxHQUFZLEdBQWhCO0lBRTVCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUnJELFVBUW1CLEdBQW1CQSxJQUFlLEdBQWxDLEVBUm5CLGFBUWtDLEdBQUlBLElBQWUsR0FBbkI7SUFFOUIsSUFBTVUsY0FBYyxHQUFHLFdBQU07UUFDekJELGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7S0FDN0I7SUFFRCxJQUFNRyxRQUFRLEdBQUcsV0FBTTtRQUNuQixJQUFJLENBQUNQLEdBQUcsRUFBRSxPQUFPQyxNQUFNLENBQUNPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUU5QyxJQUFJQyxPQUFPLEdBQUc7WUFDVkMsSUFBSSxFQUFFUixTQUFTO1NBQ2xCO1FBRUQsSUFBSVMsTUFBTSxHQUFHZCw0Q0FBSyxDQUFDO1lBQ2ZlLEdBQUcsRUFBRSxTQUFTO1lBQ2RDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRUwsT0FBTztZQUNiTSxPQUFPLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLFNBQVMsR0FBR2YsR0FBRzthQUNuQztTQUNKLENBQUMsQ0FDR2dCLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7WUFDaEJoQixNQUFNLENBQUNpQixNQUFNLEVBQUU7WUFDZixPQUFPRCxRQUFRLENBQUNILElBQUk7U0FDdkIsQ0FBQztLQUNUO0lBRUQscUJBQ0k7OzBCQUNJLDhEQUFDSyxHQUFDO2dCQUFDQyxTQUFTLEVBQUMsU0FBUztnQkFBQ0MsT0FBTyxFQUFFZixjQUFjOzBCQUFFLDBHQUFtQjs7Ozs7cUJBQXFCO1lBR25FRixVQUFQLGlCQUNOLDhEQUFDa0IsS0FBRztnQkFBQ0YsU0FBUyxFQUFDLFdBQVc7O2tDQUN0Qiw4REFBQ0csT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFdBQVcsRUFBQyxrREFBVTt3QkFBU0MsS0FBSyxFQUFFeEIsU0FBUzt3QkFBRXlCLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzttQ0FBSXpCLFlBQVksQ0FBQ3lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7eUJBQUE7Ozs7OzZCQUFHO2tDQUMxRyw4REFBUEgsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFdBQVcsRUFBQyxrREFBVTt3QkFBU0MsS0FBSyxFQUFFeEIsU0FBUzt3QkFBRXlCLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzttQ0FBSXpCLFlBQVksQ0FBQ3lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7eUJBQUE7Ozs7OzZCQUFHO2tDQUMxRyw4REFBUEksUUFBTTt3QkFBQ1QsT0FBTyxFQUFFZCxRQUFRO2tDQUFFLHlEQUFVOzs7Ozs2QkFBUzs7Ozs7O3FCQUM1QyxHQUNKLElBQUk7O29CQUdmLENBQ0w7Q0FDTDtHQS9DS1IsWUFBWTs7UUFDREQsa0RBQVM7OztBQURwQkMsS0FBQUEsWUFBWTtBQWlEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld1RyYWNrTWVudS50c3g/NGIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5ld1RyYWNrTWVudSA9ICh7and0fTogYW55KSA9PiB7XHJcbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGxldCBbdHJhY2tOYW1lLCBzZXRUcmFja05hbWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgbGV0IFtzaG93VG9nZ2xlLCBzZXRTaG93VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG1lbnVTaG93VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dUb2dnbGUoIXNob3dUb2dnbGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3VHJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFqd3QpIHJldHVybiByb3V0ZXIucHVzaCgnL2FjY291bnQvbG9naW4nKVxyXG5cclxuICAgICAgICBsZXQgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogdHJhY2tOYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmw6ICcvdHJhY2tzJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgand0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZ2dsZXJcIiBvbkNsaWNrPXttZW51U2hvd1RvZ2dsZX0+0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INGC0YDQtdC6PC9wPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd1RvZ2dsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctdHJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUnIHZhbHVlPXt0cmFja05hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFRyYWNrTmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J9Ca0LDRgNGC0LjQvdC60LAnIHZhbHVlPXt0cmFja05hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFRyYWNrTmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXdUcmFja30+0J3QvtCy0YvQuSDRgtGA0LXQujwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1RyYWNrTWVudTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiTmV3VHJhY2tNZW51Iiwiand0Iiwicm91dGVyIiwidHJhY2tOYW1lIiwic2V0VHJhY2tOYW1lIiwic2hvd1RvZ2dsZSIsInNldFNob3dUb2dnbGUiLCJtZW51U2hvd1RvZ2dsZSIsIm5ld1RyYWNrIiwicHVzaCIsInBheWxvYWQiLCJuYW1lIiwicmVzdWx0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWxvYWQiLCJwIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewTrackMenu.tsx\n");

/***/ })

});