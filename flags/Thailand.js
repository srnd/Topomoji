"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThailand = function SvgThailand(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M52.39 10C47.04 5.04 39.88 2 32 2c-7.87 0-15.04 3.04-20.39 8h40.78zM11.61 54c5.35 4.96 12.51 8 20.39 8 7.88 0 15.04-3.04 20.39-8H11.61z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2 32c0 4.27.9 8.32 2.5 12h55c1.61-3.68 2.5-7.73 2.5-12s-.9-8.32-2.5-12h-55C2.9 23.68 2 27.73 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11.63 54h40.74c3.01-2.79 5.46-6.18 7.13-10h-55c1.67 3.82 4.12 7.21 7.13 10zM52.37 10H11.63A30.084 30.084 0 0 0 4.5 20h55a30.084 30.084 0 0 0-7.13-10z"
  }), _react["default"].createElement("linearGradient", {
    id: "thailand_svg__a",
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
    fill: "url(#thailand_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgThailand;
exports["default"] = _default;