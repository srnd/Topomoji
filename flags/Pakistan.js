"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPakistan = function SvgPakistan(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M17 58V6C8.04 11.19 2 20.89 2 32s6.04 20.81 15 26z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2a29.87 29.87 0 0 0-15 4.02v51.95C21.41 60.53 26.53 62 32 62c16.57 0 30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M38 38.13c-6.07 0-11-4.82-11-10.77 0-2.85 1.14-5.44 2.99-7.36C25.84 22.13 23 26.37 23 31.28 23 38.3 28.82 44 36 44s13-5.7 13-12.72c0-.69-.07-1.36-.18-2.02-.91 5.03-5.41 8.87-10.82 8.87z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M40 19.88L42.47 18l-.93 3.05L44 22.94l-3.05.01L40 26l-.95-3.05-3.05-.01 2.46-1.89-.93-3.05z"
  }), _react["default"].createElement("linearGradient", {
    id: "pakistan_svg__a",
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
    fill: "url(#pakistan_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPakistan;
exports["default"] = _default;