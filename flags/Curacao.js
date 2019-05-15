"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCuracao = function SvgCuracao(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M62 32C62 15.43 48.57 2 32 2S2 15.43 2 32c0 4.27.9 8.33 2.5 12h55c1.6-3.68 2.5-7.73 2.5-12zM32 62c9.81 0 18.53-4.71 24-12H8c5.47 7.29 14.19 12 24 12z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M4.5 44c.94 2.14 2.11 4.15 3.5 6h48c1.39-1.85 2.56-3.86 3.5-6h-55z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11.44 15.49l1.24 3.82h4.01l-3.24 2.35 1.23 3.81-3.24-2.35-3.24 2.35 1.24-3.81-3.24-2.35h4zM22.82 24.46l1.74 5.35h5.63l-4.55 3.31 1.74 5.36-4.56-3.31-4.55 3.31 1.74-5.36-4.56-3.31h5.63z"
  }), _react["default"].createElement("linearGradient", {
    id: "curacao_svg__a",
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
    fill: "url(#curacao_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCuracao;
exports["default"] = _default;