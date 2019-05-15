"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWhiteCircle = function SvgWhiteCircle(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "white-circle_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.997,
    y1: 6.014,
    x2: 47.003,
    y2: 57.986
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.302,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c2cacd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("path", {
    fill: "url(#white-circle_svg__a)",
    d: "M62 32c0 16.568-13.429 30-29.997 30C15.423 62 2 48.568 2 32 2 15.433 15.423 2 32.003 2 48.571 2 62 15.433 62 32z"
  }));
};

var _default = SvgWhiteCircle;
exports["default"] = _default;