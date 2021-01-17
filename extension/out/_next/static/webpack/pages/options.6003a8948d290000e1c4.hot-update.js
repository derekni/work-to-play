webpackHotUpdate_N_E("pages/options",{

/***/ "./src/components/BlockedSitesList.tsx":
/*!*********************************************!*\
  !*** ./src/components/BlockedSitesList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_XIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/XIcon */ \"./src/icons/XIcon.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/derekni/Coding Projects/Chrome Extensions/minto/src/components/BlockedSitesList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar BlockedSitesList = function BlockedSitesList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"facebook.com\", \"youtube.com\", \"reddit.com\"]),\n      blockedSites = _useState[0],\n      setBlockedSites = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      currentValue = _useState2[0],\n      setCurrentValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (true) {\n      return;\n    }\n\n    chrome.storage.sync.get({\n      blockedSites: []\n    }, function (_ref) {\n      var _blockedSites = _ref.blockedSites;\n      setBlockedSites(_blockedSites);\n    });\n  }, []);\n\n  var blockSite = function blockSite(siteName) {\n    if (siteName === \"\") {\n      setError(\"You must block something!\");\n    } else if (!isValidURL(siteName)) {\n      setError(\"You must put a valid URL!\");\n    } else if (blockedSites.includes(siteName)) {\n      setError(\"You have already blocked this site!\");\n    } else {\n      var updatedBlockedSites = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(blockedSites), [siteName]);\n      setBlockedSites(updatedBlockedSites);\n      setCurrentValue(\"\");\n      setError(\"\");\n\n      if (true) {\n        return;\n      }\n\n      chrome.storage.sync.set({\n        blockedSites: updatedBlockedSites\n      });\n    }\n  };\n\n  var isValidURL = function isValidURL(site) {\n    var res = site.match(/(http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);\n    return res !== null;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"font-semibold text-xl mb-2\",\n      children: \"Blocked sites\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        className: \"flex-row flex-1 mb-2 mr-2 py-1 pl-2 text-base  border border-gray-200 rounded-sm\",\n        placeholder: \"Block a site\",\n        value: currentValue,\n        onKeyUp: function onKeyUp(e) {\n          if (e.key === \"Enter\" && currentValue) {\n            blockSite(currentValue);\n          }\n        },\n        onChange: function onChange(e) {\n          setCurrentValue(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        disabled: currentValue === \"\",\n        className: \"bg-red-500 text-white text-base font-semibold w-20 py-1  shadow hover:shadow-lg transition-all duration-200 rounded  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none\",\n        onClick: function onClick(e) {\n          blockSite(currentValue);\n        },\n        children: \"Block\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-sm ml-1 mb-1 text-red-500\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"pl-2 text-base w-64\",\n      children: blockedSites.map(function (blockedSite) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"flex justify-between mb-1 bg-white  border border-gray-200 rounded\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: blockedSite\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"ml-2\",\n            onClick: function onClick() {\n              var updatedBlockedSites = blockedSites.filter(function (site) {\n                return site !== blockedSite;\n              });\n              setBlockedSites(updatedBlockedSites);\n\n              if (true) {\n                return;\n              }\n\n              chrome.storage.sync.set({\n                blockedSites: updatedBlockedSites\n              });\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_XIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, _this)]\n        }, blockedSite, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BlockedSitesList, \"fHd47Oru+Qa/nEvywtqkxvwUJwk=\");\n\n_c = BlockedSitesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockedSitesList);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlockedSitesList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvY2tlZFNpdGVzTGlzdC50c3g/ZjVhMyJdLCJuYW1lcyI6WyJCbG9ja2VkU2l0ZXNMaXN0IiwidXNlU3RhdGUiLCJibG9ja2VkU2l0ZXMiLCJzZXRCbG9ja2VkU2l0ZXMiLCJjdXJyZW50VmFsdWUiLCJzZXRDdXJyZW50VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJfYmxvY2tlZFNpdGVzIiwiYmxvY2tTaXRlIiwic2l0ZU5hbWUiLCJpc1ZhbGlkVVJMIiwiaW5jbHVkZXMiLCJ1cGRhdGVkQmxvY2tlZFNpdGVzIiwic2V0Iiwic2l0ZSIsInJlcyIsIm1hdGNoIiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiYmxvY2tlZFNpdGUiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBVyxDQUN6RCxjQUR5RCxFQUV6RCxhQUZ5RCxFQUd6RCxZQUh5RCxDQUFYLENBRG5CO0FBQUEsTUFDdEJDLFlBRHNCO0FBQUEsTUFDUkMsZUFEUTs7QUFBQSxtQkFNV0Ysc0RBQVEsQ0FBQyxFQUFELENBTm5CO0FBQUEsTUFNdEJHLFlBTnNCO0FBQUEsTUFNUkMsZUFOUTs7QUFBQSxtQkFPSEosc0RBQVEsQ0FBQyxFQUFELENBUEw7QUFBQSxNQU90QkssS0FQc0I7QUFBQSxNQU9mQyxRQVBlOztBQVE3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBNEM7QUFDMUM7QUFDRDs7QUFDREMsVUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQ0U7QUFBRVYsa0JBQVksRUFBRTtBQUFoQixLQURGLEVBRUUsZ0JBQXFDO0FBQUEsVUFBcEJXLGFB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aEI7QUFDRCxlQUYyQixDQUE1QjtBQUdBekIsNkJBQWUsQ0FBQ2UsbUJBQUQsQ0FBZjs7QUFDQSx3QkFBNEM7QUFDMUM7QUFDRDs7QUFDRFQsb0JBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CUSxHQUFwQixDQUF3QjtBQUN0QmpCLDRCQUFZLEVBQUVnQjtBQURRLGVBQXhCO0FBR0QsYUFiSDtBQUFBLG1DQWVFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FDT1UsV0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBeUJELE9BMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQTVHRDs7R0FBTTVCLGdCOztLQUFBQSxnQjtBQThHU0EsK0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9ja2VkU2l0ZXNMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBYSWNvbiBmcm9tIFwiLi4vaWNvbnMvWEljb25cIjtcblxuY29uc3QgQmxvY2tlZFNpdGVzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2Jsb2NrZWRTaXRlcywgc2V0QmxvY2tlZFNpdGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXG4gICAgXCJmYWNlYm9vay5jb21cIixcbiAgICBcInlvdXR1YmUuY29tXCIsXG4gICAgXCJyZWRkaXQuY29tXCIsXG4gIF0pO1xuICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXG4gICAgICB7IGJsb2NrZWRTaXRlczogW10gfSxcbiAgICAgICh7IGJsb2NrZWRTaXRlczogX2Jsb2NrZWRTaXRlcyB9KSA9PiB7XG4gICAgICAgIHNldEJsb2NrZWRTaXRlcyhfYmxvY2tlZFNpdGVzKTtcbiAgICAgIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmxvY2tTaXRlID0gKHNpdGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoc2l0ZU5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yKFwiWW91IG11c3QgYmxvY2sgc29tZXRoaW5nIVwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkVVJMKHNpdGVOYW1lKSkge1xuICAgICAgc2V0RXJyb3IoXCJZb3UgbXVzdCBwdXQgYSB2YWxpZCBVUkwhXCIpO1xuICAgIH0gZWxzZSBpZiAoYmxvY2tlZFNpdGVzLmluY2x1ZGVzKHNpdGVOYW1lKSkge1xuICAgICAgc2V0RXJyb3IoXCJZb3UgaGF2ZSBhbHJlYWR5IGJsb2NrZWQgdGhpcyBzaXRlIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlZEJsb2NrZWRTaXRlcyA9IFsuLi5ibG9ja2VkU2l0ZXMsIHNpdGVOYW1lXTtcbiAgICAgIHNldEJsb2NrZWRTaXRlcyh1cGRhdGVkQmxvY2tlZFNpdGVzKTtcbiAgICAgIHNldEN1cnJlbnRWYWx1ZShcIlwiKTtcbiAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBibG9ja2VkU2l0ZXM6IHVwZGF0ZWRCbG9ja2VkU2l0ZXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWRVUkwgPSAoc2l0ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzID0gc2l0ZS5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYihbLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKS9nXG4gICAgKTtcbiAgICByZXR1cm4gcmVzICE9PSBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIG1iLTJcIj5CbG9ja2VkIHNpdGVzPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1yb3cgZmxleC0xIG1iLTIgbXItMiBweS0xIHBsLTIgdGV4dC1iYXNlICBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtc21cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvY2sgYSBzaXRlXCJcbiAgICAgICAgICB2YWx1ZT17Y3VycmVudFZhbHVlfVxuICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgYmxvY2tTaXRlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50VmFsdWUgPT09IFwiXCJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHctMjAgcHktMSBcbiAgICAgICAgICAgIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHJvdW5kZWQgXG4gICAgICAgICAgICBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpzaGFkb3ctbm9uZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGJsb2NrU2l0ZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBCbG9ja1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtbC0xIG1iLTEgdGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvZGl2Pn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC0yIHRleHQtYmFzZSB3LTY0XCI+XG4gICAgICAgIHtibG9ja2VkU2l0ZXMubWFwKChibG9ja2VkU2l0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtibG9ja2VkU2l0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMSBiZy13aGl0ZSAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj57YmxvY2tlZFNpdGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQmxvY2tlZFNpdGVzID0gYmxvY2tlZFNpdGVzLmZpbHRlcigoc2l0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2l0ZSAhPT0gYmxvY2tlZFNpdGU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHNldEJsb2NrZWRTaXRlcyh1cGRhdGVkQmxvY2tlZFNpdGVzKTtcbiAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZFNpdGVzOiB1cGRhdGVkQmxvY2tlZFNpdGVzLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxYSWNvbiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tlZFNpdGVzTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BlockedSitesList.tsx\n");

/***/ })

})