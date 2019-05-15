"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgProhibited = function SvgProhibited(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "prohibited_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#prohibited_svg__a)",
    d: "M32 2C15.432 2 2 15.432 2 32c0 16.566 13.432 30 30 30 16.568 0 30-13.434 30-30C62 15.432 48.568 2 32 2zm22 30c0 4.629-1.434 8.922-3.877 12.467l-30.59-30.592A21.883 21.883 0 0 1 32 10c12.15 0 22 9.85 22 22zm-44 0c0-4.629 1.434-8.924 3.875-12.469l30.592 30.592A21.89 21.89 0 0 1 32 54c-12.15 0-22-9.852-22-22z"
  }));
};

var _default = SvgProhibited;
exports["default"] = _default;