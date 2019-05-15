"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLiberia = function SvgLiberia(props) {
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
    d: "M32 26v6h30c0-2.05-.21-4.06-.6-6H32zM4.5 44h55c.83-1.91 1.48-3.91 1.9-6H2.6c.43 2.09 1.07 4.09 1.9 6z"
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
    fill: "#F5F5F5",
    d: "M20 22.24L25.56 26l-2.1-6.11L29 16.11l-6.86-.02L20 10l-2.14 6.09-6.86.02 5.54 3.78-2.1 6.11z"
  }), _react["default"].createElement("linearGradient", {
    id: "liberia_svg__a",
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
    fill: "url(#liberia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgLiberia;
exports["default"] = _default;