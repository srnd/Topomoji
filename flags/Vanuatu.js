"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVanuatu = function SvgVanuatu(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C22.81 2 14.58 6.14 9.08 12.65V32h52.09v-7C58.02 11.81 46.16 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M9.08 32v19.35C14.58 57.86 22.81 62 32 62c14.16 0 26.02-9.81 29.17-23v-7H9.08z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M9.08 12.65c-.94 1.11-1.8 2.3-2.57 3.54v3.69H4.56C2.92 23.59 2 27.69 2 32s.92 8.41 2.56 12.11h1.95v3.69c.77 1.24 1.63 2.43 2.57 3.54L28.43 32 9.08 12.65z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M61.93 34v-4a30.45 30.45 0 0 0-.76-5H9.08v14h52.09c.39-1.62.64-3.29.76-5z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M6.51 16.18c-.73 1.18-1.39 2.42-1.95 3.7L16.67 32 4.55 44.11c.57 1.29 1.22 2.52 1.95 3.7L20.33 34h41.6c.04-.66.07-1.33.07-2 0-.67-.03-1.34-.07-2h-41.6L6.51 16.18z"
  }), _react["default"].createElement("path", {
    fill: "#FDCE12",
    d: "M7.32 26.69c-1.13 0-4.6.81-4.6 4.43s3.41 3.96 4.08 3.96c.67 0 3.19-.61 2.9-3.32 0 .77-.87 2.4-2.7 2.4s-2.97-1.36-2.97-2.7 1.11-3.14 3.04-3.14 3.34 1.71 3.34 3.44-1.36 3.93-3.52 3.93v2.06c1.8 0 5.32-1.38 5.32-5.81s-3.76-5.25-4.89-5.25z"
  }), _react["default"].createElement("path", {
    fill: "#FDCE12",
    d: "M7.4 30.86l-.06-.03c.03-.03.05-.06.08-.08.15-.1.38-.11.54-.18.31-.17.52-.43.68-.86l-.04-.08c-.47-.09-.85.08-1.1.37-.11.16-.16.39-.28.54-.04.05-.09.09-.15.13-.05-.04-.11-.08-.15-.13-.1-.15-.15-.37-.26-.54-.25-.29-.63-.46-1.1-.38l-.04.08c.16.43.37.7.68.86.17.07.39.08.54.18.03.02.05.05.08.08-.02.01-.04.02-.05.03-.38.14-.67.4-.91.68-.21.32-.35.68-.33 1.14l.07.05c.44-.13.73-.35.98-.6.21-.26.39-.54.51-.89.12.35.3.63.51.89.25.25.54.46.98.6l.07-.05c.02-.46-.13-.82-.33-1.14-.25-.28-.54-.53-.92-.67z"
  }), _react["default"].createElement("linearGradient", {
    id: "vanuatu_svg__a",
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
    fill: "url(#vanuatu_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgVanuatu;
exports["default"] = _default;