"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDroplet = function SvgDroplet(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "droplet_svg__a",
    cx: 31.499,
    cy: 27,
    r: 15.691,
    gradientTransform: "matrix(1 0 0 1.841 0 -22.706)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#adf1ff"
  }), _react["default"].createElement("stop", {
    offset: 0.159,
    stopColor: "#a9f0ff"
  }), _react["default"].createElement("stop", {
    offset: 0.311,
    stopColor: "#9eedff"
  }), _react["default"].createElement("stop", {
    offset: 0.461,
    stopColor: "#8ae8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#6fe1ff"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#4cd8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.9,
    stopColor: "#22cdff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00c4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#droplet_svg__a)",
    d: "M31.99 2C20.566 17.628 14 32.014 14 43.818 14 53.856 22.059 62 32 62c9.939 0 18-8.144 18-18.182C50 32.014 43.236 17.376 31.99 2z"
  }), _react["default"].createElement("radialGradient", {
    id: "droplet_svg__b",
    cx: 82.394,
    cy: 82.692,
    r: 5.751,
    gradientTransform: "matrix(1.016 .4219 -.536 3.369 -13.864 -286.771)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d4f2ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c4eeff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#droplet_svg__b)",
    d: "M34.598 8.265C39.848 38.265 7.455 67.04 17 32 19.818 21.652 32.748-2.301 34.598 8.265z"
  }));
};

var _default = SvgDroplet;
exports["default"] = _default;