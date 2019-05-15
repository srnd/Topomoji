"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClipboard = function SvgClipboard(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M54 58c0 2.199-1.729 4-3.84 4H13.84C11.729 62 10 60.199 10 58V11.002c0-2.199 1.729-4 3.84-4h36.32c2.111 0 3.84 1.801 3.84 4V58z"
  }), _react["default"].createElement("linearGradient", {
    id: "clipboard_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 33,
    y1: 61,
    x2: 33,
    y2: 24.857
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626",
    stopOpacity: 0.05
  }), _react["default"].createElement("stop", {
    offset: 0.092,
    stopColor: "#1a1626",
    stopOpacity: 0.071
  }), _react["default"].createElement("stop", {
    offset: 0.667,
    stopColor: "#1a1626",
    stopOpacity: 0.2
  })), _react["default"].createElement("path", {
    fill: "url(#clipboard_svg__a)",
    d: "M52.264 61H13.736v-7.566l36.985-28.578z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.293 11.502s.316 23.398-.291 47.998H51c-.344-24.6-.291-47.998-.291-47.998H13.293z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M26 21h20v1H26zM26 31h20v1H26zM26 41h20v1H26zM26 51h20v1H26z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M23.249 11.086s.043-1.893 1.197-2.314c.631-.23 4.705-1.525 4.705-1.525s.287 3.759-5.902 3.839zM40.748 11.086s-.043-1.893-1.197-2.314c-.629-.23-4.703-1.525-4.703-1.525s-.287 3.759 5.9 3.839z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M21.974 9.475c-.125-.326.459-.412.643-.27.73.572 1.146.84 1.281.842 2.414.035 2.594-.299 2.76.076-4.663 1.734-3.647 2.033-4.684-.648zM42.023 9.479c.125-.326-.459-.412-.641-.27-.73.572-1.146.838-1.283.84-2.414.035-2.594-.299-2.758.074 4.663 1.738 3.647 2.037 4.682-.644z"
  }), _react["default"].createElement("linearGradient", {
    id: "clipboard_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -162.001,
    y1: 156,
    x2: -162.001,
    y2: 168,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7e8a8f"
  }), _react["default"].createElement("stop", {
    offset: 0.022,
    stopColor: "#9ca7ac"
  }), _react["default"].createElement("stop", {
    offset: 0.05,
    stopColor: "#bbc6cb"
  }), _react["default"].createElement("stop", {
    offset: 0.078,
    stopColor: "#d1dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.104,
    stopColor: "#dee9ee"
  }), _react["default"].createElement("stop", {
    offset: 0.127,
    stopColor: "#e3edf2"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.466,
    stopColor: "#ccd5da"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#c3ccd1"
  }), _react["default"].createElement("stop", {
    offset: 0.753,
    stopColor: "#b3bdc2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#9da8ad"
  }), _react["default"].createElement("stop", {
    offset: 0.992,
    stopColor: "#808c91"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7e8a8f"
  })), _react["default"].createElement("path", {
    fill: "url(#clipboard_svg__b)",
    d: "M42.023 10.932c-1.459-.268-4.316-.824-4.48-.824-.123 0-.346-.223-.346-.344V6.633c0-.406-1.656-1.104-2.021-1.613-.578-.815-.799-3.02-3.177-3.02-2.377 0-2.598 2.205-3.178 3.02-.363.511-2.021 1.207-2.021 1.613v3.131c0 .121-.223.344-.344.344-.166 0-3.021.559-4.482.824-1.541.285-1.975 3.068-1.975 3.068H43.998s-.434-2.783-1.975-3.068zM31.999 5.768a1.5 1.5 0 1 1 0-3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "clipboard_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -162.001,
    y1: 164.131,
    x2: -162.001,
    y2: 167.334,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9e3e8"
  }), _react["default"].createElement("stop", {
    offset: 0.161,
    stopColor: "#d5dfe3"
  }), _react["default"].createElement("stop", {
    offset: 0.34,
    stopColor: "#c7d1d6"
  }), _react["default"].createElement("stop", {
    offset: 0.527,
    stopColor: "#b2bbc0"
  }), _react["default"].createElement("stop", {
    offset: 0.721,
    stopColor: "#939da1"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#6c7679"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5a6366"
  })), _react["default"].createElement("path", {
    fill: "url(#clipboard_svg__c)",
    d: "M31.999 2.666a1.601 1.601 0 0 0 0 3.204 1.601 1.601 0 0 0 0-3.204zm0 2.746a1.144 1.144 0 1 1 0-2.291 1.145 1.145 0 1 1 0 2.291z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M23.5 18.5v5h-5v-5h5m.5-.5h-6v6h6v-6zM23.5 28.5v5h-5v-5h5m.5-.5h-6v6h6v-6zM23.5 38.5v5h-5v-5h5m.5-.5h-6v6h6v-6zM23.5 48.5v5h-5v-5h5m.5-.5h-6v6h6v-6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M25.206 18.259c-1.008.309-3 1.273-4.031 3.561 0 0-.822-1.092-1.551-1.385-.207-.008-.732.039-1.086.428 0 0 1.037.297 2.582 2.645.373-.252 1.006-.648 1.006-.648.85-2.682 2.451-3.928 3.248-4.43a2.47 2.47 0 0 0-.168-.171z"
  }));
};

var _default = SvgClipboard;
exports["default"] = _default;