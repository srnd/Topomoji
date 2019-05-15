"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceWithoutMouth = function SvgFaceWithoutMouth(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "face-without-mouth_svg__a",
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
    fill: "url(#face-without-mouth_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 21.998,
    cy: 28.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 41.998,
    cy: 28.5,
    rx: 4.5,
    ry: 6
  }));
};

var _default = SvgFaceWithoutMouth;
exports["default"] = _default;