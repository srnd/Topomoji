"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCongoBrazzaville = function SvgCongoBrazzaville(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M57.03 15.46h-8.48L15.46 48.54v8.48A29.787 29.787 0 0 0 32 62c16.57 0 30-13.43 30-30 0-6.11-1.83-11.8-4.97-16.54z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2C15.43 2 2 15.43 2 32c0 6.12 1.83 11.8 4.97 16.54h8.48l33.08-33.08V6.97A29.802 29.802 0 0 0 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M6.97 48.54c1.11 1.68 2.38 3.24 3.8 4.66l.02.02c1.42 1.42 2.98 2.69 4.66 3.8l41.56-41.56a30.203 30.203 0 0 0-8.48-8.49L6.97 48.54z"
  }), _react["default"].createElement("linearGradient", {
    id: "congo-brazzaville_svg__a",
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
    fill: "url(#congo-brazzaville_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCongoBrazzaville;
exports["default"] = _default;