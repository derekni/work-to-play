webpackHotUpdate_N_E("pages/popup",{

/***/ "./src/components/EditableShopItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/EditableShopItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_PopupContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/PopupContext */ \"./src/contexts/PopupContext.ts\");\n/* harmony import */ var _icons_DragIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/DragIcon */ \"./src/icons/DragIcon.tsx\");\n/* harmony import */ var _icons_TrashIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/TrashIcon */ \"./src/icons/TrashIcon.tsx\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/derekni/Coding Projects/Chrome Extensions/minto/src/components/EditableShopItem.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar EditableShopItem = function EditableShopItem(_ref) {\n  _s();\n\n  var reward = _ref.reward,\n      index = _ref.index;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_PopupContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      rewards = _useContext.rewards,\n      updateRewards = _useContext.updateRewards;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(reward.name),\n      rewardName = _useState[0],\n      setRewardName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(reward.price),\n      rewardPrice = _useState2[0],\n      setRewardPrice = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    updateRewards(rewards.map(function (_reward) {\n      if (_reward.id !== reward.id) {\n        return _reward;\n      }\n\n      return _objectSpread(_objectSpread({}, reward), {}, {\n        name: rewardName,\n        price: rewardPrice\n      });\n    }));\n  }, [rewardName, rewardPrice]);\n\n  var deleteReward = function deleteReward() {\n    updateRewards(rewards.filter(function (_reward) {\n      return _reward.id !== reward.id;\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__[\"Draggable\"], {\n    draggableId: String(reward.id),\n    index: index,\n    children: function children(provided) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, provided.draggableProps), {}, {\n        ref: provided.innerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"flex items-center pb-2\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({\n            className: \"w-4 mr-2\"\n          }, provided.dragHandleProps), {}, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_DragIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, _this)\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"flex-1 mr-2 border border-gray-200 rounded-sm pl-0.5\",\n            value: rewardName,\n            onChange: function onChange(e) {\n              return setRewardName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"w-8 mr-2 text-right border border-gray-200 rounded pr-0.5\",\n            value: rewardPrice,\n            onChange: function onChange(e) {\n              var value = Number(e.target.value);\n\n              if (Number.isInteger(value) && value >= 0) {\n                setRewardPrice(value);\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"w-4\",\n            onClick: deleteReward,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_TrashIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this)\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditableShopItem, \"87eZQQ7+oep81oU8k2sbEEGCs/s=\");\n\n_c = EditableShopItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditableShopItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"EditableShopItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdGFibGVTaG9wSXRlbS50c3g/ZmIyYSJdLCJuYW1lcyI6WyJFZGl0YWJsZVNob3BJdGVtIiwicmV3YXJkIiwiaW5kZXgiLCJ1c2VDb250ZXh0IiwiUG9wdXBDb250ZXh0IiwicmV3YXJkcyIsInVwZGF0ZVJld2FyZHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJyZXdhcmROYW1lIiwic2V0UmV3YXJkTmFtZSIsInByaWNlIiwicmV3YXJkUHJpY2UiLCJzZXRSZXdhcmRQcmljZSIsInVzZUVmZmVjdCIsIm1hcCIsIl9yZXdhcmQiLCJpZCIsImRlbGV0ZVJld2FyZCIsImZpbHRlciIsIlN0cmluZyIsInByb3ZpZGVkIiwiZHJhZ2dhYmxlUHJvcHMiLCJpbm5lclJlZiIsImRyYWdIYW5kbGVQcm9wcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsImlzSW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFRQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7O0FBQUEsb0JBQ2xCQyx3REFBVSxDQUFDQyw4REFBRCxDQURRO0FBQUEsTUFDN0NDLE9BRDZDLGVBQzdDQSxPQUQ2QztBQUFBLE1BQ3BDQyxhQURvQyxlQUNwQ0EsYUFEb0M7O0FBQUEsa0JBRWpCQyxzREFBUSxDQUFDTixNQUFNLENBQUNPLElBQVIsQ0FGUztBQUFBLE1BRTlDQyxVQUY4QztBQUFBLE1BRWxDQyxhQUZrQzs7QUFBQSxtQkFHZkgsc0RBQVEsQ0FBQ04sTUFBTSxDQUFDVSxLQUFSLENBSE87QUFBQSxNQUc5Q0MsV0FIOEM7QUFBQSxNQUdqQ0MsY0FIaUM7O0FBS3JEQyx5REFBUyxDQUFDLFlBQU07QUFDZFIsaUJBQWEsQ0FDWEQsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCLFVBQUlBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlaEIsTUFBTSxDQUFDZ0IsRUFBMUIsRUFBOEI7QUFDNUIsZUFBT0QsT0FBUDtBQUNEOztBQUNELDZDQUFZZixNQUFaO0FBQW9CTyxZQUFJLEVBQUVDLFVBQTFCO0FBQXNDRSxhQUFLLEVBQUVDO0FBQTdDO0FBQ0QsS0FMRCxDQURXLENBQWI7QUFRRCxHQVRRLEVBU04sQ0FBQ0gsVUFBRCxFQUFhRyxXQUFiLENBVE0sQ0FBVDs7QUFXQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCWixpQkFBYSxDQUFDRCxPQUFPLENBQUNjLE1BQVIsQ0FBZSxVQUFDSCxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVoQixNQUFNLENBQUNnQixFQUFuQztBQUFBLEtBQWYsQ0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFXLGVBQVcsRUFBRUcsTUFBTSxDQUFDbkIsTUFBTSxDQUFDZ0IsRUFBUixDQUE5QjtBQUEyQyxTQUFLLEVBQUVmLEtBQWxEO0FBQUEsY0FDRyxrQkFBQ21CLFFBQUQsRUFBYztBQUNiLDBCQUNFLDRHQUFTQSxRQUFRLENBQUNDLGNBQWxCO0FBQWtDLFdBQUcsRUFBRUQsUUFBUSxDQUFDRSxRQUFoRDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyx3QkFBZDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQztBQUFmLGFBQThCRixRQUFRLENBQUNHLGVBQXZDO0FBQUEsbUNBQ0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUNFLHFCQUFTLEVBQUMsc0RBRFo7QUFFRSxpQkFBSyxFQUFFZixVQUZUO0FBR0Usb0JBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxxQkFBT2YsYUFBYSxDQUFDZSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVNFO0FBQ0UscUJBQVMsRUFBQywyREFEWjtBQUVFLGlCQUFLLEVBQUVmLFdBRlQ7QUFHRSxvQkFBUSxFQUFFLGtCQUFDYSxDQUFELEVBQU87QUFDZixrQkFBTUUsS0FBSyxHQUFHQyxNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCOztBQUNBLGtCQUFJQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLEtBQWpCLEtBQTJCQSxLQUFLLElBQUksQ0FBeEMsRUFBMkM7QUFDekNkLDhCQUFjLENBQUNjLEtBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBbUJFO0FBQVEscUJBQVMsRUFBQyxLQUFsQjtBQUF3QixtQkFBTyxFQUFFVCxZQUFqQztBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyQkQ7QUE3Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBckREOztHQUFNbEIsZ0I7O0tBQUFBLGdCO0FBdURTQSwrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0VkaXRhYmxlU2hvcEl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3B1cENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRzL1BvcHVwQ29udGV4dFwiO1xuaW1wb3J0IERyYWdJY29uIGZyb20gXCIuLi9pY29ucy9EcmFnSWNvblwiO1xuaW1wb3J0IFRyYXNoSWNvbiBmcm9tIFwiLi4vaWNvbnMvVHJhc2hJY29uXCI7XG5pbXBvcnQgeyBSZXdhcmQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcmV3YXJkOiBSZXdhcmQ7XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5jb25zdCBFZGl0YWJsZVNob3BJdGVtID0gKHsgcmV3YXJkLCBpbmRleCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHJld2FyZHMsIHVwZGF0ZVJld2FyZHMgfSA9IHVzZUNvbnRleHQoUG9wdXBDb250ZXh0KTtcbiAgY29uc3QgW3Jld2FyZE5hbWUsIHNldFJld2FyZE5hbWVdID0gdXNlU3RhdGUocmV3YXJkLm5hbWUpO1xuICBjb25zdCBbcmV3YXJkUHJpY2UsIHNldFJld2FyZFByaWNlXSA9IHVzZVN0YXRlKHJld2FyZC5wcmljZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVSZXdhcmRzKFxuICAgICAgcmV3YXJkcy5tYXAoKF9yZXdhcmQpID0+IHtcbiAgICAgICAgaWYgKF9yZXdhcmQuaWQgIT09IHJld2FyZC5pZCkge1xuICAgICAgICAgIHJldHVybiBfcmV3YXJkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IC4uLnJld2FyZCwgbmFtZTogcmV3YXJkTmFtZSwgcHJpY2U6IHJld2FyZFByaWNlIH07XG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtyZXdhcmROYW1lLCByZXdhcmRQcmljZV0pO1xuXG4gIGNvbnN0IGRlbGV0ZVJld2FyZCA9ICgpID0+IHtcbiAgICB1cGRhdGVSZXdhcmRzKHJld2FyZHMuZmlsdGVyKChfcmV3YXJkKSA9PiBfcmV3YXJkLmlkICE9PSByZXdhcmQuaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGUgZHJhZ2dhYmxlSWQ9e1N0cmluZyhyZXdhcmQuaWQpfSBpbmRleD17aW5kZXh9PlxuICAgICAgeyhwcm92aWRlZCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwYi0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00IG1yLTJcIiB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cbiAgICAgICAgICAgICAgICA8RHJhZ0ljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtci0yIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1zbSBwbC0wLjVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXdhcmROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV3YXJkTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBtci0yIHRleHQtcmlnaHQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHByLTAuNVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jld2FyZFByaWNlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmIHZhbHVlID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmV3YXJkUHJpY2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy00XCIgb25DbGljaz17ZGVsZXRlUmV3YXJkfT5cbiAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZVNob3BJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EditableShopItem.tsx\n");

/***/ })

})