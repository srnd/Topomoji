"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHushedFace = function SvgHushedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "hushed-face_svg__a",
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
    fill: "url(#hushed-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 32,
    cy: 48,
    r: 5
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M51.344 15.346c-4.158-3.201-10.314-4.814-13.779-3.832-.732.208-1.167 2.92-.535 2.826 4.854-.725 10.158.131 14.184 2.838.539.363.755-1.352.13-1.832zM12.656 15.349c4.156-3.204 10.313-4.816 13.779-3.834.73.206 1.166 2.921.533 2.825-4.854-.723-10.157.131-14.182 2.838-.54.366-.756-1.35-.13-1.829z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 21.999,
    cy: 28.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 41.999,
    cy: 28.5,
    rx: 4.5,
    ry: 6
  }));
};

var _default = SvgHushedFace;
exports["default"] = _default;