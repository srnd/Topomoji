"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInputLatinLetters = function SvgInputLatinLetters(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "input-latin-letters_svg__a",
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
    fill: "url(#input-latin-letters_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M16.064 27.442c2.958 0 5.448 1.761 5.448 5.248v7.864c0 .407-.228.636-.636.636h-2.102c-.408 0-.636-.229-.636-.636v-.524c-.77.939-1.93 1.521-3.627 1.521-2.383 0-4.511-1.399-4.511-4.211 0-2.811 2.128-4.209 4.511-4.209 1.697 0 2.857.508 3.627 1.185v-1.425c0-1.587-.803-2.25-2.075-2.25-1.011 0-1.753.421-1.981 1.144-.141.361-.281.569-.663.569h-2.142c-.408 0-.663-.228-.636-.663.337-2.737 2.679-4.249 5.423-4.249zm2.075 9.899c0-1.031-.937-1.667-2.456-1.667s-2.229.703-2.229 1.667.709 1.666 2.229 1.666 2.456-.702 2.456-1.666zM38.648 34.496c0 3.982-2.951 7.055-6.525 7.055-1.955 0-3.389-.731-4.344-1.942v.944c0 .408-.227.637-.635.637h-2.183c-.408 0-.635-.229-.635-.637V23.085c0-.408.227-.636.635-.636h2.183c.408 0 .635.228.635.636v6.298c.955-1.21 2.389-1.941 4.344-1.941 3.574 0 6.525 3.072 6.525 7.054zm-3.453 0c0-2.248-1.58-3.775-3.708-3.775s-3.708 1.527-3.708 3.775c0 2.249 1.58 3.774 3.708 3.774s3.708-1.525 3.708-3.774zM53.951 37.02c-.855 2.684-3.433 4.531-6.491 4.531-4.063 0-7.081-3.072-7.081-7.055 0-3.982 3.019-7.054 7.081-7.054 3.059 0 5.628 1.848 6.491 4.531.161.436-.094.717-.527.717h-2.403c-.335 0-.569-.154-.763-.441-.563-.885-1.594-1.406-2.798-1.406-2.048 0-3.628 1.525-3.628 3.654s1.58 3.654 3.628 3.654c1.212 0 2.242-.528 2.798-1.385.193-.309.408-.462.763-.462h2.403c.433 0 .688.28.527.716z"
  }));
};

var _default = SvgInputLatinLetters;
exports["default"] = _default;