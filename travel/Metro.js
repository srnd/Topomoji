"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMetro = function SvgMetro(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M32 2C15.432 2 2 15.432 2 32c0 11.105 6.041 20.796 15.01 25.982h2.936v1.487C23.635 61.094 27.711 62 32 62s8.365-.906 12.055-2.527v-1.49h2.938C55.961 52.796 62 43.105 62 32 62 15.432 48.568 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M39.412 47h-1.471l6.113 12.473a28.07 28.07 0 0 0 1.568-.746L39.412 47z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M41.5 47h-2.088l5.883 11.893a28.767 28.767 0 0 0 1.695-.912L41.5 47z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M18.377 58.727c.516.264 1.037.514 1.568.746L26.059 47H24.59l-6.213 11.727z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M17.01 57.98c.555.322 1.121.626 1.695.912L24.588 47H22.5l-5.49 10.98z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M40.994 8H23.006a2.569 2.569 0 0 0-2.568 2.57.644.644 0 0 0 1.288 0c0-.71.574-1.285 1.281-1.285h3.496c1.496 0 1.645.713 1.896 1.892.074.355.164 1.771.33 2.166h1.563c-.338-.206-.471-1.638-.635-2.43-.107-.497-.234-1.099-.545-1.628h5.781c-.313.529-.439 1.132-.543 1.628-.168.792-.301 2.224-.639 2.43h1.561c.166-.395.258-1.812.332-2.166.25-1.179.4-1.892 1.895-1.892h3.498c.707 0 1.283.575 1.283 1.285a.644.644 0 0 0 1.286 0A2.574 2.574 0 0 0 40.994 8z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M16 45c0 2 2 8 3 8h26c1 0 3-6 3-8v-5H16v5z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M16 35v6c0 2 2 8 5 8h22c3 0 5-6 5-8v-6H16z"
  }), _react["default"].createElement("linearGradient", {
    id: "metro_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 123,
    x2: -162,
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
    fill: "url(#metro_svg__a)",
    d: "M42 13H22c-4.621 0-6 3.047-6 5v17l6 4c4.852 3.234 4 8 8 8h4c4 0 4.268-5.512 8-8l6-4V18c0-1.953-1.381-5-6-5z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 21,
    cy: 44,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 43,
    cy: 44,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M34 51h-4l-1 2h6l-1-2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M43 17H21c-3 0-2 7-2 7h26s1-7-2-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "metro_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 130,
    x2: -162,
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
    fill: "url(#metro_svg__b)",
    d: "M43 18H21c-2 0-2 6-2 6s.594 10.594 3 13c4 4 16 4 20 0 2.404-2.404 3-13 3-13s0-6-2-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M41.539 23.191H22.461c-2.656 0-2.656-4.382 0-4.382h19.078c2.658 0 2.658 4.382 0 4.382z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M28.197 21.62c-.004-.067.031-.102.094-.102h.375c.059 0 .09.035.102.098.027.238.17.331.395.331.254 0 .402-.12.402-.357v-1.937c0-.063.035-.098.098-.098h.371c.064 0 .1.035.1.098v1.937c0 .624-.471.91-.971.91-.477 0-.923-.258-.966-.88zM30.496 21c0-.844.668-1.5 1.5-1.5s1.5.656 1.5 1.5-.668 1.5-1.5 1.5-1.5-.656-1.5-1.5zm2.434 0c0-.555-.41-.947-.934-.947s-.932.392-.932.947c0 .555.408.947.932.947s.934-.392.934-.947zM35.787 19.673l-.879 1.489v1.184c0 .063-.035.098-.098.098h-.371c-.064 0-.1-.035-.1-.098V21.16l-.877-1.488c-.039-.069-.008-.118.066-.118h.432a.12.12 0 0 1 .115.069l.549.99.549-.99a.12.12 0 0 1 .115-.069h.432c.075.001.106.05.067.119z"
  }));
};

var _default = SvgMetro;
exports["default"] = _default;