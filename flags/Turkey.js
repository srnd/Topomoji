"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTurkey = function SvgTurkey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M41.35 39l.01-5.36L36 32l5.36-1.64-.01-5.36 3.3 4.34L50 27.67 46.68 32 50 36.33l-5.35-1.67z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M33.25 44c-6.55 0-11.87-5.37-11.87-12s5.31-12 11.87-12c2.51 0 4.83.79 6.75 2.13C37.28 18.99 33.29 17 28.83 17 20.64 17 14 23.72 14 32c0 8.29 6.64 15 14.83 15 4.46 0 8.45-1.99 11.17-5.13A11.744 11.744 0 0 1 33.25 44z"
  }), _react["default"].createElement("linearGradient", {
    id: "turkey_svg__a",
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
    fill: "url(#turkey_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTurkey;
exports["default"] = _default;