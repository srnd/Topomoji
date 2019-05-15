"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPartAlternationMark = function SvgPartAlternationMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "part-alternation-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 36.122,
    y1: 12.812,
    x2: 30.997,
    y2: 43.187
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fdd41e"
  }), _react["default"].createElement("stop", {
    offset: 0.26,
    stopColor: "#fbc50e"
  }), _react["default"].createElement("stop", {
    offset: 0.452,
    stopColor: "#f9b700"
  }), _react["default"].createElement("stop", {
    offset: 0.582,
    stopColor: "#f8b200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f6a401"
  })), _react["default"].createElement("path", {
    fill: "url(#part-alternation-mark_svg__a)",
    d: "M60.146 54.634c-14.061-8.682-16.969-24.088-18.701-39.227-.379-3.312-2.344-10.359-7.361-7.018-2.037 1.355-3.084 3.558-4.266 5.621-1.354 2.367-2.869 4.558-4.625 6.536-.313-5.074-.833-10.211-2.315-14.856-1.145-3.582-5.334-5.153-7.992-1.972C12.8 6.214 10.978 14 6.853 12.798c-4.873-1.419-6.939 6.131-2.088 7.544 4.295 1.251 8.078-.104 11.037-3.358.41-.452.785-.935 1.141-1.432.523 4.406.58 8.974.852 13.188.178 2.742 3.275 5.158 5.908 3.378 4.475-3.027 7.691-6.679 10.559-10.787.1.868.195 1.736.316 2.602 2.08 15.102 8.166 29.159 21.605 37.456 4.316 2.667 8.257-4.104 3.963-6.755z"
  }));
};

var _default = SvgPartAlternationMark;
exports["default"] = _default;