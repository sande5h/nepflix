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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
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

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); //to bypass too many prisma clent running\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUEsSUFBZ0IseUNBQXlDO0FBQzNHLElBQUlJLEtBQXFDLEVBQUVGLEVBQXlCRDtBQUdwRSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5wcmlzbWFkYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7ICAgICAgICAgICAgIC8vdG8gYnlwYXNzIHRvbyBtYW55IHByaXNtYSBjbGVudCBydW5uaW5nXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\nasync function handler(req, res) {\n    // check if method is POST and return error if not\n    if (req.method !== \"POST\") {\n        return res.status(405).end().json({\n            message: \"Invalid method\"\n        });\n    }\n    try {\n        // get email and password from request body\n        const { email , name , password  } = req.body;\n        // check if email and password exist\n        const existinguser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email: email\n            }\n        });\n        // check if user exist with email\n        if (existinguser) {\n            return res.status(405).json({\n                message: \"Email Taken\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);\n        // create user\n        const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                email,\n                hashedPassword,\n                name,\n                image: \"\",\n                emailVerified: new Date()\n            }\n        });\n        return res.status(200).json(user);\n    } catch (error) {\n        return res.status(400).end().json({\n            message: \"Invalid request\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUVVO0FBRXZCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDN0Usa0RBQWtEO0lBQ2xELElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLEdBQUdDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWlCO0lBQ2xFLENBQUM7SUFFRCxJQUFJO1FBQ0EsMkNBQTJDO1FBQzNDLE1BQU0sRUFBRUMsTUFBSyxFQUFDQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFHVCxJQUFJVSxJQUFJO1FBRXpDLG9DQUFvQztRQUNwQyxNQUFNQyxlQUFlLE1BQU1iLHFFQUF3QixDQUFDO1lBQ2hEZ0IsT0FBTztnQkFDSFAsT0FBT0E7WUFDWDtRQUNKO1FBQ0EsaUNBQWlDO1FBQ2pDLElBQUlJLGNBQWM7WUFDZCxPQUFPVixJQUFJRSxNQUFNLENBQUMsS0FBS0UsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWM7UUFDekQsQ0FBQztRQUNELE1BQU1TLGlCQUFpQixNQUFNbEIsa0RBQVcsQ0FBQ1ksVUFBVTtRQUVuRCxjQUFjO1FBQ2QsTUFBTUcsT0FBTyxNQUFNZCxpRUFBb0IsQ0FBQztZQUNwQ29CLE1BQU07Z0JBQ0ZYO2dCQUNBUTtnQkFDQVA7Z0JBQ0FXLE9BQU87Z0JBQ1BDLGVBQWUsSUFBSUM7WUFFdkI7UUFDSjtRQUNBLE9BQU9wQixJQUFJRSxNQUFNLENBQUMsS0FBS0UsSUFBSSxDQUFDTztJQUVoQyxFQUNBLE9BQU9VLE9BQU87UUFDVixPQUFPckIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUcsR0FBR0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBa0I7SUFDbkU7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL2FwaS9yZWdpc3Rlci50cz83ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgLy8gY2hlY2sgaWYgbWV0aG9kIGlzIFBPU1QgYW5kIHJldHVybiBlcnJvciBpZiBub3RcclxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBtZXRob2QnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gZ2V0IGVtYWlsIGFuZCBwYXNzd29yZCBmcm9tIHJlcXVlc3QgYm9keVxyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsbmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGVtYWlsIGFuZCBwYXNzd29yZCBleGlzdFxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5ndXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBleGlzdCB3aXRoIGVtYWlsXHJcbiAgICAgICAgaWYgKGV4aXN0aW5ndXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgVGFrZW4nIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMik7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcclxuXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCByZXF1ZXN0JyB9KTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiYmNyeXB0IiwicHJpc21hZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwianNvbiIsIm1lc3NhZ2UiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJleGlzdGluZ3VzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiY3JlYXRlIiwiZGF0YSIsImltYWdlIiwiZW1haWxWZXJpZmllZCIsIkRhdGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();