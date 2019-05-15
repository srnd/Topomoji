"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThinkingFace = function SvgThinkingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "thinking-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#thinking-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.501 15.929A4.286 4.286 0 1 1 20.5 24.5a4.286 4.286 0 0 1 .001-8.571z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 40.285,
    cy: 22.356,
    r: 4.286
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M48.498 14.046c-4.182-1.74-9.674-1.711-12.346-.117-.563.337-.32 2.695.186 2.478 3.885-1.689 8.5-2.161 12.461-.805.531.182.328-1.296-.301-1.556zM13.975 9.239c4.318-1.37 9.788-.861 12.31.959.533.384.083 2.715-.4 2.449-3.724-2.021-8.278-2.894-12.342-1.886-.548.137-.217-1.318.432-1.522z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M38.736 37.078c-5.363-4.482-14.008-5.661-19.534-2.205-.453.284-.254.906.308.779 4.556-1.045 12.515.344 16.953 4.293 1.699 1.513 4.101-1.338 2.273-2.867z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M20.818 60.227c-10.27 2.361-14.777-7.09-11.753-15.5 1.083-3.008-1.761-7.483 1.224-9.232 3.069-1.797 5.943.895 6.045 6.761 2.729-.616 6.432-2.922 8.78-2.76 1.283.09 5.766 2.11 7.239 2.219 5.073.37 4.901 6.86-1.625 6.166.104.988-.303 2.754-1.25 3.777.414 1.147.474 2.847-.961 4.373.56 3.981-4.346 6.333-7.699 4.196z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M20.585 61.08C9.603 63.675 5.308 52.982 8.187 45.041c1.192-3.291-1.969-8.411 1.224-10.332 3.282-1.977 7.362.16 7.47 6.605 2.919-.681 6.111-2.992 8.622-2.814 1.374.1 6.176 2.439 7.753 2.559 5.424.405 4.998 8.053-1.981 7.291.109 1.086-.09 2.387-1.104 3.51.441 1.263.504 3.127-1.027 4.806.598 4.371-4.971 6.762-8.559 4.414zm2.034-3.029L21.4 59.436c5.018 2.479 8.533-3.345 3.227-5.473 1.497.072 2.582.694 3.106 1.146 1.555-2.39 1.386-3.941-1.696-6.021 2.104.479 2.877 1.514 2.877 1.514 1.521-3.02.637-4.285-2.163-5.862 2.083.144 3.387 1.351 4.641 1.673 3.154.813 4.518-3.417 1.888-3.607-3.24-.236-6.341-2.423-8.247-2.254-2.72.241-4.31 1.967-10.262 3.756.28-5.836-1.214-8.824-3.829-7.939-2.264.765.541 4.238-.861 8.828-3.144 10.287 4.102 17.131 12.538 12.854z"
  }));
};

var _default = SvgThinkingFace;
exports["default"] = _default;