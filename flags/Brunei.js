"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrunei = function SvgBrunei(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 2C21.18 2 11.7 7.73 6.42 16.32v19.06H2.19C3.87 50.36 16.57 62 32 62c10.82 0 20.3-5.73 25.58-14.32V28.62h4.23C60.13 13.65 47.43 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M2.72 25.49l58.57 13.02c.46-2.1.71-4.27.71-6.51 0-1.14-.07-2.27-.19-3.38L6.42 16.32a29.697 29.697 0 0 0-3.7 9.17z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M61.28 38.51L2.72 25.49C2.25 27.59 2 29.76 2 32c0 1.14.07 2.27.19 3.38l55.38 12.31c1.72-2.8 2.98-5.89 3.71-9.18z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M22.02 33.29c0 5.64 4.45 10.22 9.93 10.22s9.93-4.58 9.93-10.22c0-2.15-.65-4.14-1.75-5.78.58 1.23.92 2.62.92 4.08 0 4.21-2.69 7.77-6.4 8.95l-1.97-4.93v-7.86c.42.15 1.04.39 1.86.75 3.21 1.38 5.69-2.77 5.69-2.77s-2.28.32-4.14-1.49c-1.21-1.18-2.59-.64-3.41-.13v-1.15h1.55s.41-4.69-2.33-5.96v3.41h-1.5v2.56h.62V24c-.83-.47-2.09-.84-3.21.25-1.86 1.81-4.14 1.49-4.14 1.49s2.48 4.15 5.69 2.77c.7-.3 1.24-.52 1.65-.67v7.68h-.04L29 40.44c-3.58-1.26-6.15-4.75-6.15-8.86 0-1.46.33-2.84.92-4.08a10.325 10.325 0 0 0-1.75 5.79zM21.19 40.64v-7.99c-3.21-1.7-3.21-4.15-3.21-4.15H15.5c0 4.47 2.48 5.11 2.48 5.11v7.03h3.21zM46.02 28.5s0 2.45-3.21 4.15v7.99h3.21v-7.03s2.48-.64 2.48-5.11h-2.48z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M31.9 45.21c-3.56-.02-6.71-1.81-8.66-4.56l-2.98 4.57s2.69-.21 5.17 1.17c2.47 1.38 3.2.02 6.47 0 3.26.01 4 1.38 6.46 0 2.48-1.38 5.17-1.17 5.17-1.17l-2.98-4.57c-1.94 2.75-5.1 4.54-8.65 4.56z"
  }), _react["default"].createElement("linearGradient", {
    id: "brunei_svg__a",
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
    fill: "url(#brunei_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBrunei;
exports["default"] = _default;