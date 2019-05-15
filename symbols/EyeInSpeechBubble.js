"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEyeInSpeechBubble = function SvgEyeInSpeechBubble(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "eye-in-speech-bubble_svg__a",
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
    fill: "url(#eye-in-speech-bubble_svg__a)",
    d: "M55.58 41.686c4.018-4.4 6.42-8.935 6.42-11.453C62 24.271 48.568 7 32 7 15.433 7 2 24.271 2 30.233s13.433 23.232 30 23.232c4.615 0 8.986-1.342 12.892-3.404L55.58 57V41.686z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 30.25,
    r: 15
  }), _react["default"].createElement("linearGradient", {
    id: "eye-in-speech-bubble_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 27.599,
    y1: 22.627,
    x2: 36.501,
    y2: 38.046
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
    fill: "url(#eye-in-speech-bubble_svg__b)",
    d: "M32 21.25c-.975 0-1.91.16-2.789.446C30.296 22.613 31 23.968 31 25.5a5 5 0 0 1-5 5 4.962 4.962 0 0 1-2.963-.991c-.02.245-.037.491-.037.741 0 4.971 4.029 9 9 9s9-4.029 9-9-4.029-9-9-9z"
  }));
};

var _default = SvgEyeInSpeechBubble;
exports["default"] = _default;