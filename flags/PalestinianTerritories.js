"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPalestinianTerritories = function SvgPalestinianTerritories(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M60 42c-5.52 0-10-4.48-10-10H10.79v21.21A29.871 29.871 0 0 0 32 62c13.07 0 24.18-8.36 28.29-20.02-.1.01-.19.02-.29.02z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M60 22c.1 0 .19.01.29.01C56.18 10.36 45.07 2 32 2c-8.29 0-15.79 3.36-21.21 8.79V32H50c0-5.52 4.48-10 10-10z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.29 22h-49.5v20h49.5a30.086 30.086 0 0 0 0-20z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M10.79 10.79A29.871 29.871 0 0 0 2 32c0 8.28 3.36 15.78 8.79 21.21L32 32 10.79 10.79z"
  }), _react["default"].createElement("linearGradient", {
    id: "palestinian-territories_svg__a",
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
    fill: "url(#palestinian-territories_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPalestinianTerritories;
exports["default"] = _default;