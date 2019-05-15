"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAngryFace = function SvgAngryFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "angry-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 88,
    y1: -142,
    x2: 88,
    y2: -82,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
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
    fill: "url(#angry-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.77 49.527c5.623-4.658 12.843-4.656 18.462 0 .797.658.896-.053.648-.61-4.16-9.5-15.602-9.498-19.762 0-.245.56-.147 1.271.652.61zM17.614 31.572a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25.961 33.906c-3.95-4.817-9.183-7.976-14.263-10.772-.339-.287-.143-.853.363-.761 3.098.564 10.994 2.419 13.494 4.585 2.31 2.002 1.34 5.523.406 6.948zM41.887 27.072a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M38.445 26.958c2.5-2.166 10.396-4.021 13.494-4.585.506-.092.701.474.363.761-5.08 2.797-10.313 5.955-14.264 10.772-.933-1.425-1.903-4.946.407-6.948z"
  }));
};

var _default = SvgAngryFace;
exports["default"] = _default;