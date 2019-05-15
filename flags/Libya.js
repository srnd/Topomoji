"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLibya = function SvgLibya(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M2 32c0 5.88 1.7 11.37 4.63 16h50.74A29.831 29.831 0 0 0 62 32c0-5.88-1.7-11.37-4.63-16H6.63A29.831 29.831 0 0 0 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M57.37 16C52.06 7.59 42.68 2 32 2 21.32 2 11.94 7.59 6.63 16h50.74z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M6.63 48C11.94 56.41 21.32 62 32 62c10.68 0 20.06-5.59 25.37-14H6.63z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M38.23 36.67l.01-3.57-3.57-1.1 3.57-1.1-.01-3.57 2.2 2.9L44 29.12 41.79 32 44 34.88l-3.57-1.11z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32.83 40c-4.37 0-7.91-3.58-7.91-8s3.54-8 7.91-8c1.67 0 3.22.53 4.5 1.42A9.809 9.809 0 0 0 29.88 22C24.43 22 20 26.48 20 32s4.42 10 9.89 10c2.97 0 5.63-1.32 7.45-3.42A7.87 7.87 0 0 1 32.83 40z"
  }), _react["default"].createElement("linearGradient", {
    id: "libya_svg__a",
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
    fill: "url(#libya_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgLibya;
exports["default"] = _default;