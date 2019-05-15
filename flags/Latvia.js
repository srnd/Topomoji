"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLatvia = function SvgLatvia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M61.17 39V25C58.02 11.81 46.16 2 32 2 17.84 2 5.98 11.81 2.83 25v14C5.98 52.19 17.84 62 32 62c14.16 0 26.02-9.81 29.17-23z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M61.17 39V25C58.02 11.81 46.16 2 32 2 17.84 2 5.98 11.81 2.83 25v14C5.98 52.19 17.84 62 32 62c14.16 0 26.02-9.81 29.17-23z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M2 32c0 2.41.29 4.75.83 7h58.34a29.94 29.94 0 0 0 0-14H2.83A29.94 29.94 0 0 0 2 32z"
  }), _react["default"].createElement("linearGradient", {
    id: "latvia_svg__a",
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
    fill: "url(#latvia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgLatvia;
exports["default"] = _default;