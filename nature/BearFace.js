"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBearFace = function SvgBearFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#825538",
    d: "M14.003 4.999C7.374 4.999 2 10.82 2 17.999 2 25.179 7.374 31 14.003 31 20.629 31 26 25.179 26 17.999c0-7.179-5.371-13-11.997-13z"
  }), _react["default"].createElement("ellipse", {
    fill: "#AB7049",
    cx: 14.003,
    cy: 18.001,
    rx: 7.001,
    ry: 7.584
  }), _react["default"].createElement("path", {
    fill: "#825538",
    d: "M50.004 4.999c-6.629 0-12.004 5.821-12.004 13C38 25.179 43.375 31 50.004 31 56.629 31 62 25.179 62 17.999c0-7.179-5.371-13-11.996-13z"
  }), _react["default"].createElement("path", {
    fill: "#AB7049",
    d: "M50.004 10.417c-3.869 0-7.002 3.394-7.002 7.583 0 4.191 3.133 7.586 7.002 7.586 3.863 0 6.998-3.395 6.998-7.586 0-4.189-3.135-7.583-6.998-7.583z"
  }), _react["default"].createElement("path", {
    fill: "#825538",
    d: "M46 48.436c0-16.751-28-16.751-28 0 0 16.752 28 16.752 28 0zM40.559 7.505s-2.174-1.83-4.52-.342c0 0-.26-1.443 1.342-2.768 0 0-3.172-.534-5.316 1.8 0 0-.381-1.49.5-3.195 0 0-3.922.441-5.572 4.182 0 0-1.895-.792-3.315.549 1.48.323 1.461 1.835 1.461 1.835l14.253-.03c-.001-.001-.398-1.707 1.167-2.031z"
  }), _react["default"].createElement("radialGradient", {
    id: "bear-face_svg__a",
    cx: 87.638,
    cy: 41.828,
    r: 25.588,
    gradientTransform: "matrix(1.0735 0 0 .979 -62.079 -7.391)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b37a52"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#825538"
  })), _react["default"].createElement("path", {
    fill: "url(#bear-face_svg__a)",
    d: "M54.848 28.232C51.125 21.89 49.852 8.146 32.002 8.146c-17.852 0-19.127 13.743-22.85 20.086-17.622 30.04 25.85 30.738 22.85 30.738-3.004 0 40.471-.698 22.846-30.738z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M43.975 29.228c1.748 0 3.164 2.127 3.164 4.75 0 2.624-1.416 4.75-3.164 4.75-1.752 0-3.168-2.126-3.168-4.75s1.416-4.75 3.168-4.75z"
  }), _react["default"].createElement("ellipse", {
    fill: "#1A1626",
    cx: 20.026,
    cy: 33.978,
    rx: 3.168,
    ry: 4.75
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M20.191 49.15c0-4.593 7.678-14.667 11.811-14.667 4.129 0 11.809 10.074 11.809 14.667 0 3.686-3.703 9.85-11.809 9.85-8.109 0-11.811-6.164-11.811-9.85z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M32.047 50.929c-1.395 6.018-6.234 3.066-6.814 2.035 0 1.717 3.893 4.738 6.814 1.689 2.926 3.049 6.816.027 6.816-1.689-.582 1.031-5.42 3.982-6.816-2.035z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25.77 48.32c0-2.769 2.793-3.3 6.24-3.3 3.443 0 6.236.531 6.236 3.3 0 2.202-4.965 4.154-6.236 4.154-1.276.001-6.24-1.952-6.24-4.154z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M43.621 31.851c0 1.498-1.818 1.498-1.818 0 0-1.5 1.818-1.5 1.818 0zM19.677 31.851c0 1.498-1.818 1.498-1.818 0-.001-1.5 1.818-1.5 1.818 0z"
  }));
};

var _default = SvgBearFace;
exports["default"] = _default;