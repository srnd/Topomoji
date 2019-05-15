"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPushpin = function SvgPushpin(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pushpin_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 119.866,
    y1: -194.526,
    x2: 132.649,
    y2: -194.526,
    gradientTransform: "rotate(45.001 -223.179 -206.96)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.213,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#pushpin_svg__a)",
    d: "M27.136 34.734L8.695 53.176 2 62l8.833-6.686 18.439-18.439z"
  }), _react["default"].createElement("linearGradient", {
    id: "pushpin_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 118.904,
    y1: -227.485,
    x2: 134.179,
    y2: -227.485,
    gradientTransform: "rotate(45.001 -219.134 -205.567)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.409,
    stopColor: "#ef1619"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d1000b"
  })), _react["default"].createElement("path", {
    fill: "url(#pushpin_svg__b)",
    d: "M35.6 39.355L24.809 28.558 45.988 7.365l10.789 10.802z"
  }), _react["default"].createElement("radialGradient", {
    id: "pushpin_svg__c",
    cx: 120.408,
    cy: -218.886,
    r: 22.041,
    gradientTransform: "matrix(.7128 .7128 -.7128 .7128 -211.65 92.01)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.315,
    stopColor: "#fc1f1f"
  }), _react["default"].createElement("stop", {
    offset: 0.591,
    stopColor: "#f1171a"
  }), _react["default"].createElement("stop", {
    offset: 0.851,
    stopColor: "#df0a12"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d1000b"
  })), _react["default"].createElement("path", {
    fill: "url(#pushpin_svg__c)",
    d: "M33.584 30.44c-6.275-6.279-15.58-10.085-22.959-9.264l32.204 32.237c.823-7.392-2.97-16.69-9.245-22.973z"
  }), _react["default"].createElement("radialGradient", {
    id: "pushpin_svg__d",
    cx: 119.981,
    cy: -235.026,
    r: 16.553,
    gradientTransform: "matrix(.7128 .7128 -.4355 .4355 -146.47 26.828)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.276,
    stopColor: "#fa1d1e"
  }), _react["default"].createElement("stop", {
    offset: 0.62,
    stopColor: "#ea1217"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d1000b"
  })), _react["default"].createElement("path", {
    fill: "url(#pushpin_svg__d)",
    d: "M40.648 2c-1.02 5.37 3.07 12.321 6.055 15.308 2.982 2.982 9.926 7.072 15.297 6.05L40.648 2z"
  }));
};

var _default = SvgPushpin;
exports["default"] = _default;