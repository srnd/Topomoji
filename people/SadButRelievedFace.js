"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSadButRelievedFace = function SvgSadButRelievedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sad-but-relieved-face_svg__a",
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
    fill: "url(#sad-but-relieved-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M10.456 26.284c5.242.237 11.211-1.973 13.486-4.765.479-.591-.719-3.061-1.184-2.622-3.561 3.379-8.396 5.719-13.246 5.811-.65.013.157 1.541.944 1.576zM53.545 26.282c-5.244.238-11.211-1.971-13.486-4.764-.48-.588.721-3.062 1.184-2.621 3.561 3.376 8.396 5.719 13.244 5.81.652.012-.155 1.541-.942 1.575z"
  }), _react["default"].createElement("radialGradient", {
    id: "sad-but-relieved-face_svg__b",
    cx: -72.887,
    cy: 8.667,
    r: 13.08,
    gradientTransform: "matrix(.8863 0 0 .9091 67.738 34.122)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#70d4fd"
  }), _react["default"].createElement("stop", {
    offset: 0.386,
    stopColor: "#62d0f7"
  }), _react["default"].createElement("stop", {
    offset: 0.606,
    stopColor: "#4bc8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.832,
    stopColor: "#2cbee0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0fb4d4"
  })), _react["default"].createElement("path", {
    fill: "url(#sad-but-relieved-face_svg__b)",
    d: "M7.997 35.096C4.189 40.305 2 45.1 2 49.035c0 3.346 2.687 6.061 6 6.061 3.314 0 6-2.715 6-6.061 0-3.935-2.254-8.814-6.003-13.939z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 35,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 35,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.77 53.407c5.623-4.66 12.844-4.658 18.463 0 .797.658.895-.053.648-.611-4.16-9.5-15.602-9.498-19.762 0-.246.558-.148 1.269.651.611z"
  }));
};

var _default = SvgSadButRelievedFace;
exports["default"] = _default;