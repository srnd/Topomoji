"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChile = function SvgChile(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 16.57 13.43 30 30 30s30-13.43 30-30H2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2c16.57 0 30 13.43 30 30H32V2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C15.43 2 2 15.43 2 32h30V2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M20 21.72L24.94 25l-1.86-5.34L28 16.25h-6.1L20 11l-1.85 5.25H12l4.92 3.41L15.06 25z"
  }), _react["default"].createElement("linearGradient", {
    id: "chile_svg__a",
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
    fill: "url(#chile_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgChile;
exports["default"] = _default;