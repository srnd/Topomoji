"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBaggageClaim = function SvgBaggageClaim(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "baggage-claim_svg__a",
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
    fill: "url(#baggage-claim_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 14.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 21.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 28.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 35.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 42.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 49.5,
    cy: 49,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M41 20h-2v-3.902c0-.57-.447-1.033-1-1.033H26c-.551 0-1 .463-1 1.033V20h-2v-3.902C23 14.389 24.346 13 26 13h12c1.654 0 3 1.389 3 3.098V20zM14 20a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h3.5V20H14zM19.5 20h25v24h-25zM50 20h-3.5v24H50a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2z"
  }));
};

var _default = SvgBaggageClaim;
exports["default"] = _default;