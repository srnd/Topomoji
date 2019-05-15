"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGrowingHeart = function SvgGrowingHeart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "growing-heart_svg__a",
    cx: -486.619,
    cy: -420.25,
    r: 11.15,
    gradientTransform: "matrix(2.9058 0 0 3.0887 1446.185 1308.938)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ffc5c8"
  }), _react["default"].createElement("stop", {
    offset: 0.561,
    stopColor: "#ffbfbf"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#ffafa6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff9d8b"
  })), _react["default"].createElement("path", {
    fill: "url(#growing-heart_svg__a)",
    d: "M31.997 14.334C24.034 1.392 2 6.446 2 22.701 2 33.604 12.163 40.9 31.997 57 51.83 40.9 62 33.604 62 22.701c0-16.255-22.037-21.309-30.003-8.367z"
  }), _react["default"].createElement("radialGradient", {
    id: "growing-heart_svg__b",
    cx: -520.159,
    cy: -340.104,
    r: 12.164,
    gradientTransform: "matrix(2.1309 0 0 2.2239 1140.54 774.142)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff7164"
  }), _react["default"].createElement("stop", {
    offset: 0.568,
    stopColor: "#fc685d"
  }), _react["default"].createElement("stop", {
    offset: 0.814,
    stopColor: "#f34f4a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eb3838"
  })), _react["default"].createElement("path", {
    fill: "url(#growing-heart_svg__b)",
    d: "M31.999 20.488C25.627 10.322 8 14.292 8 27.06 8 35.624 16.131 41.354 31.999 54 47.865 41.354 56 35.624 56 27.06c0-12.768-17.629-16.738-24.001-6.572z"
  }), _react["default"].createElement("radialGradient", {
    id: "growing-heart_svg__c",
    cx: -551.106,
    cy: -214.862,
    r: 13.38,
    gradientTransform: "matrix(1.4529 0 0 1.5444 832.801 355.176)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#c90000"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#c00000"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#a70000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a30000"
  })), _react["default"].createElement("path", {
    fill: "url(#growing-heart_svg__c)",
    d: "M31.999 25.4C27.221 17.634 14 20.668 14 30.42c0 6.543 6.099 10.921 17.999 20.58C43.898 41.341 50 36.963 50 30.42c0-9.752-13.223-12.786-18.001-5.02z"
  }));
};

var _default = SvgGrowingHeart;
exports["default"] = _default;