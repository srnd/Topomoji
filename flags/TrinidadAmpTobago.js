"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrinidadAmpTobago = function SvgTrinidadAmpTobago(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M53.22 10.78c-8.7-8.7-21.41-10.93-32.17-6.71l38.89 38.89c4.21-10.77 1.98-23.48-6.72-32.18zM10.78 53.22c8.7 8.7 21.41 10.93 32.17 6.71L4.07 21.04c-4.22 10.77-1.99 23.48 6.71 32.18z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M10.78 10.78a29.647 29.647 0 0 0-4.88 6.44L46.78 58.1c2.3-1.3 4.47-2.92 6.44-4.88 1.96-1.96 3.58-4.13 4.88-6.44L17.22 5.9c-2.3 1.3-4.48 2.92-6.44 4.88z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M4.92 19.07c-.31.65-.59 1.31-.85 1.98l38.89 38.89c.67-.26 1.33-.54 1.98-.85.63-.3 1.24-.63 1.85-.98L5.9 17.22c-.34.61-.68 1.22-.98 1.85zM21.04 4.07c-.67.26-1.33.54-1.98.85-.63.3-1.24.63-1.85.98L58.1 46.78c.35-.61.68-1.22.98-1.85.31-.65.59-1.31.85-1.98L21.04 4.07z"
  }), _react["default"].createElement("linearGradient", {
    id: "trinidad-amp-tobago_svg__a",
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
    fill: "url(#trinidad-amp-tobago_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTrinidadAmpTobago;
exports["default"] = _default;