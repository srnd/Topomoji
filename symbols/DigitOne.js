"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitOne = function SvgDigitOne(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-one_svg__a",
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
    fill: "url(#digit-one_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M31.331 16h4.468c.697 0 1.086.388 1.086 1.085v29.829c0 .697-.389 1.086-1.086 1.086h-4.113c-.697 0-1.086-.389-1.086-1.086V22.331l-6.183 3.395c-.743.435-1.303.08-1.303-.743v-3.988c0-.572.229-1.006.742-1.303l6.126-3.349c.435-.263.835-.343 1.349-.343z"
  }));
};

var _default = SvgDigitOne;
exports["default"] = _default;