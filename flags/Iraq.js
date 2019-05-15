"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIraq = function SvgIraq(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M3.71 22a30.086 30.086 0 0 0 0 20h56.57C61.39 38.87 62 35.51 62 32s-.61-6.87-1.71-10H3.71z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M44.72 26.57c-.18-.09-.38-.24-.45-.33-.1-.14-.04-.14.37-.03.73.2 1.21.12 1.68-.28l.42-.35.49.25c.27.14.56.23.64.21.21-.06.65-.62.64-.81-.02-.24.19-.18.29.08.2.52-.09 1.11-.59 1.24-.25.06-.47.04-.84-.09-.46-.16-.54-.16-.76.02-.53.39-1.24.43-1.89.09zM46.54 24.91c-.18-.23-.39-1.09-.32-1.3.06-.18.12-.22.29-.17.29.09.36.29.31.97-.03.56-.11.71-.28.5zM25.1 24.29c-.06.42.74 1.45 1.1 1.64-.24.11-.55.06-.77.18-1.26 1.25-5.83 5.72-6.67 6.79 2.48.05 5.22-.04 7.55-.14 0-1.68 1.59-1.77 2.66-2.38.55.87 1.93.8 2.1 2.1v5.6H9.91c-.37 1.64-1.86 2.9-3.92 2.38.64-.67 1.72-.9 2.1-1.82.33-2.02-.65-3.27-1.28-4.42 1.04-.38 1.2-.47 2.26-1.19C8.33 35.3 11.01 35.05 13 35c.07-.77.03-1.67-.56-1.79.76-.28.89-.37 2.1-1.4v3.05c4.72 0 9.83-.04 14.65-.04 0-.95.25-2.48-.5-2.48-.72 0-.03 1.96-.59 1.96H16.79c0-.42-.01-1.3-.01-1.94.48-.48.42-.44 3.7-3.71.31-.33 2.61-2.41 4.62-4.36zM53.38 24.21c.79.42 1.42 1.01 2.38 1.26-.11.4-.47.56-.56.98v8.54c1.08.24 1.31-.37 1.82-.7.14 1.37 1.01 2.71.98 3.78h-4.63c.01-4.61.01-9.24.01-13.86zM47.22 28.79s1.68-1.42 1.68-1.47v7.46h1.21c0-2.84-.04-5.72-.04-8.36.49-.49 1.45-1.2 1.69-1.7v13.36H41.14c-.15-2.77-.18-5.64 3.05-5.03v-1.13c-.1-.19-.28.05-.32-.2.51-.51.69-.64 2.08-1.86 0 1.46.03 4.92.03 4.92h1.22c.01-.01.02-5.8.02-5.99zm-3.99 5.9c.23.34 1 .34.96-.24-.12-.47-1.14-.29-.96.24z"
  }), _react["default"].createElement("circle", {
    fill: "#529320",
    cx: 12.49,
    cy: 39.65,
    r: 0.65
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32.5 24.22c.79.42 1.42 1.01 2.38 1.26-.11.4-.47.56-.56.98v8.55c1.08.24 1.31-.38 1.82-.7.14 1.37 1.01 2.71.98 3.78H32.5V24.22z"
  }), _react["default"].createElement("linearGradient", {
    id: "iraq_svg__a",
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
    fill: "url(#iraq_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgIraq;
exports["default"] = _default;