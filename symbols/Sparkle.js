"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSparkle = function SvgSparkle(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sparkle_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#47de00"
  }), _react["default"].createElement("stop", {
    offset: 0.281,
    stopColor: "#45da00"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#41cd00"
  }), _react["default"].createElement("stop", {
    offset: 0.868,
    stopColor: "#39b900"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#35ad00"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkle_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32 26.957c.857 0 3.336-11.887 3.447-15.152C35.504 10.255 33.904 9 32 9c-1.902 0-3.502 1.254-3.447 2.805.115 3.265 2.588 15.152 3.447 15.152zM26.955 32c0-.857-11.881-3.336-15.15-3.449C10.256 28.497 9 30.096 9 32s1.256 3.502 2.805 3.449c3.269-.116 15.15-2.592 15.15-3.449zM28.469 26.438L15.338 15.34l11.1 13.129a13.09 13.09 0 0 1 2.031-2.031zM35.531 37.563L48.66 48.661l-11.096-13.13a13.11 13.11 0 0 1-2.033 2.032zM52.195 28.551c-3.267.113-15.151 2.592-15.151 3.449 0 .856 11.884 3.333 15.151 3.449C53.744 35.502 55 33.904 55 32c.002-1.904-1.256-3.503-2.805-3.449zM32 37.045c-.857 0-3.332 11.882-3.447 15.149C28.498 53.742 30.096 55 32.002 55c1.902 0 3.502-1.258 3.445-2.806-.111-3.267-2.592-15.149-3.447-15.149zM37.563 28.469l11.1-13.13-13.13 11.097c.747.6 1.432 1.289 2.03 2.033zM26.439 35.531l-11.102 13.13 13.131-11.099a13.077 13.077 0 0 1-2.029-2.031z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 32,
    r: 3.45
  }));
};

var _default = SvgSparkle;
exports["default"] = _default;