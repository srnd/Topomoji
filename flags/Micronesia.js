"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMicronesia = function SvgMicronesia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#0FB4D4",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32.78 21.62l2.4 1.83-.91-2.97 2.4-1.84-2.97-.01-.92-2.96-.93 2.96-2.96.01 2.39 1.84-.91 2.97zM32.78 42.38l2.4-1.82-.91 2.96 2.4 1.84-2.97.01-.92 2.96-.93-2.96-2.96-.01 2.39-1.84-.91-2.96zM21.89 29.94l2.4-1.83-.91 2.97 2.4 1.84-2.97.01-.92 2.96-.93-2.96-2.96-.01 2.39-1.84-.91-2.97zM42.11 29.94l-2.4-1.83.91 2.97-2.4 1.84 2.97.01.92 2.96.93-2.96 2.96-.01-2.39-1.84.91-2.97z"
  }), _react["default"].createElement("linearGradient", {
    id: "micronesia_svg__a",
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
    fill: "url(#micronesia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMicronesia;
exports["default"] = _default;