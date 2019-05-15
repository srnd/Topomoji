"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUganda = function SvgUganda(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32 2C23.12 2 15.14 5.86 9.65 12h44.71C48.86 5.86 40.88 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M54.36 12H9.65a29.812 29.812 0 0 0-5.93 10h56.57a29.977 29.977 0 0 0-5.93-10z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.29 22H3.71C2.61 25.13 2 28.49 2 32h60c0-3.51-.61-6.87-1.71-10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M62 32H2c0 3.51.61 6.87 1.71 10h56.57A29.84 29.84 0 0 0 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M60.29 42H3.71c1.32 3.73 3.35 7.11 5.93 10h44.71c2.59-2.89 4.62-6.27 5.94-10z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M54.36 52H9.65C15.14 58.13 23.12 62 32 62s16.86-3.87 22.36-10z"
  }), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 32,
    cy: 32,
    r: 10
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 31,
    cy: 26,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.5 35l.5 6h.5v-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31 40.5v.5h2v-1zM34.93 37.25c-1.06-1.67-2.13-3.34-3.2-5.01-.35-.54-1.21-.04-.87.51.9 1.42 1.81 2.84 2.71 4.26h-3.58v.5c1.67 0 2.83.5 4.5.5.38-.01.65-.44.44-.76z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M33.93 32.1c-1.13-.42-3.36-.88-1.93-5.1h-1.82s-4.38 8.73 3.75 8.73c1.8 0 2.58 1.46 2.58 3.27 0 0 2.16-5.16-2.58-6.9zM29.5 36.5l.5 2h.5v-2zM31 25l-4 2h4z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M35 32.62v3.33s1.59.65.94 3.06l1.06.52s1.84-4.8-2-6.91z"
  }), _react["default"].createElement("path", {
    fill: "#BCBCBC",
    d: "M31.5 32s0 2.58 2.54 2.58c0 0 .96-2.58-2.54-2.58z"
  }), _react["default"].createElement("ellipse", {
    fill: "#BCBCBC",
    cx: 30.36,
    cy: 31.74,
    rx: 0.86,
    ry: 1.55
  }), _react["default"].createElement("linearGradient", {
    id: "uganda_svg__a",
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
    fill: "url(#uganda_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgUganda;
exports["default"] = _default;