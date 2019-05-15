"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLeftLuggage = function SvgLeftLuggage(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "left-luggage_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#left-luggage_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48.621 52H15.377C13.516 52 12 50.504 12 48.666V25.334C12 23.496 13.516 22 15.377 22h33.244C50.484 22 52 23.496 52 25.334v23.332C52 50.504 50.484 52 48.621 52zM15.377 24c-.76 0-1.377.6-1.377 1.334v23.332c0 .736.617 1.334 1.377 1.334h33.244c.76 0 1.379-.598 1.379-1.334V25.334C50 24.6 49.381 24 48.621 24H15.377z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M47 32h-3v16h3a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1zM38 32v-4c0-1.104-.898-2-2-2h-8a2 2 0 0 0-2 2v4h-4v16h20V32h-4zm-2 0h-8v-4h8v4zM17 32a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3V32h-3zM42 14H27.445c-.693-1.189-1.969-2-3.445-2a4 4 0 0 0 0 8c1.477 0 2.752-.809 3.445-2H30l2-2 2 2h2l2-2 2 2h2l2-2-2-2zm-19 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  }));
};

var _default = SvgLeftLuggage;
exports["default"] = _default;