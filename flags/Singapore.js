"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSingapore = function SvgSingapore(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 62c16.57 0 30-13.43 30-30H2c0 16.57 13.43 30 30 30z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C15.43 2 2 15.43 2 32h60C62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M21.23 17.47L20 16.53l1.53-.01L22 15l.48 1.52 1.52.01-1.23.94.47 1.53-1.24-.94-1.23.94zM29.23 17.47L28 16.53l1.53-.01L30 15l.48 1.52 1.52.01-1.23.94.47 1.53-1.24-.94-1.23.94zM22.23 22.47L21 21.53l1.53-.01L23 20l.48 1.52 1.52.01-1.23.94.47 1.53-1.24-.94-1.23.94zM28.23 22.47L27 21.53l1.53-.01L29 20l.48 1.52 1.52.01-1.23.94.47 1.53-1.24-.94-1.23.94zM25.23 14.47L24 13.53l1.53-.01L26 12l.48 1.52 1.52.01-1.23.94.47 1.53-1.24-.94-1.23.94z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M24.41 27.96c-4.77 0-8.63-4.05-8.63-9.06 0-5 3.87-9.06 8.63-9.06.35 0 .69.03 1.03.07-1.2-.58-2.53-.91-3.94-.91-5.24 0-9.5 4.48-9.5 10s4.26 10 9.5 10c1.63 0 3.16-.44 4.5-1.2-.52.1-1.04.16-1.59.16z"
  }), _react["default"].createElement("linearGradient", {
    id: "singapore_svg__a",
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
    fill: "url(#singapore_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSingapore;
exports["default"] = _default;