"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDango = function SvgDango(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#D99025",
    d: "M2.677 5.062l3.737 3.737c.659.659 3.048-1.729 2.389-2.389L5.064 2.673C3.676 1.286 1.287 3.675 2.677 5.062z"
  }), _react["default"].createElement("radialGradient", {
    id: "dango_svg__a",
    cx: 79.518,
    cy: -124.447,
    r: 11.932,
    gradientTransform: "rotate(-45.001 207.14 22.406)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff8fa8"
  }), _react["default"].createElement("stop", {
    offset: 0.325,
    stopColor: "#fb8ba4"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#f08099"
  }), _react["default"].createElement("stop", {
    offset: 0.945,
    stopColor: "#dd6d85"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d96981"
  })), _react["default"].createElement("path", {
    fill: "url(#dango_svg__a)",
    d: "M5.813 5.814C.985 10.643.704 18.192 5.188 22.677s12.035 4.205 16.864-.625c4.829-4.829 5.111-12.38.625-16.863C18.19.703 10.643.983 5.813 5.814z"
  }), _react["default"].createElement("radialGradient", {
    id: "dango_svg__b",
    cx: 79.52,
    cy: -105.393,
    r: 11.932,
    gradientTransform: "rotate(-45.001 207.14 22.406)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff2a6"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#ffeea4"
  }), _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#ffe39d"
  }), _react["default"].createElement("stop", {
    offset: 0.933,
    stopColor: "#ffcf92"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffca8f"
  })), _react["default"].createElement("path", {
    fill: "url(#dango_svg__b)",
    d: "M19.287 19.286c-4.828 4.828-5.109 12.378-.625 16.862s12.035 4.205 16.865-.625c4.828-4.828 5.111-12.38.625-16.862-4.486-4.486-12.035-4.207-16.865.625z"
  }), _react["default"].createElement("radialGradient", {
    id: "dango_svg__c",
    cx: 79.52,
    cy: -86.332,
    r: 11.932,
    gradientTransform: "rotate(-45.001 207.14 22.406)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a5c967"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#a1c564"
  }), _react["default"].createElement("stop", {
    offset: 0.672,
    stopColor: "#96ba5b"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#84a64b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#84a64b"
  })), _react["default"].createElement("path", {
    fill: "url(#dango_svg__c)",
    d: "M32.765 32.764c-4.828 4.828-5.109 12.378-.625 16.862s12.035 4.205 16.865-.625c4.828-4.828 5.111-12.38.625-16.862-4.486-4.487-12.035-4.207-16.865.625z"
  }), _react["default"].createElement("path", {
    fill: "#D99025",
    d: "M46.249 48.635l12.868 12.87c.656.66 1.727.66 2.388 0 .66-.656.66-1.731 0-2.391L48.637 46.246c-.597-.597-2.985 1.792-2.388 2.389z"
  }));
};

var _default = SvgDango;
exports["default"] = _default;