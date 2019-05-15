"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAngola = function SvgAngola(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32 62c16.57 0 30-13.43 30-30H2c0 16.57 13.43 30 30 30z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C15.43 2 2 15.43 2 32h60C62 15.43 48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M27.49 24.48l-1.32 4.06 3.45-2.51 3.46 2.51-1.32-4.06 3.45-2.51h-4.27l-1.32-4.06-1.32 4.06h-4.27zM48.03 48.57c-.51-.82-1.13-1.42-1.95-2.15-.82-.72-1.94-1.52-2.78-2.33l-1.59 1.86c-.07.08-.04.26.04.27 1.78.31 2.34.94 3.05 1.54.96.97 1.35 2.14 1.97 2.57 1.17.81 2-.55 1.26-1.76zM33.76 41.71c-1.7.59-3.56.82-5.47.62-2.47-.26-4.82-1.24-6.74-2.82l-1.86 2.27a15.5 15.5 0 0 0 2.55 1.7l-.61 1.15c.98.53 2.01.95 3.07 1.27l.38-1.25c.99.3 2 .5 3.01.6l-.13 1.3c1.11.11 2.22.11 3.33 0l-.13-1.3c1.02-.1 2.03-.3 3.01-.6l.38 1.25c.53-.16 1.04-.35 1.55-.55l-.69-2.67-1.65-.97z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M42.29 30.99c-.36 3.4-2.02 6.34-4.45 8.39l3.58 2.48c.47-.45.91-.93 1.33-1.43l-1.01-.83.01-.01c.66-.8 1.23-1.66 1.7-2.54l1.15.62c.52-.98.95-2.01 1.27-3.07l-1.25-.38c.3-.99.5-2 .6-3.01l1.3.13c.11-1.11.11-2.22 0-3.33l-1.3.13c-.1-1.02-.3-2.03-.6-3.01l1.25-.38c-.32-1.06-.75-2.09-1.27-3.07l-1.15.62c-.48-.9-1.05-1.75-1.71-2.55l1.01-.83c-.71-.86-1.49-1.65-2.35-2.35l-.83 1.01-.01-.01c-.79-.65-1.65-1.22-2.55-1.7l.62-1.15c-.98-.52-2.01-.95-3.07-1.27l-.38 1.25c-.95-.29-1.92-.49-2.91-.59L30.95 17c7 .74 12.07 7 11.34 13.99zM37.34 41.17c-3.36-2.37-6.84-4.82-9.77-7.58l.22-.24c2.91 2.74 6.38 5.19 9.74 7.55 1.66 1.17 3.38 2.38 5 3.61l.45-.53c-5.59-4-18.83-13.19-18.99-16.54-2.61 5.1.7 8.15 2.83 9.36 5.43 3.09 9.03 5.12 14.7 8.89l.8-.94c-1.62-1.21-3.33-2.41-4.98-3.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "angola_svg__a",
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
    fill: "url(#angola_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAngola;
exports["default"] = _default;