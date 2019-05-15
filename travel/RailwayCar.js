"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRailwayCar = function SvgRailwayCar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M3.5 22.999h57v28.997h-57V22.999z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M3.5 24.998h57v23.998h-57z"
  }), _react["default"].createElement("linearGradient", {
    id: "railway-car_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 147.001,
    x2: -162,
    y2: 152.001,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#52a100"
  }), _react["default"].createElement("stop", {
    offset: 0.213,
    stopColor: "#5ba904"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#73bf10"
  }), _react["default"].createElement("stop", {
    offset: 0.997,
    stopColor: "#9be323"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9be323"
  })), _react["default"].createElement("path", {
    fill: "url(#railway-car_svg__a)",
    d: "M58.5 17.999h-53c-1.1 0-2 .9-2 2v3h57v-3c0-1.1-.9-2-2-2z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M49.5 16h-15c-1.1 0-2 .899-2 1.999h19c0-1.1-.9-1.999-2-1.999z"
  }), _react["default"].createElement("linearGradient", {
    id: "railway-car_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -166,
    y1: 134.003,
    x2: -166,
    y2: 141.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#railway-car_svg__b)",
    d: "M31.5 28.998h-7c-.551 0-1 .45-1 1v4.999c0 .55.449 1 1 1h7c.549 0 1-.45 1-1v-4.999c0-.55-.451-1-1-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "railway-car_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -154,
    y1: 134.003,
    x2: -154,
    y2: 141.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#railway-car_svg__c)",
    d: "M43.5 28.998h-7c-.551 0-1 .45-1 1v4.999c0 .55.449 1 1 1h7c.549 0 1-.45 1-1v-4.999c0-.55-.451-1-1-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "railway-car_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -142,
    y1: 134.003,
    x2: -142,
    y2: 141.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#railway-car_svg__d)",
    d: "M55.5 28.998h-7c-.551 0-1 .45-1 1v4.999c0 .55.449 1 1 1h7c.549 0 1-.45 1-1v-4.999c0-.55-.451-1-1-1z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M22.5 30.998h35v.5h-35z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M18.5 26.998h-10c-.551 0-1 .45-1 1v22.998h12V27.998c0-.55-.451-1-1-1z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M17.5 27.998h-8c-.551 0-1 .45-1 1v21.998h10V28.998c0-.55-.451-1-1-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "railway-car_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -180.5,
    y1: 131.003,
    x2: -180.5,
    y2: 140.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#railway-car_svg__e)",
    d: "M10.5 30.998v6.999c0 .551.45 1 1 1h4c.55 0 1-.449 1-1v-6.999c0-.549-.45-1-1-1h-4c-.55 0-1 .451-1 1z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M17 54.995h30v4H17v-4z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 23.998,
    cy: 57,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 24.002,
    cy: 57,
    r: 4
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 24.002,
    cy: 57,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 10,
    cy: 57,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 10,
    cy: 57,
    r: 4
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 9.998,
    cy: 57,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M18.748 60.369h-3.493l-1.25-5.406h5.99z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M24.002 56.002H9.998c-1.331 0-1.331 1.996 0 1.996h14.004c1.33 0 1.33-1.996 0-1.996z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 53.998,
    cy: 57,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 54.002,
    cy: 57,
    r: 4
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 54.002,
    cy: 57,
    r: 2
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 40,
    cy: 57,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 40,
    cy: 57,
    r: 4
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 39.998,
    cy: 57,
    r: 2
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M48.748 60.369h-3.493l-1.25-5.406h5.99z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M54.002 56.002H39.998c-1.331 0-1.331 1.996 0 1.996h14.004c1.33 0 1.33-1.996 0-1.996z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M2 50.996h60v2.999H2v-2.999z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3 53.995h58v2H3v-2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M59 48.996h3V54h-3zM2 48.996h3V54H2z"
  }));
};

var _default = SvgRailwayCar;
exports["default"] = _default;