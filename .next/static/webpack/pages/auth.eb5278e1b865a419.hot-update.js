"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n // This is the import statement and you can also use ../ />\n\n\n\nimp;\nconst auth = ()=>{\n    _s();\n    const [email, setemail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setpassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [variant, setvariant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    const toggleVariant = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        setvariant((currentVariant)=>currentVariant === \"login\" ? \"register\" : \"login\");\n    }, []);\n    //logic for register\n    const register = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/register\", {\n                name,\n                email,\n                password\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        name,\n        password\n    ]);\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                email,\n                password,\n                redirect: false,\n                callbackUrl: \"/\"\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        password\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full h-full lg:bg-opacity-50\" /*lg means large screen deafult is full black but on large screen its opacity is 50*/ ,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"px-12 py-5 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo.png\",\n                        alt: \"logo\",\n                        className: \"h-12 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-4xl mb-8 font-semibold\",\n                                children: variant === \"login\" ? \"Sign in\" : \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-4\",\n                                children: [\n                                    variant === \"register\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        id: \"Name\",\n                                        label: \"Username\",\n                                        onChange: (ev)=>{\n                                            setname(ev.target.value);\n                                        },\n                                        value: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        id: \"email\",\n                                        label: \"email\",\n                                        onChange: (ev)=>{\n                                            setemail(ev.target.value);\n                                        },\n                                        type: \"email\",\n                                        value: email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        id: \"password\",\n                                        label: \"password\",\n                                        onChange: (ev)=>{\n                                            setpassword(ev.target.value);\n                                        },\n                                        type: \"password\",\n                                        value: password\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: variant === \"login\" ? login : register,\n                                className: \"bg-red-600 text-white py-3 mt-4 rounded-md font-semibold w-full transition hover:bg-red-700\",\n                                children: variant === \"login\" ? \"login\" : \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-neutral-500 mt-12\",\n                                children: [\n                                    variant === \"login\" ? \"New to Netflix?\" : \"Already have an account?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: toggleVariant,\n                                        className: \"text-white ml-1 font-semibold hover:underline-effect cursor-pointer\",\n                                        children: variant === \"login\" ? \"Create an account\" : \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sandesh Bhusal\\\\Desktop\\\\nepflix\\\\pages\\\\auth.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(auth, \"vEqSHeTyN2liT9qtE3qCITRgNm0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtHQTlGTVA7QUErRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC50c3g/NDFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiOyAvLyBUaGlzIGlzIHRoZSBpbXBvcnQgc3RhdGVtZW50IGFuZCB5b3UgY2FuIGFsc28gdXNlIC4uLyAvPlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcFxyXG5cclxuY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0cGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdmFyaWFudCwgc2V0dmFyaWFudF0gPSB1c2VTdGF0ZShcImxvZ2luXCIpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVZhcmlhbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0dmFyaWFudCgoY3VycmVudFZhcmlhbnQpID0+IGN1cnJlbnRWYXJpYW50ID09PSBcImxvZ2luXCIgPyBcInJlZ2lzdGVyXCIgOiBcImxvZ2luXCIpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9sb2dpYyBmb3IgcmVnaXN0ZXJcclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtlbWFpbCwgbmFtZSwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiBmYWxzZSwgLy8gdGhlIHVzZXIgd2lsbCBub3QgYmUgcmVkaXJlY3RlZCB0byBhIGRpZmZlcmVudCBwYWdlIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiAnLydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1bdXJsKCcvaW1hZ2VzL2hlcm8uanBnJyldIGJnLW5vLXJlcGVhdCBiZy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LWZ1bGwgaC1mdWxsIGxnOmJnLW9wYWNpdHktNTBcIiAvKmxnIG1lYW5zIGxhcmdlIHNjcmVlbiBkZWFmdWx0IGlzIGZ1bGwgYmxhY2sgYnV0IG9uIGxhcmdlIHNjcmVlbiBpdHMgb3BhY2l0eSBpcyA1MCovPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJweC0xMiBweS01IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJoLTEyIFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgcHgtMTYgcHktMTYgc2VsZi1jZW50ZXIgbXQtMiBsZzp3LTIvNSBsZzptYXgtdy1tZCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGwgbWItOCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiID8gJ1NpZ24gaW4nIDogJ1JlZ2lzdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJyZWdpc3RlclwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSkgPT4geyBzZXRuYW1lKGV2LnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldjogYW55KSA9PiB7IHNldGVtYWlsKGV2LnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSkgPT4geyBzZXRwYXNzd29yZChldi50YXJnZXQudmFsdWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dmFyaWFudCA9PT0nbG9naW4nPyBsb2dpbiA6IHJlZ2lzdGVyfSBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHRleHQtd2hpdGUgcHktMyBtdC00IHJvdW5kZWQtbWQgZm9udC1zZW1pYm9sZCB3LWZ1bGwgdHJhbnNpdGlvbiBob3ZlcjpiZy1yZWQtNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiID8gXCJsb2dpblwiIDogXCJTaWduIFVwXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC01MDAgbXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcImxvZ2luXCIgPyBcIk5ldyB0byBOZXRmbGl4P1wiIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZVZhcmlhbnR9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWwtMSBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZS1lZmZlY3QgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiID8gXCJDcmVhdGUgYW4gYWNjb3VudFwiIDogXCJTaWduIEluXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyJdLCJuYW1lcyI6WyJJbnB1dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsInNpZ25JbiIsImltcCIsImF1dGgiLCJlbWFpbCIsInNldGVtYWlsIiwibmFtZSIsInNldG5hbWUiLCJwYXNzd29yZCIsInNldHBhc3N3b3JkIiwidmFyaWFudCIsInNldHZhcmlhbnQiLCJ0b2dnbGVWYXJpYW50IiwiY3VycmVudFZhcmlhbnQiLCJyZWdpc3RlciIsInBvc3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n"));

/***/ })

});