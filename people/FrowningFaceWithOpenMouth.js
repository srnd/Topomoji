"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFrowningFaceWithOpenMouth = function SvgFrowningFaceWithOpenMouth(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "frowning-face-with-open-mouth_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 61.999,
    x2: 32.001,
    y2: 2.002
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
    fill: "url(#frowning-face-with-open-mouth_svg__a)",
    cx: 32,
    cy: 32,
    r: 29.999
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M42.926 46.771C43.614 42.621 38.828 38 31.998 38c-6.824 0-11.697 4.652-10.926 8.771.732 3.906 5.732 1.457 10.928 1.463 5.383.003 10.277 2.466 10.926-1.463z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 25.999,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 25.999,
    r: 4.5
  }));
};

var _default = SvgFrowningFaceWithOpenMouth;
exports["default"] = _default;