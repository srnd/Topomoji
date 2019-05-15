"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPerseveringFace = function SvgPerseveringFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "persevering-face_svg__a",
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
    fill: "url(#persevering-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M9.456 25.181c5.242.237 11.211-1.973 13.487-4.765.478-.591-.72-3.061-1.184-2.622-3.561 3.379-8.396 5.719-13.247 5.811-.65.012.157 1.541.944 1.576zM54.544 25.179c-5.243.238-11.21-1.971-13.486-4.764-.48-.588.721-3.062 1.184-2.621 3.561 3.376 8.396 5.719 13.245 5.81.652.011-.155 1.541-.943 1.575z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.08 27.498c-.588-.301-1.05.427-.553.845 6.092 5.124 7.025 6.135 7.024 6.584.001.45-.933 1.46-7.024 6.584-.497.418-.035 1.146.553.846 12.752-6.513 14.236-6.98 14.236-7.43s-1.484-.917-14.236-7.429zM48.92 42.355c.588.301 1.05-.426.553-.844-6.092-5.125-7.025-6.135-7.024-6.584-.001-.451.933-1.461 7.024-6.584.497-.418.035-1.146-.553-.846-12.752 6.512-14.236 6.98-14.236 7.43s1.484.917 14.236 7.428zM22.77 52.328c5.623-4.66 12.844-4.658 18.463 0 .797.658.895-.053.648-.611-4.16-9.5-15.602-9.498-19.762 0-.246.558-.148 1.269.651.611z"
  }));
};

var _default = SvgPerseveringFace;
exports["default"] = _default;