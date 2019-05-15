"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAntarctica = function SvgAntarctica(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#006DAE",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M17.62 30.69l-.34-1.35h-.3l-.45.5-.1-1.35-.67-.51-.34.17-.07.27-.65-.29-.47-.66 1.19-1.01-2.03-1.52-1.02-3.73 7.45 5.25 4.56-1.18-.16-.68.84-.17.44-1.51-.1-.52.3-.4.18-.97-.14-.45.63-.62-.12-1.45 1.52-.68 1.35-1.35-.17-.68 1 .49.75-.52.28-.81.38.64 4.34.19.89.85 3.46.69.75.68.5-.18.55 1.7.29-.05.39-.46 3.16 1.09.24.44.79-.18.84.84.95 4.91-.78 2.71 3.39 1.01.18 2.28-.7 1.73 1.03.73-.51 2.88-1.69 1.35.33 2.03-1.01.68-.51-.17v1.86h-.84l.33.68-1.69.67.47 1.08-1.15 1.12.34.34-.67-.17-3.21 1.9.16-.54-.95.18-.21-.48-.77.65-.34-.18-.5.67-3.62-.49-.45-.29-.6.28-1.37-.99.65-.6.85-1.85.04-1.13-.68-1.53-.84.75-4.67-1.21-.97.15-.87.5-2.3-.19v.34l-4.73-1.69v-1.01h-.85l-.17-2.88-.67.17-.85-2.03.17.51-1.69-1.87h1.01l-.32-2.01.83-1.32.51-.05"
  }), _react["default"].createElement("linearGradient", {
    id: "antarctica_svg__a",
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
    fill: "url(#antarctica_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAntarctica;
exports["default"] = _default;