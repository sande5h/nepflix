"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); //to bypass too many prisma clent running\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUEsSUFBZ0IseUNBQXlDO0FBQzNHLElBQUlJLEtBQXFDLEVBQUVGLEVBQXlCRDtBQUdwRSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5wcmlzbWFkYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7ICAgICAgICAgICAgIC8vdG8gYnlwYXNzIHRvbyBtYW55IHByaXNtYSBjbGVudCBydW5uaW5nXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            //Add Logic here to authorize user based on credentials\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                console.log(credentials.password);\n                console.log(credentials.email);\n                // Add logic here to look up the user from the credentials supplied\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // check if user exist\n                console.log(user);\n                if (!user) {\n                    throw new Error(\"Invalid email\");\n                }\n                // check if password is correct\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                // if password is not correct\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid password\");\n                }\n                // if password is correct\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    /*If the expression evaluates to true, it means that \r\n    the code is running in a development environment, \r\n    and if it evaluates to false, it means that the code \r\n    is running in a production or other environment.*/ session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ29CO0FBQ3JCO0FBQ0w7QUFFaEMsaUVBQWVBLHFEQUFRQSxDQUFDO0lBQ3BCSSxXQUFXO1FBQ1BILHNFQUFXQSxDQUFDO1lBQ1JJLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNUQyxPQUFPO29CQUNIQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNWO2dCQUNBQyxVQUFVO29CQUNORixPQUFPO29CQUNQQyxNQUFNO2dCQUNWO1lBQ0o7WUFDQSx1REFBdUQ7WUFDdkQsTUFBTUUsV0FBVUwsV0FBVyxFQUFFO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDL0MsTUFBTSxJQUFJRSxNQUFNLCtCQUErQjtnQkFDbkQsQ0FBQztnQkFDREMsUUFBUUMsR0FBRyxDQUFDUixZQUFZSSxRQUFRO2dCQUNoQ0csUUFBUUMsR0FBRyxDQUFDUixZQUFZQyxLQUFLO2dCQUU3QixtRUFBbUU7Z0JBQ25FLE1BQU1RLE9BQU8sTUFBTWQscUVBQXdCLENBQUM7b0JBQ3hDZ0IsT0FBTzt3QkFDSFYsT0FBT0QsWUFBWUMsS0FBSztvQkFDNUI7Z0JBQ0o7Z0JBQ0Esc0JBQXNCO2dCQUN0Qk0sUUFBUUMsR0FBRyxDQUFDQztnQkFDWixJQUFJLENBQUNBLE1BQU07b0JBQ1AsTUFBTSxJQUFJSCxNQUFNLGlCQUFpQjtnQkFDckMsQ0FBQztnQkFFRCwrQkFBK0I7Z0JBQy9CLE1BQU1NLG9CQUFvQixNQUFNaEIsK0NBQU9BLENBQUNJLFlBQVlJLFFBQVEsRUFBRUssS0FBS0ksY0FBYztnQkFDakYsNkJBQTZCO2dCQUM3QixJQUFJLENBQUNELG1CQUFtQjtvQkFDcEIsTUFBTSxJQUFJTixNQUFNLG9CQUFvQjtnQkFDeEMsQ0FBQztnQkFFRCx5QkFBeUI7Z0JBQ3pCLE9BQU9HO1lBRVg7UUFFSjtLQUVIO0lBQ0RLLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLE9BQU9DLGtCQUF5QjtJQUNoQzs7O29EQUdnRCxHQUVoREMsU0FBUztRQUNMQyxVQUFVO0lBQ2Q7SUFDQUMsS0FBSztRQUNEQyxRQUFRSixRQUFRSyxHQUFHLENBQUNDLG1CQUFtQjtJQUMzQztJQUNBRixRQUFRSixRQUFRSyxHQUFHLENBQUNFLGVBQWU7QUFFdkMsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInXHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vQWRkIExvZ2ljIGhlcmUgdG8gYXV0aG9yaXplIHVzZXIgYmFzZWQgb24gY3JlZGVudGlhbHNcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZGVudGlhbHMuZW1haWwpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHVzZXIgZXhpc3RcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBwYXNzd29yZCBpcyBjb3JyZWN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIuaGFzaGVkUGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgcGFzc3dvcmQgaXMgbm90IGNvcnJlY3RcclxuICAgICAgICAgICAgICAgIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBwYXNzd29yZCBpcyBjb3JyZWN0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBdLFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46ICcvYXV0aCcsXHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLCBcclxuICAgIC8qSWYgdGhlIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUsIGl0IG1lYW5zIHRoYXQgXHJcbiAgICB0aGUgY29kZSBpcyBydW5uaW5nIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQsIFxyXG4gICAgYW5kIGlmIGl0IGV2YWx1YXRlcyB0byBmYWxzZSwgaXQgbWVhbnMgdGhhdCB0aGUgY29kZSBcclxuICAgIGlzIHJ1bm5pbmcgaW4gYSBwcm9kdWN0aW9uIG9yIG90aGVyIGVudmlyb25tZW50LiovXHJcblxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiAnand0J1xyXG4gICAgfSxcclxuICAgIGp3dDoge1xyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICAgIC8vVGhlIGNvZGUgaXMgY29uZmlndXJhdGlvbiBjb2RlIGZvciB0aGUgTmV4dEF1dGguanMgYXV0aGVudGljYXRpb24gbGlicmFyeS5cclxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJwcmlzbWFkYiIsImNvbXBhcmUiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInBhZ2VzIiwic2lnbkluIiwiZGVidWciLCJwcm9jZXNzIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwiand0Iiwic2VjcmV0IiwiZW52IiwiTkVYVEFVVEhfSldUX1NFQ1JFVCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();