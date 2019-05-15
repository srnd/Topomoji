"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCopyright = function SvgCopyright(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "copyright_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 13.977,
    y1: 8.978,
    x2: 49.45,
    y2: 44.451
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.125,
    stopColor: "#464d55"
  }), _react["default"].createElement("stop", {
    offset: 0.398,
    stopColor: "#3a3b47"
  }), _react["default"].createElement("stop", {
    offset: 0.684,
    stopColor: "#32303e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#copyright_svg__a)",
    d: "M32 2C18.213 2 7 13.217 7 27c0 13.785 11.213 25 25 25 13.785 0 25-11.215 25-25C57 13.217 45.785 2 32 2zm0 45.002c-11.029 0-20.002-8.973-20.002-20.002 0-11.027 8.973-19.998 20.002-19.998 11.027 0 19.998 8.971 19.998 19.998 0 11.029-8.971 20.002-19.998 20.002z"
  }), _react["default"].createElement("linearGradient", {
    id: "copyright_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 13.567,
    y1: 8.146,
    x2: 50.673,
    y2: 45.252
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.125,
    stopColor: "#464d55"
  }), _react["default"].createElement("stop", {
    offset: 0.398,
    stopColor: "#3a3b47"
  }), _react["default"].createElement("stop", {
    offset: 0.684,
    stopColor: "#32303e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#copyright_svg__b)",
    d: "M19.504 26.999C19.504 19.686 24.967 14 32.548 14c5.589 0 10.363 3.442 11.902 8.466.15.581-.153.957-.734.957h-3.479c-.473 0-.76-.233-.965-.671-1.117-2.432-3.71-3.96-6.725-3.96-4.908 0-8.125 3.397-8.125 8.208s3.217 8.208 8.125 8.208c3.015 0 5.607-1.529 6.725-3.961.205-.438.492-.671.965-.671h3.479c.581 0 .895.349.742.886C42.974 36.494 38.173 40 32.548 40c-7.581 0-13.044-5.687-13.044-13.001z"
  }));
};

var _default = SvgCopyright;
exports["default"] = _default;