"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlien = function SvgAlien(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "alien_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.039,
    stopColor: "#94cc33"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#a8e839"
  }), _react["default"].createElement("stop", {
    offset: 0.751,
    stopColor: "#b4f93e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b8ff3f"
  })), _react["default"].createElement("path", {
    fill: "url(#alien_svg__a)",
    d: "M31.999 2C4.169 2.483.148 23.49 6.791 39.205 12.207 52.191 24.538 61.895 31.999 62c7.459-.106 19.797-9.805 25.209-22.795C63.853 23.49 59.831 2.482 31.999 2z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M6.984 26.757c-1.059 1.589 1.567 18.009 17.81 15.197 1.15-.198 2.674-1.307 2.813-2.461 2.316-19.5-19.364-14.624-20.623-12.736zM57.018 26.757c-1.259-1.889-22.94-6.765-20.622 12.736.138 1.155 1.661 2.264 2.812 2.462 16.244 2.811 18.868-13.61 17.81-15.198z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M39.638 48.592c-4.922 3.436-10.381 3.415-15.277 0-.588-.41-1.119.302-.721.959 1.492 2.456 4.504 4.643 8.361 4.643 3.855 0 6.867-2.187 8.359-4.643.399-.657-.132-1.367-.722-.959z"
  }), _react["default"].createElement("radialGradient", {
    id: "alien_svg__b",
    cx: 47.52,
    cy: 30.85,
    r: 11.083,
    gradientTransform: "matrix(.7562 -.6543 .4222 .488 -1.44 46.889)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#726e7a"
  }), _react["default"].createElement("stop", {
    offset: 0.101,
    stopColor: "#615d69"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#4c4854"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#45414d"
  }), _react["default"].createElement("stop", {
    offset: 0.353,
    stopColor: "#45414d"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#2c2931"
  }), _react["default"].createElement("stop", {
    offset: 0.833,
    stopColor: "#1c1a20"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#17151a"
  })), _react["default"].createElement("path", {
    fill: "url(#alien_svg__b)",
    d: "M55.8 27.899c-1.227-1.837-22.383-6.58-20.121 12.389.135 1.122 1.621 2.202 2.742 2.394 15.85 2.734 18.412-13.239 17.379-14.783z"
  }), _react["default"].createElement("radialGradient", {
    id: "alien_svg__c",
    cx: 388.803,
    cy: 30.85,
    r: 11.083,
    gradientTransform: "matrix(-.7562 -.6543 -.4222 .488 323.532 270.188)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#726e7a"
  }), _react["default"].createElement("stop", {
    offset: 0.101,
    stopColor: "#615d69"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#4c4854"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#45414d"
  }), _react["default"].createElement("stop", {
    offset: 0.353,
    stopColor: "#45414d"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#2c2931"
  }), _react["default"].createElement("stop", {
    offset: 0.833,
    stopColor: "#1c1a20"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#17151a"
  })), _react["default"].createElement("path", {
    fill: "url(#alien_svg__c)",
    d: "M8.201 27.899c1.227-1.837 22.382-6.58 20.121 12.389-.135 1.122-1.621 2.202-2.742 2.394C9.73 45.416 7.167 29.443 8.201 27.899z"
  }));
};

var _default = SvgAlien;
exports["default"] = _default;