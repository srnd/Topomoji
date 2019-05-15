"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComet = function SvgComet(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "comet_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 12.575,
    y1: 54.82,
    x2: 27.633,
    y2: 9.149,
    gradientTransform: "translate(-2.287 -.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ad6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#1eb2de"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009ac7"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__a)",
    d: "M25.563 8.296L5.023 48.297l10.682 10.682z"
  }), _react["default"].createElement("linearGradient", {
    id: "comet_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 13.043,
    y1: 54.446,
    x2: 57.629,
    y2: 38.391,
    gradientTransform: "translate(-2.287 -.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ad6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#1eb2de"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009ac7"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__b)",
    d: "M55.705 38.441L5.023 48.297l10.682 10.682z"
  }), _react["default"].createElement("linearGradient", {
    id: "comet_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 12.48,
    y1: 54.857,
    x2: 41.43,
    y2: 8.771,
    gradientTransform: "translate(-2.287 -.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#94e7ff"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#68d5f6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00ace0"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__c)",
    d: "M39.808 8.297l-34.785 40 10.682 10.682z"
  }), _react["default"].createElement("linearGradient", {
    id: "comet_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 12.652,
    y1: 54.587,
    x2: 57.488,
    y2: 24.308,
    gradientTransform: "translate(-2.287 -.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#94e7ff"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#68d5f6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00ace0"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__d)",
    d: "M55.705 24.195l-40 34.784L5.023 48.297z"
  }), _react["default"].createElement("linearGradient", {
    id: "comet_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -161.302,
    y1: 8.181,
    x2: -161.302,
    y2: -73.365,
    gradientTransform: "rotate(45.001 -140.624 233.87)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#adf1ff"
  }), _react["default"].createElement("stop", {
    offset: 0.398,
    stopColor: "#63deff"
  }), _react["default"].createElement("stop", {
    offset: 0.808,
    stopColor: "#1ccbff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00c4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__e)",
    d: "M15.644 59.648C16.049 59.242 62 2 62 2S4.752 47.954 4.34 48.366a7.989 7.989 0 0 0-.002 11.295 7.988 7.988 0 0 0 11.295 0l.011-.013z"
  }), _react["default"].createElement("linearGradient", {
    id: "comet_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -173.538,
    y1: -6.028,
    x2: -151.405,
    y2: -28.161,
    gradientTransform: "rotate(45.001 -141.796 235.04)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#adf1ff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#adf1ff"
  })), _react["default"].createElement("path", {
    fill: "url(#comet_svg__f)",
    d: "M37.518 26.485L6.217 49.491l8.295 8.294z"
  }), _react["default"].createElement("path", {
    fill: "#C2F8FF",
    d: "M15.001 32.508c0 2.659-3.987 2.66-3.988 0 .001-2.658 3.988-2.659 3.988 0zM20.265 24.197c0 1.328-1.994 1.326-1.993-.001-.001-1.33 1.993-1.33 1.993.001zM22.281 29.881c-.001 1.327-1.994 1.326-1.994 0 0-1.331 1.994-1.331 1.994 0zM35.967 8.297c0 1.329-1.993 1.329-1.993 0 0-1.33 1.993-1.33 1.993 0zM47.189 3.623c0 1.329-1.996 1.329-1.996-.001 0-1.327 1.996-1.327 1.996.001zM44.387 10.976c0 1.327-1.994 1.328-1.994 0 .001-1.329 1.994-1.329 1.994 0zM48.186 24.82c0 1.327-1.993 1.327-1.993 0-.002-1.329 1.993-1.329 1.993 0zM55.33 29.882c0 1.325-1.994 1.325-1.994-.001 0-1.331 1.995-1.331 1.994.001zM36.964 38.441c-.001 1.33-1.995 1.329-1.994.001 0-1.329 1.994-1.328 1.994-.001zM33.063 47.236c.001 1.33-1.994 1.33-1.994 0s1.994-1.329 1.994 0zM42.393 43.182c0 1.329-1.994 1.329-1.994-.001-.001-1.327 1.994-1.327 1.994.001zM33.488 24.196c.001 2.658-3.988 2.657-3.988 0 0-2.659 3.988-2.659 3.988 0zM32.068 12.895c0 2.656-3.99 2.657-3.99-.001.001-2.66 3.989-2.659 3.99.001zM54.335 20.068c-.001 2.66-3.99 2.66-3.99.001 0-2.658 3.99-2.66 3.99-.001zM48.186 36.845c0 2.66-3.988 2.659-3.988-.001-.001-2.658 3.988-2.658 3.988.001z"
  }), _react["default"].createElement("radialGradient", {
    id: "comet_svg__g",
    cx: -161.331,
    cy: -0.226,
    r: 7.5,
    gradientTransform: "matrix(.7058 .7059 -.7058 .7059 123.7 168.054)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#e8ffff"
  }), _react["default"].createElement("stop", {
    offset: 0.964,
    stopColor: "#e8ffff",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#comet_svg__g)",
    cx: 9.987,
    cy: 54.014,
    r: 7.487
  }));
};

var _default = SvgComet;
exports["default"] = _default;