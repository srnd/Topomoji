"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTogo = function SvgTogo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M8 50h48a29.9 29.9 0 0 0 5.4-12H2.6A29.9 29.9 0 0 0 8 50z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M56 50H8c5.47 7.29 14.19 12 24 12s18.53-4.71 24-12z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 2.05.21 4.06.6 6H32V2C15.43 2 2 15.43 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2v12h24C50.53 6.71 41.81 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M56 14H32v12h29.4A29.9 29.9 0 0 0 56 14z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M61.4 26H32v12h29.4c.39-1.94.6-3.95.6-6s-.21-4.06-.6-6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M18 27.31L24.8 32l-2.57-7.63L29 19.64l-8.38-.02L18 12l-2.62 7.62-8.38.02 6.77 4.73L11.2 32z"
  }), _react["default"].createElement("linearGradient", {
    id: "togo_svg__a",
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
    fill: "url(#togo_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTogo;
exports["default"] = _default;