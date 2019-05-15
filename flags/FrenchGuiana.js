"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFrenchGuiana = function SvgFrenchGuiana(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M2 32c0 16.57 13.43 30 30 30 11.74 0 21.91-6.75 26.83-16.58L5.17 18.58A29.81 29.81 0 0 0 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2C20.26 2 10.09 8.75 5.17 18.58l53.66 26.83C60.86 41.38 62 36.82 62 32 62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 17.91l3.29 10.13h10.65l-8.62 6.25 3.3 10.13L32 38.16l-8.61 6.26 3.29-10.13-8.62-6.25h10.65z"
  }), _react["default"].createElement("linearGradient", {
    id: "french-guiana_svg__a",
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
    fill: "url(#french-guiana_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgFrenchGuiana;
exports["default"] = _default;