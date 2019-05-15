"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMaldives = function SvgMaldives(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M2 32c0 9.81 4.71 18.53 12 24h36c7.29-5.47 12-14.19 12-24S57.29 13.47 50 8H14C6.71 13.47 2 22.19 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M14 8h36c-5.02-3.77-11.25-6-18-6S19.01 4.23 14 8zM32 62c6.75 0 12.99-2.23 18-6H14c5.01 3.77 11.25 6 18 6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M43 49.64C34.63 47.97 28.33 40.71 28.33 32S34.63 16.03 43 14.36c-1.18-.23-2.41-.36-3.67-.36C29.21 14 21 22.06 21 32s8.21 18 18.33 18c1.26 0 2.49-.12 3.67-.36z"
  }), _react["default"].createElement("linearGradient", {
    id: "maldives_svg__a",
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
    fill: "url(#maldives_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMaldives;
exports["default"] = _default;