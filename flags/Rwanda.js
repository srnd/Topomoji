"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRwanda = function SvgRwanda(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M32 2C15.43 2 2 15.43 2 32h60C62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M58 47H6c5.19 8.96 14.89 15 26 15s20.81-6.04 26-15z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M57.98 47A29.87 29.87 0 0 0 62 32H2c0 5.47 1.47 10.59 4.02 15h51.96zM46.22 19.46l8.67-.5-8.67-.51 8.24-2.73-8.5 1.75 7.25-4.77-7.76 3.9 5.77-6.49-6.48 5.77 3.89-7.76-4.77 7.26 1.75-8.51-2.73 8.24-.5-8.66-.51 8.66-2.73-8.24 1.75 8.51-4.77-7.26 3.89 7.76-6.48-5.77 5.77 6.49-7.76-3.9 7.25 4.77-8.5-1.75 8.24 2.73-8.66.51 8.66.5-8.24 2.74 8.5-1.76-7.25 4.77 7.76-3.89-5.77 6.48 6.48-5.76-3.89 7.75 4.77-7.25-1.75 8.5 2.73-8.24.51 8.67.5-8.67 2.73 8.24-1.75-8.5 4.77 7.25-3.89-7.75 6.48 5.76-5.77-6.48 7.76 3.89-7.25-4.77 8.5 1.76z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 42.38,
    cy: 18.96,
    r: 3.7
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M42.38 23.04c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08 4.08 1.83 4.08 4.08c-.01 2.25-1.83 4.08-4.08 4.08zm0-7.4a3.314 3.314 0 0 0 0 6.63c1.83 0 3.31-1.49 3.31-3.32a3.32 3.32 0 0 0-3.31-3.31z"
  }), _react["default"].createElement("linearGradient", {
    id: "rwanda_svg__a",
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
    fill: "url(#rwanda_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgRwanda;
exports["default"] = _default;