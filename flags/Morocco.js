"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMorocco = function SvgMorocco(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M23.35 44l3.3-9.93L18 27.94h10.69L32 18l3.31 9.94H46l-8.65 6.13 3.3 9.93L32 37.86 23.35 44zm10.5-7.44l2.68 1.9-1.03-3.08-1.65 1.18zm-5.35-1.18l-1.02 3.08 2.68-1.9-1.66-1.18zm.7-2.12l2.8 1.98 2.8-1.98-1.07-3.21h-3.46l-1.07 3.21zm-4.52-3.21l2.68 1.9.63-1.9h-3.31zm11.96 1.91l2.68-1.9h-3.31l.63 1.9zm-5.67-4.02h2.05L32 24.85l-1.03 3.09z"
  }), _react["default"].createElement("linearGradient", {
    id: "morocco_svg__a",
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
    fill: "url(#morocco_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMorocco;
exports["default"] = _default;