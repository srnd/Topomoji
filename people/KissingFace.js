"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKissingFace = function SvgKissingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "kissing-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -70.874,
    y1: -173.167,
    x2: -70.874,
    y2: -113.165,
    gradientTransform: "scale(1 -1) rotate(9.997 -654.92 500.502)"
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
    fill: "url(#kissing-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 29.995
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.266 48.604c1.272-1.889-2.315-2.602-2.82-5.465-.504-2.857 2.625-4.758.781-6.095-2.205-1.604-6.013.575-8.994-1.593.375 2.118 2.56 4.115 5.883 3.531 0 0-2.098 1.309-1.479 4.828.622 3.521 3.04 4.033 3.04 4.033-3.323.586-4.69 3.211-4.317 5.33 2.058-3.051 6.38-2.307 7.906-4.569z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(169.997 22.528 26.524)",
    fill: "#302C3B",
    cx: 22.528,
    cy: 26.524,
    rx: 4.499,
    ry: 5.999
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(169.997 42.223 23.052)",
    fill: "#302C3B",
    cx: 42.223,
    cy: 23.052,
    rx: 4.5,
    ry: 5.999
  }));
};

var _default = SvgKissingFace;
exports["default"] = _default;