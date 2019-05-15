"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVibrationMode = function SvgVibrationMode(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "vibration-mode_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#vibration-mode_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M38.801 12H25.2c-2.5 0-4.5 2-4.5 4.4v31.1c0 2.5 2 4.4 4.5 4.4h13.601c2.5 0 4.5-2 4.5-4.4V16.4c0-2.4-2-4.4-4.5-4.4zM29.8 13.6h4.399c.301 0 .602.2.602.601 0 .3-.301.6-.602.6H29.8c-.301 0-.601-.2-.601-.6.101-.301.301-.601.601-.601zM32 49.8c-.8 0-1.4-.6-1.4-1.3s.601-1.3 1.4-1.3c.801 0 1.401.6 1.401 1.3S32.8 49.8 32 49.8zm9.1-4.9H23V16.5h18.1v28.4zM18.6 19.1c-7.2 8.3-5 20.6.1 25.8.3.3.7-.2.5-.601-4-6.7-4.5-17.399 0-24.7.2-.399-.3-.799-.6-.499z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.2 41.8c-3.3-5.399-3.7-14.2 0-20.2.2-.3-.2-.699-.5-.399C6.8 28 8.6 38 12.8 42.2c.3.4.6 0 .4-.4zM45.4 44.9c7.199-8.301 5-20.601-.1-25.801-.3-.299-.7.201-.499.601 4 6.7 4.5 17.399 0 24.7-.201.4.299.8.599.5z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M50.801 22.2c3.299 5.399 3.699 14.2 0 20.2-.201.3.199.7.5.4 5.898-6.8 4.1-16.8-.102-21-.299-.4-.599 0-.398.4z"
  }));
};

var _default = SvgVibrationMode;
exports["default"] = _default;