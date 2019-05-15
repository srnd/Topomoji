"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSuriname = function SvgSuriname(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 3.88.75 7.59 2.09 11h55.82C61.25 39.59 62 35.88 62 32s-.75-7.59-2.09-11H4.09A30.018 30.018 0 0 0 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M7.29 49h49.43c1.28-1.86 2.36-3.87 3.2-6H4.09c.84 2.13 1.91 4.14 3.2 6zM4.09 21h55.82c-.84-2.13-1.91-4.14-3.2-6H7.29a29.506 29.506 0 0 0-3.2 6z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 37.31L38.18 42l-2.34-7.63L42 29.64l-7.62-.02L32 22l-2.38 7.62-7.62.02 6.15 4.73L25.82 42z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M56.71 15C51.3 7.15 42.25 2 32 2S12.7 7.15 7.29 15h49.42zM7.29 49C12.7 56.85 21.75 62 32 62s19.3-5.15 24.71-13H7.29z"
  }), _react["default"].createElement("linearGradient", {
    id: "suriname_svg__a",
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
    fill: "url(#suriname_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSuriname;
exports["default"] = _default;