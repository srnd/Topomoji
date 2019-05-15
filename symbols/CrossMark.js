"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCrossMark = function SvgCrossMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cross-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 17.009,
    y1: 6.035,
    x2: 46.992,
    y2: 57.967
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
    fill: "url(#cross-mark_svg__a)",
    d: "M40.334 32.002L57 15.334 48.667 7 32 23.668 15.334 7.002 7 15.334 23.667 32 7 48.668 15.335 57l16.666-16.666L48.667 57 57 48.668z"
  }));
};

var _default = SvgCrossMark;
exports["default"] = _default;