"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGambia = function SvgGambia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C19.32 2 8.5 9.88 4.11 21h55.78C55.5 9.88 44.68 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 62c12.68 0 23.5-7.88 27.89-19H4.11C8.5 54.12 19.32 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M62 32c0-3.14-.49-6.16-1.38-9H3.38a30.038 30.038 0 0 0 0 18h57.23c.9-2.84 1.39-5.86 1.39-9z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.29 22c-.12-.34-.27-.67-.4-1H4.11c-.13.33-.28.66-.4 1-.12.33-.22.66-.33 1h57.23c-.1-.34-.21-.67-.32-1zM3.71 42c.12.34.27.67.4 1h55.78c.13-.33.28-.66.4-1 .12-.33.22-.66.33-1H3.38c.11.34.22.67.33 1z"
  }), _react["default"].createElement("linearGradient", {
    id: "gambia_svg__a",
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
    fill: "url(#gambia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGambia;
exports["default"] = _default;