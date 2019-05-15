"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKosovo = function SvgKosovo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#014D87",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M29.02 26.76s-1 1.54-2.7 2.15c0 0 .08 2.54-1.47 2.69-1.54.15-2.85 0-2.85 0s.23 2.31-.85 1.69c-1.08-.61-4.09-.46-2.86 1.31 1.24 1.77 3.09 2.62 3.63 6.77 0 0 5.17 1.85 5.55 5.46.39 3.61-.07 4.29-.07 4.29s3.17.17 3.17-2.37 1.93-2.38 2.78-2.46c.85-.08 1.7-2.38 2.86-1.38s2.16 1.23 3.09-.23c.93-1.46 3.63-1.69 3.63-1.69s.08-4.31 3.09-6.92c0 0-1.47-2.62-4.94-2.62 0 0-.23-3.15-2.93-3.15 0 0-1.85-3.54-5.02-3.54 0 0-1.11-1.4-1.11-3.63 0 0-1.98.32-2.83 1.02-.85.7-1.47.62-1.47.62s.76.68 1.3 1.99z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M28 17.47l1.85 1.41-.7-2.29L31 15.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM21 19.47l1.85 1.41-.7-2.29L24 17.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM36 17.47l1.85 1.41-.7-2.29L39 15.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM14 23.47l1.85 1.41-.7-2.29L17 21.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM50 22.47l1.85 1.41-.7-2.29L53 20.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29zM43 19.47l1.85 1.41-.7-2.29L46 17.17l-2.29-.01-.71-2.28-.71 2.28-2.29.01 1.85 1.42-.7 2.29z"
  }), _react["default"].createElement("linearGradient", {
    id: "kosovo_svg__a",
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
    fill: "url(#kosovo_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgKosovo;
exports["default"] = _default;