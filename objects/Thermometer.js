"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThermometer = function SvgThermometer(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "thermometer_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 23,
    y1: 32,
    x2: 41,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c5d7e8"
  })), _react["default"].createElement("path", {
    fill: "url(#thermometer_svg__a)",
    d: "M37 45.518V7c0-2.763-2.238-5-5-5s-5 2.237-5 5v38.518A9 9 0 0 0 32 62a9 9 0 0 0 5-16.482z"
  }), _react["default"].createElement("linearGradient", {
    id: "thermometer_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 29,
    y1: 15.5,
    x2: 35,
    y2: 15.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c5d7e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#thermometer_svg__b)",
    d: "M32 4a3 3 0 0 0-3 3v20h6V7a3 3 0 0 0-3-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "thermometer_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 25,
    y1: 38.5,
    x2: 39,
    y2: 38.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.182,
    stopColor: "#fa1f20"
  }), _react["default"].createElement("stop", {
    offset: 0.41,
    stopColor: "#ea1a1b"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#d11014"
  }), _react["default"].createElement("stop", {
    offset: 0.928,
    stopColor: "#ae040b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a30008"
  })), _react["default"].createElement("path", {
    fill: "url(#thermometer_svg__c)",
    d: "M35 46.683V17h-6v29.683A6.991 6.991 0 0 0 25 53a7 7 0 1 0 14 0 6.994 6.994 0 0 0-4-6.317z"
  }), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "#FFF",
    d: "M31.166 9.875H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 15.729H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 21.582H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 27.438H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 33.291H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 39.145H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5zM31.166 45H27v-1.5h4.166c1.111 0 1.111 1.5 0 1.5z"
  }), _react["default"].createElement("radialGradient", {
    id: "thermometer_svg__d",
    cx: 608.189,
    cy: 67.232,
    r: 14.058,
    gradientTransform: "matrix(.3583 .4654 -.5242 .4036 -154.715 -262.615)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.5
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#thermometer_svg__d)",
    d: "M33.426 54.816c-2.102 1.621-4.973 1.42-6.409-.447-1.439-1.869-.9-4.695 1.203-6.314 2.104-1.623 4.975-1.42 6.415.447 1.439 1.869.896 4.697-1.209 6.314z"
  }));
};

var _default = SvgThermometer;
exports["default"] = _default;