"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSouthAfrica = function SvgSouthAfrica(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M60.9 40c.7-2.55 1.1-5.23 1.1-8 0-2.78-.4-5.45-1.11-8H31.74L14.82 7.42a30.06 30.06 0 0 0-9.57 11.03L19 32 5.25 45.56c2.24 4.42 5.55 8.2 9.58 11.02L31.74 40H60.9z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3.55 22.49a29.946 29.946 0 0 0 0 19.02L13.19 32l-9.64-9.51z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M18.33 58.69C22.44 60.79 27.07 62 32 62c12.33 0 22.9-7.45 27.51-18.08H33.4L18.33 58.69z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M59.52 20.08C54.9 9.45 44.33 2 32 2c-4.93 0-9.57 1.2-13.68 3.3L33.4 20.08h26.12z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.52 22.69c-.29-.89-.63-1.76-1-2.61H33.4L18.32 5.3c-.67.34-1.33.71-1.97 1.1-.52.32-1.03.66-1.53 1.01L31.74 24h29.15c-.12-.44-.23-.88-.37-1.31z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M5.25 18.44c-.11.22-.24.44-.35.67-.52 1.09-.97 2.22-1.36 3.38L13.19 32l-9.64 9.51c.39 1.16.84 2.29 1.36 3.38.11.23.23.44.35.67L19 32 5.25 18.44z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M31.74 40L14.83 56.57c.35.24.69.49 1.05.72.79.5 1.62.96 2.45 1.39L33.4 43.92h26.11c.44-1.01.84-2.04 1.17-3.11.08-.27.14-.54.22-.81H31.74z"
  }), _react["default"].createElement("linearGradient", {
    id: "south-africa_svg__a",
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
    fill: "url(#south-africa_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSouthAfrica;
exports["default"] = _default;