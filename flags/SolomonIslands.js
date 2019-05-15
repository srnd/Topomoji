"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSolomonIslands = function SvgSolomonIslands(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M60.45 22.5l-8.2-2.2-40.51 23.4-2.2 8.2c3.77 4.26 8.78 7.5 14.69 9.09 16 4.29 32.45-5.21 36.74-21.21a29.808 29.808 0 0 0-.52-17.28z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M39.76 3.02c-16-4.29-32.45 5.21-36.74 21.21a29.86 29.86 0 0 0 .53 17.27l3.68.99 4.51 1.21 40.52-23.4 1.21-4.51.99-3.68a29.873 29.873 0 0 0-14.7-9.09z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M3.55 41.5c.64 1.91 1.46 3.75 2.47 5.49l.01.02c1 1.74 2.18 3.37 3.52 4.88l50.9-29.39a30.128 30.128 0 0 0-6-10.39L3.55 41.5z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M19 20.53l2 1.34-.76-2.19 1.99-1.36-2.46-.01-.77-2.19-.77 2.19-2.46.01 1.99 1.36-.76 2.19zM13.61 14.77l2 1.35-.76-2.19 1.99-1.36-2.46-.01-.77-2.19-.77 2.19-2.47.01 2 1.36-.76 2.19zM24.39 14.77l2 1.35-.76-2.19 1.99-1.36-2.46-.01-.77-2.19-.77 2.19-2.46.01 1.99 1.36-.76 2.19zM13.61 26.28l2 1.34-.76-2.19 1.99-1.36-2.46-.01-.77-2.19-.77 2.19-2.47.01 2 1.36-.76 2.19zM24.39 26.28l2 1.34-.76-2.19 1.99-1.36-2.46-.01-.77-2.19-.77 2.19-2.46.01 1.99 1.36-.76 2.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "solomon-islands_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 61.999,
    x2: 32,
    y2: 1.999
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
    fill: "url(#solomon-islands_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSolomonIslands;
exports["default"] = _default;