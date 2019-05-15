"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyMultiplicationX = function SvgHeavyMultiplicationX(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "heavy-multiplication-x_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 17.009,
    y1: 6.034,
    x2: 46.992,
    y2: 57.967
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.58,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-multiplication-x_svg__a)",
    d: "M40.334 32.001L57 15.333 48.667 7 32 23.667 15.334 7.001 7 15.333 23.667 32 7 48.667 15.335 57l16.666-16.666L48.667 57 57 48.667z"
  }));
};

var _default = SvgHeavyMultiplicationX;
exports["default"] = _default;