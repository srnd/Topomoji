"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEthiopia = function SvgEthiopia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M60.29 42a30.086 30.086 0 0 0 0-20H3.71a30.086 30.086 0 0 0 0 20h56.58z"
  }), _react["default"].createElement("circle", {
    fill: "#014D87",
    cx: 32,
    cy: 32,
    r: 14
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M35.79 33.29l6.06-4.32-7.51-.02L32 22l-2.34 6.95-7.51.02 6.06 4.32-2.3 6.97L32 35.98l6.09 4.28-2.3-6.97zm3.52-3.51l-3.79 2.7-.9-2.72 4.69.02zm-10.12 3.21l1.07-3.22h3.47l1.07 3.22-2.8 1.98-2.81-1.98zM32 24.6l1.46 4.35h-2.93L32 24.6zm-7.31 5.18l4.7-.01-.91 2.72-3.79-2.71zm2.79 8.38l1.44-4.36 2.37 1.68-3.81 2.68zm9.04 0l-3.81-2.68 2.37-1.68 1.44 4.36z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M31.58 37.27V42h.84v-4.73l-.42-.29zM25.91 32.66L22 33.8l.24.78 4.51-1.32zM29.05 28.14l.28-.81-3.11-3.84-.65.5 3.35 4.15zM35.08 28.14l3.35-4.15-.65-.5-3.11 3.84.28.81zM38.09 32.66l-.84.6 4.51 1.32.24-.78z"
  }), _react["default"].createElement("linearGradient", {
    id: "ethiopia_svg__a",
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
    fill: "url(#ethiopia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgEthiopia;
exports["default"] = _default;