"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBeatingHeart = function SvgBeatingHeart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M42.039 12.425c8.816-1.419 16.055 4.503 17.717 12.287.102.482.746.325.766-.223.299-8.311-6.771-16.936-18.355-12.958-.501.172-.601.969-.128.894z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M46.902 8.546c7.197-1.16 13.109 3.676 14.465 10.032.084.394.609.265.625-.182.244-6.786-5.527-13.827-14.986-10.58-.41.141-.488.792-.104.73zM21.961 12.425c-8.815-1.419-16.056 4.503-17.716 12.287-.104.482-.748.325-.768-.223-.298-8.311 6.773-16.935 18.356-12.958.502.172.6.969.128.894z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M17.098 8.546C9.9 7.386 3.99 12.222 2.633 18.578c-.084.394-.61.265-.626-.182-.244-6.786 5.53-13.827 14.988-10.58.409.141.489.792.103.73z"
  }), _react["default"].createElement("radialGradient", {
    id: "beating-heart_svg__a",
    cx: -500.377,
    cy: -369.326,
    r: 11.15,
    gradientTransform: "matrix(2.4215 0 0 2.5945 1244.036 976.51)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#beating-heart_svg__a)",
    d: "M32.231 21.161c-6.635-10.872-24.997-6.626-24.997 7.028 0 9.159 8.47 15.288 24.997 28.812C48.76 43.477 57.234 37.348 57.234 28.188c0-13.653-18.365-17.899-25.003-7.027z"
  }));
};

var _default = SvgBeatingHeart;
exports["default"] = _default;