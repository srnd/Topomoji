"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAustria = function SvgAustria(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C18.939 2 7.833 10.35 3.714 22h56.572C56.167 10.35 45.061 2 32 2zM32 62c13.061 0 24.167-8.35 28.286-20H3.714C7.833 53.65 18.939 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M3.714 22C2.607 25.129 2 28.492 2 32s.607 6.871 1.714 10h56.572C61.393 38.871 62 35.508 62 32s-.607-6.871-1.714-10H3.714z"
  }), _react["default"].createElement("linearGradient", {
    id: "austria_svg__a",
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
    fill: "url(#austria_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAustria;
exports["default"] = _default;