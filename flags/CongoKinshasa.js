"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCongoKinshasa = function SvgCongoKinshasa(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M10.78 10.79c-8.7 8.7-10.93 21.4-6.71 32.17L42.96 4.07C32.19-.14 19.48 2.09 10.78 10.79zM53.22 53.21c8.7-8.7 10.93-21.4 6.71-32.17L21.05 59.93c10.76 4.21 23.47 1.98 32.17-6.72z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M53.22 10.79a29.884 29.884 0 0 0-6.43-4.89L5.9 46.79c1.3 2.3 2.93 4.47 4.89 6.43 1.96 1.96 4.13 3.59 6.43 4.89l40.88-40.9c-1.3-2.3-2.92-4.47-4.88-6.42z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M17.21 58.1c.61.35 1.23.67 1.86.97.65.31 1.31.59 1.98.85l38.88-38.88c-.26-.67-.54-1.33-.85-1.98-.3-.63-.63-1.25-.97-1.86l-40.9 40.9zM44.93 4.92c-.65-.31-1.31-.59-1.98-.85L4.07 42.96c.26.67.54 1.33.85 1.98.3.63.63 1.24.97 1.85L46.79 5.9c-.61-.35-1.23-.68-1.86-.98zM18 19.19L21.71 22l-1.4-4.58L24 14.5h-4.57L18 10l-1.38 4.5H12l3.69 2.92-1.4 4.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "congo-kinshasa_svg__a",
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
    fill: "url(#congo-kinshasa_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCongoKinshasa;
exports["default"] = _default;