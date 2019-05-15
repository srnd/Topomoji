"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgYinYang = function SvgYinYang(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "yin-yang_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
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
    fill: "url(#yin-yang_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32.784,
    cy: 40.965,
    r: 3.375
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm.541 36.329c-4.126-.083-7.611-3.263-7.979-7.464A8.183 8.183 0 0 1 32 32a8.185 8.185 0 0 0 7.438-8.864c-.391-4.465-4.285-7.425-8.757-7.434 4.142-.335 8.411.887 11.838 3.763 6.912 5.8 7.816 16.141 2.017 23.054-3.105 3.699-7.511 5.66-11.995 5.81zm-1.522-27.536a3.068 3.068 0 1 1 .534 6.114 3.068 3.068 0 0 1-.534-6.114z"
  }));
};

var _default = SvgYinYang;
exports["default"] = _default;