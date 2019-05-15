"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitNine = function SvgDigitNine(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-nine_svg__a",
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
    fill: "url(#digit-nine_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M41.507 33.237l.013.007-9.296 14.072c-.303.471-.729.684-1.278.684h-4.698c-.853 0-1.155-.561-.685-1.277l6.09-8.93c-6.52-.152-11.034-4.592-11.034-10.895C20.619 20.485 25.295 16 32 16c6.738 0 11.38 4.485 11.38 10.898 0 2.438-.671 4.599-1.873 6.339zM32 31.989c2.926 0 5.214-1.906 5.214-5.09 0-3.185-2.288-5.091-5.214-5.091-2.893 0-5.214 1.94-5.214 5.091s2.321 5.09 5.214 5.09z"
  }));
};

var _default = SvgDigitNine;
exports["default"] = _default;