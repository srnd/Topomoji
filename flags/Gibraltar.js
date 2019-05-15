"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGibraltar = function SvgGibraltar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.29 42H3.71C7.83 53.65 18.94 62 32 62c13.06 0 24.17-8.35 28.29-20z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M60.29 42c1.1-3.13 1.71-6.49 1.71-10C62 15.43 48.57 2 32 2S2 15.43 2 32c0 3.51.61 6.87 1.71 10h56.58z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M48.52 24.5v-1.07h1.15v-2.49h-1.15v1.38H46.6v-1.38h-1.39V12.5h.52v-1.14h.9V9.17h-1.59v1.11h-1.56V9.17H41.1v1.11h-1.56V9.17h-1.29v2.19h.5v1.14h.46v8.43h-.24v1.38H36.8v-1.38h-.68V10.28h.75V8.76h.92V7h-1.46v.97H34.7V7h-1.87v.97h-1.64V7H29.3v.97h-1.64V7H26.2v1.76h.92v1.52h.75v10.65h-.67v1.38h-2.17v-1.38h-.24V12.5h.46v-1.14h.5V9.17h-1.29v1.11H22.9V9.17h-2.38v1.11h-1.56V9.17h-1.59v2.19h.9v1.14h.52v8.43H17.4v1.38h-1.93v-1.38h-1.15v2.49h1.15v1.07h.93v13.39l-2.07 1.36v1.44h8.77v.71h17.79v-.71h8.77v-1.44l-2.07-1.36V24.5h.93z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.28 37.88v-3.53c0-3.83-4.88-3.77-4.88 0v3.53h4.88zM23.41 18.62c0-2.12-3.17-2.09-3.17 0v3.69h3.16l.01-3.69zM35.46 38.59v-4.86c0-4.76-6.91-4.77-6.91 0v4.86h6.91zM44.61 37.88v-3.53c0-3.77-4.88-3.83-4.88 0v3.53h4.88zM40.59 22.31h3.16v-3.69c0-2.09-3.17-2.12-3.17 0l.01 3.69zM31.66 11.49h.69v3.64h-.69zM29.69 12.21h.69v2.67h-.69zM30.1 17.78v4.53h3.79v-4.53c.01-2.32-3.79-2.32-3.79 0zM33.62 12.21h.69v2.67h-.69z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M28.49 40.66h-.66v1.06h.66l2.8 1.63v7.87h-4.13v1.92h1.2v-.96H30v.96h1.29v.73H30v.96h-1.64v-.96h-1.2v1.92h4.13V57h1.19V43.34l2.8-1.63h.67v-1.06h-.67l-3.4-1.97-3.39 1.98zm5.94.53l-2.54 1.47-2.54-1.47 2.54-1.48 2.54 1.48z"
  }), _react["default"].createElement("linearGradient", {
    id: "gibraltar_svg__a",
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
    fill: "url(#gibraltar_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgGibraltar;
exports["default"] = _default;