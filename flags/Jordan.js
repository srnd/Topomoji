"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJordan = function SvgJordan(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M8 22h52.29C56.17 10.35 45.06 2 32 2 22.18 2 13.47 6.72 8 14.01V22z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.29 22H8v20h52.29a30.086 30.086 0 0 0 0-20z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M8 42v7.99C13.47 57.28 22.18 62 32 62c13.06 0 24.17-8.35 28.29-20H8z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M8 14c-3.77 5.02-6 11.25-6 18s2.23 12.99 6 18l24-18L8 14z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11.04 29.69L12 27l.96 2.69 2.58-1.23-1.23 2.58L17 32l-2.69.96 1.23 2.58-2.58-1.23L12 37l-.96-2.69-2.58 1.23 1.23-2.58L7 32l2.69-.96-1.22-2.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "jordan_svg__a",
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
    fill: "url(#jordan_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgJordan;
exports["default"] = _default;