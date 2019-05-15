"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUnitedArabEmirates = function SvgUnitedArabEmirates(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 13.061 8.35 24.166 20 28.285V3.713C10.35 7.832 2 18.939 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 2c-3.51 0-6.869.619-10 1.729V22h38.287C56.168 10.35 45.061 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.287 22H22v20h38.287C61.393 38.871 62 35.508 62 32s-.607-6.871-1.713-10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22 42v18.271A29.899 29.899 0 0 0 32 62c13.061 0 24.168-8.35 28.287-20H22z"
  }), _react["default"].createElement("linearGradient", {
    id: "united-arab-emirates_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#united-arab-emirates_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgUnitedArabEmirates;
exports["default"] = _default;