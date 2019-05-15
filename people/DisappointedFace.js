"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDisappointedFace = function SvgDisappointedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "disappointed-face_svg__a",
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
    fill: "url(#disappointed-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.59 52.131c5.295-3.813 13.525-3.813 18.822 0 .813.582 1.296-.047 1.037-.543-5.148-9.84-15.75-9.84-20.898 0-.259.496.224 1.125 1.039.543zM51.72 34.197c-5.105 1.934-11.756.152-15.211-4.076-.529-.646-1.057-.242-.955.215 2.029 9.064 10.598 11.361 16.887 4.523.316-.343.062-.957-.721-.662zM27.491 30.121c-3.455 4.229-10.105 6.01-15.211 4.076-.782-.295-1.037.318-.721.662 6.289 6.838 14.858 4.541 16.887-4.523.103-.457-.425-.861-.955-.215z"
  }));
};

var _default = SvgDisappointedFace;
exports["default"] = _default;