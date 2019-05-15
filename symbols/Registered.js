"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRegistered = function SvgRegistered(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "registered_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 14.056,
    y1: 9.057,
    x2: 49.395,
    y2: 44.395
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.16,
    stopColor: "#434751"
  }), _react["default"].createElement("stop", {
    offset: 0.38,
    stopColor: "#383844"
  }), _react["default"].createElement("stop", {
    offset: 0.634,
    stopColor: "#322f3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#registered_svg__a)",
    d: "M32 2C18.215 2 7 13.217 7 27c0 13.785 11.215 25 25 25s25-11.215 25-25C57 13.217 45.785 2 32 2zm0 45.002c-11.029 0-20.002-8.973-20.002-20.002 0-11.027 8.973-19.998 20.002-19.998 11.027 0 19.998 8.971 19.998 19.998 0 11.029-8.971 20.002-19.998 20.002z"
  }), _react["default"].createElement("linearGradient", {
    id: "registered_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 2.171,
    y1: -0.772,
    x2: 57.191,
    y2: 54.248
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.16,
    stopColor: "#434751"
  }), _react["default"].createElement("stop", {
    offset: 0.38,
    stopColor: "#383844"
  }), _react["default"].createElement("stop", {
    offset: 0.634,
    stopColor: "#322f3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#registered_svg__b)",
    d: "M43.241 40h-3.938c-.453 0-.807-.139-1.095-.52l-6.926-8.488h-3.177v8.125c0 .566-.316.883-.882.883H23.88c-.566 0-.88-.316-.88-.883V14.882c0-.566.314-.882.881-.882H32.842a8.62 8.62 0 0 1 8.635 8.636c0 3.218-1.976 6.112-4.854 7.497l7.138 8.771c.465.567.222 1.096-.52 1.096zM28.106 26.479h4.736c1.939 0 3.527-1.69 3.527-3.844 0-2.164-1.588-3.844-3.527-3.844h-4.736v7.688z"
  }));
};

var _default = SvgRegistered;
exports["default"] = _default;