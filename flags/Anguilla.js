"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAnguilla = function SvgAnguilla(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M12 12h20.42v20.42H12z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M18.91 8.14V14H11.6L26 32h6v-7.5z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2v30H2c0 16.57 13.43 30 30 30s30-13.43 30-30S48.57 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11 18.91H5.01C3.09 22.87 2 27.31 2 32h12V13.91h-3v5z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 27.06L19 11h-6l17 21h2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M18.91 5.01V11H11v3h21V2c-4.69 0-9.13 1.09-13.09 3.01z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 5H18.91A30.153 30.153 0 0 0 5 18.91V32h6V11h21V5z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M50 33.38c-1.63 0-3-1.38-3-1.38s-1.38 1.38-3 1.38c-1.5 0-4-1.38-4-1.38s.36 8.78 2 11.77c1.75 3.19 5 6.23 5 6.23s3.25-3.04 5-6.23C53.64 40.78 54 32 54 32s-2.5 1.38-4 1.38z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M42.88 43.29c1.18 2.15 3.1 4.26 4.12 5.31 1.02-1.04 2.95-3.16 4.12-5.3l-8.24-.01z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M46.97 35.54c-.92.96-.37 3.62-1.29 2.66s-.92-2.52 0-3.47c.92-.96 2.41-.96 3.33 0 .92.95-1.12-.15-2.04.81z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M44.79 39.96c1.26.35 3.22-1.47 2.87-.17-.34 1.3-1.65 2.08-2.91 1.74-1.26-.34-2.01-1.68-1.67-2.99.35-1.3.44 1.08 1.71 1.42z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M49.58 39.71c-.34-1.3-2.84-2.14-1.58-2.49 1.26-.35 2.57.43 2.91 1.74.35 1.3-.4 2.64-1.67 2.99-1.25.34.69-.94.34-2.24z"
  }), _react["default"].createElement("linearGradient", {
    id: "anguilla_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 31.999,
    y1: 62,
    x2: 31.999,
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
    fill: "url(#anguilla_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAnguilla;
exports["default"] = _default;