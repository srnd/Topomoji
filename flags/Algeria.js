"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlgeria = function SvgAlgeria(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M62 32C62 15.43 48.57 2 32 2v60c16.57 0 30-13.43 30-30z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M2 32c0 16.57 13.43 30 30 30V2C15.43 2 2 15.43 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M40.65 39l-.01-5.36L46 32l-5.36-1.64.01-5.36-3.3 4.34L32 27.67 35.32 32 32 36.33l5.35-1.67z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M37.25 44c-6.55 0-11.87-5.37-11.87-12s5.31-12 11.87-12c2.51 0 4.83.79 6.75 2.13C41.28 18.99 37.29 17 32.83 17 24.64 17 18 23.71 18 32c0 8.28 6.64 15 14.83 15 4.46 0 8.45-1.99 11.17-5.13A11.744 11.744 0 0 1 37.25 44z"
  }), _react["default"].createElement("linearGradient", {
    id: "algeria_svg__a",
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
    fill: "url(#algeria_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAlgeria;
exports["default"] = _default;