"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseNotFreeOfChargeButton = function SvgJapaneseNotFreeOfChargeButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-not-free-of-charge-button_svg__a",
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
    fill: "url(#japanese-not-free-of-charge-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M28.996 22.971a31.595 31.595 0 0 1-1.57 3.041h18.177v19.021c0 2.271-.432 3.504-2.041 4.197-1.532.733-3.769.77-6.949.77-.197-1.27-.824-3.195-1.414-4.428 2.002.117 4.28.117 4.947.117.667-.039.903-.232.903-.771v-2.309H26.878v7.353h-4.634v-16.75c-1.57 1.695-3.259 3.234-5.183 4.504-.667-1-2.158-2.656-3.061-3.504 4.162-2.734 7.42-6.775 9.774-11.242h-8.597v-4.313h10.56a37.507 37.507 0 0 0 1.533-4.658l4.827 1.078c-.392 1.193-.785 2.387-1.255 3.58H50v4.313H28.996zm12.054 7.045H26.878v2.467H41.05v-2.467zm0 8.781v-2.504H26.878v2.504H41.05z"
  }));
};

var _default = SvgJapaneseNotFreeOfChargeButton;
exports["default"] = _default;