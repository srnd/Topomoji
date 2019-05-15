"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSosButton = function SvgSosButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sos-button_svg__a",
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
    fill: "url(#sos-button_svg__a)",
    d: "M62 54c0 4.399-3.601 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.399 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M10.002 35.838c-.024-.393.198-.599.567-.599h2.178c.344 0 .532.188.591.556.206 1.152 1.171 1.744 2.806 1.744 1.696 0 2.492-.73 2.492-1.708 0-1.2-1.351-1.726-2.957-2.292-2.431-.857-5.399-1.816-5.399-5.407 0-3.234 2.679-4.905 5.491-4.905 2.787 0 5.4 1.527 5.677 4.845.024.392-.199.597-.567.597h-2.178c-.344 0-.532-.187-.591-.549-.199-1.117-1.038-1.659-2.341-1.659-1.371 0-2.172.7-2.172 1.67 0 1.243 1.165 1.792 2.722 2.366 2.45.88 5.635 1.767 5.635 5.333 0 3.24-2.673 4.942-5.811 4.942-3.132.001-5.866-1.556-6.143-4.934zM23.213 32c0-4.936 3.904-8.773 8.772-8.773 4.87 0 8.773 3.837 8.773 8.773s-3.903 8.773-8.773 8.773c-4.867 0-8.772-3.837-8.772-8.773zm14.228 0c0-3.246-2.39-5.539-5.456-5.539-3.064 0-5.454 2.292-5.454 5.539s2.389 5.539 5.454 5.539c3.067 0 5.456-2.293 5.456-5.539zM42.048 35.838c-.025-.393.198-.599.566-.599h2.178c.344 0 .532.188.592.556.205 1.152 1.17 1.744 2.806 1.744 1.696 0 2.492-.73 2.492-1.708 0-1.2-1.351-1.726-2.957-2.292-2.431-.857-5.399-1.816-5.399-5.407 0-3.234 2.679-4.905 5.49-4.905 2.787 0 5.4 1.527 5.678 4.845.023.392-.199.597-.566.597h-2.179c-.344 0-.532-.187-.591-.549-.2-1.117-1.039-1.659-2.342-1.659-1.37 0-2.172.7-2.172 1.67 0 1.243 1.164 1.792 2.722 2.366 2.45.88 5.635 1.767 5.635 5.333 0 3.24-2.673 4.942-5.811 4.942-3.132.001-5.865-1.556-6.142-4.934z"
  }));
};

var _default = SvgSosButton;
exports["default"] = _default;