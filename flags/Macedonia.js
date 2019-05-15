"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMacedonia = function SvgMacedonia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M58.948 45.188a29.801 29.801 0 0 0 2.902-10.202c-2.445-1.289-2.091-5.31 0-5.971a29.801 29.801 0 0 0-2.902-10.202c-2.251.113-3.793-2.387-2.657-4.408C51.622 7.97 44.464 3.464 36.227 2.302c-1.488 2.728-6.926 2.582-8.454 0C19.535 3.464 12.377 7.97 7.708 14.405c.843 1.562-.365 4.562-2.656 4.406A29.813 29.813 0 0 0 2.15 29.014c1.382.871 1.798 4.932 0 5.971a29.813 29.813 0 0 0 2.902 10.203c2.166-.18 3.833 2.362 2.656 4.406 4.669 6.436 11.827 10.941 20.064 12.104 1.55-2.794 6.862-2.794 8.455 0 8.236-1.163 15.396-5.669 20.064-12.104-1.365-2.065-.178-4.419 2.657-4.406z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 32.001,
    cy: 32,
    r: 8.571
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M21.286 32c0-.359.019-.716.053-1.066l-19.19-1.919a30.025 30.025 0 0 0-.001 5.97l19.19-1.919c-.033-.35-.052-.707-.052-1.066zM23.497 25.482L7.699 14.407a29.907 29.907 0 0 0-2.646 4.396l17.199 8.745c.338-.737.757-1.43 1.245-2.066zM41.749 27.549l17.2-8.745a30.039 30.039 0 0 0-2.646-4.397L40.504 25.482a10.75 10.75 0 0 1 1.245 2.067zM61.854 29.015l-19.191 1.919a10.747 10.747 0 0 1 0 2.132l19.191 1.919c.095-.982.146-1.978.146-2.985 0-1.008-.051-2.004-.146-2.985zM40.504 38.518l15.799 11.075a29.907 29.907 0 0 0 2.646-4.396l-17.2-8.745c-.338.737-.757 1.43-1.245 2.066zM22.252 36.451L5.053 45.196a29.976 29.976 0 0 0 2.646 4.396l15.798-11.075a10.712 10.712 0 0 1-1.245-2.066zM32.001 42.714c-.364 0-.724-.018-1.078-.054l-3.16 19.036c1.384.197 2.799.304 4.238.304s2.853-.107 4.238-.304L33.078 42.66c-.354.036-.714.054-1.077.054zM32.001 21.286c.363 0 .723.018 1.077.054l3.161-19.036C34.854 2.107 33.44 2 32.001 2s-2.854.107-4.238.304l3.16 19.036c.354-.036.714-.054 1.078-.054z"
  }), _react["default"].createElement("linearGradient", {
    id: "macedonia_svg__a",
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
    fill: "url(#macedonia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMacedonia;
exports["default"] = _default;