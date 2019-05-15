"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNauru = function SvgNauru(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C16.79 2 4.23 13.32 2.27 28h59.45C59.77 13.32 47.21 2 32 2zM32 62c15.21 0 27.77-11.32 29.73-26H2.27C4.23 50.68 16.79 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M61.73 28H2.27C2.1 29.31 2 30.64 2 32c0 1.36.1 2.69.27 4h59.45c.18-1.31.28-2.64.28-4 0-1.36-.1-2.69-.27-4z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M16 41.18L17.19 39l.27 2.47 1.94-1.56-.7 2.39 2.39-.7-1.56 1.94 2.47.27L19.82 45 22 46.19l-2.47.27 1.56 1.94-2.39-.7.7 2.39-1.94-1.56-.27 2.47L16 48.82 14.81 51l-.27-2.47-1.94 1.56.7-2.39-2.38.7 1.55-1.94-2.47-.27L12.18 45 10 43.81l2.47-.27-1.55-1.94 2.38.7-.7-2.39 1.94 1.56.27-2.47z"
  }), _react["default"].createElement("linearGradient", {
    id: "nauru_svg__a",
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
    fill: "url(#nauru_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNauru;
exports["default"] = _default;