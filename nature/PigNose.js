"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPigNose = function SvgPigNose(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pig-nose_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 57,
    x2: 32.001,
    y2: 7
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9667f"
  }), _react["default"].createElement("stop", {
    offset: 0.327,
    stopColor: "#eb7a93"
  }), _react["default"].createElement("stop", {
    offset: 0.705,
    stopColor: "#fa89a2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff8fa8"
  })), _react["default"].createElement("path", {
    fill: "url(#pig-nose_svg__a)",
    d: "M62 39.312c0 23.585-60 23.585-60 0C2 23.972 18.099 7 31.998 7 45.903 7 62 23.972 62 39.312z"
  }), _react["default"].createElement("radialGradient", {
    id: "pig-nose_svg__b",
    cx: -19.492,
    cy: 52.855,
    r: 13.795,
    gradientTransform: "matrix(.9134 .2442 -.3804 1.4674 79.605 -36.878)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#170615"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#240c1b"
  }), _react["default"].createElement("stop", {
    offset: 0.38,
    stopColor: "#512032"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#753143"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#8e3c50"
  }), _react["default"].createElement("stop", {
    offset: 0.713,
    stopColor: "#9e4457"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#a3465a"
  })), _react["default"].createElement("path", {
    fill: "url(#pig-nose_svg__b)",
    d: "M42.073 46.842c-13.842 0-2.801-27.015 5.163-23.086 10.745 5.308 8.672 23.086-5.163 23.086z"
  }), _react["default"].createElement("radialGradient", {
    id: "pig-nose_svg__c",
    cx: 1412.517,
    cy: 52.855,
    r: 13.795,
    gradientTransform: "matrix(-.9134 .2442 .3804 1.4674 1292.335 -386.55)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#170615"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#240c1b"
  }), _react["default"].createElement("stop", {
    offset: 0.38,
    stopColor: "#512032"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#753143"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#8e3c50"
  }), _react["default"].createElement("stop", {
    offset: 0.713,
    stopColor: "#9e4457"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#a3465a"
  })), _react["default"].createElement("path", {
    fill: "url(#pig-nose_svg__c)",
    d: "M21.93 46.842c13.838 0 2.794-27.015-5.167-23.086-10.745 5.308-8.668 23.086 5.167 23.086z"
  }));
};

var _default = SvgPigNose;
exports["default"] = _default;