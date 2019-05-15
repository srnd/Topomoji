"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRainbowFlag = function SvgRainbowFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M62 11.228c-19.334-8.227-38.667 8.226-58 0V4.375c19.333 8.225 38.666-8.227 58 0v6.853z"
  }), _react["default"].createElement("path", {
    fill: "#EA8800",
    d: "M62 17.104c-19.334-8.225-38.667 8.227-58 0V10.25c19.333 8.225 38.666-8.228 58 0v6.854z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M62 22.979c-19.334-8.225-38.667 8.227-58 0v-6.854c19.333 8.226 38.666-8.228 58 0v6.854z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M62 28.854c-19.334-8.226-38.667 8.226-58 0V22c19.333 8.225 38.666-8.227 58 0v6.854z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M62 34.729c-19.334-8.226-38.667 8.226-58 0v-6.854c19.333 8.226 38.666-8.227 58 0v6.854z"
  }), _react["default"].createElement("path", {
    fill: "#7D0C7A",
    d: "M62 39.625c-19.334-8.227-38.667 8.227-58 0V33.75c19.333 8.226 38.666-8.226 58 0v5.875z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M2 4.117v57.881L6 62V4.121c-.001-2.826-4.001-2.828-4-.004z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M2.995 2.271c.566.323 1.001.909 1.001 1.823l.007 57.879L6 61.975V4.094c-.001-1.91-1.821-2.498-3.005-1.823z"
  })));
};

var _default = SvgRainbowFlag;
exports["default"] = _default;