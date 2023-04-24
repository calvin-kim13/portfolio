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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/context/context */ \"./src/context/context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/calvinkim/Desktop/web_dev/portfolio/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/calvinkim/Desktop/web_dev/portfolio/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ1o7QUFFL0IsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNILDREQUFLO2tCQUNKLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ3RCLENBQ1I7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXNjb3ctcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zcmMvY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YXRlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RhdGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst type = {\n    NAV: \"NAV\",\n    SHOWPROJECT: \"SHOWPROJECT\",\n    ACTIVEPROJECT: \"ACTIVEPROJECT\"\n};\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case type.NAV:\n            return {\n                ...state,\n                nav: action.payload\n            };\n        case type.SHOWPROJECT:\n            return {\n                ...state,\n                showProject: !state.showProject\n            };\n        case type.ACTIVEPROJECT:\n            return {\n                ...state,\n                activeProject: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst State = (props)=>{\n    const initialState = {\n        nav: null,\n        color: \"blue\",\n        showProject: false,\n        activeProject: null\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const openSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: type.NAV,\n            payload: value\n        });\n    }, []);\n    const closeSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: type.NAV,\n            payload: null\n        });\n    }, []);\n    // Project view\n    const showProjectFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: type.SHOWPROJECT\n        });\n    }, []);\n    const activeProjectFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: type.ACTIVEPROJECT,\n            payload: value\n        });\n    }, []);\n    const { color , nav , activeProject , showProject  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            openSection: openSection,\n            closeSection: closeSection,\n            nav,\n            color,\n            // project\n            showProjectFunction: showProjectFunction,\n            activeProjectFunction: activeProjectFunction,\n            activeProject,\n            showProject\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/calvinkim/Desktop/web_dev/portfolio/src/context/context.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hc2Nvdy1yZWFjdC8uL3NyYy9jb250ZXh0L2NvbnRleHQuanM/NDZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuICBOQVY6IFwiTkFWXCIsXHJcbiAgU0hPV1BST0pFQ1Q6IFwiU0hPV1BST0pFQ1RcIixcclxuICBBQ1RJVkVQUk9KRUNUOiBcIkFDVElWRVBST0pFQ1RcIixcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGUuTkFWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGUuU0hPV1BST0pFQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2hvd1Byb2plY3Q6ICFzdGF0ZS5zaG93UHJvamVjdCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZS5BQ1RJVkVQUk9KRUNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVByb2plY3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFN0YXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbmF2OiBudWxsLFxyXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgc2hvd1Byb2plY3Q6IGZhbHNlLFxyXG4gICAgYWN0aXZlUHJvamVjdDogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBvcGVuU2VjdGlvbiA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB0eXBlLk5BVixcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlU2VjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogdHlwZS5OQVYsXHJcbiAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFByb2plY3Qgdmlld1xyXG4gIGNvbnN0IHNob3dQcm9qZWN0RnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IHR5cGUuU0hPV1BST0pFQ1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3RGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB0eXBlLkFDVElWRVBST0pFQ1QsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IGNvbG9yLCBuYXYsIGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgb3BlblNlY3Rpb246IG9wZW5TZWN0aW9uLFxyXG4gICAgICAgIGNsb3NlU2VjdGlvbjogY2xvc2VTZWN0aW9uLFxyXG4gICAgICAgIG5hdixcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICAvLyBwcm9qZWN0XHJcbiAgICAgICAgc2hvd1Byb2plY3RGdW5jdGlvbjogc2hvd1Byb2plY3RGdW5jdGlvbixcclxuICAgICAgICBhY3RpdmVQcm9qZWN0RnVuY3Rpb246IGFjdGl2ZVByb2plY3RGdW5jdGlvbixcclxuICAgICAgICBhY3RpdmVQcm9qZWN0LFxyXG4gICAgICAgIHNob3dQcm9qZWN0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xyXG5cclxuZXhwb3J0IHsgQ29udGV4dCB9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsInR5cGUiLCJOQVYiLCJTSE9XUFJPSkVDVCIsIkFDVElWRVBST0pFQ1QiLCJDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmF2IiwicGF5bG9hZCIsInNob3dQcm9qZWN0IiwiYWN0aXZlUHJvamVjdCIsIlN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJjb2xvciIsImRpc3BhdGNoIiwib3BlblNlY3Rpb24iLCJ2YWx1ZSIsImNsb3NlU2VjdGlvbiIsInNob3dQcm9qZWN0RnVuY3Rpb24iLCJhY3RpdmVQcm9qZWN0RnVuY3Rpb24iLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();