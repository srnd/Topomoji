"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTuvalu = function SvgTuvalu(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M12 12h21v21H12z"
  }), _react["default"].createElement("path", {
    fill: "#399CB0",
    d: "M32 2v30H2c0 16.57 13.43 30 30 30s30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2c-4.69 0-9.13 1.09-13.09 3.01V11H11v7.91H5.01C3.09 22.87 2 27.31 2 32h12V17l12 15h6v-7.5L23.6 14H32V2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M15.43 14L30 32h2v-4.94L21.43 14z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 5H18.92A30.128 30.128 0 0 0 5 18.91V32h6V11h21V5z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M28.92 50.15l-.67-2.05-.66 2.05h-2.15l1.74 1.27-.67 2.04 1.74-1.26L30 53.46l-.67-2.04 1.74-1.27zM37.77 48.56l.67-2.05-1.75 1.27-1.74-1.27.67 2.05-1.74 1.26h2.15l.66 2.05.67-2.05h2.15zM38.44 39.3l-1.75 1.26-1.74-1.26.67 2.04-1.74 1.27h2.15l.66 2.05.67-2.05h2.15l-1.74-1.27zM45.22 46.73l.67-2.04-1.74 1.26-1.74-1.26.66 2.04L41.33 48h2.15l.67 2.05.66-2.05h2.16zM43.48 32.3l.67 2.05.66-2.05h2.16l-1.75-1.26.67-2.05-1.74 1.26-1.74-1.26.66 2.05-1.74 1.26zM49.69 41.22l-.67-2.04-.66 2.04h-2.15l1.74 1.27-.67 2.04 1.74-1.26 1.74 1.26-.66-2.04 1.74-1.27zM49.75 30.16l.66 2.05.67-2.05h2.15l-1.74-1.27.66-2.04-1.74 1.26-1.74-1.26.66 2.04-1.74 1.27zM55.98 37.17l-.66-2.05-.67 2.05H52.5l1.74 1.27-.66 2.04 1.74-1.26 1.74 1.26-.67-2.05 1.74-1.26zM54.24 24.59l-.66 2.05 1.74-1.27 1.74 1.27-.67-2.05 1.74-1.27h-2.15l-.66-2.04-.67 2.04H52.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "tuvalu_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 31.997,
    y1: 62,
    x2: 31.997,
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
    fill: "url(#tuvalu_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgTuvalu;
exports["default"] = _default;