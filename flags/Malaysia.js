"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMalaysia = function SvgMalaysia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M56 14H32v6h27.5c-.94-2.14-2.11-4.15-3.5-6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.4 38c.39-1.94.6-3.95.6-6H2c0 2.05.21 4.06.6 6h58.8z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2v6h18c-5.01-3.77-11.25-6-18-6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 14h24a30.453 30.453 0 0 0-6-6H32v6zM59.5 20H32v6h29.4c-.43-2.09-1.07-4.09-1.9-6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 26v6h30c0-2.05-.21-4.06-.6-6H32zM4.5 44h55c.83-1.9 1.48-3.91 1.9-6H2.6c.42 2.09 1.07 4.1 1.9 6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M8 50h48c1.39-1.85 2.56-3.86 3.5-6h-55c.94 2.14 2.11 4.15 3.5 6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M8 50c1.71 2.27 3.73 4.29 6 6h36c2.27-1.71 4.29-3.73 6-6H8z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M14 56c5.01 3.77 11.25 6 18 6s12.99-2.23 18-6H14z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C15.43 2 2 15.43 2 32h30V2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M19.88 25.6c-3.03 0-5.48-2.51-5.48-5.6s2.45-5.6 5.48-5.6c1.16 0 2.23.37 3.12 1-1.26-1.47-3.1-2.4-5.16-2.4-3.78 0-6.84 3.13-6.84 7s3.06 7 6.84 7c2.06 0 3.9-.93 5.16-2.39-.89.62-1.96.99-3.12.99zM26 18.82l.67-1.82-.17 1.93 1.37-1.33-.97 1.66 1.8-.59-1.58 1.07L29 20l-1.88.26 1.58 1.08-1.8-.6.97 1.67-1.37-1.34.17 1.93-.67-1.82-.67 1.82.17-1.93-1.37 1.34.97-1.67-1.8.6 1.57-1.08L23 20l1.87-.26-1.57-1.07 1.8.59-.97-1.66 1.37 1.33-.17-1.93z"
  }), _react["default"].createElement("linearGradient", {
    id: "malaysia_svg__a",
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
    fill: "url(#malaysia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMalaysia;
exports["default"] = _default;