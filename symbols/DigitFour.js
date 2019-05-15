"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitFour = function SvgDigitFour(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-four_svg__a",
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
    fill: "url(#digit-four_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M44.629 37.817v3.657c0 .697-.389 1.086-1.086 1.086H41.2v4.354c0 .697-.389 1.086-1.086 1.086h-4.183c-.697 0-1.086-.389-1.086-1.086V42.56H20.458c-.698 0-1.086-.389-1.086-1.086v-4.046c0-.479.092-.88.309-1.349l9.908-19.303c.263-.525.663-.776 1.268-.776h4.469c.822 0 1.165.526.776 1.303l-9.954 19.429h8.697v-6.503c0-.697.389-1.085 1.086-1.085h4.183c.697 0 1.086.388 1.086 1.085v6.503h2.343c.697-.001 1.086.388 1.086 1.085z"
  }));
};

var _default = SvgDigitFour;
exports["default"] = _default;