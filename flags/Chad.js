"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChad = function SvgChad(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2 32c0 13.061 8.35 24.167 20 28.286V3.714C10.35 7.833 2 18.939 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M62 32c0-13.061-8.35-24.167-20-28.286v56.572C53.65 56.167 62 45.061 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M22 60.286A29.92 29.92 0 0 0 32 62a29.92 29.92 0 0 0 10-1.714V3.714A29.916 29.916 0 0 0 32 2c-3.508 0-6.872.607-10 1.714v56.572z"
  }), _react["default"].createElement("linearGradient", {
    id: "chad_svg__a",
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
    fill: "url(#chad_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgChad;
exports["default"] = _default;