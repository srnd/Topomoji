"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyLargeCircle = function SvgHeavyLargeCircle(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "heavy-large-circle_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 19.498,
    y1: 10.346,
    x2: 44.502,
    y2: 53.654
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-large-circle_svg__a)",
    d: "M32 7C18.193 7 7 18.193 7 32c0 13.808 11.193 25 25 25s25-11.192 25-25C57 18.193 45.807 7 32 7zm0 42c-9.389 0-17-7.611-17-17s7.611-17 17-17 17 7.611 17 17-7.611 17-17 17z"
  }));
};

var _default = SvgHeavyLargeCircle;
exports["default"] = _default;