"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTiredFace = function SvgTiredFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "tired-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#tired-face_svg__a)",
    cx: 32.001,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.081 16.071c-.588-.301-1.051.427-.553.845 6.092 5.124 7.025 6.135 7.023 6.584.002.45-.932 1.46-7.023 6.584-.498.418-.035 1.146.553.846 12.752-6.513 14.236-6.98 14.236-7.43s-1.484-.917-14.236-7.429zM48.921 30.93c.586.301 1.047-.426.551-.844-6.09-5.126-7.023-6.136-7.021-6.585-.002-.451.932-1.461 7.021-6.584.496-.418.035-1.146-.551-.846-12.752 6.512-14.236 6.98-14.236 7.43s1.484.916 14.236 7.429zM32 32c-8.838-.059-15.945 4.945-16 11.168-.033 3.445 1.332 6.604 5.57 6.633 3.076.02 6.482-1.465 10.43-1.438 3.947-.027 7.354 1.457 10.43 1.438 4.238-.029 5.604-3.188 5.57-6.633-.055-6.223-7.162-11.227-16-11.168z"
  }), _react["default"].createElement("linearGradient", {
    id: "tired-face_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 47.728,
    x2: 32.001,
    y2: 44.181
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d63324"
  }), _react["default"].createElement("stop", {
    offset: 0.08,
    stopColor: "#dc3f31"
  }), _react["default"].createElement("stop", {
    offset: 0.247,
    stopColor: "#e75346"
  }), _react["default"].createElement("stop", {
    offset: 0.435,
    stopColor: "#ee6155"
  }), _react["default"].createElement("stop", {
    offset: 0.657,
    stopColor: "#f3695d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f46c60"
  })), _react["default"].createElement("path", {
    fill: "url(#tired-face_svg__b)",
    d: "M32 44.646c-4.238-2-8.48 3.082-8.48 3.082s5.28-1.332 8.48-1.332 8.48 1.332 8.48 1.332-4.242-5.082-8.48-3.082z"
  }), _react["default"].createElement("linearGradient", {
    id: "tired-face_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 21,
    y1: 36,
    x2: 42.999,
    y2: 36
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd7e6"
  }), _react["default"].createElement("stop", {
    offset: 0.037,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 0.126,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.215,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.7,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.785,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.874,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.963,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd7e6"
  })), _react["default"].createElement("path", {
    fill: "url(#tired-face_svg__c)",
    d: "M42.721 37.037C40.01 35.156 36.508 34 32 34s-8.012 1.154-10.725 3.037c-.436.301-.386.963.382.963H42.338c.771 0 .823-.662.383-.963z"
  }));
};

var _default = SvgTiredFace;
exports["default"] = _default;