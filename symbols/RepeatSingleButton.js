"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRepeatSingleButton = function SvgRepeatSingleButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "repeat-single-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#repeat-single-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M53 19l-10-8v4H25c-4.824 0-12 3.955-12 14.226 0 .774.057 1.494.136 2.191a13.939 13.939 0 0 1 7.792-2.414l.084-.072C21.129 23.517 24.344 23 25 23h18v4l10-8zM21 33c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm2.5 17.5h-3.273V39.707c-1.198.979-2.605 1.707-4.227 2.176v-2.604c.854-.246 1.781-.705 2.782-1.393 1.003-.676 1.689-1.477 2.063-2.387H23.5V50.5zM52.068 27l-7.08 6.068C44.871 38.482 41.656 39 41 39h-6.587A14.01 14.01 0 0 1 35 43c0 1.391-.21 2.732-.587 4H41c4.824 0 12-3.955 12-14.227 0-2.228-.352-4.131-.932-5.773z"
  }));
};

var _default = SvgRepeatSingleButton;
exports["default"] = _default;