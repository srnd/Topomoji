"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGoalNet = function SvgGoalNet(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M59 20.95H5v37.365h54V20.95zm-3 21.98l-2.732-3.238L56 36.455v6.475zm-40.434 2.156l-2.899 3.234-2.899-3.234 2.899-3.236 2.899 3.236zM9.768 34.299l2.899-3.239 2.899 3.239-2.899 3.236-2.899-3.236zm4.833 5.392l2.899-3.236 2.899 3.236L17.5 42.93l-2.899-3.239zm4.833-5.392l2.9-3.239 2.899 3.239-2.899 3.236-2.9-3.236zm2.9 7.551l2.899 3.236-2.899 3.234-2.9-3.234 2.9-3.236zm1.934-2.159l2.899-3.236 2.899 3.236-2.899 3.238-2.899-3.238zm4.833-5.392L32 31.06l2.899 3.239L32 37.535l-2.899-3.236zM32 41.85l2.899 3.236L32 48.32l-2.899-3.234L32 41.85zm1.935-2.159l2.899-3.236 2.899 3.236-2.899 3.238-2.899-3.238zm4.833-5.392l2.9-3.239 2.899 3.239-2.899 3.236-2.9-3.236zm2.9 7.551l2.899 3.236-2.899 3.234-2.9-3.234 2.9-3.236zm1.934-2.159l2.899-3.236 2.899 3.236-2.899 3.238-2.899-3.238zm4.833-5.392l2.899-3.239 2.901 3.239-2.901 3.236-2.899-3.236zm2.899 7.551l2.901 3.236-2.901 3.234-2.899-3.234 2.899-3.236zM56 25.666v6.473l-2.732-3.237L56 25.666zm0-2.75l-4 3.933-4-3.933h8zm-9.499 2.75l2.899 3.236-2.899 3.237-2.899-3.237 2.899-3.236zM45 22.916l-3.332 3.83L38 22.916h7zm-8.166 2.75l2.899 3.236-2.899 3.237-2.899-3.237 2.899-3.236zM35 22.916l-3 3.83-3-3.83h6zm-7.833 2.75l2.899 3.236-2.899 3.237-2.899-3.237 2.899-3.236zM26 22.916l-3.666 3.83L19 22.916h7zm-8.5 2.75l2.899 3.236-2.899 3.237-2.899-3.237 2.899-3.236zm-1.5-2.75l-4 3.933-3-3.933h7zm-8 2.75l2.733 3.236L8 32.139v-6.473zm0 10.789l2.733 3.236L8 42.93v-6.475zm0 11.043l2.733 3.934L8 55.363v-7.865zm6.601 2.981l2.899-3.236 2.899 3.236-2.899 3.236-2.899-3.236zm4.833 5.39l2.9-3.234 2.899 3.234h-5.799zm4.834-5.39l2.899-3.236 2.899 3.236-2.899 3.236-2.899-3.236zm4.833 5.39L32 52.635l2.899 3.234h-5.798zm4.834-5.39l2.899-3.236 2.899 3.236-2.899 3.236-2.899-3.236zm4.833 5.39l2.9-3.234 2.899 3.234h-5.799zm4.834-5.39l2.899-3.236 2.899 3.236-2.899 3.236-2.899-3.236zm9.666.953L56 47.498v7.865l-2.732-3.931z"
  }), _react["default"].createElement("radialGradient", {
    id: "goal-net_svg__a",
    cx: 32,
    cy: 46.188,
    r: 32.174,
    gradientTransform: "matrix(1 0 0 .5899 0 12.875)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#dae1e3"
  }), _react["default"].createElement("stop", {
    offset: 0.628,
    stopColor: "#d8e0e2"
  }), _react["default"].createElement("stop", {
    offset: 0.854,
    stopColor: "#d1dbdc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c7d3d4"
  })), _react["default"].createElement("path", {
    fill: "url(#goal-net_svg__a)",
    d: "M53 31.765c0-2.266 6-8.849 6-8.849l-1-3.933s-8 8.651-8 11.799v24.581H14V30.782c0-3.147-8-11.799-8-11.799l-1 3.933s6 6.583 6 8.849v23.598l-6 2.951 1 2.949 6-2.949h40l6 2.949 1-2.949-6-2.951V31.765z"
  }), _react["default"].createElement("linearGradient", {
    id: "goal-net_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 40,
    x2: 62,
    y2: 40
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.05,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#goal-net_svg__b)",
    d: "M56 18H8c-3.252 0-6 2.702-6 5.899v37.364c0 .982 4 .982 4 0V23.899c0-1.108 1.075-1.966 2-1.966h48c.925 0 2 .858 2 1.966v37.364c0 .982 4 .982 4 0V23.899C62 20.702 59.252 18 56 18z"
  }));
};

var _default = SvgGoalNet;
exports["default"] = _default;