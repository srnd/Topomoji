"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNameBadge = function SvgNameBadge(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "name-badge_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 5,
    x2: 32,
    y2: 59
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
    fill: "url(#name-badge_svg__a)",
    d: "M49.699 5l-8.848 9.253L32 5l-8.85 9.253L14.3 5C6.845 10.436 2 19.213 2 29.121 2 45.621 15.432 59 32 59c16.568 0 30-13.379 30-29.879C62 19.213 57.156 10.436 49.699 5z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M16.001 24H48v18H16.001z"
  }));
};

var _default = SvgNameBadge;
exports["default"] = _default;