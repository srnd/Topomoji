"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCapricorn = function SvgCapricorn(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "capricorn_svg__a",
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
    fill: "url(#capricorn_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M40.801 33.258a9.407 9.407 0 0 0-5.594 1.828V19.975c0-3.505-2.643-7.565-8.238-7.565-2.285 0-4.642.774-6.338 2.251-1.012-1.26-2.375-2.198-3.979-2.598a2.138 2.138 0 0 0-2.588 1.548 2.126 2.126 0 0 0 1.551 2.579c1.291.321 2.592 1.723 2.592 3.784v21.962c0 1.175.957 2.127 2.135 2.127a2.13 2.13 0 0 0 2.135-2.127V19.975c0-2.412 2.756-3.311 4.492-3.311 1.74 0 3.969 1.195 3.969 3.311v23.86c0 2.824-1.713 4.103-3.484 4.103-2.851 0-2.851 4.063 0 4.063 2.637 0 5.297-1.304 6.711-3.843a9.366 9.366 0 0 0 6.637 2.718c5.082 0 9.199-3.944 9.199-8.809-.001-4.865-4.118-8.809-9.2-8.809zm0 13.921c-2.947 0-5.338-2.289-5.338-5.112 0-2.824 2.391-5.112 5.338-5.112 2.949 0 5.34 2.288 5.34 5.112-.001 2.823-2.391 5.112-5.34 5.112z"
  }));
};

var _default = SvgCapricorn;
exports["default"] = _default;