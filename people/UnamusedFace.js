"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUnamusedFace = function SvgUnamusedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "unamused-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#unamused-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M57.813 26.807c-3.188-4.168-8.717-7.32-12.318-7.269-.761.012-1.883 2.519-1.248 2.592 4.876.557 9.777 2.756 12.965 6.412.428.491 1.079-1.109.601-1.735zM6.189 26.81c3.186-4.171 8.715-7.322 12.316-7.271.76.01 1.883 2.52 1.248 2.591-4.875.559-9.778 2.756-12.965 6.412-.427.494-1.079-1.107-.599-1.732z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M26.503 30.862c-3.35-3.887-13.57-2.728-17.043 3.107-.232.391.077.867.61.539 3.354-2.063 7.571-1.959 7.571-1.959.008 2.809 2.227 5.084 4.967 5.084 3.969.001 5.86-4.489 3.895-6.771zM53.836 30.862c-3.35-3.887-13.57-2.728-17.043 3.107-.232.391.077.867.61.539 3.354-2.063 7.571-1.959 7.571-1.959.008 2.809 2.227 5.084 4.967 5.084 3.969.001 5.86-4.489 3.895-6.771zM40.792 46.108c-6.25-2.029-14.201-.026-17.809 4.925-.295.406.096.881.541.572 3.607-2.51 11.035-4.089 16.291-2.2 2.012.724 3.109-2.604.977-3.297z"
  }));
};

var _default = SvgUnamusedFace;
exports["default"] = _default;