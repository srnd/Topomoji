"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStopSign = function SvgStopSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "stop-sign_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 15.903,
    y1: 4.12,
    x2: 48.097,
    y2: 59.881
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#c2cacd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("path", {
    fill: "url(#stop-sign_svg__a)",
    d: "M62 44.426L44.426 62H19.575L2 44.426V19.575L19.575 2h24.851L62 19.575z"
  }), _react["default"].createElement("linearGradient", {
    id: "stop-sign_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 8,
    x2: 32,
    y2: 56
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#stop-sign_svg__b)",
    d: "M56 41.939L41.941 56H22.06L8 41.939v-19.88L22.06 8h19.881L56 22.059z"
  }));
};

var _default = SvgStopSign;
exports["default"] = _default;