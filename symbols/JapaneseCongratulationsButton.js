"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseCongratulationsButton = function SvgJapaneseCongratulationsButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-congratulations-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-congratulations-button_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M26.361 39.193a55.181 55.181 0 0 0-3.18-3.865V49.5h-4.822V37.207a36.04 36.04 0 0 1-4.113 3.223c-.383-1.344-1.533-3.76-2.246-4.617 3.783-2.148 7.455-5.799 9.813-9.932H13.59v-4.564h4.824V14.5h4.877v6.816h1.26l.877-.16 2.685 1.717a35.457 35.457 0 0 1-3.891 7.57c1.809 1.449 4.492 3.918 5.316 4.725l-3.177 4.025z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M46.324 39.199c-.102 4.65-.256 5.371-.869 5.371H44.23c-.561 0-.611-.111-.611-1.439V31.336h4.084V15H30.139v16.336h2.963c-.357 6.81-1.381 11.131-6.486 13.787.973.887 2.248 2.713 2.758 3.877 6.281-3.377 7.709-9.137 8.17-17.664h1.787v11.85c0 4.098.766 5.371 4.135 5.371h2.502c2.654 0 3.676-1.551 4.033-7.697-1.124-.278-2.858-.942-3.677-1.661zM43.057 26.74H34.58v-7.145h8.477v7.145z"
  }));
};

var _default = SvgJapaneseCongratulationsButton;
exports["default"] = _default;