"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBlackHeart = function SvgBlackHeart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "black-heart_svg__a",
    cx: -486.619,
    cy: -420.25,
    r: 11.15,
    gradientTransform: "matrix(2.9058 0 0 3.0887 1446.185 1308.938)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#484f57"
  }), _react["default"].createElement("stop", {
    offset: 0.897,
    stopColor: "#373643"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#black-heart_svg__a)",
    d: "M31.997 14.334C24.034 1.392 2 6.446 2 22.701 2 33.604 12.163 40.9 31.997 57 51.831 40.9 62 33.604 62 22.701c0-16.255-22.037-21.309-30.003-8.367z"
  }));
};

var _default = SvgBlackHeart;
exports["default"] = _default;