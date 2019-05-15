"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCamera = function SvgCamera(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "camera_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 14.403,
    y1: 15.25,
    x2: 23.597,
    y2: 15.25
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d6e5ed"
  }), _react["default"].createElement("stop", {
    offset: 0.048,
    stopColor: "#d1e0e7"
  }), _react["default"].createElement("stop", {
    offset: 0.481,
    stopColor: "#a8b2b8"
  }), _react["default"].createElement("stop", {
    offset: 0.812,
    stopColor: "#8f969a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#858c8f"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__a)",
    d: "M23.137 14.25h-8.274c-.252 0-.459.181-.459.4v1.6h9.193v-1.6c0-.219-.207-.4-.46-.4z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#1A1626",
    d: "M14.633 14.65h.459v1.6h-.459zM15.552 14.65h.46v1.6h-.46zM16.472 14.65h.46v1.6h-.46zM17.391 14.65h.459v1.6h-.459zM18.311 14.65h.459v1.6h-.459zM19.23 14.65h.459v1.6h-.459zM20.149 14.65h.46v1.6h-.46zM21.068 14.65h.46v1.6h-.46zM21.988 14.65h.459v1.6h-.459zM22.907 14.65h.459v1.6h-.459z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 22h2v1H2zM60 22h2v1h-2z"
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 6.333,
    y1: 15.212,
    x2: 13.345,
    y2: 15.212
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d6e5ed"
  }), _react["default"].createElement("stop", {
    offset: 0.048,
    stopColor: "#d1e0e7"
  }), _react["default"].createElement("stop", {
    offset: 0.481,
    stopColor: "#a8b2b8"
  }), _react["default"].createElement("stop", {
    offset: 0.812,
    stopColor: "#8f969a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#858c8f"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__b)",
    d: "M13.333 16.125h-7s.406-1.294.905-1.496c1.197-.486 3.993-.486 5.19 0 .549.222.995 1.784.905 1.496z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M8.804 14.125h2.058v2H8.804z"
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 35,
    x2: 61,
    y2: 35
  }, _react["default"].createElement("stop", {
    offset: 0.9,
    stopColor: "#323844"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__c)",
    d: "M3 22h58v26H3z"
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 49,
    x2: 61,
    y2: 49
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7b8589"
  }), _react["default"].createElement("stop", {
    offset: 0.012,
    stopColor: "#8d979b"
  }), _react["default"].createElement("stop", {
    offset: 0.034,
    stopColor: "#aab3b8"
  }), _react["default"].createElement("stop", {
    offset: 0.057,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.079,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.1,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.9,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.943,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.966,
    stopColor: "#aab3b8"
  }), _react["default"].createElement("stop", {
    offset: 0.988,
    stopColor: "#8d979b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7b8589"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__d)",
    d: "M59.031 50H4.968C3 50 3 48 3 48h58s0 2-1.969 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 18,
    x2: 61,
    y2: 18
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7b8589"
  }), _react["default"].createElement("stop", {
    offset: 0.012,
    stopColor: "#8d979b"
  }), _react["default"].createElement("stop", {
    offset: 0.034,
    stopColor: "#aab3b8"
  }), _react["default"].createElement("stop", {
    offset: 0.057,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.079,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.1,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.9,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.943,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.966,
    stopColor: "#aab3b8"
  }), _react["default"].createElement("stop", {
    offset: 0.988,
    stopColor: "#8d979b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7b8589"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__e)",
    d: "M61 14.948L59.523 14H30.926c-5.083 0-5.729 2.113-10.601 2.113H3.999c-1 0-1 .851-1 .851V22h58v-7.052z"
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 28.99,
    cy: 44.813,
    r: 2.687
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 28.99,
    cy: 44.813,
    r: 1.974
  }), _react["default"].createElement("radialGradient", {
    id: "camera_svg__f",
    cx: 41,
    cy: 33.459,
    r: 15.5,
    gradientTransform: "rotate(-45.001 -160.945 117.105) scale(1 5.9999)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#effaff"
  }), _react["default"].createElement("stop", {
    offset: 0.369,
    stopColor: "#e7f2f7"
  }), _react["default"].createElement("stop", {
    offset: 0.587,
    stopColor: "#d1dce1"
  }), _react["default"].createElement("stop", {
    offset: 0.854,
    stopColor: "#adb9bd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#96a2a6"
  })), _react["default"].createElement("circle", {
    fill: "url(#camera_svg__f)",
    cx: 41,
    cy: 33.459,
    r: 15.5
  }), _react["default"].createElement("circle", {
    fill: "#1A1626",
    cx: 41,
    cy: 33.459,
    r: 13.621
  }), _react["default"].createElement("circle", {
    fill: "#25222E",
    cx: 40.999,
    cy: 33.459,
    r: 12.212
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 33.361,
    y1: 25.821,
    x2: 48.639,
    y2: 41.099
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.475,
    stopColor: "#312e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#363742"
  }), _react["default"].createElement("stop", {
    offset: 0.972,
    stopColor: "#3f454b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#40474d"
  })), _react["default"].createElement("circle", {
    fill: "url(#camera_svg__g)",
    cx: 41,
    cy: 33.459,
    r: 10.802
  }), _react["default"].createElement("circle", {
    opacity: 0.2,
    fill: "#302C3B",
    cx: 41,
    cy: 33.459,
    r: 6.74
  }), _react["default"].createElement("circle", {
    fill: "#35313D",
    cx: 41,
    cy: 33.459,
    r: 7.045
  }), _react["default"].createElement("circle", {
    fill: "#272430",
    cx: 41,
    cy: 33.459,
    r: 5.637
  }), _react["default"].createElement("circle", {
    fill: "#2D2A36",
    cx: 40.999,
    cy: 33.459,
    r: 4.228
  }), _react["default"].createElement("circle", {
    fill: "#35313D",
    cx: 41,
    cy: 33.459,
    r: 2.818
  }), _react["default"].createElement("circle", {
    fill: "#1A1626",
    cx: 41,
    cy: 33.459,
    r: 0.939
  }), _react["default"].createElement("radialGradient", {
    id: "camera_svg__h",
    cx: 584.27,
    cy: 38.995,
    r: 25.318,
    gradientTransform: "matrix(.3583 .4654 -.5242 .4036 -154.45 -262.524)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__h)",
    d: "M44.314 38.18c-3.785 2.92-8.957 2.558-11.542-.806-2.592-3.365-1.621-8.456 2.167-11.372 3.789-2.923 8.959-2.557 11.551.806 2.594 3.366 1.615 8.459-2.176 11.372z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 24.3,
    cy: 19.057,
    r: 1.5
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 24.3,
    cy: 19.057,
    r: 1
  }), _react["default"].createElement("circle", {
    fill: "#1A1626",
    cx: 24.3,
    cy: 19.057,
    r: 0.65
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 35,
    x2: 20.326,
    y2: 35
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.015,
    stopColor: "#33313f"
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#3f4551"
  }), _react["default"].createElement("stop", {
    offset: 0.194,
    stopColor: "#47535d"
  }), _react["default"].createElement("stop", {
    offset: 0.309,
    stopColor: "#4c5b65"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.631,
    stopColor: "#4a5862"
  }), _react["default"].createElement("stop", {
    offset: 0.803,
    stopColor: "#414853"
  }), _react["default"].createElement("stop", {
    offset: 0.997,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__i)",
    d: "M3 22h17.326v26H3z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M19.113 18.057a.752.752 0 0 0-.75-.75h-9a.752.752 0 0 0-.75.75v2c0 .412.337.75.75.75h9c.413 0 .75-.338.75-.75v-2z"
  }), _react["default"].createElement("linearGradient", {
    id: "camera_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 8.863,
    y1: 19.057,
    x2: 18.863,
    y2: 19.057
  }, _react["default"].createElement("stop", {
    offset: 0.006,
    stopColor: "#acb4b8"
  }), _react["default"].createElement("stop", {
    offset: 0.029,
    stopColor: "#b8bec2"
  }), _react["default"].createElement("stop", {
    offset: 0.093,
    stopColor: "#d2d6d8"
  }), _react["default"].createElement("stop", {
    offset: 0.163,
    stopColor: "#e6e8e9"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#f4f5f6"
  }), _react["default"].createElement("stop", {
    offset: 0.34,
    stopColor: "#fcfdfd"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.662,
    stopColor: "#fcfdfd"
  }), _react["default"].createElement("stop", {
    offset: 0.76,
    stopColor: "#f4f5f6"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#e6e8e9"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#d2d6d8"
  }), _react["default"].createElement("stop", {
    offset: 0.977,
    stopColor: "#b8bec2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#acb4b8"
  })), _react["default"].createElement("path", {
    fill: "url(#camera_svg__j)",
    d: "M18.863 18.057c0-.275-.225-.5-.5-.5h-9c-.275 0-.5.225-.5.5v2c0 .274.225.5.5.5h9c.275 0 .5-.226.5-.5v-2z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#6E8189",
    d: "M8.863 19.604h10v.1h-10zM8.863 20.203h10v.1h-10zM8.863 19.005h10v.1h-10zM8.863 18.406h10v.1h-10z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#6E8189",
    d: "M17.513 17.307h.1v3.5h-.1zM10.113 17.307h.1v3.5h-.1z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#6E8189",
    d: "M8.863 17.807h10v.1h-10z"
  }));
};

var _default = SvgCamera;
exports["default"] = _default;