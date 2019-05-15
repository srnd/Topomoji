"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChartIncreasingWithYen = function SvgChartIncreasingWithYen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "chart-increasing-with-yen_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#47de00"
  }), _react["default"].createElement("stop", {
    offset: 0.281,
    stopColor: "#45da00"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#41cd00"
  }), _react["default"].createElement("stop", {
    offset: 0.868,
    stopColor: "#39b900"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#35ad00"
  })), _react["default"].createElement("path", {
    fill: "url(#chart-increasing-with-yen_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29.119 18.813L38 10h-6.104l-4.925 4.887L22.078 10H16v.004l8.816 8.805v.009h-4.515v4.297h4.515v4.295h-4.515v4.295h4.515V36h4.303v-4.295h4.6V27.41h-4.6v-4.295h4.6v-4.297h-4.6zM45.051 32.793l-4.256-2.895-6.777 11.863-4.977-2.756-4.082 7.672-4.476-3.209L14 52.23A26.456 26.456 0 0 0 18.27 54l3.236-4.373 5.07 3.637 4.359-8.199 4.856 2.689 6.555-11.475 3.977 2.707L52 30.48A22.939 22.939 0 0 0 50.92 24l-5.869 8.793z"
  }));
};

var _default = SvgChartIncreasingWithYen;
exports["default"] = _default;