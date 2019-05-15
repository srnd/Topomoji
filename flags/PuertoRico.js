"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPuertoRico = function SvgPuertoRico(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M10.79 26H61.4A29.9 29.9 0 0 0 56 14H10.79v12zM10.79 38v12H56a29.9 29.9 0 0 0 5.4-12H10.79z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M61.4 26H10.79v12H61.4c.39-1.94.6-3.95.6-6s-.21-4.06-.6-6zM10.79 14H56C50.53 6.71 41.81 2 32 2c-8.29 0-15.78 3.37-21.21 8.8V14zM10.79 50v3.19C16.22 58.63 23.71 62 32 62c9.81 0 18.53-4.71 24-12H10.79z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M10.79 10.79A29.871 29.871 0 0 0 2 32c0 8.28 3.36 15.78 8.79 21.21L32 32 10.79 10.79z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M9.98 38L14 35.19 18.02 38l-1.52-4.58 4-2.92h-4.96L14 26l-1.5 4.5h-5l4 2.92z"
  }), _react["default"].createElement("linearGradient", {
    id: "puerto-rico_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62,
    gradientTransform: "matrix(1 0 0 -1 0 64)"
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
    fill: "url(#puerto-rico_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPuertoRico;
exports["default"] = _default;