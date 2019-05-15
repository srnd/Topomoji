"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseFreeOfChargeButton = function SvgJapaneseFreeOfChargeButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-free-of-charge-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-free-of-charge-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M14.461 48.229c1.687-1.617 3.41-4.582 4.293-7.393l4.41 1.078c-.844 2.926-2.492 6.084-4.371 8.086l-4.332-1.771zM29.871 41.684c.461 2.348.883 5.391.922 7.199l-4.449.654c0-1.846-.307-5.004-.729-7.354l4.256-.499zM37.502 41.529c.92 2.273 1.879 5.275 2.225 7.162l-4.563.885c-.232-1.85-1.111-4.967-1.955-7.316l4.293-.731zM49.271 31.055v-4.08h-4.984v-4.928h3.605v-4.043H24.889a20.568 20.568 0 0 0 1.494-2.695L21.938 14c-1.69 3.58-4.717 7.084-7.938 9.203 1.035.731 2.875 2.193 3.719 3.002.768-.578 1.496-1.271 2.262-2.002v2.772h-5.137v4.08h5.137v4.893h-4.56v4.08h33.314v-4.08h-4.447v-4.893h4.983zm-22.505 4.892h-2.758v-4.893h2.758v4.893zm0-8.972h-2.758v-4.928h2.758v4.928zm6.632 8.972H30.56v-4.893h2.838v4.893zm0-8.972H30.56v-4.928h2.838v4.928zm6.711 8.972h-2.916v-4.893h2.916v4.893zm0-8.972h-2.916v-4.928h2.916v4.928zM45.17 40.684c1.725 2.348 3.873 5.58 4.83 7.699l-4.678 1.578c-.805-2.041-2.836-5.428-4.523-7.893l4.371-1.384z"
  }));
};

var _default = SvgJapaneseFreeOfChargeButton;
exports["default"] = _default;