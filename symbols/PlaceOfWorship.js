"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPlaceOfWorship = function SvgPlaceOfWorship(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "place-of-worship_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#place-of-worship_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M42.1 26.6l2.9-2.7L31 11 17 23.9l3 2.7 11-10.2zM41.7 42.6c.8-.8.601-1.899 0-2.8-2-2.6-4.101-5.2-6.101-7.8-.699-.8-2-.7-2.699 0-1.2 1.2-2.4 2.3-3.5 3.5l-3.7-3.1-.9 1 3.3 5.199c.5 1 1.9.7 2.701 0l2.399-2.3 3.7 5.7c-2.2 2.2-3.5 3.4-5.801 5.601-1.199 1.2-.298 3.3 1.301 3.3h11.3v-2l-6.601-2c1.501-1.3 3.101-2.8 4.601-4.3z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M30 25.3l-2.6 2.3c-.4.3-.4.9-.099 1.3l2.199 2.6c.301.4.9.4 1.301.1l2.6-2.3c.4-.3.4-.899.1-1.3l-2.199-2.6C30.9 25 30.4 25 30 25.3z"
  }));
};

var _default = SvgPlaceOfWorship;
exports["default"] = _default;