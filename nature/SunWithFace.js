"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSunWithFace = function SvgSunWithFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "sun-with-face_svg__a",
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
    fill: "url(#sun-with-face_svg__a)",
    d: "M50.184 36.871L62 31.998l-11.816-4.873 7.797-10.127-12.67 1.688 1.688-12.668-10.127 7.797L31.998 2l-4.871 11.814L16.998 6.02l1.689 12.668L6.018 17l7.797 10.127L2 32l11.814 4.871L6.02 47l12.668-1.689L17 57.98l10.127-7.797L32 62l4.873-11.816L47 57.98l-1.688-12.67 12.668 1.688-7.796-10.127z"
  }), _react["default"].createElement("radialGradient", {
    id: "sun-with-face_svg__b",
    cx: 29.629,
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
    fill: "url(#sun-with-face_svg__b)",
    cx: 31.998,
    cy: 32,
    r: 18
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M45.516 29.003c-1.764 4.623-8.949 3.946-10.266.711 1-5.196 9.297-5.642 10.266-.711zM18.482 29.003c1.768 4.623 8.953 3.946 10.268.711-.998-5.2-9.293-5.644-10.268-.711z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M37.084 28.512c0 4.057 5.867 4.057 5.867 0 0-3.766-5.867-3.766-5.867 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M37.664 29.81c0 2.326 4.707 2.326 4.707 0 0-2.161-4.707-2.161-4.707 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M38.799 28.575c0 1.685 2.436 1.685 2.436 0-.001-1.562-2.436-1.562-2.436 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M37.969 28.084c0 .85 1.23.85 1.23 0 0-.789-1.23-.789-1.23 0z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M21.051 28.51c0 4.058 5.869 4.058 5.869 0 0-3.766-5.869-3.766-5.869 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M21.631 29.809c0 2.326 4.707 2.326 4.707 0 0-2.161-4.707-2.161-4.707 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M22.768 28.574c0 1.684 2.436 1.684 2.436 0-.001-1.563-2.436-1.563-2.436 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M21.936 28.082c0 .851 1.23.851 1.23 0 0-.789-1.23-.789-1.23 0z"
  }), _react["default"].createElement("path", {
    fill: "#E39415",
    d: "M45.516 28.969c0-4.964-10.266-4.964-10.266.786 1.467-4.718 8.801-4.718 10.266-.786zM18.482 28.969c0-4.964 10.268-4.964 10.268.785-1.465-4.72-8.799-4.72-10.268-.785z"
  }), _react["default"].createElement("path", {
    fill: "#E37A15",
    d: "M31.999 40.031c-2.551-.75-6.326.355-6.326.355 1.438 1.566 2.492 3.598 6.326 3.598 4.391 0 5.137-2.307 6.324-3.598 0 .001-3.779-1.109-6.324-.355z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M26.638 40.65c2.671 2.242 8.068 2.256 10.754 0-2.848.123-7.887.123-10.754 0z"
  }), _react["default"].createElement("path", {
    fill: "#E37A15",
    d: "M35.513 35.816c0 2.287-7.027 2.287-7.027 0-.001-.525 7.027-.525 7.027 0z"
  }));
};

var _default = SvgSunWithFace;
exports["default"] = _default;