"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEngland = function SvgEngland(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M37.969 2.602H26.033C14.264 4.979 4.988 14.236 2.602 26.001v11.997c2.387 11.766 11.662 21.023 23.432 23.4H38c11.764-2.389 21.023-11.662 23.4-23.432V26.001C59.012 14.236 49.738 4.979 37.969 2.602z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M38 26V2.602C36.063 2.207 34.055 2 32 2s-4.061.207-6 .602V26H2.602C2.208 27.939 2 29.945 2 32s.208 4.061.602 6H26v23.398c1.939.395 3.945.602 6 .602s4.063-.207 6-.602V38h23.4c.393-1.939.6-3.945.6-6s-.207-4.061-.6-6H38z"
  }), _react["default"].createElement("linearGradient", {
    id: "england_svg__a",
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
    fill: "url(#england_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgEngland;
exports["default"] = _default;