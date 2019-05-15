"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRadio = function SvgRadio(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M55.609 6.561l.523 1.44-19.197 6.98-.524-1.44z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 55.87,
    cy: 7.276,
    r: 1.276
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M37.284 12.951l.7 1.92-26.631 9.698-.7-1.92z"
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 10.042,
    cy: 23.957,
    r: 2.042
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 10.043,
    cy: 23.957,
    r: 1.022
  }), _react["default"].createElement("path", {
    fill: "#95C539",
    d: "M62 54c0 1.988-2.012 4-4 4H6c-1.988 0-4-2.012-4-4V27.999c0-1.988 2.012-4 4-4h52c1.988 0 4 2.012 4 4V54z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M17 62h-6l-1-4h8zM53 62h-6l-1-4h8z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M30 31.999h26V38H30z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M30 31.999h26v2H30z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M49 38h-2l1-6.001z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M57 47c0 2.205-1.793 4-4 4a4 4 0 1 1 4-4z"
  }), _react["default"].createElement("linearGradient", {
    id: "radio_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 53,
    y1: 50,
    x2: 53,
    y2: 44
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#454854"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#555e67"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("circle", {
    fill: "url(#radio_svg__a)",
    cx: 53,
    cy: 47,
    r: 3
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M53.387 45.258a.194.194 0 0 1-.193.193h-.387a.192.192 0 0 1-.193-.193v-1.161c0-.106.086-.193.193-.193h.387c.105 0 .193.087.193.193v1.161z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M43 51c-2.205 0-4-1.792-4-4s1.795-4 4-4a4 4 0 0 1 0 8z"
  }), _react["default"].createElement("linearGradient", {
    id: "radio_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 43,
    y1: 50,
    x2: 43,
    y2: 44
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#454854"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#555e67"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("circle", {
    fill: "url(#radio_svg__b)",
    cx: 43,
    cy: 47,
    r: 3
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M44.742 47.387a.193.193 0 0 1-.193-.193v-.387c0-.106.086-.193.193-.193h1.16c.107 0 .193.087.193.193v.387a.193.193 0 0 1-.193.193h-1.16z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M35.828 44.172a4 4 0 1 1-5.656 5.654 4 4 0 0 1 5.656-5.654z"
  }), _react["default"].createElement("linearGradient", {
    id: "radio_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 33,
    y1: 50,
    x2: 33,
    y2: 44
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#454854"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#555e67"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("circle", {
    fill: "url(#radio_svg__c)",
    cx: 33,
    cy: 47,
    r: 3
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M32.041 45.495a.192.192 0 0 1 0 .273l-.273.273a.194.194 0 0 1-.273 0l-.82-.821a.192.192 0 0 1 0-.273l.273-.273a.192.192 0 0 1 .273 0l.82.821z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M31.5 31.999h.5v2h-.5zM33.375 31.999h.5v2h-.5zM35.25 31.999h.5v2h-.5zM37.125 31.999h.5v2h-.5zM39 31.999h.5v2H39zM40.875 31.999h.5v2h-.5zM42.75 31.999h.5v2h-.5zM44.625 31.999h.5v2h-.5zM46.5 31.999h.5v2h-.5zM48.375 31.999h.5v2h-.5zM50.25 31.999h.5v2h-.5zM52.125 31.999h.5v2h-.5zM54 31.999h.5v2H54z"
  }), _react["default"].createElement("path", {
    fill: "#6F9529",
    d: "M25 30v22c0 1.521-2 1.521-2 0V30c0-1.521 2-1.521 2 0zM21 30v22c0 1.521-2 1.521-2 0V30c0-1.521 2-1.521 2 0zM17 30v22c0 1.521-2 1.521-2 0V30c0-1.521 2-1.521 2 0zM13 30v22c0 1.521-2 1.521-2 0V30c0-1.521 2-1.521 2 0zM9 30v22c0 1.521-2 1.521-2 0V30c0-1.521 2-1.521 2 0z"
  }), _react["default"].createElement("path", {
    fill: "#3F404D",
    d: "M25 39v4c0 1.521-2 1.521-2 0v-4c0-1.521 2-1.521 2 0zM21 35v12c0 1.521-2 1.521-2 0V35c0-1.521 2-1.521 2 0zM17 33v16c0 1.521-2 1.521-2 0V33c0-1.521 2-1.521 2 0zM13 35v12c0 1.521-2 1.521-2 0V35c0-1.521 2-1.521 2 0zM9 39v4c0 1.521-2 1.521-2 0v-4c0-1.521 2-1.521 2 0z"
  }));
};

var _default = SvgRadio;
exports["default"] = _default;