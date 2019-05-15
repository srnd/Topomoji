"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEye = function SvgEye(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "eye_svg__a",
    cx: 306,
    cy: -330,
    r: 25.894,
    gradientTransform: "matrix(1 0 0 -1 -274 -298)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.77,
    stopColor: "#e1eaf0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#eye_svg__a)",
    d: "M62 35.818C62 39.344 51.35 53 32 53S2 39.344 2 35.818C2 29.625 12.651 11 32 11c19.35 0 30 18.625 30 24.818z"
  }), _react["default"].createElement("radialGradient", {
    id: "eye_svg__b",
    cx: 312.623,
    cy: -440.72,
    r: 29.059,
    gradientTransform: "matrix(.9333 0 0 -.7601 -259.772 -300.99)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c9d1d6"
  })), _react["default"].createElement("path", {
    fill: "url(#eye_svg__b)",
    d: "M60 35.637C60 38.994 50.061 52 32 52S4 38.994 4 35.637C4 32.277 15.939 16 34 16s26 16.277 26 19.637z"
  }), _react["default"].createElement("radialGradient", {
    id: "eye_svg__c",
    cx: 32,
    cy: 34.008,
    r: 14,
    gradientTransform: "translate(0 .243)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.533,
    stopColor: "#996c4d"
  }), _react["default"].createElement("stop", {
    offset: 0.64,
    stopColor: "#966a4b"
  }), _react["default"].createElement("stop", {
    offset: 0.723,
    stopColor: "#8c6347"
  }), _react["default"].createElement("stop", {
    offset: 0.798,
    stopColor: "#7c573e"
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#654733"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#4d3627"
  })), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#eye_svg__c)",
    cx: 32,
    cy: 34.25,
    r: 14
  }), _react["default"].createElement("linearGradient", {
    id: "eye_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 47,
    x2: 32.001,
    y2: 21.5
  }, _react["default"].createElement("stop", {
    offset: 0.067,
    stopColor: "#bf842c"
  }), _react["default"].createElement("stop", {
    offset: 0.594,
    stopColor: "#bf842c",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#eye_svg__d)",
    cx: 32,
    cy: 34.25,
    r: 12.75
  }), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#1A1626",
    cx: 32,
    cy: 34.25,
    r: 6.5
  }), _react["default"].createElement("linearGradient", {
    id: "eye_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 22.471,
    y1: 29.15,
    x2: 32.472,
    y2: 29.15
  }, _react["default"].createElement("stop", {
    offset: 0.049,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    opacity: 0.3,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#eye_svg__e)",
    cx: 27.471,
    cy: 29.151,
    r: 5
  }));
};

var _default = SvgEye;
exports["default"] = _default;