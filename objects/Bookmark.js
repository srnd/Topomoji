"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBookmark = function SvgBookmark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M51.993 12.736l-.115-.115a.549.549 0 0 1 .05-.84.726.726 0 0 1 .943.063l.115.115a.55.55 0 0 1-.049.84.728.728 0 0 1-.944-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M52.867 12.469l-.115-.115a.549.549 0 0 1 .049-.84.726.726 0 0 1 .943.063l.115.116a.549.549 0 0 1-.049.839.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M51.455 12.193l-.116-.116a.549.549 0 0 1 .05-.84.728.728 0 0 1 .943.063l.115.116a.55.55 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M52.193 11.79l-.115-.116a.549.549 0 0 1 .049-.839.726.726 0 0 1 .943.063l.115.116a.549.549 0 0 1-.049.839.729.729 0 0 1-.943-.063z"
  }), _react["default"].createElement("linearGradient", {
    id: "bookmark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 126.347,
    y1: -205.551,
    x2: 126.347,
    y2: -262.523,
    gradientTransform: "rotate(45.001 -242.255 -214.256)"
  }, _react["default"].createElement("stop", {
    offset: 0.103,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.295,
    stopColor: "#f8b510"
  }), _react["default"].createElement("stop", {
    offset: 0.558,
    stopColor: "#fccd1f"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#fedc29"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe12c"
  })), _react["default"].createElement("path", {
    fill: "url(#bookmark_svg__a)",
    d: "M21.69 62l-.382-2.307-.953-15.189-15.067-.961L3 43.157l38.717-39.03s1.334-1.347 2.67 0c0 0 5.895 8.664 16.02 16.15 1.336 1.346 0 2.691 0 2.691L21.69 62z"
  }), _react["default"].createElement("linearGradient", {
    id: "bookmark_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 126.34,
    y1: -206.912,
    x2: 126.34,
    y2: -262.523,
    gradientTransform: "rotate(45.001 -242.255 -214.256)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.379,
    stopColor: "#e90007"
  }), _react["default"].createElement("stop", {
    offset: 0.732,
    stopColor: "#f9000c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#bookmark_svg__b)",
    d: "M21.309 59.693L19.021 45.85 5.288 43.543 44.387 4.127l16.019 16.15z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48.813 15.83a1.61 1.61 0 0 1 0-2.242 1.523 1.523 0 0 1 2.19 0 1.614 1.614 0 0 1 0 2.242 1.52 1.52 0 0 1-2.19 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M50.034 13.896l-.108-.109c-.23-.232-.23-.609 0-.842s.604-.232.834 0l.109.11c.23.232.23.608 0 .841s-.604.233-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M50.173 13.268l-.109-.109a.602.602 0 0 1 0-.842.588.588 0 0 1 .835 0l.109.11c.23.231.23.608 0 .841s-.605.232-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M50.53 12.858l-.109-.11a.599.599 0 0 1 0-.841.588.588 0 0 1 .835 0l.108.11a.597.597 0 0 1 0 .841.585.585 0 0 1-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M50.669 12.229l-.109-.109c-.23-.232-.23-.609 0-.842s.604-.232.835 0l.108.11c.23.232.23.608 0 .841s-.605.232-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M51.025 11.82l-.109-.11c-.23-.232-.23-.608 0-.841s.604-.232.835 0l.108.109c.23.232.23.609 0 .842s-.603.233-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M51.164 11.191l-.109-.111c-.23-.232-.23-.608 0-.841s.604-.232.834 0l.109.11a.6.6 0 0 1 0 .842.587.587 0 0 1-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M51.521 10.781l-.109-.109c-.23-.232-.23-.609 0-.842s.604-.232.834 0l.109.11c.23.231.23.608 0 .841s-.603.233-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M51.978 10.473l-.109-.11a.6.6 0 0 1 0-.841.588.588 0 0 1 .835 0l.109.109c.23.232.23.609 0 .842s-.605.232-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M50.759 14.627l-.118-.119a.6.6 0 0 1 0-.842.588.588 0 0 1 .834 0l.118.12c.23.231.23.608 0 .841a.587.587 0 0 1-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M51.402 14.508l-.117-.119c-.23-.232-.23-.609 0-.842s.604-.232.834 0l.118.119c.23.232.23.609 0 .842s-.604.232-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M51.811 14.15l-.117-.12c-.23-.232-.23-.608 0-.841s.604-.232.834 0l.118.119a.6.6 0 0 1 0 .842.588.588 0 0 1-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M52.455 14.03l-.118-.12a.598.598 0 0 1 0-.84.588.588 0 0 1 .835 0l.117.119c.23.232.23.608 0 .841a.587.587 0 0 1-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M52.863 13.672l-.119-.119c-.23-.232-.23-.608 0-.841s.604-.232.835 0l.118.119c.23.232.23.608 0 .841s-.603.232-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M53.508 13.553l-.119-.119a.6.6 0 0 1 0-.842.588.588 0 0 1 .834 0l.119.12c.23.232.23.608 0 .841s-.604.232-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M53.916 13.195l-.119-.119c-.23-.232-.23-.609 0-.842s.604-.232.834 0l.119.119c.23.232.23.609 0 .842s-.604.233-.834 0z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M54.215 12.729l-.117-.119c-.23-.232-.23-.609 0-.842s.604-.232.834 0l.118.119c.23.232.23.609 0 .842s-.605.232-.835 0z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55.025 11.203l-.115-.115a.549.549 0 0 1 .049-.84.727.727 0 0 1 .943.063l.115.115a.55.55 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55.563 10.599l-.115-.116a.55.55 0 0 1 .049-.84.729.729 0 0 1 .943.063l.115.117a.547.547 0 0 1-.049.839.729.729 0 0 1-.943-.063zM53.51 11.97l-.115-.116a.549.549 0 0 1 .049-.84.73.73 0 0 1 .943.063l.115.117a.549.549 0 0 1-.049.839.729.729 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M54.383 11.703l-.116-.117a.548.548 0 0 1 .05-.839.727.727 0 0 1 .943.063l.115.116a.55.55 0 0 1-.049.84.73.73 0 0 1-.943-.063zM55.875 9.909l-.125-.126a.549.549 0 0 1 .049-.839.726.726 0 0 1 .943.063l.125.126a.547.547 0 0 1-.049.839.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M56.215 9.105l-.125-.126a.55.55 0 0 1 .049-.839.728.728 0 0 1 .943.063l.125.126a.549.549 0 0 1-.049.84.73.73 0 0 1-.943-.064z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M56.805 8.552l-.125-.126a.549.549 0 0 1 .049-.84.729.729 0 0 1 .943.063l.125.127a.55.55 0 0 1-.049.839.73.73 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M57.145 7.748l-.125-.127a.547.547 0 0 1 .049-.839.727.727 0 0 1 .943.063l.125.126a.549.549 0 0 1-.049.839.73.73 0 0 1-.943-.062z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M57.732 7.194l-.124-.126c-.247-.249-.226-.625.049-.84s.696-.186.944.063l.124.126a.55.55 0 0 1-.049.84.73.73 0 0 1-.944-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M58.073 6.39l-.124-.126a.549.549 0 0 1 .049-.84.728.728 0 0 1 .943.063l.125.126a.55.55 0 0 1-.049.839.73.73 0 0 1-.944-.062z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M58.662 5.836l-.124-.125c-.247-.249-.226-.625.049-.84s.696-.187.944.063l.124.125c.247.25.226.625-.049.84s-.696.187-.944-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M59.365 5.396l-.125-.125a.55.55 0 0 1 .049-.84.729.729 0 0 1 .943.063l.125.126a.549.549 0 0 1-.049.839.726.726 0 0 1-.943-.063zM52.701 11.156l-.115-.117a.55.55 0 0 1 .049-.84.729.729 0 0 1 .943.063l.116.117a.548.548 0 0 1-.05.839.729.729 0 0 1-.943-.062z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M53.439 10.753l-.115-.116a.55.55 0 0 1 .05-.84.729.729 0 0 1 .943.063l.115.116a.549.549 0 0 1-.05.84.73.73 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M53.948 10.118l-.115-.116c-.247-.249-.226-.625.049-.84s.696-.186.944.063l.115.117a.549.549 0 0 1-.05.839.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M54.352 9.378l-.115-.116a.55.55 0 0 1 .049-.84.726.726 0 0 1 .943.063l.115.117a.548.548 0 0 1-.049.839.73.73 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M54.547 8.57l-.125-.126a.549.549 0 0 1 .049-.839.725.725 0 0 1 .943.063l.125.125a.55.55 0 0 1-.049.84.73.73 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M54.752 7.63l-.125-.126a.549.549 0 0 1 .049-.839.726.726 0 0 1 .943.063l.125.126a.547.547 0 0 1-.049.839.729.729 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55.207 6.941l-.125-.125a.55.55 0 0 1 .049-.84.726.726 0 0 1 .943.063l.125.125a.55.55 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M55.412 6.002l-.125-.126a.55.55 0 0 1 .049-.84.73.73 0 0 1 .944.063l.124.126a.549.549 0 0 1-.049.84.73.73 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55.867 5.313l-.125-.125a.55.55 0 0 1 .049-.84.726.726 0 0 1 .943.063l.125.125a.55.55 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M56.073 4.373l-.125-.126a.548.548 0 0 1 .049-.839.728.728 0 0 1 .944.062l.124.126c.247.249.226.625-.049.84s-.696.185-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M56.527 3.684l-.124-.125c-.247-.249-.226-.625.049-.84s.696-.187.943.063l.124.125a.549.549 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M57.096 3.109l-.125-.125a.55.55 0 0 1 .049-.84.725.725 0 0 1 .943.063l.125.125a.549.549 0 0 1-.049.84.728.728 0 0 1-.943-.063z"
  }));
};

var _default = SvgBookmark;
exports["default"] = _default;