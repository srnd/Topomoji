"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStVincentAmpGrenadines = function SvgStVincentAmpGrenadines(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 62c5.88 0 11.37-1.7 16-4.63V6.63A29.831 29.831 0 0 0 32 2c-5.88 0-11.37 1.7-16 4.63v50.74A29.831 29.831 0 0 0 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M16 6.63C7.59 11.94 2 21.32 2 32s5.59 20.06 14 25.37V6.63z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M48 57.37C56.41 52.06 62 42.68 62 32S56.41 11.94 48 6.63v50.74zM24.77 17.92l-6.02 10.35 6.02 10.35 6.03-10.35zM39.23 17.92l-6.02 10.35 6.02 10.35 6.02-10.35zM25.98 41.73L32 52.08l6.02-10.35L32 31.38z"
  }), _react["default"].createElement("linearGradient", {
    id: "st-vincent-amp-grenadines_svg__a",
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
    fill: "url(#st-vincent-amp-grenadines_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgStVincentAmpGrenadines;
exports["default"] = _default;