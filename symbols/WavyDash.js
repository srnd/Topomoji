"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWavyDash = function SvgWavyDash(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "wavy-dash_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 24.193,
    y1: 18.478,
    x2: 39.807,
    y2: 45.522
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#wavy-dash_svg__a)",
    d: "M3.75 39.05c4.1 0 6.2-2.9 7.8-5 1.5-2 2.1-2.7 3.5-2.7s2 .7 3.5 2.7c1.5 2.1 3.7 5 7.8 5s6.2-2.9 7.8-5c1.5-2 2.1-2.7 3.5-2.7s2 .7 3.5 2.7c1.5 2.1 3.7 5 7.8 5s6.2-2.9 7.8-5c1.5-2 2.1-2.7 3.5-2.7 2.5 0 2.5-6.4 0-6.4-4.1 0-6.2 2.9-7.8 5-1.5 2-2.1 2.7-3.5 2.7s-2-.7-3.5-2.7c-1.5-2.1-3.7-5-7.8-5s-6.2 2.9-7.8 5c-1.5 2-2.1 2.7-3.5 2.7s-2-.7-3.5-2.7c-1.5-2.1-3.7-5-7.8-5s-6.2 2.9-7.8 5c-1.5 2-2.1 2.7-3.5 2.7-2.5 0-2.5 6.4 0 6.4z"
  }));
};

var _default = SvgWavyDash;
exports["default"] = _default;