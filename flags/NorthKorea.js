"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNorthKorea = function SvgNorthKorea(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C21.74 2 12.7 7.15 7.28 15h49.43C51.3 7.15 42.25 2 32 2zM32 62c10.25 0 19.3-5.15 24.71-13H7.28C12.7 56.85 21.74 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M59.04 19H4.96C3.06 22.93 2 27.34 2 32s1.06 9.07 2.96 13h54.09C60.94 41.07 62 36.66 62 32s-1.06-9.07-2.96-13z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M4.96 45c.67 1.4 1.46 2.73 2.33 4h49.43c.87-1.27 1.66-2.6 2.33-4H4.96zM59.04 19c-.67-1.4-1.46-2.73-2.33-4H7.28c-.87 1.27-1.66 2.6-2.33 4h54.09z"
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 18,
    cy: 32,
    r: 11
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M18 35.91l4.95 3.76-1.88-6.11L26 29.78l-6.1-.02-1.9-6.09-1.9 6.09-6.1.02 4.92 3.78-1.87 6.11z"
  }), _react["default"].createElement("linearGradient", {
    id: "north-korea_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#north-korea_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNorthKorea;
exports["default"] = _default;