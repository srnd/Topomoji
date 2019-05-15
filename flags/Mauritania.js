"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMauritania = function SvgMauritania(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M2 32c0 9.814 4.715 18.527 12 24h36.002C57.287 50.527 62 41.814 62 32S57.287 13.475 50.002 8H14C6.715 13.475 2 22.186 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M14 8h36.002C44.986 4.234 38.754 2 32 2S19.014 4.234 14 8zM32 62a29.866 29.866 0 0 0 18.002-6H14a29.856 29.856 0 0 0 18 6z"
  }), _react["default"].createElement("linearGradient", {
    id: "mauritania_svg__a",
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
    fill: "url(#mauritania_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M47.68 28.801C46.195 36.104 39.74 41.6 32 41.6s-14.195-5.496-15.68-12.799A16.12 16.12 0 0 0 16 32c0 8.838 7.164 16 16 16s16-7.162 16-16a16.12 16.12 0 0 0-.32-3.199z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M26.561 32L32 28.248 37.439 32l-2.054-6.105L40.801 22h-6.709L32 16l-2.029 6h-6.772l5.416 3.895z"
  }));
};

var _default = SvgMauritania;
exports["default"] = _default;