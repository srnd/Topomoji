"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAruba = function SvgAruba(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M59.5 44v-4h1.4c.71-2.55 1.1-5.23 1.1-8C62 15.43 48.57 2 32 2S2 15.43 2 32c0 2.77.38 5.45 1.09 8H4.5v4c.94 2.14 2.13 4.15 3.52 6h3.59v3.98C16.96 58.95 24.12 62 32 62c7.88 0 15.04-3.04 20.39-8v-4H56c1.39-1.85 2.56-3.86 3.5-6z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M4.5 44h55c.56-1.29 1.04-2.63 1.42-4H3.09c.38 1.38.85 2.71 1.41 4zM8 50c1.08 1.44 2.29 2.78 3.61 4h40.78c1.32-1.22 2.53-2.56 3.61-4H8z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M22 33.71l-3.73-9.98L8.29 20l9.98-3.73L22 6.29l3.73 9.98L35.71 20l-9.98 3.73L22 33.71z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M19.82 17.82L22 12l2.18 5.82L30 20l-5.82 2.18L22 28l-2.18-5.82L14 20z"
  }), _react["default"].createElement("linearGradient", {
    id: "aruba_svg__a",
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
    fill: "url(#aruba_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAruba;
exports["default"] = _default;