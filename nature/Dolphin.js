"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDolphin = function SvgDolphin(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "dolphin_svg__a",
    cx: 26.151,
    cy: 37.681,
    r: 21.315,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.405,
    stopColor: "#e2e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.522,
    stopColor: "#d5dce0"
  }), _react["default"].createElement("stop", {
    offset: 0.643,
    stopColor: "#bfc9ce"
  }), _react["default"].createElement("stop", {
    offset: 0.765,
    stopColor: "#a1afb5"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#dolphin_svg__a)",
    d: "M31.917 13.987L11.14 30.55c-2.711 3.547-3.99 6.2-1.92 6.522 6.713 1.041 11.57-10.813 21.738-1.746 5.824 5.195 2.049 9.436-2.35 12.684-6.796 11.385 35.778-3.115 3.309-34.023z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.353 24.519c-6.047 12.563-16.117 14.595-8.33 5.563l8.33-5.563z"
  }), _react["default"].createElement("linearGradient", {
    id: "dolphin_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 14.122,
    y1: 28.379,
    x2: 20.352,
    y2: 28.379
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff6052"
  }), _react["default"].createElement("stop", {
    offset: 0.205,
    stopColor: "#fc5e50"
  }), _react["default"].createElement("stop", {
    offset: 0.368,
    stopColor: "#f2574a"
  }), _react["default"].createElement("stop", {
    offset: 0.516,
    stopColor: "#e14c40"
  }), _react["default"].createElement("stop", {
    offset: 0.655,
    stopColor: "#ca3d32"
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#b32e24"
  })), _react["default"].createElement("path", {
    fill: "url(#dolphin_svg__b)",
    d: "M15.265 28.439l5.088-3.921c-4.608 9.282-8.141 9.688-5.088 3.921z"
  }), _react["default"].createElement("radialGradient", {
    id: "dolphin_svg__c",
    cx: 48.437,
    cy: 30.395,
    r: 22.14,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#3889ad"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69d1f0"
  })), _react["default"].createElement("path", {
    fill: "url(#dolphin_svg__c)",
    d: "M59.388 9.939c-3.057-2.984-12.609-2.432-15.898.777-3.293 3.209 7.646 18.366 8.498 13.905 1.111-5.831 10.46-11.699 7.4-14.682z"
  }), _react["default"].createElement("radialGradient", {
    id: "dolphin_svg__d",
    cx: 28.208,
    cy: 32,
    r: 27.258,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#3889ad"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69d1f0"
  })), _react["default"].createElement("path", {
    fill: "url(#dolphin_svg__d)",
    d: "M51.812 21.412C50.386 12.781 43.519 2 29.542 2 15.571 2 6.485 13.694 8.663 22.799c.609 2.546-7.27 8.704-3.758 9.44 3.289.69 10.396-2.931 13.67-6.099 3.373-3.263 6.189-5.01 8.762-5.348-.855.793-1.375 2.132-1.375 4.393 0 5.094 4.75 12.928 7.984 12.928 2.93 0 1.51-6.094 3.125-11.322 5.58 7.472 5.771 17.965-3.256 22.266-4.912 2.34-5.719.889-5.207-1.047-1.496 1.105-3.051 2.078-4.289 2.895-2.039-2.701-6.068-7.486-9.023-7.486-4.121 0 1.588 9.291 1.588 9.291S11.175 62 15.296 62c3.08 0 7.32-5.188 9.266-7.811 9.429 1.586 31.804-5.179 27.25-32.777z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.628 19.662c0 3.336-5.004 3.336-5.004 0 0-3.33 5.004-3.33 5.004 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M20.542 18.982c0 .91-1.365.91-1.365 0 0-.907 1.365-.907 1.365 0z"
  }));
};

var _default = SvgDolphin;
exports["default"] = _default;