"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgConfusedFace = function SvgConfusedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "confused-face_svg__a",
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
    fill: "url(#confused-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 22,
    cy: 26.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 42,
    cy: 26.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M42.632 40.614c-7.614-2.473-17.302-.032-21.696 6-.359.495.117 1.072.659.696 4.395-3.057 13.444-4.98 19.847-2.68 2.451.883 3.787-3.173 1.19-4.016z"
  }));
};

var _default = SvgConfusedFace;
exports["default"] = _default;