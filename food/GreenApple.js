"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGreenApple = function SvgGreenApple(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "green-apple_svg__a",
    cx: 25.875,
    cy: 24.504,
    r: 31.893,
    gradientTransform: "matrix(1 0 0 1.003 0 .963)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#93d422"
  }), _react["default"].createElement("stop", {
    offset: 0.632,
    stopColor: "#90d120"
  }), _react["default"].createElement("stop", {
    offset: 0.783,
    stopColor: "#88c919"
  }), _react["default"].createElement("stop", {
    offset: 0.91,
    stopColor: "#79ba0d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69ab00"
  })), _react["default"].createElement("path", {
    fill: "url(#green-apple_svg__a)",
    d: "M31.873 13.657C29.564 13.657 3 4.854 3 29.919 3 45.133 18.711 62 25.568 62c3.111 0 4.5-1.996 6.305-1.996 1.838 0 2.158 1.996 6.141 1.996C44.873 62 61 43.386 61 29.919c0-25.09-26.818-16.262-29.127-16.262z"
  }), _react["default"].createElement("radialGradient", {
    id: "green-apple_svg__b",
    cx: 31.976,
    cy: 15.973,
    r: 12.221,
    gradientTransform: "matrix(1 0 0 .4524 0 9.758)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6aad00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6aad00",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#green-apple_svg__b)",
    d: "M32 17.868c6.573 0 6.19-3.344 21.237-3.704-8.112-4.195-19.87-.507-21.364-.507-1.493 0-13.122-3.668-21.158.506 15.095.352 14.704 3.705 21.285 3.705z"
  }), _react["default"].createElement("radialGradient", {
    id: "green-apple_svg__c",
    cx: 284.948,
    cy: -516.148,
    r: 13.633,
    gradientTransform: "matrix(1.0508 -.1028 -.1778 -1.0674 -373.088 -493.67)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#aff23c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#aff23c",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#green-apple_svg__c)",
    d: "M32.453 26.574c-1.338-8.037-8.838-13.924-16.747-13.149-7.915.773-13.245 7.914-11.907 15.951 1.34 8.038 8.84 13.924 16.752 13.149 7.913-.772 13.242-7.915 11.902-15.951z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M31.56 13.63C46.364 15.757 50.227 2.135 50.227 2.135S35.926 8.678 31.56 13.63z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M31.56 13.63C36.563 9.247 50.227 2.135 50.227 2.135S34.22-.101 31.56 13.63z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M32.67 17.868c-2.549-2.545-1.67-12.114.279-12.114 3.227 0-2.388 3.311-.279 12.114z"
  }));
};

var _default = SvgGreenApple;
exports["default"] = _default;