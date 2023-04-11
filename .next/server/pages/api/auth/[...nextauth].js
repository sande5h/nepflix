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

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

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

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: \"a38bc1e93f03213c808b\",\n            clientSecret: \"e81c9ed1a9286b0a5e28d991b63e509315a4801a\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRECT || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            //Add Logic here to authorize user based on credentials\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                // Add logic here to look up the user from the credentials supplied\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // check if user exist\n                if (!user) {\n                    throw new Error(\"Invalid email\");\n                }\n                // check if password is correct\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                // if password is not correct\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid password\");\n                }\n                // if password is correct\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    /*If the expression evaluates to true, it means that \r\n    the code is running in a development environment, \r\n    and if it evaluates to false, it means that the code \r\n    is running in a production or other environment.*/ adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__.PrismaAdapter)(_lib_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ29CO0FBQ3JCO0FBQ0w7QUFFd0I7QUFDQTtBQUVFO0FBRzFELGlFQUFlQSxxREFBUUEsQ0FBQztJQUNwQk8sV0FBVztRQUNQSCxpRUFBY0EsQ0FBQztZQUNYSSxVQUFVO1lBQ1ZDLGNBQWM7UUFDbEI7UUFDQUosaUVBQWNBLENBQUM7WUFDWEcsVUFBVUUsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0gsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRSxxQkFBcUIsSUFBSTtRQUN2RDtRQUVBWixzRUFBV0EsQ0FBQztZQUNSYSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsT0FBTztvQkFDSEMsT0FBTztvQkFDUEMsTUFBTTtnQkFDVjtnQkFDQUMsVUFBVTtvQkFDTkYsT0FBTztvQkFDUEMsTUFBTTtnQkFDVjtZQUNKO1lBQ0EsdURBQXVEO1lBQ3ZELE1BQU1FLFdBQVVMLFdBQVcsRUFBRTtnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQy9DLE1BQU0sSUFBSUUsTUFBTSwrQkFBK0I7Z0JBQ25ELENBQUM7Z0JBRUQsbUVBQW1FO2dCQUNuRSxNQUFNQyxPQUFPLE1BQU1yQixxRUFBd0IsQ0FBQztvQkFDeEN1QixPQUFPO3dCQUNIUixPQUFPRCxZQUFZQyxLQUFLO29CQUM1QjtnQkFDSjtnQkFDQSxzQkFBc0I7Z0JBQ3RCLElBQUksQ0FBQ00sTUFBTTtvQkFDUCxNQUFNLElBQUlELE1BQU0saUJBQWlCO2dCQUNyQyxDQUFDO2dCQUVELCtCQUErQjtnQkFDL0IsTUFBTUksb0JBQW9CLE1BQU12QiwrQ0FBT0EsQ0FBQ2EsWUFBWUksUUFBUSxFQUFFRyxLQUFLSSxjQUFjO2dCQUNqRiw2QkFBNkI7Z0JBQzdCLElBQUksQ0FBQ0QsbUJBQW1CO29CQUNwQixNQUFNLElBQUlKLE1BQU0sb0JBQW9CO2dCQUN4QyxDQUFDO2dCQUVELHlCQUF5QjtnQkFDekIsT0FBT0M7WUFFWDtRQUVKO0tBRUg7SUFDREssT0FBTztRQUNIQyxRQUFRO0lBQ1o7SUFDQUMsT0FBT3BCLGtCQUF5QjtJQUNoQzs7O29EQUdnRCxHQUVoRHFCLFNBQVN6Qix3RUFBYUEsQ0FBQ0oscURBQVFBO0lBRS9COEIsU0FBUztRQUNMQyxVQUFVO0lBQ2Q7SUFDQUMsS0FBSztRQUNEQyxRQUFRekIsUUFBUUMsR0FBRyxDQUFDeUIsbUJBQW1CO0lBQzNDO0lBQ0FELFFBQVF6QixRQUFRQyxHQUFHLENBQUMwQixlQUFlO0FBRXZDLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGliL3ByaXNtYWRiJ1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0J1xyXG5cclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBcImEzOGJjMWU5M2YwMzIxM2M4MDhiXCIsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogXCJlODFjOWVkMWE5Mjg2YjBhNWUyOGQ5OTFiNjNlNTA5MzE1YTQ4MDFhXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIHx8ICcnLFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVDVCB8fCAnJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vQWRkIExvZ2ljIGhlcmUgdG8gYXV0aG9yaXplIHVzZXIgYmFzZWQgb24gY3JlZGVudGlhbHNcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBleGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgcGFzc3dvcmQgaXMgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLmhhc2hlZFBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHBhc3N3b3JkIGlzIG5vdCBjb3JyZWN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgcGFzc3dvcmQgaXMgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgXSxcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgc2lnbkluOiAnL2F1dGgnLFxyXG4gICAgfSxcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgIC8qSWYgdGhlIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUsIGl0IG1lYW5zIHRoYXQgXHJcbiAgICB0aGUgY29kZSBpcyBydW5uaW5nIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQsIFxyXG4gICAgYW5kIGlmIGl0IGV2YWx1YXRlcyB0byBmYWxzZSwgaXQgbWVhbnMgdGhhdCB0aGUgY29kZSBcclxuICAgIGlzIHJ1bm5pbmcgaW4gYSBwcm9kdWN0aW9uIG9yIG90aGVyIGVudmlyb25tZW50LiovXHJcblxyXG4gICAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWFkYiksXHJcblxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiAnand0J1xyXG4gICAgfSxcclxuICAgIGp3dDoge1xyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICAgIC8vVGhlIGNvZGUgaXMgY29uZmlndXJhdGlvbiBjb2RlIGZvciB0aGUgTmV4dEF1dGguanMgYXV0aGVudGljYXRpb24gbGlicmFyeS5cclxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJwcmlzbWFkYiIsImNvbXBhcmUiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFQ1QiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc0NvcnJlY3RQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwicGFnZXMiLCJzaWduSW4iLCJkZWJ1ZyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJzZWNyZXQiLCJORVhUQVVUSF9KV1RfU0VDUkVUIiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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