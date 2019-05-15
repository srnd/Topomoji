"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCameroon = function SvgCameroon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M62 32c0-13.06-8.35-24.17-20-28.29v56.57C53.65 56.17 62 45.06 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M2 32c0 13.06 8.35 24.17 20 28.29V3.71C10.35 7.83 2 18.94 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M42 3.71a30.086 30.086 0 0 0-20 0v56.57A29.84 29.84 0 0 0 32 62c3.51 0 6.87-.61 10-1.71V3.71z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 36.25L37.25 40l-1.98-6.11 5.23-3.78-6.48-.02L32 24l-2.02 6.09-6.48.02 5.23 3.78L26.75 40z"
  }), _react["default"].createElement("linearGradient", {
    id: "cameroon_svg__a",
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
    fill: "url(#cameroon_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCameroon;
exports["default"] = _default;