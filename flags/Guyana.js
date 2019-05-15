"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGuyana = function SvgGuyana(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2c-5.32 0-10.31 1.39-14.64 3.82l-.15 52.28C21.58 60.58 26.62 62 32 62c14.93 0 27.3-10.9 29.61-25.18v-9.65C59.3 12.9 46.93 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M60.06 29.58L17.36 8.04v.36h-3.85c-.35.27-.69.55-1.03.84v45.54c.34.29.68.56 1.03.84h3.7v.43l43.2-21.55c.06-.83 1.59-1.67 1.59-2.5 0-.83-1.87-1.61-1.94-2.42z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M13.5 8.4L62 31.8c-.01-1.57-.14-3.12-.39-4.63L17.36 5.82A28.83 28.83 0 0 0 13.5 8.4z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M12.45 12.02H9.63C4.89 17.33 2 24.32 2 32s2.89 14.67 7.63 19.98h2.82L32.43 32 12.45 12.02z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M12.48 9.23c-1.01.87-1.97 1.8-2.86 2.8L29.6 32 9.62 51.98c.89 1 1.85 1.93 2.86 2.8L35.26 32 12.48 9.23z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.61 36.82c.24-1.51.38-3.05.39-4.63L13.5 55.6c1.21.96 2.51 1.82 3.86 2.58l44.25-21.36z"
  }), _react["default"].createElement("linearGradient", {
    id: "guyana_svg__a",
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
    fill: "url(#guyana_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGuyana;
exports["default"] = _default;