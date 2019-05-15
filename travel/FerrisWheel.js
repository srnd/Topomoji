"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFerrisWheel = function SvgFerrisWheel(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M43.764 61l-10.86-29.834-2.01.73L41.486 61z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M22.515 61l10.592-29.102-2.01-.732L20.237 61z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M31.5 3h1v50h-1z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M19.078 6.592l.867-.5L44.92 49.407l-.867.5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M7 27.5h50v1H7z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M10.103 15.924l.5-.865 43.29 25.015-.5.865z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M10.606 40.942l-.5-.865 43.29-25.015.5.865z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M19.98 49.93l-.866-.498 24.9-43.361.867.498z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M32 3C18.193 3 7 14.191 7 28c0 13.807 11.193 25 25 25s25-11.193 25-25C57 14.191 45.807 3 32 3zm0 49C18.745 52 8 41.256 8 28S18.745 4 32 4c13.256 0 24 10.744 24 24S45.256 52 32 52z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32 8c-11.045 0-20 8.953-20 20s8.954 20 20 20c11.047 0 20-8.953 20-20S43.047 8 32 8zm0 39.199c-10.603 0-19.2-8.596-19.2-19.199 0-10.605 8.597-19.201 19.2-19.201 10.604 0 19.202 8.596 19.202 19.201C51.201 38.604 42.604 47.199 32 47.199z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 28.5,
    y1: 7.5,
    x2: 35.5,
    y2: 7.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ecee6"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#45c8e8"
  }), _react["default"].createElement("stop", {
    offset: 0.534,
    stopColor: "#2db8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.949,
    stopColor: "#059ef6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__a)",
    d: "M34.723 9h-5.446L28.5 6h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 28.5,
    y1: 3,
    x2: 35.5,
    y2: 3
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ecee6"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#45c8e8"
  }), _react["default"].createElement("stop", {
    offset: 0.534,
    stopColor: "#2db8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.949,
    stopColor: "#059ef6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__b)",
    d: "M32 2c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M31.75 3.75h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M28.5 3.5h7V4h-7zM28.5 6h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 28.5,
    y1: 56.5,
    x2: 35.5,
    y2: 56.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ecee6"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#45c8e8"
  }), _react["default"].createElement("stop", {
    offset: 0.534,
    stopColor: "#2db8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.949,
    stopColor: "#059ef6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__c)",
    d: "M34.723 58h-5.446l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 28.5,
    y1: 52,
    x2: 35.5,
    y2: 52
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ecee6"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#45c8e8"
  }), _react["default"].createElement("stop", {
    offset: 0.534,
    stopColor: "#2db8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.949,
    stopColor: "#059ef6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__d)",
    d: "M32 51c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M31.75 52.75h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M28.5 52.5h7v.5h-7zM28.5 55h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 41.178,
    y1: 10.709,
    x2: 48.178,
    y2: 10.709
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f02beb"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#e725e2"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#cf14ca"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b300af"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__e)",
    d: "M47.398 12.209h-5.443l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 41.178,
    y1: 6.209,
    x2: 48.178,
    y2: 6.209
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f02beb"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#e725e2"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#cf14ca"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b300af"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__f)",
    d: "M44.678 5.209c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#A30B9E",
    d: "M44.428 6.959h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#A30B9E",
    d: "M41.178 6.709h7v.5h-7zM41.178 9.209h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 15.823,
    y1: 10.709,
    x2: 22.823,
    y2: 10.709
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.344,
    stopColor: "#89c131"
  }), _react["default"].createElement("stop", {
    offset: 0.905,
    stopColor: "#71ac2f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__g)",
    d: "M22.045 12.209h-5.443l-.779-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 15.823,
    y1: 6.209,
    x2: 22.823,
    y2: 6.209
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.344,
    stopColor: "#89c131"
  }), _react["default"].createElement("stop", {
    offset: 0.905,
    stopColor: "#71ac2f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__h)",
    d: "M19.323 5.209c-3.231 0-3.5 2-3.5 2h7s-.269-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M19.073 6.959h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M15.823 6.709h7v.5h-7zM15.823 9.209h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 15.823,
    y1: 52.709,
    x2: 22.823,
    y2: 52.709
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f02beb"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#e725e2"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#cf14ca"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b300af"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__i)",
    d: "M22.045 54.209h-5.443l-.779-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 15.823,
    y1: 48.209,
    x2: 22.823,
    y2: 48.209
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f02beb"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#e725e2"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#cf14ca"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b300af"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__j)",
    d: "M19.323 47.209c-3.23 0-3.5 2-3.5 2h7s-.269-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#A30B9E",
    d: "M19.073 48.959h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#A30B9E",
    d: "M15.823 48.709h7v.5h-7zM15.823 51.209h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 41.178,
    y1: 52.709,
    x2: 48.178,
    y2: 52.709
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.344,
    stopColor: "#89c131"
  }), _react["default"].createElement("stop", {
    offset: 0.905,
    stopColor: "#71ac2f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__k)",
    d: "M47.398 54.209h-5.443l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: 41.178,
    y1: 48.209,
    x2: 48.178,
    y2: 48.209
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.344,
    stopColor: "#89c131"
  }), _react["default"].createElement("stop", {
    offset: 0.905,
    stopColor: "#71ac2f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__l)",
    d: "M44.678 47.209c-3.232 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M44.428 48.959h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M41.178 48.709h7v.5h-7zM41.178 51.209h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__m",
    gradientUnits: "userSpaceOnUse",
    x1: 4,
    y1: 32,
    x2: 11,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#ff9c00"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#ff7a00"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#ff6500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff5e00"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__m)",
    d: "M10.223 33.5H4.777L4 30.5h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__n",
    gradientUnits: "userSpaceOnUse",
    x1: 4,
    y1: 27.5,
    x2: 11,
    y2: 27.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#ff9c00"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#ff7a00"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#ff6500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff5e00"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__n)",
    d: "M7.5 26.5c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#D45C06",
    d: "M7.25 28.25h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#D45C06",
    d: "M4 28h7v.5H4zM4 30.5h7v.5H4z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__o",
    gradientUnits: "userSpaceOnUse",
    x1: 53,
    y1: 31.999,
    x2: 60,
    y2: 31.999
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#ff9c00"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#ff7a00"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#ff6500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff5e00"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__o)",
    d: "M59.223 33.499h-5.446l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__p",
    gradientUnits: "userSpaceOnUse",
    x1: 53,
    y1: 27.499,
    x2: 60,
    y2: 27.499
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#ff9c00"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#ff7a00"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#ff6500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff5e00"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__p)",
    d: "M56.5 26.499c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#D45C06",
    d: "M56.25 28.249h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#D45C06",
    d: "M53 27.999h7v.5h-7zM53 30.499h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__q",
    gradientUnits: "userSpaceOnUse",
    x1: 50.375,
    y1: 43.834,
    x2: 57.375,
    y2: 43.834
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#f73232"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#e21a1a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__q)",
    d: "M56.598 45.334h-5.446l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__r",
    gradientUnits: "userSpaceOnUse",
    x1: 50.375,
    y1: 39.334,
    x2: 57.375,
    y2: 39.334
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#f73232"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#e21a1a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__r)",
    d: "M53.875 38.334c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M53.625 40.084h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M50.375 39.834h7v.5h-7zM50.375 42.334h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__s",
    gradientUnits: "userSpaceOnUse",
    x1: 6.625,
    y1: 43.834,
    x2: 13.625,
    y2: 43.834
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe02e"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#ffd726"
  }), _react["default"].createElement("stop", {
    offset: 0.698,
    stopColor: "#ffbf12"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__s)",
    d: "M12.848 45.334H7.402l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__t",
    gradientUnits: "userSpaceOnUse",
    x1: 6.625,
    y1: 39.334,
    x2: 13.625,
    y2: 39.334
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe02e"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#ffd726"
  }), _react["default"].createElement("stop", {
    offset: 0.698,
    stopColor: "#ffbf12"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__t)",
    d: "M10.125 38.334c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M9.875 40.084h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M6.625 39.834h7v.5h-7zM6.625 42.334h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__u",
    gradientUnits: "userSpaceOnUse",
    x1: 6.625,
    y1: 20.166,
    x2: 13.625,
    y2: 20.166
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#f73232"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#e21a1a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__u)",
    d: "M12.848 21.666H7.402l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__v",
    gradientUnits: "userSpaceOnUse",
    x1: 6.625,
    y1: 15.666,
    x2: 13.625,
    y2: 15.666
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#f73232"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#e21a1a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__v)",
    d: "M10.125 14.666c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M9.875 16.416h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M6.625 16.166h7v.5h-7zM6.625 18.666h7v.5h-7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__w",
    gradientUnits: "userSpaceOnUse",
    x1: 50.375,
    y1: 20.166,
    x2: 57.375,
    y2: 20.166
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe02e"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#ffd726"
  }), _react["default"].createElement("stop", {
    offset: 0.698,
    stopColor: "#ffbf12"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__w)",
    d: "M56.598 21.666h-5.446l-.777-3h7z"
  }), _react["default"].createElement("linearGradient", {
    id: "ferris-wheel_svg__x",
    gradientUnits: "userSpaceOnUse",
    x1: 50.375,
    y1: 15.666,
    x2: 57.375,
    y2: 15.666
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe02e"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#ffd726"
  }), _react["default"].createElement("stop", {
    offset: 0.698,
    stopColor: "#ffbf12"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#ferris-wheel_svg__x)",
    d: "M53.875 14.666c-3.23 0-3.5 2-3.5 2h7s-.27-2-3.5-2z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M53.625 16.416h.5v2.5h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M50.375 16.166h7v.5h-7zM50.375 18.666h7v.5h-7z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M44.832 61L33.973 31.166l-2.011.73L42.555 61z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M21.445 61l10.592-29.102-2.01-.732L19.168 61z"
  }), _react["default"].createElement("path", {
    fill: "#E635DE",
    d: "M32 23.398l3.521-3.9-.267 5.25 5.246-.269L36.6 28l3.9 3.521-5.246-.269.267 5.248L32 32.6l-3.522 3.9.272-5.248-5.25.269L27.4 28l-3.9-3.521 5.25.269-.272-5.25z"
  }), _react["default"].createElement("path", {
    fill: "#B30BAD",
    d: "M32 23.5c2.487 0 4.5 2.01 4.5 4.5 0 2.488-2.014 4.5-4.5 4.5a4.498 4.498 0 0 1-4.5-4.5c0-2.49 2.013-4.5 4.5-4.5z"
  }), _react["default"].createElement("circle", {
    fill: "#C28FEF",
    cx: 32,
    cy: 28,
    r: 2.5
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M12 60h40v2H12z"
  }));
};

var _default = SvgFerrisWheel;
exports["default"] = _default;