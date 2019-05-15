"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIsleOfMan = function SvgIsleOfMan(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M62 32c0 16.57-13.43 30-30 30S2 48.57 2 32 15.43 2 32 2s30 13.43 30 30"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M49.29 22.79l-5.13-.28-.38-.26-1.05.82.13.83-.33 1.27-2.28 4.78-.19 1.03.09 1.07-.48.17-5.11-2.71-.2.16.23-.21-1.69-5.18-2.2-3.71-1.92-.16-1.45 1.11-6.69 2.8-1.6-.55-2.62-2.39-.8.38 2.57 4.45v.46l1.26.42.62-.56 1.24-.42 5.26-.72.97-.39.83-.67.41.31.5 5.45-3.74 3.83-2.28 3.66.74 1.77 1.66.78 5.56 4.64.25 1.68-.91 3.42.7.54 2.76-4.33.42-.21-.21-1.32-.78-.29-.95-.91-3.04-4.3-.83-.7-.96-.44.09-.51 4.69-3.01.01.04 5.26 1.44 4.31.18 1.18-1.51-.14-1.83 1.32-7.12 1.35-1.04 3.43-.88.12-.88"
  }), _react["default"].createElement("path", {
    fill: "#FFE606",
    d: "M23.96 37.6l1.76.07.58-.31.38-.51.47.19.1 1.44-.62.14-.43-.44-1-.03-.9.38-.53-.24z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32.91 47.36l-1.68.33-.18.78 1.66-.5.2-.61M46.46 22.72l-.64.13 1.12 1.29.77-.22-1.25-1.2M40.86 32.13l-1.21.79.07.5.62.09.56.35.8 1.57.7-.17-.05-.58-.49-.36-.29-.23-.46-.9.17-.59-.42-.47M17.44 22.46l-.32 1.71.45.46.48-1.64-.61-.53M29.83 20.69l-.46.36-.07.98-.5.87-.58.19-.16.6 1.32.58.38-.33-.27-.57-.01-.66.88-1.52-.53-.5"
  }), _react["default"].createElement("path", {
    fill: "#F9DB17",
    d: "M32.45 34.39l-.11.07.02.08h.53l-.43-.12-.01-.03m-3.24-4.68l-.17.56.04.02.19-.2-.03-.37-.03-.01m5.36-.94l-.17.13.18.56-.22.21.2-.16.15.08.15-.12-.29-.7"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M34.4 28.9l-2.35 1.77-2.8-.95.03.37-.2.2 2.54 1.12.71 3.06.12-.08.01.04.43.12h.07l-.38-3.2 2.13-1.76-.15-.08-.2.16.23-.21-.19-.56"
  }), _react["default"].createElement("path", {
    fill: "#F9DD16",
    d: "M19.53 25.97l.49 1.52h1.6l-1.29.94.49 1.51-1.29-.93-1.29.93.49-1.51-1.29-.94h1.6zM41.71 20.5l.49 1.51h1.6l-1.3.94.5 1.52-1.29-.94-1.29.94.49-1.52-1.29-.94h1.59zM35.25 41.53l.49 1.51h1.59l-1.29.94.5 1.52-1.29-.94-1.3.94.5-1.52-1.29-.94h1.59z"
  }), _react["default"].createElement("linearGradient", {
    id: "isle-of-man_svg__a",
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
    fill: "url(#isle-of-man_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgIsleOfMan;
exports["default"] = _default;