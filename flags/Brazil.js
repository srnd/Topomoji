"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrazil = function SvgBrazil(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M61.535 26.768C59.059 12.695 46.783 2 32 2S4.94 12.695 2.463 26.768L32 12l29.535 14.768zM2.463 37.232C4.94 51.305 17.217 62 32 62s27.059-10.695 29.535-24.768L32 52 2.463 37.232z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 12L2.463 26.768C2.164 28.469 2 30.215 2 32s.164 3.533.463 5.232L32 52l29.535-14.768C61.834 35.533 62 33.785 62 32s-.166-3.531-.465-5.232L32 12z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M25.996 28.436c-3.174 0-6.175.688-8.895 1.871A15.24 15.24 0 0 0 17 32c0 8.285 6.715 15 15 15 5.604 0 10.482-3.078 13.057-7.633-3.696-6.502-10.846-10.931-19.061-10.931z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M46.785 34.43c.13-.793.215-1.6.215-2.43 0-8.283-6.717-15-15-15-5.924 0-11.03 3.443-13.469 8.428a26.655 26.655 0 0 1 7.465-1.084c8.504 0 16.047 3.974 20.789 10.086z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M25.996 24.344c-2.598 0-5.098.395-7.465 1.084a14.939 14.939 0 0 0-1.43 4.879 22.224 22.224 0 0 1 8.895-1.871c8.215 0 15.365 4.43 19.061 10.932a14.894 14.894 0 0 0 1.729-4.938c-4.743-6.112-12.286-10.086-20.79-10.086z"
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 22,
    cy: 32,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 26,
    cy: 38,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 32,
    cy: 38,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 32,
    cy: 42,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 40,
    cy: 38,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 40,
    cy: 42,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 36,
    cy: 40,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 22,
    cy: 36,
    r: 1
  }), _react["default"].createElement("linearGradient", {
    id: "brazil_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#brazil_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBrazil;
exports["default"] = _default;