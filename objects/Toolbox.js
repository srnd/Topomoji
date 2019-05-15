"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgToolbox = function SvgToolbox(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F50000",
    d: "M62 51a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V25c31.414-1.939 60 0 60 0v26z"
  }), _react["default"].createElement("linearGradient", {
    id: "toolbox_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 26,
    x2: 32.001,
    y2: 16
  }, _react["default"].createElement("stop", {
    offset: 0.049,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.05,
    stopColor: "#d00000"
  }), _react["default"].createElement("stop", {
    offset: 0.09,
    stopColor: "#e10000"
  }), _react["default"].createElement("stop", {
    offset: 0.14,
    stopColor: "#ec0000"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#f30000"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#f50000"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#ff7259"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#f3594b"
  })), _react["default"].createElement("path", {
    fill: "url(#toolbox_svg__a)",
    d: "M55.527 16.314A2.307 2.307 0 0 0 54.359 16H9.641a2.31 2.31 0 0 0-1.168.314C2 20.167 2 20.209 2 21.833V26h60v-4.167c0-1.624 0-1.666-6.473-5.519z"
  }), _react["default"].createElement("path", {
    fill: "#C40000",
    d: "M60 48.5c0 1.375-1.125 2.5-2.5 2.5h-51A2.507 2.507 0 0 1 4 48.5V32h56v16.5z"
  }), _react["default"].createElement("path", {
    fill: "#F50000",
    d: "M59.5 38.75c0 1.243-.912 2.25-2.037 2.25H6.537C5.412 41 4.5 39.993 4.5 38.75V32.5h55v6.25zM59.5 48.25c0 1.242-.912 2.25-2.037 2.25H6.537c-1.125 0-2.037-1.008-2.037-2.25V41.5h55v6.75z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M13.5 26h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5zM9.5 26h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M14 28l-.5.5-.387 1.158a.498.498 0 0 1-.474.342h-3.28a.497.497 0 0 1-.473-.342L8.5 28.5 8 28v-1.5c0-.275.225-.5.5-.5h5c.275 0 .5.225.5.5V28z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M11.5 26.5h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M9.5 28.5A.499.499 0 0 1 9 28v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5zM12.5 28.5a.499.499 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M55.5 26h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5zM51.5 26h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M56 28l-.5.5-.387 1.158a.498.498 0 0 1-.474.342H51.36a.497.497 0 0 1-.473-.342L50.5 28.5 50 28v-1.5c0-.275.225-.5.5-.5h5c.275 0 .5.225.5.5V28z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M53.5 26.5h-1a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M51.5 28.5a.499.499 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5zM54.5 28.5a.499.499 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "toolbox_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 18.882,
    x2: 32.001,
    y2: 11
  }, _react["default"].createElement("stop", {
    offset: 0.697,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e585e"
  })), _react["default"].createElement("path", {
    fill: "url(#toolbox_svg__b)",
    d: "M32 11c-8.068 0-9.859 1.444-10.699 7.029-.129.853.85.853 2.16.853.119-6.696 4.426-4.859 8.539-4.859 4.115 0 8.422-1.837 8.539 4.859 1.313 0 2.289 0 2.16-.853C41.859 12.444 40.068 11 32 11z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M36.652 18.882h3.887c.186 0-.025-1.741-.152-1.741h-1.984c-.876 0-1.751.928-1.751 1.741zM27.348 18.882h-3.887c-.186 0 .025-1.741.154-1.741h1.984c.874 0 1.749.928 1.749 1.741z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M59.5 43.75h-55V41.5h55v2.25zM59.5 34.75h-55V32.5h55v2.25z"
  }));
};

var _default = SvgToolbox;
exports["default"] = _default;