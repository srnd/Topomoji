"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNoMobilePhones = function SvgNoMobilePhones(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "no-mobile-phones_svg__a",
    cx: 31.999,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#no-mobile-phones_svg__a)",
    d: "M7.368 23.676c-11.1 32.841 38.163 49.489 49.262 16.648C67.73 7.482 18.469-9.166 7.368 23.676z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M37.766 14.996H26.233c-2.123 0-3.844 1.691-3.844 3.779v26.449c0 2.088 1.721 3.779 3.844 3.779h11.532c2.124 0 3.845-1.691 3.845-3.779V18.775c0-2.087-1.72-3.779-3.844-3.779zm-7.647 1.379h3.761c.266 0 .481.213.481.473a.477.477 0 0 1-.481.473h-3.761a.475.475 0 0 1-.48-.473c0-.26.215-.473.48-.473zM32 47.102c-.637 0-1.153-.508-1.153-1.133s.517-1.133 1.153-1.133c.638 0 1.153.508 1.153 1.133s-.515 1.133-1.153 1.133zm7.688-4.143H24.312V18.775h15.377l-.001 24.184z"
  }), _react["default"].createElement("linearGradient", {
    id: "no-mobile-phones_svg__b",
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
    fill: "url(#no-mobile-phones_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm24 30a23.89 23.89 0 0 1-5.045 14.713L17.288 13.045A23.885 23.885 0 0 1 32 8c13.254 0 24 10.746 24 24zM8 32a23.887 23.887 0 0 1 5.045-14.712l33.666 33.668A23.89 23.89 0 0 1 32 56C18.744 56 8 45.256 8 32z"
  }));
};

var _default = SvgNoMobilePhones;
exports["default"] = _default;