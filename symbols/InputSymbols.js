"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInputSymbols = function SvgInputSymbols(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "input-symbols_svg__a",
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
    fill: "url(#input-symbols_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M14 14h16v4H14zM14 22v4h6v4h4v-4h6v-4zM49.521 18.986c-.322-.488-.736-.883-1.195-1.232-.131-.1-.197-.145-.33-.238l-.266-.213a7.984 7.984 0 0 1-.482-.44c-.598-.594-.973-1.213-1.146-1.746a2.792 2.792 0 0 1-.15-1.117h-3.234L40.65 24.809a7.363 7.363 0 0 0-2.002-.27C36.08 24.539 34 25.762 34 27.27c0 1.508 2.08 2.73 4.648 2.73 2.426 0 4.414-1.092 4.627-2.484l1.916-10.023c.262.213.541.416.838.6.23.142.469.275.713.402.123.061.248.119.371.18.08.041.236.119.31.164.381.209.754.475 1.025.773.275.299.453.643.502 1.02.053.375-.023.779-.178 1.158-.316.768-.885 1.426-1.4 1.949a13.25 13.25 0 0 1-1.949 1.594s.238-.109.639-.328a14.42 14.42 0 0 0 1.592-1.014c.619-.467 1.33-1.059 1.859-1.904.26-.424.461-.926.484-1.48.03-.556-.154-1.138-.476-1.621zM27.66 46.529l1.32-1.123-1.955-2.213-1.4 1.256-2.705-2.762c1.654-.607 2.82-2.031 2.82-3.688 0-2.205-2.066-4-4.603-4s-4.604 1.795-4.604 4c0 .902.35 1.732.934 2.404-1.495.974-2.467 2.519-2.467 4.265C15 47.607 17.751 50 21.136 50c1.623 0 3.17-.566 4.307-1.535L26.927 50h.012L29 47.902l-1.34-1.373zM19.601 38c0-.736.689-1.334 1.535-1.334.848 0 1.537.598 1.537 1.334 0 .736-.689 1.334-1.537 1.334-.845 0-1.535-.598-1.535-1.334zm1.535 9.334c-1.691 0-3.068-1.195-3.068-2.666 0-.971.602-1.82 1.494-2.285l3.891 4.025c-.578.578-1.422.926-2.317.926zM50 34h-4L34 50h4z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M38 42c-2.205 0-4-1.795-4-4 0-2.207 1.795-4 4-4 2.207 0 4 1.793 4 4 0 2.205-1.793 4-4 4zm0-6c-1.102 0-2 .896-2 2 0 1.102.898 2 2 2 1.104 0 2-.898 2-2 0-1.104-.897-2-2-2zM46 50c-2.205 0-4-1.793-4-4s1.795-4 4-4c2.207 0 4 1.793 4 4s-1.793 4-4 4zm0-6c-1.102 0-2 .898-2 2a2 2 0 1 0 2-2z"
  }));
};

var _default = SvgInputSymbols;
exports["default"] = _default;