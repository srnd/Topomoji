"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlightlySmilingFace = function SvgSlightlySmilingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "slightly-smiling-face_svg__a",
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
    fill: "url(#slightly-smiling-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 26.5,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 26.5,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M44.991 40.391c-7.913 5.492-18.075 5.488-25.984 0-1.12-.775-1.258.063-.912.722 5.855 11.194 21.957 11.192 27.813 0 .343-.66.207-1.498-.917-.722z"
  }));
};

var _default = SvgSlightlySmilingFace;
exports["default"] = _default;