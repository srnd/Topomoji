"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPanama = function SvgPanama(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2v30h30C62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 62V32H2c0 16.57 13.43 30 30 30z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 62V32h30c0 16.57-13.43 30-30 30zM32 2v30H2C2 15.43 15.43 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M17 20.65L20.09 23l-1.17-3.81L22 16.75h-3.81L17 13l-1.15 3.75H12l3.08 2.44L13.91 23z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M47 46.65L50.09 49l-1.17-3.81L52 42.75h-3.81L47 39l-1.15 3.75H42l3.08 2.44L43.91 49z"
  }), _react["default"].createElement("linearGradient", {
    id: "panama_svg__a",
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
    fill: "url(#panama_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPanama;
exports["default"] = _default;