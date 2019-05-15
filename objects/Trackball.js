"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrackball = function SvgTrackball(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47 29.908C46.998 46.369 38.77 62 32 62c-6.771 0-14.999-15.631-15-32.092 0-17.922 6.719-27.152 14.999-27.154C40.283 2.755 47 11.985 47 29.908z"
  }), _react["default"].createElement("ellipse", {
    fill: "#1A1626",
    cx: 22.793,
    cy: 30.734,
    rx: 3.68,
    ry: 8.327
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M24.425 25.345c-.635-1.521-1.532-2.479-2.53-2.479-1.921-.002-3.479 3.521-3.479 7.867.001 4.346 1.56 7.872 3.479 7.87.997 0 1.894-.955 2.53-2.479-.588-1.408-.949-3.301-.951-5.391.003-2.085.363-3.982.951-5.388z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M24.991 25.911c-.525 1.261-.851 2.954-.851 4.823.001 1.87.325 3.567.851 4.827.524-1.262.848-2.957.85-4.826 0-1.869-.324-3.564-.85-4.824z"
  }), _react["default"].createElement("ellipse", {
    fill: "#1A1626",
    cx: 41.207,
    cy: 30.735,
    rx: 3.68,
    ry: 8.325
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M39.576 36.127c.635 1.521 1.531 2.479 2.529 2.479 1.92-.002 3.477-3.523 3.479-7.871 0-4.346-1.559-7.869-3.479-7.868-1 0-1.895.955-2.529 2.479.586 1.408.949 3.303.949 5.391 0 2.087-.363 3.98-.949 5.39z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M39.008 35.559c.525-1.258.848-2.957.852-4.823-.002-1.871-.326-3.564-.85-4.825-.525 1.261-.85 2.956-.85 4.824 0 1.87.324 3.564.848 4.824z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M42.309 14.64c.004 5.506-4.613 9.971-10.308 9.971s-10.31-4.463-10.312-9.971c.001-5.507 4.617-9.971 10.31-9.971 5.694 0 10.31 4.464 10.31 9.971z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.686 3.486c0 .884-7.375.884-7.375 0 .002-1.981 7.375-1.982 7.375 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "trackball_svg__a",
    cx: 30.533,
    cy: 12.82,
    r: 9.222,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#fa000d"
  }), _react["default"].createElement("stop", {
    offset: 0.593,
    stopColor: "#ec0008"
  }), _react["default"].createElement("stop", {
    offset: 0.937,
    stopColor: "#d40001"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#trackball_svg__a)",
    d: "M31.999 6.14a8.497 8.497 0 0 0-8.5 8.5 8.5 8.5 0 1 0 8.5-8.5z"
  }));
};

var _default = SvgTrackball;
exports["default"] = _default;