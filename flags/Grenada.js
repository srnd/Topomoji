"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGrenada = function SvgGrenada(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M11.19 53.6C16.59 58.8 23.92 62 32 62c8.08 0 15.41-3.2 20.81-8.4H11.19zM52.81 10.4C47.41 5.2 40.08 2 32 2s-15.41 3.2-20.81 8.4h41.62z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M5.38 45.82L32 32 5.38 18.18A29.728 29.728 0 0 0 2 32c0 4.99 1.22 9.69 3.38 13.82zM62 32c0-4.99-1.22-9.69-3.38-13.82L32 32l26.62 13.82C60.78 41.69 62 36.99 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M58.62 45.82L32 32 5.38 45.82c1.51 2.9 3.48 5.53 5.81 7.78h41.62c2.33-2.25 4.3-4.87 5.81-7.78zM5.38 18.18L32 32l26.62-13.82c-1.51-2.9-3.48-5.53-5.82-7.78H11.19c-2.33 2.25-4.3 4.87-5.81 7.78z"
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 32,
    cy: 32,
    r: 9
  }), _react["default"].createElement("path", {
    fill: "#CE1126",
    d: "M8.29 34.41c.77.8 1.64 1.47 2.45 1.81.01-.89-.15-1.9-.42-2.92-.68-.64-1.46-1.19-2.21-1.48-.12.82-.04 1.72.18 2.59z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M5.02 26.33c1.31 2.72-3.39 9.21 4.43 10.74-.52-.71-.93-1.65-1.17-2.65-.21-.87-.29-1.77-.18-2.58.76.29 1.53.84 2.21 1.48.8.75 1.48 1.62 1.85 2.37 2.05-7.44-5.24-6.99-7.14-9.36zM21.96 4.86l.59 1.81h1.91l-1.55 1.12.59 1.82-1.54-1.12-1.55 1.12.59-1.82-1.54-1.12h1.91zM22.96 54.1l.59 1.81h1.91l-1.55 1.13.59 1.81-1.54-1.12-1.55 1.12.59-1.81-1.54-1.13h1.91zM32 23l1.93 6.25h6.26l-5.06 3.87 1.93 6.26L32 35.51l-5.06 3.87 1.93-6.26-5.06-3.87h6.26zM31.96 4.86l.59 1.81h1.91l-1.55 1.12.59 1.82-1.54-1.12-1.55 1.12.59-1.82-1.54-1.12h1.91zM41.96 4.86l.59 1.81h1.91l-1.55 1.12.59 1.82-1.54-1.12-1.55 1.12.59-1.82-1.54-1.12h1.91zM31.96 54.1l.59 1.82h1.91l-1.55 1.12.59 1.82-1.54-1.13-1.55 1.13.59-1.82-1.54-1.12h1.91zM41.96 54.1l.59 1.82h1.91l-1.55 1.12.59 1.81-1.54-1.12-1.55 1.12.59-1.81-1.54-1.12h1.91z"
  }), _react["default"].createElement("linearGradient", {
    id: "grenada_svg__a",
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
    fill: "url(#grenada_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGrenada;
exports["default"] = _default;