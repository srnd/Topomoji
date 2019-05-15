"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap6 = function SvgKeycap6(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap-6_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
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
    fill: "url(#keycap-6_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M43.381 37.102C43.381 43.515 38.705 48 32 48c-6.739 0-11.381-4.485-11.381-10.898 0-2.439.67-4.599 1.873-6.34l-.012-.007 9.295-14.071c.304-.471.729-.684 1.278-.684h4.699c.852 0 1.154.561.684 1.277l-6.089 8.93c6.518.152 11.034 4.592 11.034 10.895zm-6.168 0c0-3.151-2.32-5.091-5.212-5.091-2.928 0-5.214 1.906-5.214 5.091 0 3.184 2.287 5.09 5.214 5.09 2.892-.001 5.212-1.94 5.212-5.09z"
  }));
};

var _default = SvgKeycap6;
exports["default"] = _default;