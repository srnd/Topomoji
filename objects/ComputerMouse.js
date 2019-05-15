"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerMouse = function SvgComputerMouse(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "computer-mouse_svg__a",
    cx: 31.916,
    cy: 24.334,
    r: 23.306,
    gradientTransform: "matrix(1 0 0 1.5875 0 -14.297)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#e9eef2"
  }), _react["default"].createElement("stop", {
    offset: 0.722,
    stopColor: "#dfe5ea"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#computer-mouse_svg__a)",
    d: "M48.51 28.503C48.51 34.189 57.344 62 32 62S15.49 34.189 15.49 28.503C15.49 18.151 9.902 2 32 2c22.1 0 16.51 16.151 16.51 26.503z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M15.458 29.201l.032-.853a525.364 525.364 0 0 1 33.021 0c.012.284.021.568.033.853a525.915 525.915 0 0 0-33.086 0zM35.246 20.473c0 4.455-6.492 4.455-6.492 0v-8.429c0-4.454 6.492-4.454 6.492 0v8.429z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M31.574 2h.852v26.201h-.852z"
  }), _react["default"].createElement("linearGradient", {
    id: "computer-mouse_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 29.564,
    y1: 16.258,
    x2: 34.435,
    y2: 16.258
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.28,
    stopColor: "#4c5a63"
  }), _react["default"].createElement("stop", {
    offset: 0.566,
    stopColor: "#444e59"
  }), _react["default"].createElement("stop", {
    offset: 0.854,
    stopColor: "#383947"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#computer-mouse_svg__b)",
    d: "M34.436 19.881c0 3.828-4.871 3.828-4.871 0v-7.244c0-3.829 4.871-3.829 4.871 0v7.244z"
  }));
};

var _default = SvgComputerMouse;
exports["default"] = _default;