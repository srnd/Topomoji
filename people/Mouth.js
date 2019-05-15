"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMouth = function SvgMouth(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "mouth_svg__a",
    cx: 32,
    cy: 9.352,
    r: 23.596,
    gradientTransform: "matrix(1 0 0 .7895 0 28.08)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#ff3030"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d40000"
  })), _react["default"].createElement("path", {
    fill: "url(#mouth_svg__a)",
    d: "M32 23.927c-6.311 0-30 8.707-30 8.707C7.632 38.524 10.98 47 32 47s24.368-8.476 30-14.366c0 0-23.689-8.707-30-8.707z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M32 20.526L6 32.354c15.15-.868 15.354 3.525 26 3.525s10.85-4.394 26-3.525L32 20.526z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32 22.236s-12.403-1.549-16.069 5.996c1.069 2.105 2.595 3.433 8.278 2.018 2.907.916 5.323 1.368 7.791.734 2.468.634 4.884.182 7.791-.734 5.684 1.415 7.209.088 8.278-2.018C44.403 20.688 32 22.236 32 22.236z"
  }), _react["default"].createElement("radialGradient", {
    id: "mouth_svg__b",
    cx: 32,
    cy: -4.022,
    r: 22.363,
    gradientTransform: "matrix(1 0 0 .7895 0 28.08)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#ff3030"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fill: "url(#mouth_svg__b)",
    d: "M44.381 17.388C38.633 15.896 32 19.186 32 19.186s-6.633-3.289-12.381-1.798C12.201 19.273 2 32.634 2 32.634c15.213 1.146 13.793-3.616 20.889-5.684 2.36-.688 5.83.658 9.111.658s6.751-1.347 9.111-.658c7.096 2.067 5.676 6.829 20.889 5.684 0 0-10.201-13.361-17.619-15.246z"
  }));
};

var _default = SvgMouth;
exports["default"] = _default;