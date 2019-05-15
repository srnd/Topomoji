"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlovakia = function SvgSlovakia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M3.71 22a30.086 30.086 0 0 0 0 20h56.57C61.39 38.87 62 35.51 62 32s-.61-6.87-1.71-10H3.71z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M33.89 19H14v13.83C14 42 23.59 44.76 24 45c.41-.24 10-3 10-12.17V19h-.11z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M16 21v11.91c0 5.61 4.26 8.57 8 10.09 3.74-1.52 8-4.48 8-10.09V21H16z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M23 23h2v14h-2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M19 29h10v2H19zM21 25h6v2h-6z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M24 35c-1.31 0-2.46.64-3.2 1.62-.5-.39-1.12-.62-1.8-.62-.84 0-1.6.35-2.14.91 1.43 3.1 4.42 4.98 7.15 6.09 2.73-1.11 5.72-2.99 7.15-6.09-.56-.56-1.32-.91-2.16-.91-.68 0-1.3.23-1.8.62-.74-.98-1.89-1.62-3.2-1.62z"
  }), _react["default"].createElement("linearGradient", {
    id: "slovakia_svg__a",
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
    fill: "url(#slovakia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSlovakia;
exports["default"] = _default;