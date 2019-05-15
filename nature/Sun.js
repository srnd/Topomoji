"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSun = function SvgSun(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "sun_svg__a",
    cx: 32,
    cy: 32,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.37,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.379,
    stopColor: "#ff9c03"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#ffb620"
  }), _react["default"].createElement("stop", {
    offset: 0.586,
    stopColor: "#ffca37"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#ffd847"
  }), _react["default"].createElement("stop", {
    offset: 0.829,
    stopColor: "#ffe051"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe354"
  })), _react["default"].createElement("path", {
    fill: "url(#sun_svg__a)",
    d: "M50.184 36.871L62 31.998l-11.816-4.873 7.797-10.127-12.67 1.688 1.688-12.668-10.127 7.797L31.998 2l-4.871 11.814L16.998 6.02l1.689 12.668L6.018 17l7.797 10.127L2 32l11.814 4.871L6.02 47l12.668-1.689L17 57.98l10.127-7.797L32 62l4.873-11.816L47 57.98l-1.688-12.67 12.668 1.688-7.796-10.127z"
  }), _react["default"].createElement("radialGradient", {
    id: "sun_svg__b",
    cx: 29.63,
    cy: 29.552,
    r: 18,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 0.381,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#ffc700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffb700"
  })), _react["default"].createElement("circle", {
    fill: "url(#sun_svg__b)",
    cx: 31.999,
    cy: 32,
    r: 18
  }));
};

var _default = SvgSun;
exports["default"] = _default;