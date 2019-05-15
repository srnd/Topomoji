"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseMonthlyAmountButton = function SvgJapaneseMonthlyAmountButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-monthly-amount-button_svg__a",
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
    fill: "url(#japanese-monthly-amount-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M47 42.516c0 2.598-.625 3.824-2.318 4.547-1.767.758-4.344.828-8.135.828-.258-1.262-1.143-3.318-1.842-4.51 2.576.144 5.67.109 6.479.109.883 0 1.18-.289 1.18-1.047v-5.231H26.607c-.957 4.04-2.797 7.974-6.22 10.788-.662-.902-2.43-2.49-3.387-3.104 5.559-4.654 6.074-11.545 6.074-17.027V16H47v26.516zm-4.637-9.453v-4.4H27.602a63.777 63.777 0 0 1-.258 4.4h15.019zM27.602 20.184v4.402h14.762v-4.402H27.602z"
  }));
};

var _default = SvgJapaneseMonthlyAmountButton;
exports["default"] = _default;