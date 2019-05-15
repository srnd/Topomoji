"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSeedling = function SvgSeedling(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "seedling_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20.611,
    y1: 48.349,
    x2: 37.962,
    y2: 65.7
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#91632e"
  }), _react["default"].createElement("stop", {
    offset: 0.199,
    stopColor: "#8c5f2c"
  }), _react["default"].createElement("stop", {
    offset: 0.441,
    stopColor: "#7d5425"
  }), _react["default"].createElement("stop", {
    offset: 0.704,
    stopColor: "#65421b"
  }), _react["default"].createElement("stop", {
    offset: 0.982,
    stopColor: "#43290c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#40270b"
  })), _react["default"].createElement("path", {
    fill: "url(#seedling_svg__a)",
    d: "M29.142 48.886c6.203 0 12.176 2.999 15.207 6.167C48.571 59.465 40.688 62 29.058 62c-11.917 0-17.577-2.861-15.375-6.447 2.738-4.46 11.697-6.667 15.459-6.667z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M33.889 32.97C48.348 49.096 62 30.589 62 30.589s-19.695-6.494-28.111 2.381z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M33.68 31.386C44.014 25.079 62 30.589 62 30.589s-21.402-21.454-28.32.797z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M31.735 32.712c-2.035 2.05-1.834 5.66.469 2.614C39.829 25.243 57.294 29.62 62 30.589c-4.537-1.28-20.978-7.235-30.265 2.123z"
  }), _react["default"].createElement("linearGradient", {
    id: "seedling_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 26.799,
    y1: 42.412,
    x2: 32.565,
    y2: 42.412
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#677339"
  }), _react["default"].createElement("stop", {
    offset: 0.302,
    stopColor: "#647037"
  }), _react["default"].createElement("stop", {
    offset: 0.535,
    stopColor: "#5a6632"
  }), _react["default"].createElement("stop", {
    offset: 0.745,
    stopColor: "#4a562a"
  }), _react["default"].createElement("stop", {
    offset: 0.94,
    stopColor: "#333f1e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#2a361a"
  })), _react["default"].createElement("path", {
    fill: "url(#seedling_svg__b)",
    d: "M30.226 32.223c-.447-1.463-3.035-.446-2.189 2.339 1.271 4.188.554 14.214-1.196 17.94-.514 1.095 3.946 1.009 4.063-.195.844-8.751-.281-14.688 1.529-16.924.73-.903-1.781-1.765-2.207-3.16z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M25.84 25.079C2 34.868 2 2 2 2s16.121 10.555 23.84 23.079z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M25.84 25.079C20.689 14.424 2 2 2 2s32.223 0 23.84 23.079z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M29.663 31.701C24.953 16.583 6.826 4.871 2 2c4.896 3.303 23.84 19.806 26.079 31.933.098.527 2.116-.524 1.584-2.232z"
  }));
};

var _default = SvgSeedling;
exports["default"] = _default;