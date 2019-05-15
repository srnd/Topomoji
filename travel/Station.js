"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStation = function SvgStation(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M31.691 32.527v5.359L48 62l1-8z"
  }), _react["default"].createElement("path", {
    fill: "#47565E",
    d: "M62 62H48v-8l14-1z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M32.393 34L48 54h14V34z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M33.777 32.923h-.889L50.05 54h2.153L33.777 32.923z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M56 50.547c-.021-4.359 0-48.017 0-48.017 0-.707-2-.707-2 0 0 0 .023 43.657 0 48.017-.002.603 2.004.603 2 0z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M45 3.5h9v9h-9v-9z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M51.9 5h-4.8c-.328 0-.6.279-.6.619v4.762c0 .34.271.619.6.619h4.803a.612.612 0 0 0 .599-.619V5.619A.615.615 0 0 0 51.9 5zm-4.199 5.588a.51.51 0 0 1-.5-.517c0-.286.225-.517.5-.517s.5.231.5.517a.509.509 0 0 1-.5.517zm3.6 0a.51.51 0 0 1-.5-.517c0-.286.225-.517.5-.517s.5.231.5.517a.51.51 0 0 1-.5.517zm.45-2.065c0 .17-.136.31-.301.31h-3.899a.306.306 0 0 1-.3-.31V6.046c0-.17.136-.31.3-.31h3.899c.165 0 .301.139.301.31v2.477z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M30.994 8H13.006a2.57 2.57 0 0 0-2.568 2.57.644.644 0 0 0 1.288 0c0-.71.575-1.285 1.282-1.285h3.496c1.496 0 1.644.713 1.896 1.892.074.355.164 1.771.33 2.166h1.563c-.338-.206-.472-1.638-.636-2.43-.106-.497-.233-1.099-.545-1.628h5.781c-.313.529-.438 1.132-.543 1.628-.168.792-.301 2.224-.639 2.43h1.561c.166-.395.258-1.812.332-2.166.25-1.179.401-1.892 1.895-1.892h3.498c.707 0 1.283.575 1.283 1.285a.644.644 0 0 0 1.286 0A2.574 2.574 0 0 0 30.994 8z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M28.387 39.281H15.613L5.521 62h32.958z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.379 62h1.568L22.785 28.417z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M38.479 62H42L22.785 28.417z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M7.052 62h1.569l12.595-33.583z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M5.521 62H2l19.216-33.583z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M6 45c0 2 2 8 3 8h26c1 0 3-6 3-8v-5H6v5z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M6 35v6c0 2 2 8 5 8h22c3 0 5-6 5-8v-6H6z"
  }), _react["default"].createElement("linearGradient", {
    id: "station_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -172,
    y1: 123,
    x2: -172,
    y2: 157,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.513,
    stopColor: "#dce3e7"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#station_svg__a)",
    d: "M32 13H12c-4.62 0-6 3.047-6 5v17l6 4c4.852 3.234 4 8 8 8h4c4 0 4.268-5.512 8-8l6-4V18c0-1.953-1.38-5-6-5z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 11,
    cy: 44,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 33,
    cy: 44,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M24 51h-4l-1 2h6l-1-2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M33 17H11c-3 0-2 7-2 7h26s1-7-2-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "station_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -172,
    y1: 130,
    x2: -172,
    y2: 152,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.236,
    stopColor: "#41424f"
  }), _react["default"].createElement("stop", {
    offset: 0.74,
    stopColor: "#616b76"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#station_svg__b)",
    d: "M33 18H11c-2 0-2 6-2 6s.594 10.594 3 13c4 4 16 4 20 0 2.404-2.404 3-13 3-13s0-6-2-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.54 23.191H12.462c-2.657 0-2.657-4.382 0-4.382H31.54c2.657 0 2.657 4.382 0 4.382z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M18.197 21.62c-.004-.067.031-.102.094-.102h.375c.059 0 .091.035.102.098.027.238.171.331.396.331.254 0 .402-.12.402-.357v-1.937c0-.063.034-.098.098-.098h.371c.063 0 .099.035.099.098v1.937c0 .624-.47.91-.97.91-.477 0-.924-.258-.967-.88zM20.497 21c0-.844.667-1.5 1.5-1.5.832 0 1.5.656 1.5 1.5s-.668 1.5-1.5 1.5c-.833 0-1.5-.656-1.5-1.5zm2.433 0c0-.555-.409-.947-.933-.947s-.933.392-.933.947c0 .555.408.947.933.947.524 0 .933-.392.933-.947zM25.787 19.673l-.878 1.489v1.184c0 .063-.035.098-.099.098h-.371c-.063 0-.099-.035-.099-.098V21.16l-.877-1.488c-.039-.069-.009-.118.066-.118h.432c.054 0 .09.023.114.069l.55.99.549-.99a.12.12 0 0 1 .115-.069h.431c.076.001.107.05.067.119z"
  }));
};

var _default = SvgStation;
exports["default"] = _default;