"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDenmark = function SvgDenmark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M61.17 25C58.02 11.81 46.16 2 32 2c-.33 0-.67.01-1 .03V25h30.17zM17 6.02C9.98 10.08 4.77 16.9 2.83 25H17V6.02zM2.83 39C4.77 47.1 9.98 53.92 17 57.98V39H2.83zM31 61.97c.33.01.67.03 1 .03 14.16 0 26.02-9.81 29.17-23H31v22.97z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.17 25H31V2.03c-5.09.17-9.86 1.6-14 4V25H2.83a29.94 29.94 0 0 0 0 14H17v18.98c4.14 2.4 8.91 3.83 14 4V39h30.17a29.94 29.94 0 0 0 0-14z"
  }), _react["default"].createElement("linearGradient", {
    id: "denmark_svg__a",
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
    fill: "url(#denmark_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgDenmark;
exports["default"] = _default;