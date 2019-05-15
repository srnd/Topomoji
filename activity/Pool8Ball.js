"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPool8Ball = function SvgPool8Ball(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "pool-8-ball_svg__a",
    cx: 30.894,
    cy: 57.086,
    r: 32.617,
    gradientTransform: "translate(-5.887 -35.018) scale(1.0506)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.273,
    stopColor: "#3a3547"
  }), _react["default"].createElement("stop", {
    offset: 0.519,
    stopColor: "#373244"
  }), _react["default"].createElement("stop", {
    offset: 0.72,
    stopColor: "#2d283a"
  }), _react["default"].createElement("stop", {
    offset: 0.904,
    stopColor: "#1d1929"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#1a1626"
  })), _react["default"].createElement("circle", {
    fill: "url(#pool-8-ball_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("radialGradient", {
    id: "pool-8-ball_svg__b",
    cx: 548.35,
    cy: -17.8,
    r: 16.375,
    gradientTransform: "matrix(.3583 .4654 -.7924 .61 -189.15 -228.3)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#586167"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#586167",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#pool-8-ball_svg__b)",
    d: "M27.298 23.685c-7.167 5.517-15.604 6.577-18.843 2.367-3.241-4.21-.06-12.094 7.107-17.611 7.167-5.517 15.603-6.577 18.842-2.367 3.242 4.21.06 12.094-7.106 17.611z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-39.592 36.264 24.27)",
    fill: "#FFF",
    cx: 36.265,
    cy: 24.269,
    rx: 13.143,
    ry: 13.865
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M45.26 23.205c1.783 2.871.783 6.313-2.896 8.602-3.678 2.287-7.209 1.662-8.992-1.207-1.131-1.818-1.09-3.803.02-5.621-1.658.035-3.104-.689-4.072-2.244-1.68-2.703-.656-5.959 2.484-7.912 3.117-1.939 6.49-1.416 8.172 1.285.967 1.557.977 3.174.234 4.631 2.12-.19 3.919.65 5.05 2.466zm-3.106 1.565c-.922-1.482-2.867-1.863-4.639-.762-1.773 1.102-2.309 2.994-1.371 4.5.969 1.557 2.945 1.984 4.717.883 1.772-1.104 2.246-3.09 1.293-4.621zm-10.105-3.5c.893 1.436 2.676 1.854 4.291.848 1.592-.99 2.014-2.813 1.137-4.225-.879-1.41-2.684-1.813-4.275-.822-1.616 1.003-2.046 2.763-1.153 4.199z"
  }));
};

var _default = SvgPool8Ball;
exports["default"] = _default;