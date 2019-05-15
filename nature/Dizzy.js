"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDizzy = function SvgDizzy(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "dizzy_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 47.218,
    y1: 14.011,
    x2: 7.418,
    y2: 17.439
  }, _react["default"].createElement("stop", {
    offset: 0.042,
    stopColor: "#007ed6"
  }), _react["default"].createElement("stop", {
    offset: 0.116,
    stopColor: "#1493e0"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#2daceb"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#3fc0f4"
  }), _react["default"].createElement("stop", {
    offset: 0.499,
    stopColor: "#4dcefa"
  }), _react["default"].createElement("stop", {
    offset: 0.679,
    stopColor: "#55d6fe"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#57d8ff"
  })), _react["default"].createElement("path", {
    fill: "url(#dizzy_svg__a)",
    d: "M2.467 29C-1.688 8.575 22.583-2.759 47.319 10.631l-3.673 7.194C27.913 7.889 4.547 8.325 2.467 29z"
  }), _react["default"].createElement("linearGradient", {
    id: "dizzy_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 209.418,
    y1: 6.959,
    x2: 209.418,
    y2: -18.305,
    gradientTransform: "scale(-1 1) rotate(-6.558 256.879 2256.911)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#dizzy_svg__b)",
    d: "M50.583 2.77c-.193-.975-.688-1.031-1.1-.125l-3.729 8.243-8.809-1.015c-1.023-.117-1.252.351-.508 1.042l6.549 6.082-3.732 8.233c-.412.909-.023 1.237.857.73l7.756-4.429 6.547 6.072c.744.688 1.195.455 1-.519l-1.762-8.862 7.756-4.441c.881-.506.764-1.017-.258-1.132l-8.805-1.01-1.762-8.869z"
  }), _react["default"].createElement("linearGradient", {
    id: "dizzy_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 21.714,
    y1: 43.677,
    x2: 61.548,
    y2: 38.01
  }, _react["default"].createElement("stop", {
    offset: 0.042,
    stopColor: "#007ed6"
  }), _react["default"].createElement("stop", {
    offset: 0.116,
    stopColor: "#1493e0"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#2daceb"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#3fc0f4"
  }), _react["default"].createElement("stop", {
    offset: 0.499,
    stopColor: "#4dcefa"
  }), _react["default"].createElement("stop", {
    offset: 0.679,
    stopColor: "#55d6fe"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#57d8ff"
  })), _react["default"].createElement("path", {
    fill: "url(#dizzy_svg__c)",
    d: "M59.649 24c1.838 15.075-8.494 30.963-34.329 17.491l-4.788 10.675C46.487 62 69.571 48.375 59.649 24z"
  }), _react["default"].createElement("linearGradient", {
    id: "dizzy_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 75.156,
    y1: 323.718,
    x2: 75.156,
    y2: 290.633,
    gradientTransform: "rotate(-29.631 -453.494 281.481)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffb700"
  })), _react["default"].createElement("path", {
    fill: "url(#dizzy_svg__d)",
    d: "M10.41 29.214c-.27-1.275.295-1.598 1.248-.719l8.677 8.027 10.023-5.741c1.17-.664 1.68-.217 1.141.997l-4.731 10.69 8.673 8.014c.953.885.66 1.479-.656 1.327l-11.546-1.37-4.736 10.683c-.539 1.214-1.196 1.163-1.463-.113l-2.415-11.59L3.07 48.044c-1.314-.155-1.435-.831-.27-1.496l10.027-5.732-2.417-11.602z"
  }));
};

var _default = SvgDizzy;
exports["default"] = _default;