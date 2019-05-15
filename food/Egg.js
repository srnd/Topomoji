"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEgg = function SvgEgg(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "egg_svg__a",
    cx: 29.015,
    cy: 23.75,
    r: 34.25,
    gradientTransform: "matrix(0 -1 .734 0 11.582 52.765)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd1ad"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#fbcca8"
  }), _react["default"].createElement("stop", {
    offset: 0.591,
    stopColor: "#eebf99"
  }), _react["default"].createElement("stop", {
    offset: 0.943,
    stopColor: "#daa981"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d6a57c"
  })), _react["default"].createElement("path", {
    fill: "url(#egg_svg__a)",
    d: "M32 2C19.296 2 9 17.432 9 34s10.296 28 23 28 23-11.432 23-28S44.704 2 32 2z"
  }), _react["default"].createElement("radialGradient", {
    id: "egg_svg__b",
    cx: 339.299,
    cy: 119.959,
    r: 20.45,
    gradientTransform: "matrix(-.2666 .4827 -.3071 -.1552 152.258 -127.674)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#egg_svg__b)",
    d: "M19.321 27.716c-9.52-4.81 1.782-25.266 11.296-20.453 9.518 4.809-1.781 25.265-11.296 20.453z"
  }));
};

var _default = SvgEgg;
exports["default"] = _default;