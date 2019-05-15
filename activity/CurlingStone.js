"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCurlingStone = function SvgCurlingStone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "curling-stone_svg__a",
    cx: 16.021,
    cy: 34.013,
    r: 40.59,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.38,
    stopColor: "#53646c"
  }), _react["default"].createElement("stop", {
    offset: 0.759,
    stopColor: "#3f4e55"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#37464d"
  })), _react["default"].createElement("path", {
    fill: "url(#curling-stone_svg__a)",
    d: "M62 42.557C62 49.971 62.584 62 32 62S2.001 49.971 2.001 42.557 1.416 27.104 32 27.104s30 8.039 30 15.453z"
  }), _react["default"].createElement("radialGradient", {
    id: "curling-stone_svg__b",
    cx: 16.021,
    cy: 34.012,
    r: 40.59,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.376,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.532,
    stopColor: "#94a2a8"
  }), _react["default"].createElement("stop", {
    offset: 0.732,
    stopColor: "#869398"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#6e797e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#697378"
  })), _react["default"].createElement("path", {
    fill: "url(#curling-stone_svg__b)",
    d: "M62 42.557c0-.513.002-1.028-.003-1.545C56.578 43.901 46.565 45.84 32 45.84c-13.234 0-23.877-1.599-30-4.059l.002.775c0 2.559-.069 5.667 1.098 8.641C9.329 53.412 19.551 54.83 32 54.83c13.834 0 23.618-1.748 29.174-4.398.882-2.737.826-5.536.826-7.875z"
  }), _react["default"].createElement("radialGradient", {
    id: "curling-stone_svg__c",
    cx: 32.188,
    cy: 86.859,
    r: 21.022,
    gradientTransform: "matrix(1 0 0 .2581 0 6.027)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.319,
    stopColor: "#c20001"
  }), _react["default"].createElement("stop", {
    offset: 0.54,
    stopColor: "#cb0003"
  }), _react["default"].createElement("stop", {
    offset: 0.733,
    stopColor: "#da0006"
  }), _react["default"].createElement("stop", {
    offset: 0.907,
    stopColor: "#f0000b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#curling-stone_svg__c)",
    d: "M53.037 30.162c0 6.951-42.074 6.951-42.074 0s42.074-6.951 42.074 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "curling-stone_svg__d",
    cx: 32.532,
    cy: 21.977,
    r: 19.472,
    gradientTransform: "matrix(1 0 0 .5128 0 10.708)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#bf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.388,
    stopColor: "#c30001"
  }), _react["default"].createElement("stop", {
    offset: 0.643,
    stopColor: "#e40008"
  }), _react["default"].createElement("stop", {
    offset: 0.856,
    stopColor: "#f8000c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#curling-stone_svg__d)",
    d: "M43.686 12c-17.722 0-19.739.016-22.238 1.428-2.974 1.68.338 4.75-3.958 14.584-1.406 3.219 9.461 2.585 9.469.375.01-2.255-4.03-3.729-3.568-6.537.549-3.326.286-2.84 20.594-2.84 3.404 0 3.475-7.01-.299-7.01z"
  }));
};

var _default = SvgCurlingStone;
exports["default"] = _default;