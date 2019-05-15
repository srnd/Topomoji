"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRadioButton = function SvgRadioButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "radio-button_svg__a",
    cx: 32,
    cy: 32,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.683,
    stopColor: "#a2aaad"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("circle", {
    fill: "url(#radio-button_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("radialGradient", {
    id: "radio-button_svg__b",
    cx: 32,
    cy: 33.5,
    r: 28.751,
    fx: 34.184,
    fy: 36.553,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.094,
    stopColor: "#a2aaad"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#radio-button_svg__b)",
    d: "M61 32c0 16.568-12.432 30-29 30C15.432 62 3 48.568 3 32 3 18.098 15.433 5 32 5c16.568 0 29 13.098 29 27z"
  }), _react["default"].createElement("radialGradient", {
    id: "radio-button_svg__c",
    cx: 32,
    cy: 33,
    r: 15,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.745,
    stopColor: "#a2aaad"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("circle", {
    fill: "url(#radio-button_svg__c)",
    cx: 32,
    cy: 33,
    r: 15
  }), _react["default"].createElement("linearGradient", {
    id: "radio-button_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 24.498,
    y1: 18.382,
    x2: 39.502,
    y2: 44.368
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e9e6ef"
  }), _react["default"].createElement("stop", {
    offset: 0.353,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.692,
    stopColor: "#c2cacd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("path", {
    fill: "url(#radio-button_svg__d)",
    d: "M47 31.375c0 8.283-6.714 15-14.998 15-8.29 0-15.002-6.717-15.002-15 0-8.285 6.712-15 15.002-15 8.284 0 14.998 6.715 14.998 15z"
  }));
};

var _default = SvgRadioButton;
exports["default"] = _default;