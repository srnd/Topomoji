"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWallisAmpFutuna = function SvgWallisAmpFutuna(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M38 2.6V32H2c0 16.57 13.43 30 30 30s30-13.43 30-30C62 17.48 51.69 5.38 38 2.6z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M38 2.6c-.33-.07-.67-.12-1-.18V31H25.33V2.75a29.88 29.88 0 0 0-11.67 5.51V31H2.03c-.02.33-.03.66-.03 1h36V2.6z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2.03 31h11.64V8.26C6.82 13.56 2.33 21.75 2.03 31z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M25.33 31H37V2.42C35.37 2.15 33.7 2 32 2c-2.29 0-4.52.27-6.67.75V31z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48 36l6-6H42zM50 38l6 6V32zM48 40l-6 6h12zM46 38l-6-6v12z"
  }), _react["default"].createElement("linearGradient", {
    id: "wallis-amp-futuna_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#wallis-amp-futuna_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgWallisAmpFutuna;
exports["default"] = _default;