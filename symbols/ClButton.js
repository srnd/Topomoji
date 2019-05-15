"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClButton = function SvgClButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cl-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
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
    fill: "url(#cl-button_svg__a)",
    d: "M62 54c0 4.399-3.601 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.399 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11 32c0-7.267 5.429-12.918 12.962-12.918 5.553 0 10.298 3.421 11.825 8.413.151.578-.15.951-.729.951h-3.455c-.471 0-.756-.23-.961-.667-1.11-2.417-3.686-3.936-6.681-3.936-4.877 0-8.076 3.376-8.076 8.156 0 4.779 3.199 8.156 8.076 8.156 2.995 0 5.57-1.52 6.681-3.936.205-.436.49-.667.961-.667h3.455c.578 0 .888.346.737.88-1.475 5.002-6.247 8.484-11.834 8.484C16.428 44.918 11 39.267 11 32zM53 40.591v3.003c0 .543-.303.844-.844.844H39.718c-.542 0-.844-.301-.844-.844V20.405c0-.542.302-.843.844-.843h3.198c.542 0 .843.302.843.843v19.342h8.396c.542 0 .845.302.845.844z"
  }));
};

var _default = SvgClButton;
exports["default"] = _default;