"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMongolia = function SvgMongolia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2 32c0 13.06 8.35 24.17 20 28.29V3.71C10.35 7.83 2 18.94 2 32zM62 32c0-13.06-8.35-24.17-20-28.29v56.57C53.65 56.17 62 45.06 62 32z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M22 60.29a30.086 30.086 0 0 0 20 0V3.71a30.086 30.086 0 0 0-20 0v56.58z"
  }), _react["default"].createElement("circle", {
    fill: "#F9CF02",
    cx: 13.18,
    cy: 23.8,
    r: 3.58
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 13.18,
    cy: 22.18,
    r: 3.9
  }), _react["default"].createElement("circle", {
    fill: "#F9CF02",
    cx: 13.18,
    cy: 22.82,
    r: 2.6
  }), _react["default"].createElement("path", {
    fill: "#F9CF02",
    d: "M11.55 17.95a1.63 1.63 0 0 0 3.26 0c0-.65-.41-.73-.41-.98 0-.24.24-.57-.24-.97.24.41-.16.49-.16.89 0 .41.16.41.16.73 0 .18-.15.32-.33.32-.18 0-.32-.15-.32-.32 0-.33.32-.65.32-1.14 0-.49-.08-.65-.32-1.06-.24-.41-.65-.73-.32-1.06-.49.16-.24.81-.24 1.22 0 .41-.32.65-.32 1.14 0 .49.24.57.24.89 0 .18-.14.32-.32.32s-.32-.15-.32-.32c0-.33.16-.33.16-.73 0-.41-.41-.49-.16-.89-.49.41-.25.73-.25.97-.02.26-.43.34-.43.99zM6.03 28.02v15.6h3.25v-15.6H6.03zm11.05 0v15.6h3.25v-15.6h-3.25zm-7.15 2.61v1.3h6.5v-1.3h-6.5zm0 9.09v1.3h6.5v-1.3h-6.5zm0-11.7h6.5l-3.25 1.95-3.25-1.95zm0 13.66h6.5l-3.25 1.95-3.25-1.95z"
  }), _react["default"].createElement("circle", {
    fill: "#F9CF02",
    cx: 13.18,
    cy: 35.83,
    r: 3.44
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M13.18 39.45c-2 0-3.63-1.63-3.63-3.63s1.63-3.63 3.63-3.63 3.63 1.63 3.63 3.63-1.63 3.63-3.63 3.63zm0-6.89a3.26 3.26 0 1 0 3.26 3.26c0-1.79-1.46-3.26-3.26-3.26z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M13.18 39.45a1.91 1.91 0 1 1 0-3.82 1.54 1.54 0 0 0 0-3.08v-.35a1.906 1.906 0 0 1 0 3.81 1.54 1.54 0 0 0 0 3.08v.36z"
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 13.18,
    cy: 34.1,
    r: 0.65
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 13.18,
    cy: 37.55,
    r: 0.65
  }), _react["default"].createElement("linearGradient", {
    id: "mongolia_svg__a",
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
    fill: "url(#mongolia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMongolia;
exports["default"] = _default;