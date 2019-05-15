"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNewCaledonia = function SvgNewCaledonia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.29 42a30.086 30.086 0 0 0 0-20H3.71a30.086 30.086 0 0 0 0 20h56.58z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 24,
    cy: 32,
    r: 17.7
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24 14c-9.93 0-18 8.07-18 18s8.07 18 18 18 18-8.07 18-18-8.07-18-18-18zM6.6 32c0-9.47 7.61-17.2 17.04-17.4v3.86c-1.08.48-1.95.91-2.12 1.87-.02.13-.05 1.45-.08 1.77 0 0 .18.02.63-.33.19-.16.78-.26 1.58-.75v2.01a2.409 2.409 0 0 0-2.04 2.37c0 1.2.89 2.2 2.04 2.37v.5c-.91-.05-1.72-.33-2.4-1.73-.38-.78-1.38-1.98-1.38-1.98s.47 1.35.54 2.7c.1 1.99 1.86 2.2 3.24 2.22v.36H21v.72h2.64v.36c-1.15.11-2.04.74-2.04 1.5s.89 1.39 2.04 1.5v.36H21V35h2.64v.37c-2.04.08-3.02.91-3.14 2.07-.23 2.54-.7 4.52-.7 4.52s.75-.93 1.64-3.12c.41-1 1.3-1.64 2.2-1.78v.26c-.92.25-1.62 1.42-1.62 2.83 0 1.41.7 2.59 1.62 2.83v.82c-1.19.03-2.35.29-2.96.77-.82.65-2.83 2.64-3.56 3.39C10.94 45.31 6.6 39.15 6.6 32zm23.97 16.11c-.71-.76-2.53-2.67-3.57-3.53-.55-.45-1.56-.7-2.64-.76v-.83c.92-.25 1.62-1.42 1.62-2.83 0-1.41-.7-2.58-1.62-2.83v-.26c.9.13 1.8.77 2.2 1.78.88 2.19 1.64 3.12 1.64 3.12s-.47-1.98-.71-4.52c-.11-1.17-1.1-1.99-3.14-2.07V35H27v-.72h-2.64v-.36c1.16-.11 2.04-.74 2.04-1.5s-.89-1.39-2.04-1.5v-.36H27v-.72h-2.64v-.36c1.39-.02 3.14-.23 3.24-2.22.07-1.35.54-2.7.54-2.7s-1 1.2-1.38 1.98c-.69 1.4-1.49 1.68-2.4 1.73v-.5a2.392 2.392 0 0 0 2.04-2.37c0-1.2-.89-2.19-2.04-2.37V20.5c.7-.58 1.5-1.48 2.29-2.91.44-.79.23-1.13.23-1.13s.02.05-.3.33c-.71.62-1.49 1.02-2.22 1.35V14.6c9.43.2 17.04 7.93 17.04 17.4 0 7.27-4.48 13.51-10.83 16.11z"
  }), _react["default"].createElement("linearGradient", {
    id: "new-caledonia_svg__a",
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
    fill: "url(#new-caledonia_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNewCaledonia;
exports["default"] = _default;