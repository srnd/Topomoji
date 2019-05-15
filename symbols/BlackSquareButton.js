"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBlackSquareButton = function SvgBlackSquareButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "black-square-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 11.51,
    y1: -3.49,
    x2: 52.49,
    y2: 67.49
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
    fill: "url(#black-square-button_svg__a)",
    d: "M2 2h60v60H2z"
  }), _react["default"].createElement("linearGradient", {
    id: "black-square-button_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 10,
    x2: 32,
    y2: 54
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.232,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.571,
    stopColor: "#c2cacd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("path", {
    fill: "url(#black-square-button_svg__b)",
    d: "M10 10h44v44H10z"
  }));
};

var _default = SvgBlackSquareButton;
exports["default"] = _default;