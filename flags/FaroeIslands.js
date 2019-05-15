"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaroeIslands = function SvgFaroeIslands(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M30 61.9c.66.04 1.33.1 2 .1 14.51 0 26.62-10.31 29.4-24H30v23.9zM2.6 38c1.81 8.92 7.58 16.39 15.4 20.52V38H2.6zM61.4 26C58.62 12.31 46.51 2 32 2c-.67 0-1.34.06-2 .1V26h31.4zM18 5.48C10.19 9.61 4.41 17.08 2.6 26H18V5.48z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M28 28h33.7c-.09-.67-.17-1.34-.3-2H30V2.1c-.67.04-1.34.11-2 .2V28zM20 28V4.51c-.68.3-1.35.62-2 .96V26H2.6c-.13.66-.22 1.33-.31 2H20zM28 36v25.7c.66.09 1.33.15 2 .2V38h31.4c.13-.66.21-1.33.3-2H28zM20 36H2.3c.09.67.17 1.34.31 2H18v20.52c.65.35 1.32.67 2 .96V36z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M61.7 28H28V2.3c-2.81.38-5.49 1.12-8 2.22V28H2.3c-.18 1.31-.3 2.64-.3 4 0 1.36.12 2.69.3 4H20v23.49c2.51 1.1 5.19 1.84 8 2.22V36h33.7c.18-1.31.3-2.64.3-4 0-1.36-.12-2.69-.3-4z"
  }), _react["default"].createElement("linearGradient", {
    id: "faroe-islands_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
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
    fill: "url(#faroe-islands_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgFaroeIslands;
exports["default"] = _default;