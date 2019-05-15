"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgForkAndKnife = function SvgForkAndKnife(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "fork-and-knife_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 18,
    y1: 32.001,
    x2: 34,
    y2: 32.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d3d8db"
  }), _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#cfd5d8"
  }), _react["default"].createElement("stop", {
    offset: 0.702,
    stopColor: "#c4cdd1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#fork-and-knife_svg__a)",
    d: "M31 2c-.459 0 .883 12.482-1 12.482S29.718 2 28 2c-1.719 0 .039 12.482-2 12.482S25.719 2 24 2s-.118 12.483-2 12.483C20.116 14.483 21.46 2 21 2c-1.385 0-3 11.448-3 13.518 0 6.207 2.938 8.313 4 9.311 1.061.997 2 2.068 2 4.138 0 20.173-3.702 33.034 2 33.034s2-12.861 2-33.035c0-2.069.939-3.142 1.999-4.139 1.061-.997 4-3.103 4-9.31C33.998 13.449 32.384 2 31 2z"
  }), _react["default"].createElement("radialGradient", {
    id: "fork-and-knife_svg__b",
    cx: 398.971,
    cy: 23.745,
    r: 4.477,
    gradientTransform: "matrix(.0092 2.4482 -.3438 .0304 29.586 -927.933)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "url(#fork-and-knife_svg__b)",
    d: "M25.134 60.911c-2.334.207-2.42-22.509-.086-22.714 2.332-.207 2.418 22.508.086 22.714z"
  }), _react["default"].createElement("linearGradient", {
    id: "fork-and-knife_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 36,
    y1: 32,
    x2: 46,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d3d8db"
  }), _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#cfd5d8"
  }), _react["default"].createElement("stop", {
    offset: 0.702,
    stopColor: "#c4cdd1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#fork-and-knife_svg__c)",
    d: "M39.75 36.94c0 13.304-3.75 25.061 1.25 25.061s2.5-4.191 2.5-25.061c0-4.174 2.5-5.217 2.5-10.434V4.593c0-.942-.525-3.735-2.5-2.081-2.449 2.055-7.5 16.04-7.5 23.995 0 5.738 3.75 6.654 3.75 10.433z"
  }), _react["default"].createElement("radialGradient", {
    id: "fork-and-knife_svg__d",
    cx: 389.683,
    cy: 16.311,
    r: 4.251,
    gradientTransform: "matrix(-.0594 2.1245 -.3445 .0161 69.317 -776.023)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "url(#fork-and-knife_svg__d)",
    d: "M40.279 61.492c-2.219.104-1.695-18.613.523-18.713 2.219-.104 1.698 18.612-.523 18.713z"
  }));
};

var _default = SvgForkAndKnife;
exports["default"] = _default;