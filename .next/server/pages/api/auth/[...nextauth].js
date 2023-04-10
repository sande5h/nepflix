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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            //Add Logic here to authorize user based on credentials\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                // Add logic here to look up the user from the credentials supplied\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // check if user exist\n                if (!user) {\n                    throw new Error(\"Invalid email\");\n                }\n                // check if password is correct\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                // if password is not correct\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid password\");\n                }\n                // if password is correct\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    /*If the expression evaluates to true, it means that \r\n    the code is running in a development environment, \r\n    and if it evaluates to false, it means that the code \r\n    is running in a production or other environment.*/ session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ29CO0FBQ3JCO0FBQ0w7QUFFaEMsaUVBQWVBLHFEQUFRQSxDQUFDO0lBQ3BCSSxXQUFXO1FBQ1BILHNFQUFXQSxDQUFDO1lBQ1JJLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNUQyxPQUFPO29CQUNIQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNWO2dCQUNBQyxVQUFVO29CQUNORixPQUFPO29CQUNQQyxNQUFNO2dCQUNWO1lBQ0o7WUFDQSx1REFBdUQ7WUFDdkQsTUFBTUUsV0FBVUwsV0FBVyxFQUFFO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDL0MsTUFBTSxJQUFJRSxNQUFNLCtCQUErQjtnQkFDbkQsQ0FBQztnQkFFRCxtRUFBbUU7Z0JBQ25FLE1BQU1DLE9BQU8sTUFBTVoscUVBQXdCLENBQUM7b0JBQ3hDYyxPQUFPO3dCQUNIUixPQUFPRCxZQUFZQyxLQUFLO29CQUM1QjtnQkFDSjtnQkFDQSxzQkFBc0I7Z0JBQ3RCLElBQUksQ0FBQ00sTUFBTTtvQkFDUCxNQUFNLElBQUlELE1BQU0saUJBQWlCO2dCQUNyQyxDQUFDO2dCQUVELCtCQUErQjtnQkFDL0IsTUFBTUksb0JBQW9CLE1BQU1kLCtDQUFPQSxDQUFDSSxZQUFZSSxRQUFRLEVBQUVHLEtBQUtJLGNBQWM7Z0JBQ2pGLDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDRCxtQkFBbUI7b0JBQ3BCLE1BQU0sSUFBSUosTUFBTSxvQkFBb0I7Z0JBQ3hDLENBQUM7Z0JBRUQseUJBQXlCO2dCQUN6QixPQUFPQztZQUVYO1FBRUo7S0FFSDtJQUNESyxPQUFPO1FBQ0hDLFFBQVE7SUFDWjtJQUNBQyxPQUFPQyxrQkFBeUI7SUFDaEM7OztvREFHZ0QsR0FFaERDLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLEtBQUs7UUFDREMsUUFBUUosUUFBUUssR0FBRyxDQUFDQyxtQkFBbUI7SUFDM0M7SUFDQUYsUUFBUUosUUFBUUssR0FBRyxDQUFDRSxlQUFlO0FBRXZDLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGliL3ByaXNtYWRiJ1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICAgICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL0FkZCBMb2dpYyBoZXJlIHRvIGF1dGhvcml6ZSB1c2VyIGJhc2VkIG9uIGNyZWRlbnRpYWxzXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgYW5kIHBhc3N3b3JkIHJlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHVzZXIgZXhpc3RcclxuICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHBhc3N3b3JkIGlzIGNvcnJlY3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5oYXNoZWRQYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBwYXNzd29yZCBpcyBub3QgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHBhc3N3b3JkIGlzIGNvcnJlY3RcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIF0sXHJcbiAgICBwYWdlczoge1xyXG4gICAgICAgIHNpZ25JbjogJy9hdXRoJyxcclxuICAgIH0sXHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsIFxyXG4gICAgLypJZiB0aGUgZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gdHJ1ZSwgaXQgbWVhbnMgdGhhdCBcclxuICAgIHRoZSBjb2RlIGlzIHJ1bm5pbmcgaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCwgXHJcbiAgICBhbmQgaWYgaXQgZXZhbHVhdGVzIHRvIGZhbHNlLCBpdCBtZWFucyB0aGF0IHRoZSBjb2RlIFxyXG4gICAgaXMgcnVubmluZyBpbiBhIHByb2R1Y3Rpb24gb3Igb3RoZXIgZW52aXJvbm1lbnQuKi9cclxuXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgICB9LFxyXG4gICAgand0OiB7XHJcbiAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9KV1RfU0VDUkVULFxyXG4gICAgfSxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgLy9UaGUgY29kZSBpcyBjb25maWd1cmF0aW9uIGNvZGUgZm9yIHRoZSBOZXh0QXV0aC5qcyBhdXRoZW50aWNhdGlvbiBsaWJyYXJ5LlxyXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsInByaXNtYWRiIiwiY29tcGFyZSIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzQ29ycmVjdFBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJwYWdlcyIsInNpZ25JbiIsImRlYnVnIiwicHJvY2VzcyIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX0pXVF9TRUNSRVQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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