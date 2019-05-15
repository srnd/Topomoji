"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEuropeanUnion = function SvgEuropeanUnion(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#014D87",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 11.8l.72 2.21h2.32l-1.88 1.36.72 2.2L32 16.21l-1.87 1.36.71-2.2-1.87-1.36h2.32zM32 45.78l.72 2.2h2.32l-1.88 1.37.72 2.2L32 50.19l-1.88 1.36.72-2.2-1.87-1.37h2.31zM40.42 43.03l.72 2.21h2.32l-1.88 1.36.72 2.21-1.88-1.37-1.88 1.37.72-2.21-1.88-1.36h2.32zM46.22 37.23l.72 2.21h2.31l-1.87 1.36.72 2.21-1.88-1.37-1.88 1.37.72-2.21-1.88-1.36h2.32zM48.96 28.79l.72 2.2H52l-1.88 1.37.72 2.2-1.88-1.36-1.87 1.36.71-2.2-1.87-1.37h2.32zM46.22 20.34l.72 2.21h2.31l-1.87 1.36.72 2.21-1.88-1.36-1.88 1.36.72-2.21-1.88-1.36h2.32zM40.42 14.54l.72 2.21h2.32l-1.88 1.37.72 2.2-1.88-1.36-1.88 1.36.72-2.2-1.88-1.37h2.32zM23.58 43.03l-.72 2.21h-2.32l1.88 1.36-.72 2.21 1.88-1.37 1.88 1.37-.72-2.21 1.88-1.36H24.3zM17.78 37.23l-.72 2.21h-2.31l1.87 1.36-.72 2.21 1.88-1.37 1.88 1.37-.72-2.21 1.88-1.36H18.5zM15.04 28.79l-.72 2.2H12l1.88 1.37-.72 2.2 1.88-1.36 1.87 1.36-.71-2.2 1.87-1.37h-2.32zM17.78 20.34l-.72 2.21h-2.31l1.87 1.36-.72 2.21 1.88-1.36 1.88 1.36-.72-2.21 1.88-1.36H18.5zM23.58 14.54l-.72 2.21h-2.32l1.88 1.37-.72 2.2 1.88-1.36 1.88 1.36-.72-2.2 1.88-1.37H24.3z"
  }), _react["default"].createElement("linearGradient", {
    id: "european-union_svg__a",
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
    fill: "url(#european-union_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgEuropeanUnion;
exports["default"] = _default;