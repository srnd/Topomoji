"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSamoa = function SvgSamoa(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2v30H2c0 16.57 13.43 30 30 30s30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C15.43 2 2 15.43 2 32h30V2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M19 13.06l1.24.94-.47-1.52 1.23-.95-1.52-.01L19 10l-.48 1.52-1.52.01 1.23.95-.47 1.52zM19 27.06l1.24.94-.47-1.53 1.23-.94-1.52-.01L19 24l-.48 1.52-1.52.01 1.23.94-.47 1.53zM14 18.06l1.24.94-.47-1.53 1.23-.94-1.53-.01L14 15l-.47 1.52-1.53.01 1.23.94-.47 1.53zM24 18.06l1.23.94-.46-1.53 1.23-.94-1.53-.01L24 15l-.47 1.52-1.53.01 1.23.94-.47 1.53zM22 22.53l.63.47-.24-.76.63-.47-.78-.01L22 21l-.24.76-.78.01.63.47-.24.76z"
  }), _react["default"].createElement("linearGradient", {
    id: "samoa_svg__a",
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
    fill: "url(#samoa_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSamoa;
exports["default"] = _default;