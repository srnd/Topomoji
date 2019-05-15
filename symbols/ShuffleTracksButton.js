"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShuffleTracksButton = function SvgShuffleTracksButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "shuffle-tracks-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
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
    fill: "url(#shuffle-tracks-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M42 26v4l10-8-10-8v4c-7.266 0-11.237 6.621-14.43 11.942C24.649 34.809 22.545 38 20 38h-8v8h8c7.265 0 11.237-6.621 14.43-11.941C37.35 29.19 39.455 26 42 26z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M42 38c-1.771 0-3.336-1.572-5.105-4.155-.26.425-.512.845-.75 1.243-1.148 1.914-2.395 3.979-3.85 5.889C34.766 43.828 37.842 46 42 46v4l10-8-10-8v4zM25.105 30.155c.259-.425.511-.844.75-1.242 1.148-1.914 2.395-3.979 3.85-5.89C27.233 20.172 24.157 18 20 18h-8v8h8c1.772 0 3.336 1.572 5.105 4.155z"
  }));
};

var _default = SvgShuffleTracksButton;
exports["default"] = _default;