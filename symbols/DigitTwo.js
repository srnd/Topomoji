"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitTwo = function SvgDigitTwo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-two_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#digit-two_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M21.5 46.936v-2.781c0-.516.168-.932.549-1.313l10.113-10.203c1.974-2.006 3.667-4.339 3.667-6.548 0-2.646-1.581-4.081-3.902-4.081-2.254 0-3.823.976-4.182 3.185-.112.684-.471 1.031-1.11 1.031h-4.07c-.684 0-1.065-.381-1.021-1.11C22.06 18.803 26.87 16 31.792 16c5.102 0 10.203 3.173 10.203 10.091 0 3.588-2.242 7.12-4.955 9.8l-6.313 6.167h10.707c.684 0 1.065.382 1.065 1.065v3.813c0 .684-.382 1.064-1.065 1.064h-18.87c-.683 0-1.064-.381-1.064-1.064z"
  }));
};

var _default = SvgDigitTwo;
exports["default"] = _default;