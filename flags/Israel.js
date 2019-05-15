"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIsrael = function SvgIsrael(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M52.39 10C47.04 5.04 39.87 2 32 2c-7.88 0-15.04 3.04-20.39 8h40.78zM11.61 54c5.35 4.96 12.51 8 20.39 8 7.87 0 15.04-3.04 20.39-8H11.61zM2 32c0 4.27.9 8.32 2.5 12h55c1.61-3.68 2.5-7.73 2.5-12s-.9-8.32-2.5-12h-55C2.9 23.68 2 27.73 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M11.63 54h40.74c3.01-2.79 5.46-6.19 7.13-10h-55c1.67 3.81 4.12 7.21 7.13 10zM52.37 10H11.63A30.084 30.084 0 0 0 4.5 20h55a30.084 30.084 0 0 0-7.13-10zM41 27h-6l-3-5-3 5h-6l3 5-3 5h6l3 5 3-5h6l-3-5 3-5zm-9-2.07L33.24 27h-2.49L32 24.93zm-6.36 3.53h2.48l-1.24 2.07-1.24-2.07zm0 7.08l1.24-2.07 1.24 2.07h-2.48zM32 39.07L30.76 37h2.49L32 39.07zm2.12-3.53h-4.24L27.76 32l2.12-3.54h4.24L36.24 32l-2.12 3.54zm4.24 0h-2.48l1.24-2.07 1.24 2.07zm-1.24-5l-1.24-2.07h2.48l-1.24 2.07z"
  }), _react["default"].createElement("linearGradient", {
    id: "israel_svg__a",
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
    fill: "url(#israel_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgIsrael;
exports["default"] = _default;