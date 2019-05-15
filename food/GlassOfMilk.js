"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlassOfMilk = function SvgGlassOfMilk(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M32 5.019H12s0 32.722 7 53.627c1.025 3.25 24.977 3.25 26 0 7-20.905 7-53.627 7-53.627H32z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M32 5.53H13.771L14 14.059h36l.229-8.528H32z"
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M32 56.35c-7.18 0-13 1.013-13 2.26C19 59.86 24.82 62 32 62s13-2.143 13-3.391c0-1.247-5.82-2.259-13-2.259z"
  }), _react["default"].createElement("linearGradient", {
    id: "glass-of-milk_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 14,
    y1: 35.035,
    x2: 50,
    y2: 35.035
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5f5f5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e8e8e8"
  })), _react["default"].createElement("path", {
    fill: "url(#glass-of-milk_svg__a)",
    d: "M14 14.059c0 13.56 4.5 33.412 7 39.55 1.383 3.398 20.484 3.001 22 0 2.963-5.866 7-25.99 7-39.55H14z"
  }), _react["default"].createElement("ellipse", {
    fill: "#FFF",
    cx: 32,
    cy: 14.059,
    rx: 18,
    ry: 2.013
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M32 2C20.954 2 12 3.352 12 5.019c0 1.668 8.954 3.019 20 3.019s20-1.351 20-3.019C52 3.352 43.046 2 32 2z"
  }), _react["default"].createElement("ellipse", {
    fill: "#F5F5F5",
    cx: 32,
    cy: 4.878,
    rx: 18,
    ry: 2.013
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M21.002 57.285c9.054 2.594 10.823 3.106 21.179-.137-7.83.725-13.888 1.096-21.179.137z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M24.306 58.996c5.896 1.709 12.532 1.272 18.692-.732-6.285.21-12.37 1.037-18.692.732z"
  }), _react["default"].createElement("linearGradient", {
    id: "glass-of-milk_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 22.3,
    y1: 52.33,
    x2: 22.3,
    y2: 2.327
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.114,
    stopColor: "#fff",
    stopOpacity: 0.114
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "url(#glass-of-milk_svg__b)",
    d: "M14.959 8.408s-.542 19.686 6.043 40.784c.438 1.402 8.917 4.615 8.645 2.354-2.563-21.292-2.449-41.752-2.449-41.752s-8.85-.586-12.239-1.386z"
  }));
};

var _default = SvgGlassOfMilk;
exports["default"] = _default;