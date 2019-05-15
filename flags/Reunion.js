"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgReunion = function SvgReunion(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M34.15 2.09L32 32.07l24.26-17.71C51.2 7.41 43.24 2.73 34.15 2.09zM56.94 48.67c2.92-4.36 4.73-9.53 5.02-15.1L32 32.07l24.94 16.6zM7.06 48.67L32 32.07l-29.96 1.5c.29 5.57 2.1 10.74 5.02 15.1zM7.74 14.36L32 32.07 29.85 2.09c-9.09.64-17.05 5.32-22.11 12.27zM2.04 30.52L32 32.07 6.07 16.92a29.853 29.853 0 0 0-4.03 13.6zM61.96 30.52c-.24-4.94-1.68-9.57-4.03-13.6L32 32.07l29.96-1.55z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M6.07 16.92L32 32.07 7.74 14.36c-.6.82-1.16 1.68-1.67 2.56zM2 32c0 .53.01 1.05.04 1.57L32 32.07 2.04 30.52C2.01 31.01 2 31.5 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M56.94 48.67L32 32.07 7.06 48.67C12.44 56.71 21.6 62 32 62s19.56-5.29 24.94-13.33z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M57.93 16.92c-.52-.89-1.07-1.74-1.68-2.57L32 32.07l25.93-15.15zM32 2h-2.16l.01.09C30.56 2.04 31.27 2 32 2zM34.16 2H32c.73 0 1.44.04 2.15.09l.01-.09z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 32.07l2.15-29.98C33.44 2.04 32.73 2 32 2s-1.44.04-2.15.09L32 32.07zM61.96 33.57c.03-.52.04-1.04.04-1.57 0-.5-.01-.99-.04-1.48L32 32.07l29.96 1.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "reunion_svg__a",
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
    fill: "url(#reunion_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgReunion;
exports["default"] = _default;