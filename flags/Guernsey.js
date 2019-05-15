"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGuernsey = function SvgGuernsey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M37.97 2.6H26.03C14.26 4.98 4.99 14.24 2.6 26v12c2.39 11.77 11.66 21.02 23.43 23.4H38c11.76-2.39 21.02-11.66 23.4-23.43V26C59.01 14.24 49.74 4.98 37.97 2.6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M38 26V2.6c-1.94-.39-3.95-.6-6-.6s-4.06.21-6 .6V26H2.6c-.39 1.94-.6 3.94-.6 6s.21 4.06.6 6H26v23.4c1.94.39 3.95.6 6 .6s4.06-.21 6-.6V38h23.4c.39-1.94.6-3.95.6-6s-.21-4.06-.6-6H38z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M52 29.5H34.5V12L37 9.5H27l2.5 2.5v17.5H12L9.5 27v10l2.5-2.5h17.5V52L27 54.5h10L34.5 52V34.5H52l2.5 2.5V27z"
  }), _react["default"].createElement("linearGradient", {
    id: "guernsey_svg__a",
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
    fill: "url(#guernsey_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGuernsey;
exports["default"] = _default;