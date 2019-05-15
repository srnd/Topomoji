"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPostalHorn = function SvgPostalHorn(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "postal-horn_svg__a",
    cx: 29.5,
    cy: 24.975,
    r: 25.1,
    gradientTransform: "matrix(1 0 0 .8285 0 4.284)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 0.388,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 0.677,
    stopColor: "#ffc900"
  }), _react["default"].createElement("stop", {
    offset: 0.934,
    stopColor: "#ffb800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffb300"
  })), _react["default"].createElement("path", {
    fill: "url(#postal-horn_svg__a)",
    d: "M61.45 32.938c1.429-1.471-.021-5.133-3.24-8.178-3.22-3.043-6.988-4.32-8.417-2.848-.312.32-.453.75-.534 1.242-.945 5.779-2.852 6.633-4.555 8.66.509-1.695.773-3.471.773-5.289 0-4.947-1.953-9.6-5.498-13.098C36.435 9.928 31.72 8 26.708 8c-5.014 0-9.728 1.928-13.272 5.428-3.545 3.498-5.498 8.15-5.498 13.098 0 4.342 1.504 8.457 4.267 11.764-2.057-.967-5.75-3.527-7.531-5.082-.834-.729-.537-1.412-.705-1.592-.643-.686-2.474.982-1.834 1.668.176.188.701-.186 1.527.719C7.974 38.718 14.178 45.95 26.376 45.95c16.294 0 25.474-10.195 33.4-12.328.435-.118 1.319-.319 1.674-.684zm-34.742 6.718c-7.337 0-13.304-5.891-13.304-13.131 0-7.238 5.967-13.129 13.304-13.129 7.336 0 13.303 5.891 13.303 13.129 0 7.241-5.967 13.131-13.303 13.131z"
  }), _react["default"].createElement("linearGradient", {
    id: "postal-horn_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 50.494,
    y1: 27.258,
    x2: 61.167,
    y2: 27.258
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4a3000"
  }), _react["default"].createElement("stop", {
    offset: 0.169,
    stopColor: "#774e00"
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#9e6800"
  }), _react["default"].createElement("stop", {
    offset: 0.522,
    stopColor: "#be7d00"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#d48c00"
  }), _react["default"].createElement("stop", {
    offset: 0.855,
    stopColor: "#e19500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e69800"
  })), _react["default"].createElement("path", {
    fill: "url(#postal-horn_svg__b)",
    d: "M57.996 25.027c-2.693-2.545-5.847-3.613-7.042-2.381-.261.268-.406.623-.447 1.039-.149 1.5 1.051 3.811 3.159 5.803 2.024 1.914 4.308 2.994 5.825 2.887.502-.035.918-.199 1.216-.504 1.195-1.232-.018-4.295-2.711-6.844z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M25.25 38.857v7.49c0 .854 1.458.854 1.458 0v-7.49c0-.927-1.458-.927-1.458 0zM28.165 38.857v7.49c0 .854 1.458.854 1.458 0v-7.49c0-.927-1.458-.927-1.458 0z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M28.165 51.32V38.857c0-.928-1.457-.928-1.457 0v12.482c-.513.404-.676 1.229-.729 1.91-.052-.691-.217-1.531-.729-1.93V38.856c0-.928-1.458-.928-1.458 0v12.482c-.736.582-.731 1.982-.729 2.676.006 2.646 2.917 2.646 2.917 0 0 2.646 2.908 2.646 2.914 0 .001-.696.007-2.123-.729-2.694z"
  }));
};

var _default = SvgPostalHorn;
exports["default"] = _default;