"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgExclamationMark = function SvgExclamationMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "exclamation-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 47.109,
    y1: 52.707,
    x2: 24.444,
    y2: 52.707
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c90100"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff3b3b"
  })), _react["default"].createElement("path", {
    fill: "url(#exclamation-mark_svg__a)",
    d: "M35.527 47.414h-7.056c-1.133 0-1.764.631-1.764 1.764v7.059c0 1.132.631 1.764 1.764 1.764h7.056c1.133 0 1.764-.632 1.764-1.764v-7.059c0-1.133-.631-1.764-1.764-1.764z"
  }), _react["default"].createElement("linearGradient", {
    id: "exclamation-mark_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 47.112,
    y1: 23.271,
    x2: 24.443,
    y2: 23.271
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c90100"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff3b3b"
  })), _react["default"].createElement("path", {
    fill: "url(#exclamation-mark_svg__b)",
    d: "M35.992 6h-7.985c-1.133 0-1.765.63-1.765 1.764v13.093l1.765 18.145c.11 1.059.78 1.541 1.783 1.541h4.418c1.002 0 1.672-.482 1.783-1.541l1.766-18.145V7.764C37.758 6.63 37.125 6 35.992 6z"
  }));
};

var _default = SvgExclamationMark;
exports["default"] = _default;