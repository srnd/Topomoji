"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOphiuchus = function SvgOphiuchus(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ophiuchus_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#ophiuchus_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32 48.5c-5.851 0-12.167-5.021-12.167-13.131V15.5h4.333v19.869c0 5.078 3.294 8.763 7.833 8.763s7.833-3.685 7.833-8.763V15.5h4.333v19.869C44.167 43.479 37.851 48.5 32 48.5z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11.5 35.575v-5.93l.214-.149c4.321-3.004 8.363-4.465 12.355-4.465 3.958 0 7.343 1.451 10.33 2.73 2.605 1.117 5.066 2.171 7.569 2.171 3.271 0 6.336-1.853 9.647-5.831l.884-1.063v6.677l-.154.148c-3.528 3.378-6.792 4.952-10.27 4.953-3.004 0-5.691-1.164-8.536-2.395-2.902-1.256-5.903-2.555-9.329-2.555-3.814 0-7.705 1.651-11.896 5.048l-.814.661z"
  }));
};

var _default = SvgOphiuchus;
exports["default"] = _default;