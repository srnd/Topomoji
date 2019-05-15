"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAsterisk = function SvgAsterisk(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "asterisk_svg__a",
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
    fill: "url(#asterisk_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48.408 30.793v2.414c0 1.326-.844 2.051-2.171 2.051l-8.808-.242 4.947 7.24c.844 1.206.602 2.172-.604 2.896l-2.293 1.447c-1.207.724-2.293.483-3.016-.845L32 37.912l-4.465 7.842c-.723 1.328-1.809 1.568-3.016.845l-2.292-1.327c-1.206-.724-1.448-1.81-.604-3.016l4.947-7.24-8.808.242c-1.327 0-2.171-.725-2.171-2.051v-2.414c0-1.327.845-2.051 2.171-2.051l8.808.242-4.947-7.239c-.844-1.207-.603-2.172.604-2.896l2.292-1.447c1.207-.725 2.292-.483 3.016.844L32 26.088l4.465-7.842c.723-1.328 1.809-1.569 3.016-.844l2.293 1.327c1.205.724 1.447 1.81.604 3.017l-4.947 7.239 8.808-.242c1.325-.001 2.169.723 2.169 2.05z"
  }));
};

var _default = SvgAsterisk;
exports["default"] = _default;