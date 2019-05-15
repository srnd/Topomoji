"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGreece = function SvgGreece(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 62c7.33 0 14.04-2.63 19.26-7H12.75c5.21 4.37 11.92 7 19.25 7zM6.63 48h50.74c1.18-1.87 2.16-3.88 2.91-6H3.71c.75 2.12 1.74 4.13 2.92 6zM61.85 29H32v-7H20v13h41.85a29.833 29.833 0 0 0 0-6zM14 22H3.71a29.54 29.54 0 0 0-1.56 7 29.833 29.833 0 0 0 0 6H14V22zM57.37 16H32v6h28.29c-.75-2.12-1.74-4.13-2.92-6zM51.26 9C46.04 4.63 39.33 2 32 2c-4.27 0-8.33.9-12 2.51V16h12V9h19.26zM14 8.01c-.43.32-.85.65-1.25.99-2.38 2-4.45 4.36-6.12 7H14V8.01z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M12.75 55h38.51c2.38-2 4.45-4.36 6.12-7H6.63c1.67 2.64 3.73 5 6.12 7zM61.85 29c-.24-2.43-.78-4.78-1.56-7H32v7h29.85zM51.26 9H32v7h25.37c-1.67-2.64-3.73-5-6.11-7z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M20 22h12v-6H20V4.51c-2.14.94-4.15 2.12-6 3.5V16H6.63a29.977 29.977 0 0 0-2.91 6H14v13H2.15c.24 2.43.78 4.77 1.56 7h56.57a29.65 29.65 0 0 0 1.56-7H20V22z"
  }), _react["default"].createElement("linearGradient", {
    id: "greece_svg__a",
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
    fill: "url(#greece_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGreece;
exports["default"] = _default;