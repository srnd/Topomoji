"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNepal = function SvgNepal(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M44.46 56.46L20 32h24L18.71 6.71h-2.83V6.7C7.54 12.03 2 21.37 2 32c0 16.57 13.43 30 30 30 4.45 0 8.66-.98 12.46-2.71v-2.83z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2c-4.45 0-8.66.98-12.46 2.71v4.85l21.01 21.01H19.54v3.17l23.55 23.55h5.02C56.46 51.97 62 42.63 62 32 62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M19.54 4.71c-1.27.58-2.49 1.25-3.66 1.99L39.17 30h-24l29.29 29.29c1.27-.58 2.49-1.25 3.66-1.99L24.83 34h24L19.54 4.71z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M19.55 21.8c.28-.54.45-1.15.45-1.8 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .65.17 1.26.45 1.8C10.5 21.04 9 20 9 20s1.5 6 7 6c5.62 0 7-6 7-6s-1.5 1.04-3.45 1.8zM16 39.56L17.61 38l.61 2.16 2.17-.55-.55 2.17 2.16.61L20.44 44 22 45.61l-2.16.61.55 2.17-2.17-.55-.61 2.16L16 48.44 14.39 50l-.61-2.16-2.17.55.55-2.17-2.16-.61L11.56 44 10 42.39l2.16-.61-.55-2.17 2.17.55.61-2.16z"
  }), _react["default"].createElement("linearGradient", {
    id: "nepal_svg__a",
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
    fill: "url(#nepal_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNepal;
exports["default"] = _default;