"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpeechBalloon = function SvgSpeechBalloon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M10 45.27s6.173 7.299 0 16.73c10.262-1.908 12.346-10.65 12.346-10.65L10 45.27z"
  }), _react["default"].createElement("radialGradient", {
    id: "speech-balloon_svg__a",
    cx: 26,
    cy: 23.889,
    r: 34.123,
    gradientTransform: "matrix(1 0 0 .8746 0 2.996)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#e9eff3"
  }), _react["default"].createElement("stop", {
    offset: 0.689,
    stopColor: "#e0e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.933,
    stopColor: "#d1d9de"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#speech-balloon_svg__a)",
    d: "M32 54.445C-8 54.445-8 2 32 2s40 52.445 0 52.445z"
  }), _react["default"].createElement("circle", {
    fill: "#6E8189",
    cx: 18.989,
    cy: 29,
    r: 3
  }), _react["default"].createElement("circle", {
    fill: "#6E8189",
    cx: 32,
    cy: 29,
    r: 3
  }), _react["default"].createElement("circle", {
    fill: "#6E8189",
    cx: 45.012,
    cy: 29,
    r: 3
  }));
};

var _default = SvgSpeechBalloon;
exports["default"] = _default;