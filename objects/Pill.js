"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPill = function SvgPill(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pill_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -42.256,
    y1: 75.088,
    x2: -14.293,
    y2: 75.088,
    gradientTransform: "scale(-1 1) rotate(45 0 39.987)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd94d"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#fed64b"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#fccc44"
  }), _react["default"].createElement("stop", {
    offset: 0.87,
    stopColor: "#f8bb39"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f5af31"
  })), _react["default"].createElement("path", {
    fill: "url(#pill_svg__a)",
    d: "M57.628 57.627c-5.461 5.459-13.91 5.861-18.875.898l-16.639-16.64 19.773-19.772L58.524 38.75c4.965 4.965 4.563 13.415-.896 18.877z"
  }), _react["default"].createElement("linearGradient", {
    id: "pill_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -42.256,
    y1: 38.847,
    x2: -14.291,
    y2: 38.847,
    gradientTransform: "scale(-1 1) rotate(45 0 39.987)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.33,
    stopColor: "#fc1f1f"
  }), _react["default"].createElement("stop", {
    offset: 0.596,
    stopColor: "#f2181b"
  }), _react["default"].createElement("stop", {
    offset: 0.838,
    stopColor: "#e10b13"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d1000b"
  })), _react["default"].createElement("path", {
    fill: "url(#pill_svg__b)",
    d: "M6.374 6.373c-5.461 5.461-5.861 13.911-.9 18.876l16.641 16.637 19.773-19.772L25.249 5.475C20.284.51 11.834.915 6.374 6.373z"
  }), _react["default"].createElement("radialGradient", {
    id: "pill_svg__c",
    cx: 451.784,
    cy: 117.644,
    r: 36.988,
    gradientTransform: "matrix(.0836 .6433 .6485 -.0843 -99.967 -282.248)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.4
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#pill_svg__c)",
    d: "M18.105 28.8c6.848-.885 11.68-7.113 10.794-13.901-.883-6.797-7.146-11.581-13.991-10.69-6.847.888-11.68 7.116-10.801 13.91.884 6.798 7.157 11.578 13.998 10.681z"
  }));
};

var _default = SvgPill;
exports["default"] = _default;