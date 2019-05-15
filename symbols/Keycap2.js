"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap2 = function SvgKeycap2(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap-2_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#keycap-2_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M21.5 46.935v-2.781c0-.516.168-.931.549-1.312l10.113-10.203c1.974-2.007 3.667-4.339 3.667-6.548 0-2.646-1.581-4.081-3.902-4.081-2.254 0-3.823.976-4.182 3.185-.112.684-.471 1.031-1.11 1.031h-4.07c-.684 0-1.065-.382-1.021-1.11C22.06 18.803 26.87 16 31.792 16c5.102 0 10.203 3.173 10.203 10.091 0 3.588-2.242 7.12-4.955 9.8l-6.313 6.166h10.707c.684 0 1.065.382 1.065 1.065v3.813c0 .684-.382 1.065-1.065 1.065h-18.87c-.683 0-1.064-.382-1.064-1.065z"
  }));
};

var _default = SvgKeycap2;
exports["default"] = _default;