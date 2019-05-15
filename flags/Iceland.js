"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIceland = function SvgIceland(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.72 28c-.14-1.02-.32-2.02-.55-3H2.83c-.24.98-.41 1.98-.55 3h59.44zM2.28 36c.14 1.02.32 2.02.55 3h58.34c.24-.98.41-1.98.55-3H2.28z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M20 4.49c-1.03.45-2.03.95-3 1.51v52c.97.56 1.97 1.06 3 1.51V4.49zM28 2.26v59.47c.99.13 1.98.23 3 .26V2c-1.02.03-2.01.13-3 .26z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 1.36.1 2.69.27 4h59.45c.18-1.31.28-2.64.28-4 0-1.36-.1-2.69-.27-4H2.27C2.1 29.31 2 30.64 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M20 59.5a29.48 29.48 0 0 0 8 2.23V2.27c-2.81.38-5.49 1.13-8 2.23v55z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M17 25V6.02C9.98 10.08 4.77 16.9 2.83 25H17zM17 39.02V58C9.98 53.94 4.77 47.12 2.83 39.02H17zM32 2c-.34 0-.67.01-1 .03V25h30.17C58.02 11.81 46.16 2 32 2zM31 39v22.97c.33.01.66.03 1 .03 14.16 0 26.02-9.81 29.17-23H31z"
  }), _react["default"].createElement("linearGradient", {
    id: "iceland_svg__a",
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
    fill: "url(#iceland_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgIceland;
exports["default"] = _default;