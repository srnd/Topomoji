"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVenezuela = function SvgVenezuela(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M3.71 22a30.086 30.086 0 0 0 0 20h56.57C61.39 38.87 62 35.51 62 32s-.61-6.87-1.71-10H3.71z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M34.56 27.15l1.04 1.05-.2-1.46 1.35-.65-1.47-.26-.21-1.45-.71 1.29-1.48-.24 1.03 1.06-.7 1.3zM29.17 27.17l1.37.64-.75-1.3 1-1.07-1.46.26-.76-1.29-.16 1.46-1.47.27 1.37.64-.15 1.46zM24.17 29.03l1.52.12-1.2-.96.52-1.33-1.26.74-1.2-.96.41 1.42-1.26.75 1.52.14.42 1.41zM20.23 32.45l1.47-.4-1.49-.49-.02-1.43-.9 1.12-1.48-.48.93 1.18-.88 1.13 1.46-.39.94 1.19zM17.9 36.98l1.21-.86-1.57.04-.58-1.33-.4 1.35-1.56.05 1.32.79-.38 1.36 1.21-.86 1.33.79zM46.12 36.82l-.53 1.34 1.3-.81 1.24.84-.42-1.34 1.29-.81-1.56-.03-.44-1.35-.54 1.33-1.57-.02zM43.65 32.32l.02 1.43.9-1.2 1.47.37-.91-1.11.89-1.2-1.47.5-.92-1.11.01 1.43-1.46.51zM39.61 28.94l.57 1.33.37-1.42 1.52-.15-1.28-.74.37-1.42-1.17.96-1.29-.72.56 1.33-1.16.98z"
  }), _react["default"].createElement("linearGradient", {
    id: "venezuela_svg__a",
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
    fill: "url(#venezuela_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgVenezuela;
exports["default"] = _default;