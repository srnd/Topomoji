"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBell = function SvgBell(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bell_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 28.937,
    y1: 2.861,
    x2: 35.063,
    y2: 13.472
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 0.368,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.594,
    stopColor: "#ea8800"
  }), _react["default"].createElement("stop", {
    offset: 0.894,
    stopColor: "#f27f00"
  })), _react["default"].createElement("path", {
    fill: "url(#bell_svg__a)",
    d: "M32 2c-3.315 0-6 2.761-6 6.166 0 3.405 2.685 6.167 6 6.167 3.313 0 6-2.762 6-6.167S35.313 2 32 2zm-.021 9.64c-1.878 0-3.399-1.564-3.399-3.493 0-1.931 1.521-3.495 3.399-3.495 1.878 0 3.399 1.564 3.399 3.495.001 1.928-1.521 3.493-3.399 3.493z"
  }), _react["default"].createElement("linearGradient", {
    id: "bell_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 0.548,
    y1: 31.31,
    x2: 59.216,
    y2: 32.472
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.15,
    stopColor: "#f9b700"
  }), _react["default"].createElement("stop", {
    offset: 0.158,
    stopColor: "#f9b803"
  }), _react["default"].createElement("stop", {
    offset: 0.304,
    stopColor: "#fcd037"
  }), _react["default"].createElement("stop", {
    offset: 0.414,
    stopColor: "#fede57"
  }), _react["default"].createElement("stop", {
    offset: 0.475,
    stopColor: "#ffe463"
  }), _react["default"].createElement("stop", {
    offset: 0.523,
    stopColor: "#fdd542"
  }), _react["default"].createElement("stop", {
    offset: 0.578,
    stopColor: "#fbc825"
  }), _react["default"].createElement("stop", {
    offset: 0.631,
    stopColor: "#fabf11"
  }), _react["default"].createElement("stop", {
    offset: 0.684,
    stopColor: "#f9b904"
  }), _react["default"].createElement("stop", {
    offset: 0.735,
    stopColor: "#f9b700"
  }), _react["default"].createElement("stop", {
    offset: 0.843,
    stopColor: "#f9b700"
  }), _react["default"].createElement("stop", {
    offset: 0.997,
    stopColor: "#f6a701"
  })), _react["default"].createElement("path", {
    fill: "url(#bell_svg__b)",
    d: "M14.791 25.348c0-22.908 34.418-22.908 34.418 0C49.209 36.825 61 55.008 61 55.008l-58.693.107s12.484-18.29 12.484-29.767z"
  }), _react["default"].createElement("radialGradient", {
    id: "bell_svg__c",
    cx: 32,
    cy: 55.856,
    r: 21.654,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.034,
    stopColor: "#f9d902"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 0.471,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.722,
    stopColor: "#ea8800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f27f00"
  })), _react["default"].createElement("path", {
    fill: "url(#bell_svg__c)",
    d: "M62 56.149c0 7.802-60 7.802-60 0 0-8.582 60-8.582 60 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "bell_svg__d",
    cx: 32,
    cy: 56.209,
    r: 19.433,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.744,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.924,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.991,
    stopColor: "#110b1e"
  })), _react["default"].createElement("path", {
    fill: "url(#bell_svg__d)",
    d: "M59.033 56.445c0 6.282-54.066 6.282-54.066 0 0-6.911 54.066-6.911 54.066 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "bell_svg__e",
    cx: 30.344,
    cy: 58.148,
    r: 14.134,
    gradientTransform: "matrix(1 0 0 .7297 0 15.717)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f9d402"
  }), _react["default"].createElement("stop", {
    offset: 0.176,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 0.252,
    stopColor: "#f9c302"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#f7b402"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.676,
    stopColor: "#ea8800"
  }), _react["default"].createElement("stop", {
    offset: 0.998,
    stopColor: "#f27f00"
  })), _react["default"].createElement("path", {
    fill: "url(#bell_svg__e)",
    d: "M21.901 51.653c.822 13.443 19.377 13.448 20.195 0-6.306-.54-13.888-.54-20.195 0z"
  }));
};

var _default = SvgBell;
exports["default"] = _default;