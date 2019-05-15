"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWhiteFlag = function SvgWhiteFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M4 4.375v35.25c19.333 8.227 38.667-8.225 58 0V4.375c-19.333-8.227-38.667 8.225-58 0z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M2 4.117v57.881L6 62V4.121c-.001-2.826-4.001-2.828-4-.004z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M2.995 2.271c.566.323 1.001.909 1.001 1.823l.007 57.879L6 61.975V4.094c-.001-1.91-1.821-2.498-3.005-1.823z"
  }));
};

var _default = SvgWhiteFlag;
exports["default"] = _default;