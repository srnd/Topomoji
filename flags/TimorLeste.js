"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTimorLeste = function SvgTimorLeste(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2c-7.64 0-14.61 2.86-19.91 7.57v44.87C17.39 59.14 24.36 62 32 62c16.57 0 30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M12.09 9.57a30.433 30.433 0 0 0-3.65 3.88v37.1c1.1 1.4 2.32 2.7 3.65 3.88L42 32 12.09 9.57z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M8.44 13.44C4.41 18.55 2 24.99 2 32s2.41 13.45 6.44 18.56L27 32 8.44 13.44z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M10.34 33.9l2.38 5.1.95-5.34 5.33-.38-4.75-2.94.92-5.34-3.89 3.51-4.76-2.91 2.34 5.11L5 34.26z"
  }), _react["default"].createElement("linearGradient", {
    id: "timor-leste_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
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
    fill: "url(#timor-leste_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTimorLeste;
exports["default"] = _default;