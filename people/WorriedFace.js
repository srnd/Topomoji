"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWorriedFace = function SvgWorriedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "worried-face_svg__a",
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
    fill: "url(#worried-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M14.455 20.889c5.243.237 11.211-1.973 13.489-4.765.477-.591-.721-3.061-1.184-2.622-3.561 3.379-8.396 5.719-13.247 5.811-.651.012.155 1.541.942 1.576zM49.543 20.887c-5.242.238-11.209-1.971-13.486-4.764-.48-.588.721-3.062 1.184-2.621 3.561 3.376 8.396 5.719 13.246 5.81.652.011-.155 1.541-.944 1.575z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 28.5,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 28.5,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.77 48.328c5.624-4.66 12.844-4.658 18.463 0 .797.658.895-.053.648-.611-4.16-9.5-15.602-9.498-19.762 0-.246.558-.148 1.269.651.611z"
  }));
};

var _default = SvgWorriedFace;
exports["default"] = _default;