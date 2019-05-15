"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGuam = function SvgGuam(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2 32c0 9.81 4.71 18.53 12 24h36c7.29-5.47 12-14.19 12-24S57.29 13.47 50 8H14C6.71 13.47 2 22.19 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M14 8h36c-5.02-3.77-11.25-6-18-6S19.01 4.23 14 8zM32 62c6.75 0 12.99-2.23 18-6H14c5.01 3.77 11.25 6 18 6zM43.55 32C43.55 42.21 32 50.47 32 50.47S20.45 42.21 20.45 32C20.45 21.79 32 13.52 32 13.52S43.55 21.79 43.55 32z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M42 32c0 8.84-10 16-10 16s-10-7.16-10-16 10-16 10-16 10 7.16 10 16z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M42 32c0 8.84-10 16-10 16s-10-7.16-10-16 10-16 10-16 10 7.16 10 16z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M26.63 39.4C28.96 42.78 32 45 32 45s8-5.82 8-13h-.01a33.12 33.12 0 0 1-13.36 7.4z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M24 32c0 2.75 1.18 5.3 2.63 7.4 5.05-1.42 9.61-3.99 13.37-7.4H24z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M28 30v4h4z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M34.95 39c-3.79-6.75-3.29-13.71-3.26-14l.83.08c-.01.07-.49 6.94 3.13 13.41l-.7.51z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 22.22L34.5 20l-.83 3.11L37 24l-3.33.89.83 3.11-2.5-2.22L29.5 28l.84-3.11L27 24l3.34-.89L29.5 20z"
  }), _react["default"].createElement("linearGradient", {
    id: "guam_svg__a",
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
    fill: "url(#guam_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGuam;
exports["default"] = _default;