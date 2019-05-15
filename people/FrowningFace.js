"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFrowningFace = function SvgFrowningFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "frowning-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#frowning-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 25.5,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 25.5,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.908 47.773c-4.531-14.298-25.287-14.298-29.816 0-.289.909.125 1.974.957.667 5.973-9.376 21.928-9.376 27.902 0 .83 1.307 1.246.243.957-.667z"
  }));
};

var _default = SvgFrowningFace;
exports["default"] = _default;