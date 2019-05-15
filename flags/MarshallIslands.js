"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMarshallIslands = function SvgMarshallIslands(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M39.77 3.02c-16-4.29-32.45 5.21-36.74 21.21a29.839 29.839 0 0 0-.26 14.5L46.41 5.69a30.041 30.041 0 0 0-6.64-2.67zM11.61 54c3.47 3.22 7.74 5.67 12.63 6.98 16 4.29 32.45-5.21 36.74-21.21.62-2.3.94-4.62 1.01-6.9L11.61 54z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M58.03 17.08c-2.7-4.71-6.68-8.69-11.61-11.39L2.77 38.73c.68 2.93 1.78 5.72 3.27 8.3l51.99-29.95z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M58.03 17.08L6.04 47.03c1.49 2.58 3.37 4.93 5.57 6.97l50.38-21.13c.17-5.63-1.26-11.08-3.96-15.79zM19.64 18.13l6.67-.4-6.67-.4 3.67-1.4-3.88.62 3.19-2.3-3.59 1.61 2.48-3.05-3.05 2.48 1.61-3.58-2.3 3.18.62-3.88-1.4 3.67-.4-6.67-.4 6.67-1.4-3.67.63 3.88-2.3-3.18 1.6 3.58-3.05-2.48 2.49 3.05-3.59-1.61 3.19 2.3-3.89-.62 3.68 1.4-6.67.4 6.67.4-3.68 1.4 3.89-.62-3.19 2.3 3.59-1.61-2.49 3.05 3.05-2.48-1.6 3.59 2.3-3.19-.63 3.88 1.4-3.68.4 6.68.4-6.68 1.4 3.68-.62-3.88 2.3 3.19-1.61-3.59 3.05 2.48-2.48-3.05 3.59 1.61-3.19-2.3 3.88.62z"
  }), _react["default"].createElement("linearGradient", {
    id: "marshall-islands_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 31.999,
    y1: 61.999,
    x2: 31.999,
    y2: 1.999
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#marshall-islands_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMarshallIslands;
exports["default"] = _default;