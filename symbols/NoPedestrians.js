"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNoPedestrians = function SvgNoPedestrians(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "no-pedestrians_svg__a",
    cx: 31.999,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#no-pedestrians_svg__a)",
    d: "M7.368 23.676c-11.1 32.841 38.163 49.489 49.262 16.648C67.73 7.482 18.469-9.166 7.368 23.676z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M41.969 47.213l-3.881-9.293c-.281-.76-.543-3.213-.543-3.213a4.268 4.268 0 0 0-.137-.766l-2.289-8.799 2.967 1.516v2.785c0 .881.699 1.594 1.564 1.594.863 0 1.564-.713 1.564-1.594v-4.754l-8.361-4.264-.008-.002a3.996 3.996 0 0 0-1.754-.398c-1.228 0-2.33.547-3.084 1.414L28 21.432l-4.023 4.1h-5.021c-.863 0-1.563.711-1.563 1.592 0 .883.699 1.596 1.563 1.596h6.318l2.271-2.314 1.449 6.736-4.148 4.227v10.502c0 .883.701 1.594 1.565 1.594.865 0 1.564-.711 1.564-1.594v-9.182l3.311-3.369a1.537 1.537 0 0 1 1.092-.457c.635 0 1.184.389 1.426.943l5.289 12.658c.23.588.793 1 1.451 1 .863 0 1.564-.711 1.564-1.594a1.615 1.615 0 0 0-.139-.657z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 29.749,
    cy: 15.695,
    r: 2.931
  }), _react["default"].createElement("linearGradient", {
    id: "no-pedestrians_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#no-pedestrians_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm24 30a23.89 23.89 0 0 1-5.045 14.713L17.287 13.045A23.89 23.89 0 0 1 32 8c13.254 0 24 10.746 24 24zM8 32a23.887 23.887 0 0 1 5.045-14.712l33.666 33.668A23.89 23.89 0 0 1 32 56C18.744 56 8 45.256 8 32z"
  }));
};

var _default = SvgNoPedestrians;
exports["default"] = _default;