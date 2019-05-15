"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStopwatch = function SvgStopwatch(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C1CACF",
    d: "M29.542 7.201h4.917v7.132h-4.917z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M35.688 8.24l-7.375.001v-5.74c0-.668 7.375-.668 7.375 0V8.24z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M28.313 2.482h.567v5.759h-.567zM29.447 2.482h.567v5.759h-.567zM30.582 2.482h.567v5.759h-.567zM31.716 2.482h.567v5.759h-.567zM32.851 2.482h.567v5.759h-.567zM33.984 2.482h.568v5.759h-.568zM35.121 2.482h.566v5.759h-.566z"
  }), _react["default"].createElement("path", {
    fill: "#C1CACF",
    d: "M15.503 17.748c.254.253-3.282 3.789-3.535 3.536l-2.987-2.987c-.304-.302 3.229-3.835 3.536-3.535.001-.001 2.855 2.855 2.986 2.986z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M13.109 14.646c.253.254-3.989 4.496-4.243 4.242L6.73 16.752c-.304-.302 3.937-4.542 4.243-4.242l2.136 2.136z"
  }), _react["default"].createElement("path", {
    fill: "#C1CACF",
    d: "M6.014 16.762l.433.433c.253.253 5.203-4.696 4.95-4.95l-.433-.434c-.308-.298-5.256 4.649-4.95 4.951zM52.051 21.293c-.254.254-3.789-3.282-3.535-3.535l2.986-2.987c.303-.304 3.836 3.229 3.535 3.536l-2.986 2.986z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M55.152 18.899c-.254.253-4.496-3.989-4.242-4.243l2.137-2.136c.301-.304 4.541 3.937 4.24 4.243l-2.135 2.136z"
  }), _react["default"].createElement("path", {
    fill: "#C1CACF",
    d: "M53.037 11.803l-.434.433c-.254.253 4.695 5.203 4.949 4.95.133-.131.434-.433.434-.433.299-.307-4.648-5.255-4.949-4.95z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 32,
    cy: 36,
    r: 26
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M9 36c0 12.705 10.297 23 23 23 12.699 0 23-10.295 23-23 0-12.701-10.301-23-23-23C19.297 13 9 23.299 9 36z"
  }), _react["default"].createElement("radialGradient", {
    id: "stopwatch_svg__a",
    cx: 32,
    cy: 36,
    r: 22,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#fbfbfc"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#eef1f4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("circle", {
    fill: "url(#stopwatch_svg__a)",
    cx: 32,
    cy: 36,
    r: 22
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M21.4 54.899l-.468-.271 2.167-3.752.469.27zM40.902 21.128l-.469-.27 2.163-3.756.469.27zM13.37 47.069l-.27-.469 3.756-2.163.27.469zM47.143 27.564l-.27-.469 3.757-2.16.27.469zM10.334 35.729h4.333v.541h-4.333zM49.334 35.729h4.332v.541h-4.332zM13.1 25.402l.27-.469 3.753 2.166-.27.468zM46.874 44.906l.27-.469 3.758 2.161-.27.469zM20.931 17.372l.469-.27 2.166 3.752-.469.27zM40.43 51.146l.468-.27 2.167 3.754-.469.27zM31.729 14.333h.542v4.333h-.542zM31.729 53.334h.542v4.332h-.542z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 32,
    cy: 25.167,
    r: 5.416
  }), _react["default"].createElement("circle", {
    fill: "#F2F5F7",
    cx: 32,
    cy: 25.167,
    r: 5.281
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M29.351 29.891l-.117-.067.543-.937.117.067zM34.222 21.445l-.118-.068.546-.936.117.069zM27.341 27.935l-.068-.118.938-.54.068.117zM35.787 23.06l-.069-.118.938-.545.068.118zM26.583 25.099h1.083v.135h-1.083zM36.332 25.099h1.084v.135h-1.084zM27.275 22.518l.068-.116.937.542-.068.117zM35.722 27.39l.068-.117.936.545-.069.118zM29.23 20.509l.117-.068.543.937-.117.068zM34.106 28.952l.117-.068.542.937-.116.068zM31.932 19.75h.135v1.083h-.135zM31.932 29.5h.135v1.083h-.135z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M32 19.75L31.188 36h1.625zM31.458 36h1.083v4.334h-1.083z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.32 20.679L31.234 35.233l1.532 1.533z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.617 35.616l.766.767-3.064 3.064-.766-.767z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 32,
    cy: 35.999,
    r: 2
  }));
};

var _default = SvgStopwatch;
exports["default"] = _default;