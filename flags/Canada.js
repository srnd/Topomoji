"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCanada = function SvgCanada(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M48 6.629A29.838 29.838 0 0 0 32 2a29.843 29.843 0 0 0-16 4.629v50.744A29.839 29.839 0 0 0 32 62c5.885 0 11.37-1.699 16-4.627V6.629z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M48 6.629v50.744C56.41 52.137 62 42.527 62 32S56.41 11.865 48 6.629zM16 6.629C7.589 11.865 2 21.473 2 32s5.59 20.137 14 25.373V6.629zM42.914 31.555c-.432-.188-.453-.574-.408-.836l1.031-3.627-3.475.721c-.119.016-.451-.01-.623-.689l-.307-1.236-2.41 2.764s-1.559 1.691-1.07-.891l1.047-5.516-1.936.959c-.109.043-.49.098-.996-.857L32 19l-1.766 3.346c-.506.955-.887.9-.998.857l-1.934-.959 1.045 5.516c.49 2.582-1.07.891-1.07.891l-2.408-2.764-.307 1.236c-.172.68-.502.705-.625.689l-3.473-.721 1.029 3.627c.045.262.025.648-.406.836L20 32.031s3.986 3.182 5.291 4.268c.256.209.871.824.658 1.484l-.465 1.443 5.453-.828c.281-.023.879.025.84.908L31.523 45h.953l-.254-5.693c-.037-.883.563-.932.84-.908l5.455.828-.467-1.443c-.211-.66.404-1.275.658-1.484C40.016 35.213 44 32.031 44 32.031l-1.086-.476z"
  }), _react["default"].createElement("linearGradient", {
    id: "canada_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#canada_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgCanada;
exports["default"] = _default;