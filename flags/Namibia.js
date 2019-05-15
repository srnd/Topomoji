"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNamibia = function SvgNamibia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M17 6.02C6.35 12.17.9 23.86 2.19 35.35L49.81 7.86C40.5 1 27.65-.14 17 6.02zm8.55 11.42l-3.18-.91.91 3.18-2.3-2.38-.8 3.21-.8-3.21-2.3 2.38.91-3.18-3.18.91 2.38-2.3-3.21-.8 3.21-.81-2.38-2.3 3.18.91-.91-3.18 2.3 2.38.8-3.21.8 3.21 2.3-2.38-.91 3.18 3.18-.91-2.38 2.3 3.21.8-3.21.8 2.38 2.31z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M14.19 56.14C23.5 63 36.35 64.13 47 57.98c10.65-6.15 16.1-17.85 14.81-29.34l-47.62 27.5z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M57.98 17a30.14 30.14 0 0 0-4.95-6.38L2.97 39.52c.66 2.56 1.66 5.08 3.05 7.48a30.14 30.14 0 0 0 4.95 6.38l50.07-28.9A30.08 30.08 0 0 0 57.98 17z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.5 26.52c-.13-.68-.29-1.36-.47-2.04l-50.07 28.9c.5.49 1 .97 1.53 1.43.55.47 1.11.91 1.69 1.33L61.8 28.65c-.07-.71-.17-1.43-.3-2.13zM51.5 9.19c-.55-.47-1.11-.91-1.69-1.33L2.19 35.35c.08.71.18 1.42.31 2.13.13.68.29 1.36.47 2.04l50.07-28.9c-.51-.49-1.01-.98-1.54-1.43z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M23.17 13.53l2.38-2.3-3.18.91.91-3.18-2.31 2.38-.8-3.22-.81 3.22-2.3-2.38.91 3.18-3.18-.91 2.38 2.3-3.21.81 3.21.8-2.38 2.3 3.18-.91-.91 3.18 2.31-2.37.8 3.21.8-3.21 2.3 2.37-.9-3.18 3.18.91-2.38-2.3 3.21-.81z"
  }), _react["default"].createElement("linearGradient", {
    id: "namibia_svg__a",
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
    fill: "url(#namibia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNamibia;
exports["default"] = _default;