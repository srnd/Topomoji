"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNecktie = function SvgNecktie(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "necktie_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 10.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c9d1d6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#necktie_svg__a)",
    d: "M58.563 62H5.435c-4.58 0-4.58-52 0-52h53.129c4.582 0 4.582 52-.001 52z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M9.999 62h-2a331.397 331.397 0 0 1 0-52h2a361.58 361.58 0 0 0 0 52zM17.999 62h-2a496.67 496.67 0 0 1 0-52h2a567.174 567.174 0 0 0 0 52zM25.999 62h-2a993.097 993.097 0 0 1-.113-47.236h2.028c-.253 15.731-.225 31.517.085 47.236zM39.999 62h-2c.31-15.719.338-31.505.085-47.236h2.028A993.097 993.097 0 0 1 39.999 62zM47.999 62h-2a567.174 567.174 0 0 0 0-52h2a496.67 496.67 0 0 1 0 52zM55.999 62h-2a361.58 361.58 0 0 0 0-52h2a331.397 331.397 0 0 1 0 52z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M31.999 16.601c-15.442 0-13.5-13.013-13.5-13.013 2.318-2.14 25.14-2.094 27 0 0 0 1.942 13.013-13.5 13.013z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M44.677 11.72c0 6.508-25.355 6.508-25.355 0-.001-4.339 25.355-4.339 25.355 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "necktie_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 29.601
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cc1922"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e81c27"
  })), _react["default"].createElement("path", {
    fill: "url(#necktie_svg__b)",
    d: "M35.999 31.606c-1.077-2.675-6.923-2.675-8 0-4 9.935-5 30.394-5 30.394h18s-1-20.459-5-30.394z"
  }), _react["default"].createElement("radialGradient", {
    id: "necktie_svg__c",
    cx: 31.999,
    cy: 24.487,
    r: 8.461,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e81c27"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc1922"
  })), _react["default"].createElement("path", {
    fill: "url(#necktie_svg__c)",
    d: "M35.999 31.606c-.904.969-7.202 1.074-8 0-1.891-2.544-5-9.584-5-9.584s7.848-5.422 9-5.422c1.154 0 9 5.422 9 5.422s-2.826 7.254-5 9.584z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M18.499 3.588L13.999 10s2.25 4.432 4.5 18.353l13.5-11.752s-13.5-5.224-13.5-13.013zM45.499 3.588l4.5 6.412s-2.25 4.432-4.5 18.353l-13.5-11.752s13.5-5.224 13.5-13.013z"
  }));
};

var _default = SvgNecktie;
exports["default"] = _default;