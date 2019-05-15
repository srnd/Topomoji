"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDjibouti = function SvgDjibouti(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M11 32v21.42C16.42 58.72 23.82 62 32 62c16.57 0 30-13.43 30-30H11z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M11 32h51C62 15.43 48.57 2 32 2c-8.18 0-15.58 3.28-21 8.58V32z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11 10.58C5.45 16.02 2 23.61 2 32s3.45 15.98 9.01 21.42L32.43 32 11 10.58z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M14 35.71L18.32 39l-1.63-5.34L21 30.25h-5.34L14 25l-1.62 5.25H7l4.31 3.41L9.68 39z"
  }), _react["default"].createElement("linearGradient", {
    id: "djibouti_svg__a",
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
    fill: "url(#djibouti_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgDjibouti;
exports["default"] = _default;