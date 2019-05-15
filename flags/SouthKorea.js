"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSouthKorea = function SvgSouthKorea(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#F5F5F5",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M23.42 33.71A6.184 6.184 0 0 0 32 32c1.89-2.84 5.74-3.61 8.58-1.72a6.186 6.186 0 0 1 2.04 8.04c3.35-5.63 1.75-12.95-3.76-16.62-5.69-3.79-13.37-2.26-17.16 3.43-.12.18-.21.36-.32.54-1.47 2.78-.63 6.27 2.04 8.04z"
  }), _react["default"].createElement("path", {
    fill: "#003478",
    d: "M42.3 38.87c.12-.18.23-.36.32-.54-.11.17-.2.36-.32.54z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M40.58 30.28C37.74 28.39 33.89 29.16 32 32c-1.9 2.84-5.74 3.61-8.58 1.71a6.184 6.184 0 0 1-2.04-8.04c-3.35 5.62-1.75 12.94 3.76 16.62 5.69 3.79 13.37 2.26 17.16-3.43a6.186 6.186 0 0 0-1.72-8.58z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M7.8 23.31l6.87-10.3-.69-.46-.69-.46-6.87 10.3.7.46zM9.69 24.56l.69.46 6.86-10.3-.69-.45-.69-.47L9 24.1zM18.44 15.52l-6.87 10.3.69.46.69.46 6.87-10.3-.69-.46zM48.53 42.52l.69.46 3.21-4.8-.69-.46-.7-.46-3.2 4.8zM56.19 40.69l-3.2 4.81.69.46.69.46 3.2-4.81-.69-.46zM51.8 44.7l3.2-4.8-.69-.46-.69-.46-3.2 4.8.69.46zM48.07 43.21l-.69-.46-3.2 4.81.69.46.69.46 3.2-4.81zM50.65 44.93l-.69-.46-3.2 4.8.68.46.7.46 3.2-4.8zM52.53 46.19l-3.2 4.8.69.46.69.46 3.2-4.8-.69-.46zM7.12 41.15l-.7.46 6.87 10.3.69-.46.69-.46-6.87-10.3zM13.35 44.93l-.69.46 3.2 4.8.69-.46.69-.46-3.2-4.8zM12.26 37.72l-.69.46 6.87 10.3.69-.46.69-.46-6.87-10.3zM9 39.9l3.2 4.8.69-.46.69-.46-3.2-4.8-.69.46zM53.22 17.35l.69-.46-3.2-4.8-.69.46-.69.46 3.2 4.8zM48.07 20.79l.69-.46-3.2-4.81-.69.46-.69.46 3.2 4.81zM52.99 18.5l3.2 4.81.69-.46.69-.46-3.2-4.81-.69.46zM54.31 24.56l.69-.46-6.86-10.3-.7.47-.68.45 6.86 10.3zM51.74 26.28l.69-.46-3.21-4.8-.69.45-.69.47 3.2 4.8z"
  }), _react["default"].createElement("linearGradient", {
    id: "south-korea_svg__a",
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
    fill: "url(#south-korea_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSouthKorea;
exports["default"] = _default;