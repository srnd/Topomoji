"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap8 = function SvgKeycap8(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap-8_svg__a",
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
    fill: "url(#keycap-8_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.399 0-8-3.6-8-8V10c0-4.399 3.601-8 8-8h44c4.4 0 8 3.601 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M38.789 31.368c2.73 1.627 4.27 4.305 4.27 7.444C43.059 44.49 38.844 48 32 48c-6.845 0-11.06-3.51-11.06-9.188 0-3.14 1.54-5.817 4.271-7.444-1.969-1.383-3.225-3.512-3.225-6.366C21.987 19.049 26.597 16 32 16c5.402 0 10.013 3.049 10.013 9.002.001 2.854-1.255 4.983-3.224 6.366zm-1.783 6.685c0-2.74-2.113-4.247-5.006-4.247-2.894 0-5.007 1.507-5.007 4.247S29.106 42.3 32 42.3c2.893 0 5.006-1.507 5.006-4.247zm-8.968-12.721c0 2.223 1.684 3.632 3.962 3.632 2.278 0 3.961-1.409 3.961-3.632 0-2.289-1.684-3.631-3.961-3.631-2.279 0-3.962 1.342-3.962 3.631z"
  }));
};

var _default = SvgKeycap8;
exports["default"] = _default;