"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWrench = function SvgWrench(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "wrench_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 30.761,
    y1: 44.294,
    x2: 43.444,
    y2: 31.61,
    gradientTransform: "translate(.499 -.395)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#565e61"
  }), _react["default"].createElement("stop", {
    offset: 0.381,
    stopColor: "#858d91"
  }), _react["default"].createElement("stop", {
    offset: 0.793,
    stopColor: "#b2babf"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c4ccd1"
  })), _react["default"].createElement("path", {
    fill: "url(#wrench_svg__a)",
    d: "M59.509 46.782c-1.438-1.408-3.273-2.119-5.138-2.394-1.049-.154-3.823-.885-5.725-2.674-11.269-10.608-12.78-12.205-23.456-22.65-1.646-1.609-2.928-8.328-2.928-8.328L9.804 22.444s7.475 1.418 8.979 2.893c3.753 3.665 12.372 11.41 23.454 22.646 1.727 1.751 2.59 4.401 2.79 5.561.313 1.816 1.01 3.613 2.447 5.018 3.319 3.251 8.708 3.254 12.033 0a8.207 8.207 0 0 0 .002-11.78zm-.293 8.044c-.182.457-1.029.575-1.326.971-.297.398-.147 1.227-.546 1.535-.384.313-1.173-.002-1.645.198-.452.202-.739.987-1.253 1.069-.511.078-1.037-.586-1.531-.639-.509-.053-1.159.486-1.627.313-.477-.182-.592-1.012-1.002-1.302-.404-.286-1.248-.14-1.563-.527-.318-.378.003-1.153-.205-1.611-.199-.444-1.007-.727-1.088-1.226-.079-.5.599-1.017.646-1.497.058-.501-.495-1.134-.31-1.593.18-.462 1.028-.581 1.325-.976.297-.401.148-1.225.539-1.536.389-.308 1.182.002 1.648-.199.449-.199.739-.984 1.253-1.064.511-.08 1.036.583 1.528.631.51.056 1.163-.48 1.63-.305.479.18.592 1.006.999 1.301.409.285 1.25.141 1.565.525.319.381-.002 1.154.206 1.612.199.438 1.005.728 1.085 1.228.082.501-.594 1.016-.646 1.494-.051.501.497 1.136.318 1.598z"
  }), _react["default"].createElement("linearGradient", {
    id: "wrench_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -145.115,
    y1: 348.915,
    x2: -122.782,
    y2: 351.56,
    gradientTransform: "rotate(45.001 348.078 355.457)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#565e61"
  }), _react["default"].createElement("stop", {
    offset: 0.062,
    stopColor: "#5f676a"
  }), _react["default"].createElement("stop", {
    offset: 0.504,
    stopColor: "#9aa3a7"
  }), _react["default"].createElement("stop", {
    offset: 0.829,
    stopColor: "#bfc8cd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cdd6db"
  })), _react["default"].createElement("path", {
    fill: "url(#wrench_svg__b)",
    d: "M22.388 11.822C22.57 6.645 10.65 1.091 8.349 3.638c0 0 5.311 4.635 6.974 6.469 1.728 1.901-3.937 7.875-5.864 6.17-1.43-1.267-6.676-6.248-6.676-6.248-2.997 2.186 3.319 11.889 7.021 12.415 7.569 1.08 12.44-6.497 12.584-10.622z"
  }), _react["default"].createElement("linearGradient", {
    id: "wrench_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -104.147,
    y1: 157.56,
    x2: -104.147,
    y2: 151.215,
    gradientTransform: "rotate(45.001 110.59 260.702)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c4ccd1"
  }), _react["default"].createElement("stop", {
    offset: 0.153,
    stopColor: "#bdc5ca"
  }), _react["default"].createElement("stop", {
    offset: 0.384,
    stopColor: "#a8b0b5"
  }), _react["default"].createElement("stop", {
    offset: 0.664,
    stopColor: "#878f93"
  }), _react["default"].createElement("stop", {
    offset: 0.979,
    stopColor: "#596164"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#565e61"
  })), _react["default"].createElement("path", {
    fill: "url(#wrench_svg__c)",
    d: "M38.696 42.425L24.88 29.128c-3.147-3.081 1.119-7.259 4.27-4.176l13.818 13.291c3.152 3.086-1.119 7.264-4.272 4.182z"
  }));
};

var _default = SvgWrench;
exports["default"] = _default;