"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTokelau = function SvgTokelau(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M53.42 53H11.38s25.99-29.38 42.36-38.18c0 0-11.85 21.52 2.97 34.19A29.871 29.871 0 0 0 62 32C62 15.43 48.57 2 32 2S2 15.43 2 32c0 9.81 4.71 18.53 12 24h36c1.21-.91 2.35-1.92 3.42-3zM32 62c4.69 0 9.13-1.08 13.09-3H18.91c3.96 1.92 8.4 3 13.09 3z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M53.74 14.82C37.37 23.62 11.38 53 11.38 53h42.04c1.21-1.23 2.31-2.57 3.29-3.99-14.82-12.67-2.97-34.19-2.97-34.19zM14 56c1.53 1.15 3.18 2.16 4.91 3h26.17c1.74-.84 3.38-1.85 4.91-3H14z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M18.49 10.28l.55 1.68h1.78l-1.44 1.05.55 1.69-1.44-1.05-1.43 1.05.55-1.69-1.44-1.05h1.78zM27.14 18.14l.49 1.49h1.56l-1.27.91.49 1.49-1.27-.92-1.26.92.48-1.49-1.27-.91h1.57zM8.3 20.5l.54 1.68h1.76l-1.42 1.03.54 1.68-1.42-1.04-1.43 1.04.55-1.68-1.43-1.03h1.76zM18.45 33.3l.65 1.98h2.08L19.5 36.5l.64 1.98-1.69-1.22-1.68 1.22.64-1.98-1.68-1.22h2.08z"
  }), _react["default"].createElement("linearGradient", {
    id: "tokelau_svg__a",
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
    fill: "url(#tokelau_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTokelau;
exports["default"] = _default;