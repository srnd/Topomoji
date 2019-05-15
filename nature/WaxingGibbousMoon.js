"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWaxingGibbousMoon = function SvgWaxingGibbousMoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FFEB3D",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FD0",
    d: "M43.494 49.844c-5.648 1.654 9.158 6 2.855 5.701-9.76-.465-16.75-2.861-5.5 3.15-7.352 3.15-7.701-4.352-12.336-2.203-6.779 3.143-12.201-1.688-13.258-6.896 9.668 6.787 9.342-5.652 17.234.451 3.359-8.053 18.21-2.309 11.005-.203zM41.07 5.003c1.486 1.795-3.051 2.059-3.602 0-.411-1.545 2.581-1.231 3.602 0zM11.014 37.152c0 2.479-5.213 2.625-4.063.053.94-2.094 4.063-2.346 4.063-.053zM29.934 38.709c0 6.42-12.148 7.422-12.148 1-.001-6.781 12.148-7.782 12.148-1z"
  }), _react["default"].createElement("path", {
    fill: "#FD0",
    d: "M36.699 10.749c-5.301-4.551-12.301 2.201-8.945 6.93-7.1-.23-8.805 14.071 6.895 7.955-.438-2.672-5.406.891-4.773-3.18 3.133 2.699 5.283-2.264 6.895 1.059 2.354 4.848-6.158 7.061-2.65 11.14 2.68-7.862 6.932 2.971 1.061 4.24 3.563 3.424 7.24-2.359 6.363-5.301 1.713 1.197 3.756 3.4 5.832 2.65 1.354 12.617 13.039 1.367 9.547-6.364-1.453-3.215-7.842-9.297-3.18-12.199 2.078 3.047 1.482 7.721 5.301 10.076 1.323-2.274-5.209-14.037.695-7.189-.026-.063-.049-.128-.075-.191l-.05-.116A30.088 30.088 0 0 0 50.064 8.05c3.391 3.861 4.686 6.85 4.686 6.85-11.252-12.452-24.252 8.849-18.051-4.151zm5.162 16.041c0-2.398 3.863-2.592 4.537 1.16.426 2.362-4.537 1.24-4.537-1.16zm-1.115-9.949c1.395-5.576 6.629-2.992 7.723 1.734.812 3.506-8.85 2.774-7.723-1.734z"
  }), _react["default"].createElement("radialGradient", {
    id: "waxing-gibbous-moon_svg__a",
    cx: 1048.167,
    cy: 31.666,
    r: 35.271,
    gradientTransform: "matrix(1 0 0 -1.2531 -1000.334 71.346)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#10003b",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#10003b",
    stopOpacity: 0.072
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#10003b",
    stopOpacity: 0.8
  })), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#waxing-gibbous-moon_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("radialGradient", {
    id: "waxing-gibbous-moon_svg__b",
    cx: 1021.292,
    cy: 26.918,
    r: 34.025,
    gradientTransform: "matrix(-1 0 0 1 1061 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe600",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.088,
    stopColor: "#f8e001",
    stopOpacity: 0.27
  }), _react["default"].createElement("stop", {
    offset: 0.217,
    stopColor: "#e4cf05",
    stopOpacity: 0.373
  }), _react["default"].createElement("stop", {
    offset: 0.371,
    stopColor: "#c4b30b",
    stopOpacity: 0.497
  }), _react["default"].createElement("stop", {
    offset: 0.545,
    stopColor: "#978c14",
    stopOpacity: 0.636
  }), _react["default"].createElement("stop", {
    offset: 0.735,
    stopColor: "#5d5a1f",
    stopOpacity: 0.788
  }), _react["default"].createElement("stop", {
    offset: 0.936,
    stopColor: "#181e2c",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#000a30"
  })), _react["default"].createElement("circle", {
    opacity: 0.5,
    fill: "url(#waxing-gibbous-moon_svg__b)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgWaxingGibbousMoon;
exports["default"] = _default;