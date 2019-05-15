"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlarmClock = function SvgAlarmClock(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M30 7h4v6h-4z"
  }), _react["default"].createElement("radialGradient", {
    id: "alarm-clock_svg__a",
    cx: 32,
    cy: 7,
    r: 2.55,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#alarm-clock_svg__a)",
    d: "M35 9h-6V6.172c0-1.563 6-1.563 6 0V9z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M56.6 4.633L39.99 21.254l2.77 2.77L59.369 7.402c1.844-1.847-.922-4.617-2.769-2.769zM4.631 7.4l16.621 16.61 2.77-2.768L7.401 4.633c-1.848-1.846-4.617.922-2.77 2.767z"
  }), _react["default"].createElement("linearGradient", {
    id: "alarm-clock_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 12.802,
    y1: 52.97,
    x2: 18,
    y2: 55.971
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#cad3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.405,
    stopColor: "#bac3c8"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#a1aaaf"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#7e888d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#alarm-clock_svg__b)",
    d: "M9.803 58.166l7-12.123 5.197 3-7 12.123c-1.333 2.311-6.531-.689-5.197-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "alarm-clock_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 46,
    y1: 55.972,
    x2: 51.196,
    y2: 52.972
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#cad3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.405,
    stopColor: "#bac3c8"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#a1aaaf"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#7e888d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#alarm-clock_svg__c)",
    d: "M49 61.168l-7-12.125 5.195-3 7 12.125c1.334 2.311-3.861 5.311-5.195 3z"
  }), _react["default"].createElement("radialGradient", {
    id: "alarm-clock_svg__d",
    cx: 32,
    cy: 36,
    r: 26,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.515,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.658,
    stopColor: "#fb000d"
  }), _react["default"].createElement("stop", {
    offset: 0.795,
    stopColor: "#f0000a"
  }), _react["default"].createElement("stop", {
    offset: 0.929,
    stopColor: "#dc0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("circle", {
    fill: "url(#alarm-clock_svg__d)",
    cx: 32,
    cy: 36,
    r: 26
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 32,
    cy: 36,
    r: 22
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 32,
    cy: 36,
    r: 21
  }), _react["default"].createElement("radialGradient", {
    id: "alarm-clock_svg__e",
    cx: 32,
    cy: 36,
    r: 20,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#fbfbfc"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#eef1f4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("circle", {
    fill: "url(#alarm-clock_svg__e)",
    cx: 32,
    cy: 36,
    r: 20
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.42 50.289a1.159 1.159 0 0 1 1.584-.438c.551.318.736 1.027.414 1.59a1.165 1.165 0 0 1-1.586.436 1.16 1.16 0 0 1-.412-1.588z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-149.963 40.58 21.136)",
    fill: "#302C3B",
    cx: 40.58,
    cy: 21.136,
    rx: 1.153,
    ry: 1.167
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-120 17.134 44.582)",
    fill: "#302C3B",
    cx: 17.135,
    cy: 44.582,
    rx: 1.152,
    ry: 1.173
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.285 26.422a1.161 1.161 0 0 1 1.59.41c.32.553.125 1.262-.434 1.586a1.164 1.164 0 0 1-1.592-.414 1.161 1.161 0 0 1 .436-1.582z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 14.836,
    cy: 36,
    rx: 1.17,
    ry: 1.152
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 49.164,
    cy: 36,
    rx: 1.17,
    ry: 1.152
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-60 17.136 27.421)",
    fill: "#302C3B",
    cx: 17.135,
    cy: 27.42,
    rx: 1.152,
    ry: 1.172
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.441 43.584a1.16 1.16 0 0 1 .434 1.582 1.159 1.159 0 0 1-1.59.414 1.163 1.163 0 0 1-.436-1.584 1.163 1.163 0 0 1 1.592-.412z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-30.014 23.421 21.137)",
    fill: "#302C3B",
    cx: 23.419,
    cy: 21.136,
    rx: 1.154,
    ry: 1.171
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M41.578 50.289a1.157 1.157 0 0 1-.412 1.588 1.163 1.163 0 0 1-1.584-.436 1.163 1.163 0 0 1 .414-1.59 1.157 1.157 0 0 1 1.582.438z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 31.999,
    cy: 18.836,
    rx: 1.153,
    ry: 1.172
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 31.999,
    cy: 53.164,
    rx: 1.153,
    ry: 1.17
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M47.473 28.799l-1.5-2.6-13.974 8.071-10.506-6.069-1.5 2.596L29 35.998 35 36z"
  }), _react["default"].createElement("circle", {
    fill: "#1A1626",
    cx: 32,
    cy: 36,
    r: 4
  }), _react["default"].createElement("circle", {
    fill: "#6E8189",
    cx: 32,
    cy: 36,
    r: 3
  }), _react["default"].createElement("radialGradient", {
    id: "alarm-clock_svg__f",
    cx: 49.75,
    cy: 9.375,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.416,
    stopColor: "#e2e8ea"
  }), _react["default"].createElement("stop", {
    offset: 0.84,
    stopColor: "#d6dee2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#alarm-clock_svg__f)",
    d: "M42.113 5.555C40.492 7.178 56.822 23.51 58.445 21.887 69.266 11.066 52.934-5.266 42.113 5.555z"
  }), _react["default"].createElement("radialGradient", {
    id: "alarm-clock_svg__g",
    cx: 6.75,
    cy: 8.5,
    r: 11.407,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.416,
    stopColor: "#e2e8ea"
  }), _react["default"].createElement("stop", {
    offset: 0.84,
    stopColor: "#d6dee2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#alarm-clock_svg__g)",
    d: "M21.887 5.555c-10.82-10.82-27.154 5.51-16.332 16.332C7.178 23.508 23.508 7.176 21.887 5.555z"
  }));
};

var _default = SvgAlarmClock;
exports["default"] = _default;