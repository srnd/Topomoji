"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPisces = function SvgPisces(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pisces_svg__a",
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
    fill: "url(#pisces_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M40.064 34.328h6.578c1.547 0 2.357-1.173 2.357-2.331s-.811-2.331-2.357-2.331h-6.578c.662-5.165 3.434-9.778 7.855-13.045.893-.66 1.223-1.727.857-2.787-.506-1.466-2.164-2.091-3.412-1.163-5.832 4.306-9.398 10.324-10.088 16.995h-6.219c-.707-6.846-4.41-12.954-10.467-17.249-1.281-.907-2.947-.259-3.438 1.213-.35 1.054-.006 2.107.9 2.75 4.631 3.283 7.527 7.982 8.203 13.287h-6.898c-1.551 0-2.359 1.172-2.359 2.331s.809 2.331 2.359 2.331h6.902c-.678 5.291-3.561 9.981-8.172 13.264-.904.644-1.248 1.697-.894 2.751.33.991 1.18 1.658 2.117 1.658.455 0 .898-.151 1.314-.448 6.037-4.292 9.725-10.392 10.43-17.224h6.219c.692 6.67 4.258 12.688 10.09 16.992.418.31.863.467 1.324.467.914 0 1.754-.656 2.088-1.631.365-1.058.035-2.125-.857-2.783-4.42-3.268-7.191-7.882-7.854-13.047z"
  }));
};

var _default = SvgPisces;
exports["default"] = _default;