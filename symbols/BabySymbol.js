"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBabySymbol = function SvgBabySymbol(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "baby-symbol_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
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
    fill: "url(#baby-symbol_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M46.29 33.06c-8.403-8.504-.084.017-8.403-8.504-.362-.37-1.176-.843-1.89-.843h-7.994c-.714 0-1.528.473-1.89.843-8.318 8.521 0 0-8.403 8.504-1.666 1.686 1.042 4.494 2.734 2.835l5.264-5.163-.034 4.455h12.65l-.034-4.455 5.264 5.163c1.694 1.659 4.401-1.149 2.736-2.835zM25.686 37.661l4.747 4.747-3.464 3.375 3.69 3.825c1.873 1.942-1.195 4.672-3.06 2.722l-5.916-6.187c-1.28-1.338-.893-3.64 0-4.522l4.003-3.96zM38.314 37.661l-4.747 4.747 3.464 3.375-3.69 3.825c-1.873 1.942 1.195 4.672 3.06 2.722l5.917-6.187c1.28-1.338.893-3.64 0-4.522l-4.004-3.96z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 16.891,
    r: 5.891
  }));
};

var _default = SvgBabySymbol;
exports["default"] = _default;