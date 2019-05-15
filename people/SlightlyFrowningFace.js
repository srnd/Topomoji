"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlightlyFrowningFace = function SvgSlightlyFrowningFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "slightly-frowning-face_svg__a",
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
    fill: "url(#slightly-frowning-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.462 47.063c7.028-4.078 16.055-4.076 23.078 0 .996.576 1.119-.046.811-.535-5.199-8.313-19.501-8.311-24.702 0-.308.489-.186 1.111.813.535z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 21.999,
    cy: 26.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 41.998,
    cy: 26.5,
    rx: 4.5,
    ry: 6
  }));
};

var _default = SvgSlightlyFrowningFace;
exports["default"] = _default;