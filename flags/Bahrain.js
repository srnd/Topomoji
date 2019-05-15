"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBahrain = function SvgBahrain(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M26.77 61.54L36 56l-10-6 10-6-10-6 10-6-10-6 10-6-10-6 10-6-9.23-5.54C12.7 4.94 2 17.22 2 32c0 14.79 10.7 27.06 24.77 29.54z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2c-1.78 0-3.53.16-5.23.46L36 8l-10 6 10 6-10 6 10 6-10 6 10 6-10 6 10 6-9.23 5.54c1.7.3 3.45.46 5.23.46 16.57 0 30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "bahrain_svg__a",
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
    fill: "url(#bahrain_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBahrain;
exports["default"] = _default;