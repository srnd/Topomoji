"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNoSmoking = function SvgNoSmoking(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "no-smoking_svg__a",
    cx: 31.999,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#no-smoking_svg__a)",
    d: "M7.368 23.676c-11.1 32.841 38.163 49.489 49.262 16.648C67.73 7.482 18.469-9.166 7.368 23.676z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M12 32h34v8H12zM48 32h4v8h-4z"
  }), _react["default"].createElement("linearGradient", {
    id: "no-smoking_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#no-smoking_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32c0 16.566 13.432 30 30 30 16.568 0 30-13.434 30-30C62 15.432 48.568 2 32 2zm24 30a23.882 23.882 0 0 1-5.046 14.712L17.287 13.045A23.888 23.888 0 0 1 32 8c13.254 0 24 10.744 24 24zM8 32a23.89 23.89 0 0 1 5.045-14.713l33.667 33.667A23.882 23.882 0 0 1 32 56C18.744 56 8 45.254 8 32z"
  }), _react["default"].createElement("linearGradient", {
    id: "no-smoking_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 14.744,
    y1: 5.034,
    x2: 45.105,
    y2: 35.395
  }, _react["default"].createElement("stop", {
    offset: 0.025,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.446,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("path", {
    fill: "url(#no-smoking_svg__c)",
    d: "M30.646 11.865c-3.15 11.799 6.436-4.316 18.846 19.143-6.58-8.725-27.885-2.367-36.844-12.041C.221 5.551 35.852-7.631 30.646 11.865z"
  }));
};

var _default = SvgNoSmoking;
exports["default"] = _default;