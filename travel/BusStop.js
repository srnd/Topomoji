"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBusStop = function SvgBusStop(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bus-stop_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 30,
    y1: 48,
    x2: 34,
    y2: 48
  }, _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#c3cdd2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#a3b0b6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#bus-stop_svg__a)",
    d: "M30 34v28h4V34h-4z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M48 35c0 .55-.45 1-1 1H17c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h30c.55 0 1 .45 1 1v32z"
  }), _react["default"].createElement("linearGradient", {
    id: "bus-stop_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 24,
    y1: 32,
    x2: 40,
    y2: 32,
    gradientTransform: "matrix(1 0 0 -1 0 93)"
  }, _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#c3cdd2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#a3b0b6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#bus-stop_svg__b)",
    d: "M24 62v-1.551c0-.598 16-.598 16 0V62H24z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 32,
    cy: 19,
    r: 12
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M38 23c0 .55-.449 1-1 1H27c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1h10c.551 0 1 .45 1 1v10z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M27 25.5c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5V23h-2v2.5zM35 23v2.5c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5V23h-2z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 28,
    cy: 21,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 36,
    cy: 21,
    r: 1
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M36 17.25c0 .413-.338.75-.75.75h-6.5a.752.752 0 0 1-.75-.75v-2.5c0-.413.337-.75.75-.75h6.5c.412 0 .75.337.75.75v2.5z"
  }));
};

var _default = SvgBusStop;
exports["default"] = _default;