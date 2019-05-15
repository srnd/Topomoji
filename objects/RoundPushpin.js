"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRoundPushpin = function SvgRoundPushpin(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "round-pushpin_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.218,
    y1: -13.071,
    x2: 29.006,
    y2: -13.071,
    gradientTransform: "translate(9.407 56.544)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.586,
    stopColor: "#b8c3c9"
  }), _react["default"].createElement("stop", {
    offset: 0.971,
    stopColor: "#9baab0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#round-pushpin_svg__a)",
    d: "M30.486 24.945v26.08L31.992 62l1.52-10.975V24.949z"
  }), _react["default"].createElement("radialGradient", {
    id: "round-pushpin_svg__b",
    cx: 50.597,
    cy: -103.668,
    r: 14.857,
    gradientTransform: "translate(-35.14 137.507) scale(1.2353)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff5c5c"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#fd5353"
  }), _react["default"].createElement("stop", {
    offset: 0.473,
    stopColor: "#f63b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.84,
    stopColor: "#eb1313"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e60000"
  })), _react["default"].createElement("path", {
    fill: "url(#round-pushpin_svg__b)",
    d: "M32 2c-7.738 0-14 6.266-14 14 0 7.729 6.262 14 14 14 7.733 0 14-6.271 14-14 0-7.734-6.267-14-14-14z"
  }));
};

var _default = SvgRoundPushpin;
exports["default"] = _default;