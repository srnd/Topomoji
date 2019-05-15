"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSvalbardAmpJanMayen = function SvgSvalbardAmpJanMayen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.721 28a30.504 30.504 0 0 0-.551-3H2.829a30.502 30.502 0 0 0-.55 3h59.442zM2.279 36c.137 1.016.315 2.018.55 3H61.17c.234-.982.413-1.984.551-3H2.279z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M20 4.489a29.44 29.44 0 0 0-3 1.513v51.996c.966.561 1.97 1.063 3 1.512V4.489zM28 2.263v59.474c.986.133 1.984.23 3 .264V2a29.878 29.878 0 0 0-3 .263z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2 32c0 1.357.099 2.689.273 4h59.453c.174-1.311.274-2.643.274-4s-.1-2.69-.273-4H2.273A30.339 30.339 0 0 0 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M20 59.496a29.785 29.785 0 0 0 8 2.23V2.273a29.822 29.822 0 0 0-8 2.23v54.993z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M17 25V6.023C9.982 10.084 4.766 16.902 2.829 25H17zM17 39.023V58C9.982 53.939 4.766 47.121 2.829 39.023H17zM32 2c-.336 0-.668.015-1 .025V25h30.17C58.016 11.81 46.156 2 32 2zM31 39v22.975c.332.009.664.025 1 .025 14.156 0 26.016-9.811 29.17-23H31z"
  }), _react["default"].createElement("linearGradient", {
    id: "svalbard-amp-jan-mayen_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#svalbard-amp-jan-mayen_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSvalbardAmpJanMayen;
exports["default"] = _default;