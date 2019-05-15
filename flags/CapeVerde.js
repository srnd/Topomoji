"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCapeVerde = function SvgCapeVerde(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 62c9.81 0 18.53-4.71 24-12H8c5.47 7.29 14.19 12 24 12zM32 2C15.43 2 2 15.43 2 32h60C62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.4 38c.39-1.94.6-3.94.6-6H2c0 2.06.21 4.06.6 6h58.8z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M4.5 44h55c.83-1.91 1.48-3.91 1.9-6H2.6c.43 2.09 1.07 4.09 1.9 6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M4.5 44c.94 2.14 2.11 4.15 3.5 6h48c1.39-1.85 2.56-3.86 3.5-6h-55z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M25 26.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L25 23l-.47 1.52-1.53.01 1.23.94-.47 1.53zM25 56.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L25 53l-.47 1.52-1.53.01 1.23.94-.47 1.53zM36 36.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L36 33l-.47 1.52-1.53.01 1.23.94-.47 1.53zM18 29.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L18 26l-.47 1.52-1.53.01 1.23.94-.47 1.53zM32 29.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L32 26l-.47 1.52-1.53.01 1.23.94-.47 1.53zM13 36.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L13 33l-.47 1.52-1.53.01 1.23.94-.47 1.53zM36 48.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L36 45l-.47 1.52-1.53.01 1.23.94-.47 1.53zM13 48.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L13 45l-.47 1.52-1.53.01 1.23.94-.47 1.53zM31 54.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L31 51l-.47 1.52-1.53.01 1.23.94-.47 1.53zM18 54.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L18 51l-.47 1.52-1.53.01 1.23.94-.47 1.53z"
  }), _react["default"].createElement("linearGradient", {
    id: "cape-verde_svg__a",
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
    fill: "url(#cape-verde_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCapeVerde;
exports["default"] = _default;