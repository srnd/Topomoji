"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitZero = function SvgDigitZero(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-zero_svg__a",
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
    fill: "url(#digit-zero_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M19.675 32c0-9.507 4.468-16 12.325-16 7.857 0 12.324 6.493 12.324 16 0 9.508-4.467 16-12.324 16s-12.325-6.492-12.325-16zm18.598 0c0-6.514-2.146-10.102-6.273-10.102S25.728 25.486 25.728 32c0 6.515 2.145 10.102 6.272 10.102S38.273 38.515 38.273 32z"
  }));
};

var _default = SvgDigitZero;
exports["default"] = _default;