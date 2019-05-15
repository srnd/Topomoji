"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPensiveFace = function SvgPensiveFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pensive-face_svg__a",
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
    fill: "url(#pensive-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M9.402 29.439c5.243.237 11.212-1.973 13.487-4.765.479-.591-.719-3.061-1.184-2.622-3.561 3.379-8.395 5.719-13.247 5.811-.65.012.157 1.541.944 1.576zM54.598 29.437c-5.242.238-11.211-1.971-13.486-4.764-.48-.588.721-3.062 1.184-2.621 3.561 3.376 8.396 5.719 13.246 5.81.651.012-.157 1.541-.944 1.575z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M27.238 34.201c-4.281 3.271-10.932 3.271-15.214 0-.654-.502-1.045.041-.838.465 4.161 8.445 12.729 8.445 16.888 0 .211-.424-.179-.967-.836-.465zM51.975 34.201c-4.281 3.271-10.932 3.271-15.213 0-.654-.502-1.045.041-.838.465 4.16 8.445 12.729 8.445 16.887 0 .21-.424-.18-.967-.836-.465zM24.607 52.391c3.271-1.309 11.517-1.307 14.785 0 .687.34.708-.193.468-.549-4.139-5.789-11.584-5.789-15.722 0-.241.357-.218.888.469.549z"
  }));
};

var _default = SvgPensiveFace;
exports["default"] = _default;