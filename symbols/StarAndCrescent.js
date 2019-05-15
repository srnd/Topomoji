"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStarAndCrescent = function SvgStarAndCrescent(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "star-and-crescent_svg__a",
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
    fill: "url(#star-and-crescent_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M39.202 47c-8.284 0-15-6.716-15-15s6.716-15 15-15c4.673 0 8.845 2.137 11.596 5.486C47.414 16.242 40.804 12 33.202 12c-11.046 0-20 8.955-20 20s8.954 20 20 20c7.602 0 14.212-4.242 17.596-10.486A14.968 14.968 0 0 1 39.202 47z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M42.077 34.716L46.766 38l-1.772-5.341 4.666-3.311-5.78-.017L42.077 24l-1.801 5.331-5.782.017 4.668 3.311L37.391 38z"
  }));
};

var _default = SvgStarAndCrescent;
exports["default"] = _default;