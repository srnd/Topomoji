"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTimerClock = function SvgTimerClock(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M5 35v18c0 4.95 4.05 9 9 9h36c4.949 0 9-4.05 9-9V35H5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M59 47.6c0 4.95-4.051 9.001-9 9.001H14c-4.95 0-9-4.051-9-9.001V17c0-4.95 4.05-9 9-9h36c4.949 0 9 4.05 9 9v30.6z"
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 32,
    cy: 32.5,
    r: 17.5
  }), _react["default"].createElement("radialGradient", {
    id: "timer-clock_svg__a",
    cx: 32.25,
    cy: 43,
    r: 67.678,
    gradientTransform: "matrix(0 -1 .2859 0 19.957 75.25)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.212,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.277,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.382,
    stopColor: "#e6ebed"
  })), _react["default"].createElement("circle", {
    fill: "url(#timer-clock_svg__a)",
    cx: 32,
    cy: 32.5,
    r: 17.084
  }), _react["default"].createElement("radialGradient", {
    id: "timer-clock_svg__b",
    cx: 32,
    cy: 35.947,
    r: 5.589,
    gradientTransform: "matrix(1 0 0 3.5703 0 -92.395)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.236,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.45,
    stopColor: "#f7f9f9"
  }), _react["default"].createElement("stop", {
    offset: 0.779,
    stopColor: "#e1e7ea"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#timer-clock_svg__b)",
    d: "M36.166 26.328c0-5.417-8.333-5.417-8.333 0v22.743s1.925.557 4.165.557c2.242 0 4.167-.557 4.167-.557l.001-22.743z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 16.253l-2.083 3.572h4.167z"
  }), _react["default"].createElement("ellipse", {
    transform: "scale(-1) rotate(-60.025 -87.145 37.572)",
    fill: "#302C3B",
    cx: 21.702,
    cy: 50.336,
    rx: 1.406,
    ry: 1.384
  }), _react["default"].createElement("ellipse", {
    transform: "scale(-1) rotate(-59.948 -25.424 73.333)",
    fill: "#302C3B",
    cx: 42.296,
    cy: 14.664,
    rx: 1.402,
    ry: 1.384
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M13.471 41.602a1.395 1.395 0 0 1 1.91.494 1.394 1.394 0 0 1-.527 1.9 1.387 1.387 0 0 1-1.903-.496 1.384 1.384 0 0 1 .52-1.898zM49.143 21.005a1.394 1.394 0 0 1 1.908.495 1.395 1.395 0 0 1-.521 1.901 1.396 1.396 0 0 1-1.91-.497 1.394 1.394 0 0 1 .523-1.899z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 11.404,
    cy: 32.5,
    rx: 1.403,
    ry: 1.383
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 52.596,
    cy: 32.5,
    rx: 1.404,
    ry: 1.383
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14.854 21.005c.674.389.908 1.239.527 1.899a1.398 1.398 0 0 1-1.91.497 1.394 1.394 0 0 1-.523-1.9 1.391 1.391 0 0 1 1.906-.496zM50.529 41.602c.67.385.902 1.238.52 1.898a1.39 1.39 0 0 1-1.906.496 1.396 1.396 0 0 1-.523-1.9 1.392 1.392 0 0 1 1.909-.494z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-120.026 21.702 14.662)",
    fill: "#302C3B",
    cx: 21.701,
    cy: 14.663,
    rx: 1.406,
    ry: 1.383
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M43.494 49.646A1.388 1.388 0 0 1 43 51.551a1.394 1.394 0 0 1-1.9-.522 1.394 1.394 0 0 1 .496-1.909 1.391 1.391 0 0 1 1.898.526z"
  }), _react["default"].createElement("ellipse", {
    fill: "#E81C27",
    cx: 31.999,
    cy: 11.904,
    rx: 1.384,
    ry: 1.404
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 31.999,
    cy: 53.096,
    rx: 1.384,
    ry: 1.404
  }));
};

var _default = SvgTimerClock;
exports["default"] = _default;