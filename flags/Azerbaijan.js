"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAzerbaijan = function SvgAzerbaijan(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M3.71 22a30.086 30.086 0 0 0 0 20h56.57A29.84 29.84 0 0 0 62 32c0-3.51-.61-6.87-1.71-10H3.71z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M31.61 40.19c-4.51 0-8.17-3.67-8.17-8.19s3.66-8.19 8.17-8.19c1.08 0 2.1.21 3.04.59a9.467 9.467 0 0 0-5.76-1.96c-5.26 0-9.53 4.28-9.53 9.56s4.27 9.56 9.53 9.56c2.17 0 4.16-.73 5.76-1.96-.94.38-1.97.59-3.04.59zM40.42 33.43l-2.22 1.42 1.38-2.25-2.58-.56 2.57-.62-1.42-2.22 2.25 1.38.56-2.58.62 2.57 2.22-1.42-1.38 2.25 2.58.56-2.57.62 1.42 2.22-2.25-1.38-.56 2.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "azerbaijan_svg__a",
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
    fill: "url(#azerbaijan_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAzerbaijan;
exports["default"] = _default;