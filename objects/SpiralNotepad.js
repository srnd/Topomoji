"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpiralNotepad = function SvgSpiralNotepad(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M7 5h50v54H7z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M7 59h50v3H7z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M7 60.871v.66l50-.328zM7 59.469v.664l50-.33z"
  }), _react["default"].createElement("path", {
    fill: "#BAD6E6",
    d: "M7 14.34h50v.301H7zM7 17.758h50v.301H7zM7 21.177h50v.301H7zM7 24.595h50v.301H7zM7 28.013h50v.301H7zM7 31.432h50v.301H7zM7 34.85h50v.301H7zM7 38.268h50v.301H7zM7 41.687h50v.301H7zM7 45.104h50v.301H7zM7 48.522h50v.301H7zM7 51.941h50v.301H7zM7 55.359h50v.301H7z"
  }), _react["default"].createElement("linearGradient", {
    id: "spiral-notepad_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 46.188,
    y1: 48.81,
    x2: 53.567,
    y2: 58.128
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#717b80"
  }), _react["default"].createElement("stop", {
    offset: 0.115,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.394,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__a)",
    d: "M37.029 59s13.875 1.523 19.955-7.415V40.688S56.967 54.029 37.029 59z"
  }), _react["default"].createElement("linearGradient", {
    id: "spiral-notepad_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 51.765,
    y1: 54.098,
    x2: 46.247,
    y2: 48.58
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b8bfc4"
  }), _react["default"].createElement("stop", {
    offset: 0.065,
    stopColor: "#c1c7cc"
  }), _react["default"].createElement("stop", {
    offset: 0.292,
    stopColor: "#dce0e2"
  }), _react["default"].createElement("stop", {
    offset: 0.522,
    stopColor: "#f0f1f2"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#fbfcfc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__b)",
    d: "M56.984 39.679C56.984 51.601 50.48 59 37.029 59c0 0 9.219-2.353 9.219-10.423 11.637 0 10.736-8.898 10.736-8.898z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.682 8.106c0 2.33-3.5 2.33-3.5 0 0-2.335 3.5-2.335 3.5 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-notepad_svg__c",
    cx: 15.682,
    cy: -15.983,
    r: 2.663,
    gradientTransform: "matrix(.9669 0 0 1.2567 -1.232 25.587)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__c)",
    d: "M13.931 2a1 1 0 0 0-.999 1.001v5a1 1 0 1 0 2 0v-5A1 1 0 0 0 13.931 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.716 8.106c0 2.33-3.5 2.33-3.5 0 0-2.335 3.5-2.335 3.5 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-notepad_svg__d",
    cx: 25.025,
    cy: -15.983,
    r: 2.663,
    gradientTransform: "matrix(.9669 0 0 1.2567 -1.232 25.587)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__d)",
    d: "M22.965 2a1 1 0 0 0-.999 1.001v5a1 1 0 0 0 2 0v-5A1 1 0 0 0 22.965 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M33.75 8.106c0 2.33-3.5 2.33-3.5 0 0-2.335 3.5-2.335 3.5 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-notepad_svg__e",
    cx: 34.368,
    cy: -15.983,
    r: 2.663,
    gradientTransform: "matrix(.9669 0 0 1.2567 -1.232 25.587)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__e)",
    d: "M32 2a1 1 0 0 0-1 1.001v5a1 1 0 0 0 2 0v-5A1 1 0 0 0 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M42.784 8.106c0 2.33-3.5 2.33-3.5 0 0-2.335 3.5-2.335 3.5 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-notepad_svg__f",
    cx: 43.711,
    cy: -15.983,
    r: 2.663,
    gradientTransform: "matrix(.9669 0 0 1.2567 -1.232 25.587)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__f)",
    d: "M41.033 2a1 1 0 0 0-.999 1.001v5a1 1 0 0 0 2 0v-5A1 1 0 0 0 41.033 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M51.818 8.106c0 2.33-3.5 2.33-3.5 0 0-2.335 3.5-2.335 3.5 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-notepad_svg__g",
    cx: 53.054,
    cy: -15.983,
    r: 2.663,
    gradientTransform: "matrix(.9669 0 0 1.2567 -1.232 25.587)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-notepad_svg__g)",
    d: "M50.068 2a1 1 0 0 0-1 1.001v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1.001z"
  }));
};

var _default = SvgSpiralNotepad;
exports["default"] = _default;