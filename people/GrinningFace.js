"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGrinningFace = function SvgGrinningFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "grinning-face_svg__a",
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
    fill: "url(#grinning-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 24.5,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 24.5,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M51 37.789c0-.893-.527-2.01-2.037-2.297C45.092 34.756 39.375 34 32 34h-.002c-7.368 0-13.09.756-16.961 1.492-1.508.287-2.037 1.404-2.037 2.297C13 45.867 19.271 54 31.998 54H32c12.729 0 19-8.133 19-16.211z"
  }), _react["default"].createElement("linearGradient", {
    id: "grinning-face_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 51.75,
    x2: 32.001,
    y2: 48.325
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d63324"
  }), _react["default"].createElement("stop", {
    offset: 0.08,
    stopColor: "#dc3f31"
  }), _react["default"].createElement("stop", {
    offset: 0.247,
    stopColor: "#e75346"
  }), _react["default"].createElement("stop", {
    offset: 0.435,
    stopColor: "#ee6155"
  }), _react["default"].createElement("stop", {
    offset: 0.657,
    stopColor: "#f3695d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f46c60"
  })), _react["default"].createElement("path", {
    fill: "url(#grinning-face_svg__b)",
    d: "M23.999 50.082c2.314 1.051 4.981 1.668 8 1.668 3.022 0 5.688-.617 8.002-1.668C40.002 50.082 36 47 32 49c-4-2-8.001 1.082-8.001 1.082z"
  }), _react["default"].createElement("linearGradient", {
    id: "grinning-face_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 15.999,
    y1: 39.5,
    x2: 47.999,
    y2: 39.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd7e6"
  }), _react["default"].createElement("stop", {
    offset: 0.037,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 0.126,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.215,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.7,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.785,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.874,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.963,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd7e6"
  })), _react["default"].createElement("path", {
    fill: "url(#grinning-face_svg__c)",
    d: "M46.504 38.037C43.996 37.66 38.689 37 32 37c-6.689 0-11.995.66-14.505 1.037-1.478.221-1.567.76-1.466 1.52.063.451.157 1 .303 1.588.161.652.291.824 1.447.836 2.221.027 26.222.027 28.444 0 1.156-.012 1.279-.184 1.445-.836.145-.588.242-1.137.301-1.588.105-.76.011-1.299-1.465-1.52z"
  }));
};

var _default = SvgGrinningFace;
exports["default"] = _default;