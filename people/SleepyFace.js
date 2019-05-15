"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSleepyFace = function SvgSleepyFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sleepy-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#sleepy-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M41.659 48.564c-1.057-2.051-3.624-3.425-9.66-3.425-6.035 0-8.602 1.374-9.658 3.425-.564 1.096-.389 2.025.242 2.283 2.106.86 4.19-.456 9.418-.456 5.217 0 7.31 1.316 9.415.456.632-.256.808-1.187.243-2.283z"
  }), _react["default"].createElement("linearGradient", {
    id: "sleepy-face_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.073,
    y1: 43.284,
    x2: 35.574,
    y2: 57.285,
    gradientTransform: "rotate(-12.774 10.352 -42.021)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ade7ff"
  }), _react["default"].createElement("stop", {
    offset: 0.497,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.591,
    stopColor: "#71d5fd"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#64d0f8"
  }), _react["default"].createElement("stop", {
    offset: 0.798,
    stopColor: "#4ec9ef"
  }), _react["default"].createElement("stop", {
    offset: 0.906,
    stopColor: "#30bfe2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0fb4d4"
  })), _react["default"].createElement("path", {
    fill: "url(#sleepy-face_svg__b)",
    d: "M52.386 38.567c-6.757-3.132-17.376.059-18.248.803-1.144.974 3.436-.272 9.555 10.921 6.644 12.158 24.645-4.332 8.693-11.724z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M27.238 28.7c-4.281 3.271-10.932 3.271-15.213-.001-.654-.501-1.045.041-.838.466 4.16 8.445 12.729 8.445 16.887-.001.211-.424-.179-.966-.836-.464zM51.975 28.7c-4.281 3.271-10.932 3.271-15.213-.001-.654-.501-1.045.041-.838.466 4.16 8.445 12.729 8.445 16.887-.001.21-.424-.18-.966-.836-.464z"
  }));
};

var _default = SvgSleepyFace;
exports["default"] = _default;