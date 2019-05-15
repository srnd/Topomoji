"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJamaica = function SvgJamaica(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M53.13 10.7C41.43-.9 22.57-.9 10.87 10.7L32 26.95 53.13 10.7zM10.87 53.3c11.7 11.6 30.56 11.6 42.26 0L32 37.05 10.87 53.3z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M58.01 46.96c5.32-9.23 5.32-20.69 0-29.92L38.56 32l19.45 14.96zM5.99 17.04c-5.32 9.23-5.32 20.69 0 29.92L25.44 32 5.99 17.04z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M53.13 10.7L32 26.95 10.87 10.7a30.171 30.171 0 0 0-4.88 6.34L25.44 32 5.99 46.96c1.34 2.33 2.98 4.46 4.88 6.34L32 37.05 53.13 53.3c1.9-1.88 3.54-4.01 4.88-6.34L38.56 32l19.45-14.96a30.509 30.509 0 0 0-4.88-6.34z"
  }), _react["default"].createElement("linearGradient", {
    id: "jamaica_svg__a",
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
    fill: "url(#jamaica_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgJamaica;
exports["default"] = _default;