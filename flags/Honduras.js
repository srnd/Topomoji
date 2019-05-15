"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHonduras = function SvgHonduras(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62zM32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.29 42a30.086 30.086 0 0 0 0-20H3.71a30.086 30.086 0 0 0 0 20h56.58z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M32 33.59L33.85 35l-.7-2.29L35 31.29h-2.29L32 29l-.71 2.29H29l1.85 1.42-.7 2.29zM22 28.59L23.85 30l-.7-2.29L25 26.29l-2.29-.01L22 24l-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM42 28.59L43.85 30l-.7-2.29L45 26.29l-2.29-.01L42 24l-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM22 38.59L23.85 40l-.7-2.29L25 36.29l-2.29-.01L22 34l-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM42 38.59L43.85 40l-.7-2.29L45 36.29l-2.29-.01L42 34l-.71 2.28-2.29.01 1.85 1.42-.7 2.29z"
  }), _react["default"].createElement("linearGradient", {
    id: "honduras_svg__a",
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
    fill: "url(#honduras_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgHonduras;
exports["default"] = _default;