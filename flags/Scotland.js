"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgScotland = function SvgScotland(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M53.127 10.701C41.432-.9 22.566-.9 10.871 10.701L32 26.954l21.127-16.253zM10.871 53.302c11.695 11.598 30.561 11.598 42.256 0L32 37.048 10.871 53.302zM58.01 46.964c5.32-9.232 5.32-20.689 0-29.924L38.561 32.001 58.01 46.964zM5.988 17.039c-5.318 9.233-5.318 20.69 0 29.923l19.449-14.961L5.988 17.039z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M53.127 10.701L32 26.953 10.871 10.701a30.197 30.197 0 0 0-4.879 6.342l19.445 14.958L5.994 46.96a30.104 30.104 0 0 0 4.879 6.342L32 37.048l21.125 16.254a30.147 30.147 0 0 0 4.881-6.342L38.561 32.001l19.445-14.959a30.116 30.116 0 0 0-4.879-6.341z"
  }), _react["default"].createElement("linearGradient", {
    id: "scotland_svg__a",
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
    fill: "url(#scotland_svg__a)",
    cx: 32,
    cy: 31.999,
    r: 30
  }));
};

var _default = SvgScotland;
exports["default"] = _default;