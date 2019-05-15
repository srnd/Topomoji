"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCounterclockwiseArrowsButton = function SvgCounterclockwiseArrowsButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "counterclockwise-arrows-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#counterclockwise-arrows-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M27.324 20.059a11.963 11.963 0 0 1 4.895-1.041c6.588 0 11.949 5.129 11.949 11.982H52c0-10.771-8.875-19.813-19.781-19.813-3.846 0-7.557 1.086-10.764 3.17L18 11v13.146h13.531l-4.207-4.087zM36.5 42.564a11.361 11.361 0 0 1-4.691 1.016c-6.598 0-11.967-5.346-11.967-12.58H12c0 11.367 8.887 20.848 19.809 20.848 3.707 0 7.248-1.092 10.33-3.088L46 53V38.234H32.557l3.943 4.33z"
  }));
};

var _default = SvgCounterclockwiseArrowsButton;
exports["default"] = _default;