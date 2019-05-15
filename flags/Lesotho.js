"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLesotho = function SvgLesotho(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M2 32c0 5.88 1.7 11.37 4.63 16h50.75A29.91 29.91 0 0 0 62 32c0-5.88-1.7-11.37-4.63-16H6.63A29.831 29.831 0 0 0 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M57.37 16C52.06 7.59 42.68 2 32 2 21.32 2 11.94 7.59 6.63 16h50.74z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M6.63 48C11.94 56.41 21.32 62 32 62c10.68 0 20.06-5.59 25.37-14H6.63z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.14 30.76c.87-1.13 1.41-2.73 1.41-4.53 0-3.49-2-6.22-4.54-6.22-2.55 0-4.55 2.73-4.55 6.22 0 1.81.54 3.41 1.41 4.53L22 38.74S22 44 32 44s10-5.26 10-5.26l-6.86-7.98zm-.41-4.54c0 1.2-.31 2.31-.81 3.12l-1.47-1.71V26l1.37-.67-1.37-.67v-2.81c1.28.37 2.28 2.21 2.28 4.37zm-5.46 0c0-2.16 1-4 2.27-4.37v2.81l-1.36.67 1.37.67v1.64l-1.46 1.71c-.51-.82-.82-1.93-.82-3.13z"
  }), _react["default"].createElement("linearGradient", {
    id: "lesotho_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
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
    fill: "url(#lesotho_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgLesotho;
exports["default"] = _default;