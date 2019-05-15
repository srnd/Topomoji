"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWomensRoom = function SvgWomensRoom(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "womens-room_svg__a",
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
    fill: "url(#womens-room_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 14.438,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M39.93 33.728c.626 1.72 3.093.822 2.467-.897l-3.547-9.745c-.895-2.457-2.687-3.148-4.35-3.148h-5c-1.663 0-3.455.691-4.35 3.148l-3.547 9.745c-.626 1.72 1.84 2.618 2.466.898l2.791-7.666h.765l-5 15.625h5v10.65c0 2.3 3.938 2.3 3.938 0v-10.65h.875v10.65c0 2.3 3.938 2.3 3.938 0v-10.65h5l-5-15.625h.765l2.789 7.665z"
  }));
};

var _default = SvgWomensRoom;
exports["default"] = _default;