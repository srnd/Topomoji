"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChina = function SvgChina(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M22 28.37L30.03 34 27 24.84 35 19h-9.91L22 10l-3 9H9l8 5.84L13.96 34zM35.27 35.28l-2.27.56 2.24.86-.01 2.3 1.44-1.75 2.22.83-1.34-1.9L39 34.41l-2.31.52L35.33 33zM38.71 28.47L37 30l2.29-.18.97 2.18.49-2.29 2.25-.2-1.95-1.2.49-2.31-1.76 1.51-1.99-1.22zM39.28 20.73l.69 2.27.73-2.23 2.3.03-1.83-1.45.7-2.21-1.83 1.32L38.2 17l.65 2.31L37 20.65zM35.27 12.72l.06 2.28 1.36-1.93 2.31.52-1.43-1.75 1.32-1.92-2.21.84L35.23 9l.01 2.3-2.24.86z"
  }), _react["default"].createElement("linearGradient", {
    id: "china_svg__a",
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
    fill: "url(#china_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgChina;
exports["default"] = _default;