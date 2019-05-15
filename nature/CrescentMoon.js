"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCrescentMoon = function SvgCrescentMoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFEB3D",
    d: "M35.504 2c4.076 3.982 7.029 9.125 8.241 15.025 2.752 13.385-3.275 30.502-23.704 34.33A30.983 30.983 0 0 1 4 50.117c7.053 8.818 18.816 13.574 30.818 11.33 16.956-3.17 27.955-19.1 24.568-35.58C56.886 13.688 47.22 4.627 35.504 2z"
  }), _react["default"].createElement("path", {
    fill: "#FD0",
    d: "M45.504 9.32c2.996 2.995 1.233 6.939-1.659 8.21-.956-4.963-3.548-9.437-3.548-9.437 1.621-.629 3.558-.422 5.207 1.227zM50.211 29.836c-5.532-5.531-.095-13.248 5.871-12.727l.01.016a29.101 29.101 0 0 1 3.877 13.33c-2.647 2.108-6.567 2.573-9.758-.619zM26.931 61.922c-1.069-2.452-.846-5.447 1.69-7.984 5.421-5.42 12.942-.31 12.755 5.511a31.344 31.344 0 0 1-14.445 2.473zM42.643 42.168c0 7.196 10.795 7.196 10.795 0s-10.795-7.196-10.795 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "crescent-moon_svg__a",
    cx: 27.625,
    cy: 30.125,
    r: 32.126,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.667,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.7,
    stopColor: "#f2f1ee",
    stopOpacity: 0.28
  }), _react["default"].createElement("stop", {
    offset: 0.766,
    stopColor: "#d2ccc1",
    stopOpacity: 0.439
  }), _react["default"].createElement("stop", {
    offset: 0.859,
    stopColor: "#9d9179",
    stopOpacity: 0.663
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#564017",
    stopOpacity: 0.939
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#452d00"
  })), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "url(#crescent-moon_svg__a)",
    d: "M59.387 25.867C56.885 13.688 47.219 4.627 35.504 2c4.076 3.982 7.029 9.125 8.24 15.025 2.752 13.385-3.275 30.502-23.703 34.33A30.984 30.984 0 0 1 4 50.117c7.053 8.818 18.816 13.574 30.818 11.33 16.955-3.17 27.955-19.099 24.569-35.58z"
  }));
};

var _default = SvgCrescentMoon;
exports["default"] = _default;