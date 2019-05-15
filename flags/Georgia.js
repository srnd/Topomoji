"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGeorgia = function SvgGeorgia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M37.97 2.6H26.03C14.26 4.98 4.99 14.24 2.6 26v12c2.39 11.77 11.66 21.02 23.43 23.4H38c11.76-2.39 21.02-11.66 23.4-23.43V26C59.01 14.24 49.74 4.98 37.97 2.6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M38 26V2.6c-1.94-.39-3.95-.6-6-.6s-4.06.21-6 .6V26H2.6c-.39 1.94-.6 3.95-.6 6 0 2.06.21 4.06.6 6H26v23.4c1.94.39 3.95.6 6 .6s4.06-.21 6-.6V38h23.4c.39-1.94.6-3.95.6-6s-.21-4.06-.6-6H38z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M18 20h-4l1-6-1-6h4l-1 6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M10 16v-4l6 1 6-1v4l-6-1zM50 20h-4l1-6-1-6h4l-1 6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M42 16v-4l6 1 6-1v4l-6-1zM18 56h-4s1-4.5 1-6-1-6-1-6h4s-1 4.5-1 6 1 6 1 6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M10 52v-4l6 1 6-1v4l-6-1zM50 56h-4l1-6-1-6h4l-1 6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M42 52v-4l6 1 6-1v4l-6-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "georgia_svg__a",
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
    fill: "url(#georgia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGeorgia;
exports["default"] = _default;