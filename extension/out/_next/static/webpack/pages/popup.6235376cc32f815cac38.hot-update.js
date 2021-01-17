webpackHotUpdate_N_E("pages/popup",{

/***/ "./src/components/WorkTab.tsx":
/*!************************************!*\
  !*** ./src/components/WorkTab.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_PopupContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/PopupContext */ \"./src/contexts/PopupContext.ts\");\n/* harmony import */ var _ActiveTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActiveTimer */ \"./src/components/ActiveTimer.tsx\");\n/* harmony import */ var _EditableTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditableTimer */ \"./src/components/EditableTimer.tsx\");\n/* harmony import */ var _PausedTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PausedTimer */ \"./src/components/PausedTimer.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/derekni/Coding Projects/Chrome Extensions/minto/src/components/WorkTab.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar WorkTab = function WorkTab() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_PopupContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      workState = _useContext.workState,\n      updateWorkState = _useContext.updateWorkState,\n      workLength = _useContext.workLength;\n\n  var stopWork = function stopWork() {\n    var updatedWorkState = {\n      status: \"idle\"\n    };\n    updateWorkState(updatedWorkState);\n\n    if (true) {\n      return;\n    }\n\n    chrome.alarms.clearAll();\n  };\n\n  var pauseWork = function pauseWork() {\n    if (workState.status !== \"working\") return;\n    var updatedPausedTimeLeft = workState.workEndTime - Date.now();\n    var updatedWorkState = {\n      status: \"paused\",\n      pausedTimeLeft: updatedPausedTimeLeft\n    };\n    updateWorkState(updatedWorkState);\n\n    if (true) {\n      return;\n    }\n\n    chrome.alarms.clearAll();\n  };\n\n  var startWork = function startWork() {\n    var workEndTime = null;\n\n    if (workState.status === \"idle\") {\n      workEndTime = Date.now() + workLength;\n    } else if (workState.status === \"paused\") {\n      workEndTime = Date.now() + workState.pausedTimeLeft;\n    }\n\n    if (workEndTime === null) {\n      throw new Error(\"tried to start work when not idle or paused\");\n    }\n\n    var updatedWorkState = {\n      status: \"working\",\n      workEndTime: workEndTime\n    };\n    updateWorkState(updatedWorkState);\n\n    if (true) {\n      return;\n    }\n\n    var alarmName = \"workFor\" + Math.floor(workLength / 60000);\n    chrome.alarms.create(alarmName, {\n      when: workEndTime\n    });\n    window.close();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col flex-1 items-center justify-center bg-gray-50\",\n    children: [workState.status === \"idle\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_EditableTimer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-green-400 text-white font-semibold py-1 shadow hover:shadow-lg transition-all duration-200 w-24 rounded\",\n        onClick: startWork,\n        children: \"Work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true), workState.status === \"working\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ActiveTimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        workEndTime: workState.workEndTime\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-gray-500 text-white font-semibold w-24 py-1 shadow hover:shadow-lg transition-all duration-200 rounded mb-1\",\n        onClick: pauseWork,\n        children: \"Pause\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-red-500 text-white font-semibold w-24 py-1 shadow hover:shadow-lg transition-all duration-200 rounded\",\n        onClick: stopWork,\n        children: \"Stop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true), workState.status === \"paused\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_PausedTimer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        pausedTimeLeft: workState.pausedTimeLeft\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-green-500 text-white font-semibold w-24 py-1 shadow hover:shadow-lg transition-all duration-200 rounded mb-1\",\n        onClick: startWork,\n        children: \"Resume\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-red-500 text-white font-semibold w-24 py-1 shadow hover:shadow-lg transition-all duration-200 rounded\",\n        onClick: stopWork,\n        children: \"Reset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WorkTab, \"ktfNOpxeoEmROvrkdbFSYhK0hE8=\");\n\n_c = WorkTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkTab);\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkTab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29ya1RhYi50c3g/MTVkMiJdLCJuYW1lcyI6WyJXb3JrVGFiIiwidXNlQ29udGV4dCIsIlBvcHVwQ29udGV4dCIsIndvcmtTdGF0ZSIsInVwZGF0ZVdvcmtTdGF0ZSIsIndvcmtMZW5ndGgiLCJzdG9wV29yayIsInVwZGF0ZWRXb3JrU3RhdGUiLCJzdGF0dXMiLCJjaHJvbWUiLCJhbGFybXMiLCJjbGVhckFsbCIsInBhdXNlV29yayIsInVwZGF0ZWRQYXVzZWRUaW1lTGVmdCIsIndvcmtFbmRUaW1lIiwiRGF0ZSIsIm5vdyIsInBhdXNlZFRpbWVMZWZ0Iiwic3RhcnRXb3JrIiwiRXJyb3IiLCJhbGFybU5hbWUiLCJNYXRoIiwiZmxvb3IiLCJjcmVhdGUiLCJ3aGVuIiwid2luZG93IiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxvQkFDK0JDLHdEQUFVLENBQUNDLDhEQUFELENBRHpDO0FBQUEsTUFDWkMsU0FEWSxlQUNaQSxTQURZO0FBQUEsTUFDREMsZUFEQyxlQUNEQSxlQURDO0FBQUEsTUFDZ0JDLFVBRGhCLGVBQ2dCQSxVQURoQjs7QUFHcEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxnQkFBMkIsR0FBRztBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFwQztBQUNBSixtQkFBZSxDQUFDRyxnQkFBRCxDQUFmOztBQUVBLGNBQTRDO0FBQzFDO0FBQ0Q7O0FBQ0RFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkO0FBQ0QsR0FSRDs7QUFVQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUlULFNBQVMsQ0FBQ0ssTUFBVixLQUFxQixTQUF6QixFQUFvQztBQUNwQyxRQUFNSyxxQkFB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Li9zcmMvY29tcG9uZW50cy9Xb3JrVGFiLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3B1cENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL1BvcHVwQ29udGV4dFwiO1xuaW1wb3J0IHsgV29ya1N0YXRlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQWN0aXZlVGltZXIgZnJvbSBcIi4vQWN0aXZlVGltZXJcIjtcbmltcG9ydCBFZGl0YWJsZVRpbWVyIGZyb20gXCIuL0VkaXRhYmxlVGltZXJcIjtcbmltcG9ydCBQYXVzZWRUaW1lciBmcm9tIFwiLi9QYXVzZWRUaW1lclwiO1xuXG5jb25zdCBXb3JrVGFiID0gKCkgPT4ge1xuICBjb25zdCB7IHdvcmtTdGF0ZSwgdXBkYXRlV29ya1N0YXRlLCB3b3JrTGVuZ3RoIH0gPSB1c2VDb250ZXh0KFBvcHVwQ29udGV4dCk7XG5cbiAgY29uc3Qgc3RvcFdvcmsgPSAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFdvcmtTdGF0ZTogV29ya1N0YXRlID0geyBzdGF0dXM6IFwiaWRsZVwiIH07XG4gICAgdXBkYXRlV29ya1N0YXRlKHVwZGF0ZWRXb3JrU3RhdGUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hyb21lLmFsYXJtcy5jbGVhckFsbCgpO1xuICB9O1xuXG4gIGNvbnN0IHBhdXNlV29yayA9ICgpID0+IHtcbiAgICBpZiAod29ya1N0YXRlLnN0YXR1cyAhPT0gXCJ3b3JraW5nXCIpIHJldHVybjtcbiAgICBjb25zdCB1cGRhdGVkUGF1c2VkVGltZUxlZnQgPSB3b3JrU3RhdGUud29ya0VuZFRpbWUgLSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHVwZGF0ZWRXb3JrU3RhdGU6IFdvcmtTdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogXCJwYXVzZWRcIixcbiAgICAgIHBhdXNlZFRpbWVMZWZ0OiB1cGRhdGVkUGF1c2VkVGltZUxlZnQsXG4gICAgfTtcbiAgICB1cGRhdGVXb3JrU3RhdGUodXBkYXRlZFdvcmtTdGF0ZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaHJvbWUuYWxhcm1zLmNsZWFyQWxsKCk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRXb3JrID0gKCkgPT4ge1xuICAgIGxldCB3b3JrRW5kVGltZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHdvcmtTdGF0ZS5zdGF0dXMgPT09IFwiaWRsZVwiKSB7XG4gICAgICB3b3JrRW5kVGltZSA9IERhdGUubm93KCkgKyB3b3JrTGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAod29ya1N0YXRlLnN0YXR1cyA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgd29ya0VuZFRpbWUgPSBEYXRlLm5vdygpICsgd29ya1N0YXRlLnBhdXNlZFRpbWVMZWZ0O1xuICAgIH1cbiAgICBpZiAod29ya0VuZFRpbWUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInRyaWVkIHRvIHN0YXJ0IHdvcmsgd2hlbiBub3QgaWRsZSBvciBwYXVzZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFdvcmtTdGF0ZTogV29ya1N0YXRlID0geyBzdGF0dXM6IFwid29ya2luZ1wiLCB3b3JrRW5kVGltZSB9O1xuICAgIHVwZGF0ZVdvcmtTdGF0ZSh1cGRhdGVkV29ya1N0YXRlKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFsYXJtTmFtZSA9IFwid29ya0ZvclwiICsgTWF0aC5mbG9vcih3b3JrTGVuZ3RoIC8gNjBfMDAwKTtcbiAgICBjaHJvbWUuYWxhcm1zLmNyZWF0ZShhbGFybU5hbWUsIHsgd2hlbjogd29ya0VuZFRpbWUgfSk7XG5cbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTBcIj5cbiAgICAgIHt3b3JrU3RhdGUuc3RhdHVzID09PSBcImlkbGVcIiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEVkaXRhYmxlVGltZXIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTEgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdy0yNCByb3VuZGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0V29ya31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBXb3JrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHt3b3JrU3RhdGUuc3RhdHVzID09PSBcIndvcmtpbmdcIiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEFjdGl2ZVRpbWVyIHdvcmtFbmRUaW1lPXt3b3JrU3RhdGUud29ya0VuZFRpbWV9IC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHctMjQgcHktMSBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCByb3VuZGVkIG1iLTFcIlxuICAgICAgICAgICAgb25DbGljaz17cGF1c2VXb3JrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhdXNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdy0yNCBweS0xIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgb25DbGljaz17c3RvcFdvcmt9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RvcFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7d29ya1N0YXRlLnN0YXR1cyA9PT0gXCJwYXVzZWRcIiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFBhdXNlZFRpbWVyIHBhdXNlZFRpbWVMZWZ0PXt3b3JrU3RhdGUucGF1c2VkVGltZUxlZnR9IC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB3LTI0IHB5LTEgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgcm91bmRlZCBtYi0xXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0V29ya31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB3LTI0IHB5LTEgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgcm91bmRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzdG9wV29ya31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXNldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrVGFiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WorkTab.tsx\n");

/***/ })

})