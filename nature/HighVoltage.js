"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHighVoltage = function SvgHighVoltage(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "high-voltage_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 12,
    y1: 32,
    x2: 52,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#ffa113"
  }), _react["default"].createElement("stop", {
    offset: 0.543,
    stopColor: "#ffc32b"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#ffd83a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdf40"
  })), _react["default"].createElement("path", {
    fill: "url(#high-voltage_svg__a)",
    d: "M42 2L12 37h20l-8 25 28-35H34z"
  }), _react["default"].createElement("radialGradient", {
    id: "high-voltage_svg__b",
    cx: 32,
    cy: 32,
    r: 19.416,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.161,
    stopColor: "#fff4ba"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#fff1ac"
  }), _react["default"].createElement("stop", {
    offset: 0.556,
    stopColor: "#ffeb94"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#ffe373"
  }), _react["default"].createElement("stop", {
    offset: 0.992,
    stopColor: "#ffd949"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#high-voltage_svg__b)",
    d: "M38 9L17 35h18l-7 20 19-26H31z"
  }));
};

var _default = SvgHighVoltage;
exports["default"] = _default;