"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWomansHat = function SvgWomansHat(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "womans-hat_svg__a",
    cx: 41.022,
    cy: 55.621,
    r: 32.796,
    gradientTransform: "matrix(1 0 0 .6587 0 8.023)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fcc223"
  }), _react["default"].createElement("stop", {
    offset: 0.275,
    stopColor: "#f9be20"
  }), _react["default"].createElement("stop", {
    offset: 0.555,
    stopColor: "#eeb218"
  }), _react["default"].createElement("stop", {
    offset: 0.838,
    stopColor: "#de9d0a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d18e00"
  })), _react["default"].createElement("path", {
    fill: "url(#womans-hat_svg__a)",
    d: "M56.39 36.084c9.367 1.943 8.754 18.029-15.445 23.438-25.823 5.771-35.355-2.707-38.24-7.385-5.725-9.278 24.477-22.113 53.685-16.053z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M2.504 52.462c11.499 1.656 14.373-6.129 19.25-8.813-6.94-3.095-6.171 4.649-16.168 5.696-1.989.208-3.082 3.117-3.082 3.117z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M9.038 55.716c-1.253 1.123 1.728 6.934 2.319 6.225 7.479-8.979 9.994-16.125 10.042-17.76-5.248-.863-2.664 2.861-12.361 11.535z"
  }), _react["default"].createElement("radialGradient", {
    id: "womans-hat_svg__b",
    cx: 79.603,
    cy: -22.878,
    r: 9.148,
    gradientTransform: "matrix(1.7679 -.3403 .3146 1.9246 -107.828 96.716)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fcc223"
  }), _react["default"].createElement("stop", {
    offset: 0.275,
    stopColor: "#f9be20"
  }), _react["default"].createElement("stop", {
    offset: 0.555,
    stopColor: "#eeb218"
  }), _react["default"].createElement("stop", {
    offset: 0.838,
    stopColor: "#de9d0a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d18e00"
  })), _react["default"].createElement("path", {
    fill: "url(#womans-hat_svg__b)",
    d: "M44.587 37.013c1.35 8.249-26.096 13.534-27.446 5.282-1.849-11.313.511-17.878 10.907-19.879 10.394-2.002 14.689 3.28 16.539 14.597z"
  }), _react["default"].createElement("radialGradient", {
    id: "womans-hat_svg__c",
    cx: 25.729,
    cy: 47.555,
    r: 13.151,
    gradientTransform: "matrix(1 0 0 .8194 0 1)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#019be0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0174a8"
  })), _react["default"].createElement("path", {
    fill: "url(#womans-hat_svg__c)",
    d: "M44.587 37.013a49.749 49.749 0 0 0-.35-1.898c-5.285 7.011-20.182 9.878-27.371 5.27.079.621.167 1.257.275 1.911 1.566 9.571 29.01 4.29 27.446-5.283z"
  }));
};

var _default = SvgWomansHat;
exports["default"] = _default;