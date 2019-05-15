"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAntiguaAmpBarbuda = function SvgAntiguaAmpBarbuda(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M56 14H8c-3.77 5.01-6 11.25-6 18 0 16.57 13.43 30 30 30s30-13.43 30-30c0-6.75-2.23-12.99-6-18z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M20.5 39h23l7-14h-37z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M20.5 39h23l7-14h-37z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M50.5 25L56 14C50.53 6.71 41.81 2 32 2S13.47 6.71 8 14l5.5 11h37z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M20.5 39L32 62l11.5-23z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M36.18 22.24l5.07-6.39-6.45 5.01 2.23-7.85L33 20.1l-.94-8.1-1.01 8.09-3.98-7.12 2.17 7.86-6.4-5.06 5.01 6.43-7.86-2.23 7.1 4.03-8.11.94.45.06h25.13l-7.64-.96 7.13-3.96z"
  }), _react["default"].createElement("linearGradient", {
    id: "antigua-amp-barbuda_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
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
    fill: "url(#antigua-amp-barbuda_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAntiguaAmpBarbuda;
exports["default"] = _default;