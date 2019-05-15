"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCircledM = function SvgCircledM(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "circled-m_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#circled-m_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.573 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M46.68 18.018v27.965c0 .653-.365 1.018-1.018 1.018h-3.859c-.652 0-1.018-.364-1.018-1.018V26.852l-6.311 14.576c-.215.536-.609.771-1.178.771h-2.594c-.566 0-.963-.235-1.178-.771l-6.311-14.576v19.131c0 .653-.365 1.018-1.018 1.018h-3.858c-.654 0-1.018-.364-1.018-1.018V18.018c0-.654.364-1.018 1.018-1.018h4.866c.567 0 .963.235 1.178.771L32 35.342l7.618-17.571c.214-.536.611-.771 1.179-.771h4.866c.651 0 1.017.363 1.017 1.018z"
  }));
};

var _default = SvgCircledM;
exports["default"] = _default;