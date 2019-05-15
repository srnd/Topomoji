"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLeftSpeechBubble = function SvgLeftSpeechBubble(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "left-speech-bubble_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20.178,
    y1: 9.756,
    x2: 49.486,
    y2: 60.519
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#left-speech-bubble_svg__a)",
    d: "M55.58 41.686c4.018-4.4 6.42-8.935 6.42-11.453C62 24.271 48.568 7 32 7 15.433 7 2 24.271 2 30.233s13.433 23.232 30 23.232c4.615 0 8.986-1.342 12.892-3.404L55.58 57V41.686z"
  }));
};

var _default = SvgLeftSpeechBubble;
exports["default"] = _default;