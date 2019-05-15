"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWarning = function SvgWarning(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "warning_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe12c"
  })), _react["default"].createElement("path", {
    fill: "url(#warning_svg__a)",
    d: "M5.9 62c-3.313 0-4.811-2.379-3.328-5.291L29.306 4.182c1.48-2.91 3.907-2.91 5.387 0l26.734 52.527C62.91 59.621 61.41 62 58.098 62H5.9z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M29.542 41.309l-1.086-11.166v-8.057c0-.697.389-1.085 1.086-1.085h4.915c.697 0 1.086.388 1.086 1.085v8.057l-1.086 11.166c-.068.65-.48.947-1.097.947h-2.72c-.617 0-1.029-.297-1.098-.947zm-.799 10.605V47.57c0-.697.389-1.084 1.086-1.084h4.343c.697 0 1.086.387 1.086 1.084v4.344c0 .697-.389 1.086-1.086 1.086h-4.343c-.698 0-1.086-.389-1.086-1.086z"
  }));
};

var _default = SvgWarning;
exports["default"] = _default;