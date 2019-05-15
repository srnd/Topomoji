"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAustralia = function SvgAustralia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2v10H12v20H2c0 16.57 13.43 30 30 30s30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 2c-4.69 0-9.13 1.09-13.09 3.01V11H11v7.91H5.01A29.896 29.896 0 0 0 2 32h12V17l12 15h6v-7.5L23.6 14H32V2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M15.43 14L30 32h2v-4.94L21.43 14z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 5H18.91A30.153 30.153 0 0 0 5 18.91V32h6V11h21V5z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M8 35.71L10.23 33l-.69 3.48 3.46.09-3.08 1.62 2.09 2.83-3.15-1.46L8 43l-.85-3.44-3.16 1.46 2.09-2.83L3 36.57l3.46-.09L5.77 33zM52 20.17L53.78 18l-.55 2.78 2.77.08-2.46 1.29 1.67 2.27-2.53-1.17L52 26l-.68-2.75-2.53 1.17 1.67-2.27L48 20.86l2.77-.08-.55-2.78zM52 40.17L53.78 38l-.55 2.78 2.77.08-2.46 1.29 1.67 2.27-2.53-1.17L52 46l-.68-2.75-2.53 1.17 1.67-2.27L48 40.86l2.77-.08-.55-2.78zM42 26.17L43.78 24l-.55 2.78 2.77.08-2.46 1.29 1.67 2.27-2.53-1.17L42 32l-.68-2.75-2.53 1.17 1.67-2.27L38 26.86l2.77-.08-.55-2.78z"
  }), _react["default"].createElement("linearGradient", {
    id: "australia_svg__a",
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
    fill: "url(#australia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAustralia;
exports["default"] = _default;