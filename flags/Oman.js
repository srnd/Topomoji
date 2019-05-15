"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOman = function SvgOman(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2c-3.51 0-6.87.62-10 1.73V22h38.29C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.29 22H22V3.71C10.35 7.83 2 18.94 2 32c0 13.06 8.35 24.17 20 28.29V42h38.29a30.086 30.086 0 0 0 0-20z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M22 42v18.27C25.13 61.38 28.49 62 32 62c13.06 0 24.17-8.35 28.29-20H22z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M19.14 22.38l-.25.1-1.58-1.39-1.79-1.95c.05-.25.05-.69.05-1.03l.26-.31h.28c.12.21.35.36.61.36s.49-.15.61-.36h.4v.46h2.74v-1.51h-2.74v.45h-.35a.725.725 0 0 0-.52-.44l.06-.06 2.16-4.54-.25-.13-3.1 4.2.18.24-.18.37-.46.02-.14-.19.42.02v-.27l-.28-.12v-.57l.35-.01.11-.35-.81-.23v-1.96l.56-.73-.98-.68-.98.68.56.73v1.96l-.81.23.11.35.35.01v.57l-.28.12v.27l.42-.02-.14.19-.46-.02-.18-.37.18-.24-3.1-4.2-.25.13 2.16 4.54.06.06c-.24.05-.44.22-.52.44h-.35v-.45H8.53v1.51h2.74v-.46h.4c.12.21.35.36.61.36s.49-.15.61-.36h.28l.29.36v.24h-.36l-.13.31-2.43.22-.11-.16s-1.31.17-1.55.5c-.05.06-.04.25 0 .31.23.34 1.51.65 1.51.65l.04-.15s.93.2 1.86.33l-.61.67-1.58 1.39-.25-.1-1.43 1.43.05.2 1.63-.45 1.15-.77-.2-.05 2.55-2.19c.08 0 .15 0 .21-.01.29-.04.87-.24 1.11-.43l.34.34 2.67 2.3-.2.05 1.15.77 1.65.44.05-.2-1.44-1.42z"
  }), _react["default"].createElement("linearGradient", {
    id: "oman_svg__a",
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
    fill: "url(#oman_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgOman;
exports["default"] = _default;