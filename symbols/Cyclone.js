"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCyclone = function SvgCyclone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cyclone_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 14.07,
    y1: 14.07,
    x2: 49.93,
    y2: 49.93
  }, _react["default"].createElement("stop", {
    offset: 0.022,
    stopColor: "#5fcff6"
  }), _react["default"].createElement("stop", {
    offset: 0.123,
    stopColor: "#54c7f1"
  }), _react["default"].createElement("stop", {
    offset: 0.296,
    stopColor: "#38b3e3"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#0b92ce"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#018bc9"
  }), _react["default"].createElement("stop", {
    offset: 0.716,
    stopColor: "#0187c5"
  }), _react["default"].createElement("stop", {
    offset: 0.872,
    stopColor: "#007aba"
  }), _react["default"].createElement("stop", {
    offset: 0.982,
    stopColor: "#006dae"
  })), _react["default"].createElement("path", {
    fill: "url(#cyclone_svg__a)",
    d: "M41.536 11.163s5.485-6.313 20.462-2.028C22.486-15.86-10.906 31.165 22.464 52.837c0 0-5.485 6.314-20.462 2.028C41.514 79.86 74.906 32.834 41.536 11.163zM29.305 54.058c7.818-4.384 7.438-9.306 7.438-9.306-22.413 4.672-28.273-28.899-2.009-34.71-7.819 4.384-7.439 9.307-7.439 9.307 22.413-4.674 28.273 28.897 2.01 34.709z"
  }), _react["default"].createElement("linearGradient", {
    id: "cyclone_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 19.502,
    y1: 19.534,
    x2: 44.534,
    y2: 44.566
  }, _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#b6e4fa"
  }), _react["default"].createElement("stop", {
    offset: 0.665,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#72d2fb"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#68c8ee"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5fbde2"
  })), _react["default"].createElement("path", {
    fill: "url(#cyclone_svg__b)",
    d: "M36.742 44.752s.381 4.922-7.438 9.306c26.265-5.812 20.403-39.383-2.009-34.709 0 0-.382-4.923 7.437-9.307-26.263 5.811-20.402 39.382 2.01 34.71z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32.158,
    cy: 32.759,
    r: 5.999
  }));
};

var _default = SvgCyclone;
exports["default"] = _default;