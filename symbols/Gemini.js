"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGemini = function SvgGemini(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "gemini_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#gemini_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.447 18.115c12.915 3.592 24.588 3.496 37.11-.032 1.15-.326 1.542-1.361 1.422-2.244-.126-.914-.831-1.839-1.934-1.839a2.11 2.11 0 0 0-.571.081c-11.318 3.191-23.548 3.202-34.949.035a2.067 2.067 0 0 0-.564-.081c-1.108 0-1.815.929-1.939 1.846-.12.882.275 1.915 1.425 2.234zM50.553 45.885c-12.915-3.592-24.588-3.495-37.11.032-1.149.325-1.542 1.361-1.422 2.244.125.915.831 1.839 1.934 1.839.187 0 .379-.026.571-.081 11.318-3.191 23.548-3.202 34.949-.035.19.054.38.081.565.081 1.108 0 1.815-.929 1.939-1.846.119-.882-.276-1.915-1.426-2.234z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M24 19h4v26h-4zM36 19h4v26h-4z"
  }));
};

var _default = SvgGemini;
exports["default"] = _default;