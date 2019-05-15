"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBarbados = function SvgBarbados(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2 32c0 11.51 6.49 21.5 16 26.53V5.47C8.49 10.5 2 20.49 2 32zM62 32c0-11.51-6.49-21.5-16-26.53v53.07C55.51 53.5 62 43.51 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 2c-5.06 0-9.82 1.26-14 3.47v53.07A29.97 29.97 0 0 0 32 62c5.06 0 9.82-1.26 14-3.47V5.47A29.858 29.858 0 0 0 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M43.84 20.16l-1.07-1.08c-.2.22-4.63 5.25-5.06 15.12h-4.23V23.28h-2.96V34.2h-4.23c-.43-9.87-4.86-14.9-5.06-15.12l-2.15 2.15c.04.05 4.28 4.95 4.28 14.54v1.56h7.15v10.82h2.96V37.33h7.15v-1.56c0-9.58 4.24-14.49 4.28-14.54l-1.06-1.07z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32 15.86l-3.23 9.68h6.46zM21.24 19.08l6.45 6.46h-4.03zM42.76 19.08l-6.46 6.46h4.04z"
  }), _react["default"].createElement("linearGradient", {
    id: "barbados_svg__a",
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
    fill: "url(#barbados_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBarbados;
exports["default"] = _default;