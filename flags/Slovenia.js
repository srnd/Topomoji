"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlovenia = function SvgSlovenia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M60.29 42a30.086 30.086 0 0 0 0-20H3.71a30.086 30.086 0 0 0 0 20h56.58z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M30.19 24.25L31 13.09c-6.33-2.79-13.67-2.79-20 0l.81 11.16c.36 5.01 4.02 9.3 9.19 10.75 5.16-1.45 8.82-5.73 9.19-10.75"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M13.5 25.76c.87 3.65 3.71 6.61 7.5 7.82 3.79-1.22 6.63-4.18 7.5-7.82l-3.75-4.66-1.5 1.86L21 18.78l-2.25 4.19-1.5-1.86-3.75 4.65"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M13.83 26.93c.69 1.11 2.22 1.49 3.41.85.77-.42 1.73-.42 2.5 0s1.73.42 2.5 0 1.73-.42 2.5 0c1.2.64 2.72.26 3.42-.85v.67c-.69 1.11-2.22 1.49-3.42.85-.77-.42-1.73-.42-2.5 0s-1.73.42-2.5 0-1.73-.42-2.5 0c-1.2.64-2.72.26-3.41-.85v-.67z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M13.83 28.27c.69 1.11 2.22 1.5 3.41.85.77-.42 1.73-.42 2.5 0 .77.41 1.73.41 2.5 0 .77-.42 1.73-.42 2.5 0 1.2.64 2.72.26 3.42-.85v.67c-.69 1.11-2.22 1.5-3.42.85-.77-.42-1.73-.42-2.5 0-.77.41-1.73.41-2.5 0-.77-.42-1.73-.42-2.5 0-1.2.64-2.72.26-3.41-.85v-.67z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M11.7 12.8l.83 11.41c.34 4.66 3.69 8.66 8.47 10.09 4.77-1.43 8.13-5.43 8.47-10.09l.83-11.41c.23.1.47.2.7.29l-.81 11.16c-.37 5.02-4.03 9.3-9.19 10.75-5.16-1.45-8.82-5.73-9.19-10.75L11 13.09c.24-.09.47-.19.7-.29"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M17 11.9l.22.74.78-.19-.56.55.56.55-.78-.19-.22.74-.22-.74-.78.19.56-.55-.56-.55.78.19zM25 11.9l.22.74.78-.19-.56.55.56.55-.78-.19-.22.74-.22-.74-.78.19.56-.55-.56-.55.78.19zM21 14.8l.22.74.78-.19-.56.55.56.55-.78-.19L21 17l-.22-.74-.78.19.56-.55-.56-.55.78.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "slovenia_svg__a",
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
    fill: "url(#slovenia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSlovenia;
exports["default"] = _default;