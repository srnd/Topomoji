"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpadeSuit = function SvgSpadeSuit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "spade-suit_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20.711,
    y1: 13.51,
    x2: 45.49,
    y2: 56.428
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#spade-suit_svg__a)",
    d: "M57 32.781C57 20.726 32 7 32 7S7 20.726 7 32.781c0 7.146 6.021 13.281 13.281 13.281a12.88 12.88 0 0 0 8.917-3.535l-.323 2.754c-.421 2.991-2.495 5.727-5.469 6.25l-3.906.782V57h25v-4.688l-3.906-.781c-2.976-.523-5.049-3.258-5.469-6.25l-.325-2.754a12.88 12.88 0 0 0 8.919 3.535C50.978 46.063 57 39.928 57 32.781z"
  }));
};

var _default = SvgSpadeSuit;
exports["default"] = _default;