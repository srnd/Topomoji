"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEyes = function SvgEyes(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "eyes_svg__a",
    cx: -12.38,
    cy: 31.5,
    r: 13.999,
    gradientTransform: "matrix(.9334 0 0 1.4923 26.155 -15.508)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.859,
    stopColor: "#f7f9fa"
  }), _react["default"].createElement("stop", {
    offset: 0.959,
    stopColor: "#e2e8ed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d7e0e6"
  })), _react["default"].createElement("path", {
    fill: "url(#eyes_svg__a)",
    d: "M2 31.428C2 40.23 5.487 53 16.001 53 26.513 53 30 40.23 30 31.428c0-27.237-28-27.237-28 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3.679 32.165c0 12.254 13.067 12.254 13.067 0 0-11.746-13.067-11.746-13.067 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11.146 27.313a1.874 1.874 0 0 0 3.733 0c.001-2.61-3.733-2.61-3.733 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "eyes_svg__b",
    cx: 19.762,
    cy: 31.5,
    r: 13.999,
    gradientTransform: "matrix(.9334 0 0 1.4923 28.154 -15.508)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.859,
    stopColor: "#f7f9fa"
  }), _react["default"].createElement("stop", {
    offset: 0.959,
    stopColor: "#e2e8ed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d7e0e6"
  })), _react["default"].createElement("path", {
    fill: "url(#eyes_svg__b)",
    d: "M34 31.428C34 40.23 37.487 53 48.001 53 58.513 53 62 40.23 62 31.428c0-27.237-28-27.237-28 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.679 32.165c0 12.254 13.067 12.254 13.067 0 0-11.746-13.067-11.746-13.067 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M43.146 27.313a1.874 1.874 0 0 0 3.733 0c.001-2.61-3.733-2.61-3.733 0z"
  }));
};

var _default = SvgEyes;
exports["default"] = _default;