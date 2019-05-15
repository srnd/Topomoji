"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWaterCloset = function SvgWaterCloset(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "water-closet_svg__a",
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
    fill: "url(#water-closet_svg__a)",
    d: "M62 54c0 4.4-3.6 8-7.999 8H10c-4.399 0-8-3.6-8-8V10c0-4.4 3.601-8 8-8h44.001C58.4 2 62 5.6 62 10v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M34.431 22.189l-5.638 19.825c-.113.425-.401.607-.804.607h-3.354c-.401 0-.689-.183-.804-.607l-2.589-9.104-2.601 9.104c-.114.425-.402.607-.805.607h-3.354c-.401 0-.689-.183-.803-.607L8.041 22.189c-.144-.516.092-.812.607-.812h2.868c.425 0 .69.228.781.629l4.09 15.295 3.027-10.817-1.222-4.296c-.145-.516.092-.812.607-.812h2.412c.425 0 .69.228.781.629l4.09 15.295 4.09-15.295c.091-.402.356-.629.781-.629h2.868c.519.002.754.298.61.813zM34.792 32c0-6.207 4.636-11.032 11.069-11.032 4.743 0 8.794 2.921 10.099 7.186.129.494-.129.812-.621.812h-2.952c-.402 0-.646-.198-.819-.569-.948-2.064-3.148-3.361-5.706-3.361-4.165 0-6.896 2.883-6.896 6.965 0 4.081 2.731 6.965 6.896 6.965 2.558 0 4.758-1.297 5.706-3.361.174-.371.417-.568.819-.568h2.952c.492 0 .758.296.629.75-1.26 4.272-5.334 7.247-10.106 7.247-6.434-.002-11.07-4.828-11.07-11.034z"
  }));
};

var _default = SvgWaterCloset;
exports["default"] = _default;