"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBurundi = function SvgBurundi(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M45.23 38.75c1.03-2.03 1.63-4.32 1.63-6.75 0-2.43-.59-4.72-1.63-6.75L56.2 14.27a29.89 29.89 0 0 0-6.7-6.63L38.54 18.6c-2.03-1.01-4.31-1.6-6.73-1.6s-4.71.58-6.73 1.6L14.27 7.8a29.89 29.89 0 0 0-6.63 6.7l10.75 10.75A14.879 14.879 0 0 0 16.76 32c0 2.43.59 4.72 1.63 6.75L7.64 49.5c1.85 2.57 4.09 4.83 6.63 6.7l10.8-10.8c2.03 1.01 4.31 1.6 6.73 1.6s4.71-.58 6.73-1.6L49.5 56.36c2.57-1.85 4.83-4.08 6.7-6.63L45.23 38.75z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M31.8 17c2.42 0 4.71.58 6.73 1.6L49.5 7.64A29.837 29.837 0 0 0 32 2c-6.63 0-12.76 2.16-17.73 5.8l10.8 10.8c2.03-1.02 4.31-1.6 6.73-1.6z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M46.85 32c0 2.43-.59 4.72-1.63 6.75L56.2 49.73C59.84 44.76 62 38.63 62 32c0-6.63-2.16-12.76-5.8-17.73L45.23 25.25c1.03 2.03 1.62 4.32 1.62 6.75zM16.76 32c0-2.43.59-4.72 1.63-6.75L7.64 14.5C4.09 19.43 2 25.47 2 32s2.09 12.57 5.64 17.5l10.75-10.75A14.752 14.752 0 0 1 16.76 32z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M31.8 47c-2.42 0-4.71-.58-6.73-1.6l-10.8 10.8C19.24 59.84 25.37 62 32 62c6.53 0 12.57-2.09 17.5-5.64L38.54 45.4c-2.03 1.02-4.31 1.6-6.74 1.6zM34.8 25.78h-2l-1-1.78-1 1.78h-2l1 1.78-1 1.78h2l1 1.78 1-1.78h2l-1-1.78 1-1.78zM28.8 34.67h-2l-1-1.78-1 1.78h-2l1 1.78-1 1.78h2l1 1.78 1-1.78h2l-1-1.78 1-1.78zM40.8 34.67h-2l-1-1.78-1 1.78h-2l1 1.78-1 1.78h2l1 1.78 1-1.78h2l-1-1.78 1-1.78z"
  }), _react["default"].createElement("linearGradient", {
    id: "burundi_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#burundi_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBurundi;
exports["default"] = _default;