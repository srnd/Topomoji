"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRunningShirt = function SvgRunningShirt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M6.057 48.955C13.957 53.04 52.243 13.746 49.81 2c-.758 0-36.131 11.498-43.753 46.955z"
  }), _react["default"].createElement("linearGradient", {
    id: "running-shirt_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 33.482,
    y1: 62,
    x2: 33.482,
    y2: 2.451
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#005687"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#2289c7"
  })), _react["default"].createElement("path", {
    fill: "url(#running-shirt_svg__a)",
    d: "M57.109 24.971c.201-1.186-8.424-2.684-6.181-21.527l-5.33-.994-12.114 12.48L21.368 2.45l-5.331.993c2.244 18.843-6.38 20.341-6.18 21.527 2.798 16.563-1.422 34.638-.834 35.044C9.984 60.68 19.88 62 33.483 62s23.498-1.32 24.46-1.985c.587-.407-3.631-18.481-.834-35.044z"
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M33.483 5.897c-4.951 0-9.164-1.916-12.115-3.447 1.12 8.367 6.194 12.48 12.115 12.48s10.994-4.113 12.114-12.48c-2.95 1.532-7.161 3.447-12.114 3.447z"
  }), _react["default"].createElement("linearGradient", {
    id: "running-shirt_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 6,
    y1: 30.967,
    x2: 56.827,
    y2: 30.967
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd900"
  })), _react["default"].createElement("path", {
    fill: "url(#running-shirt_svg__b)",
    d: "M6.057 48.955c-.496.409 2.392 12.271 3.972 10.862C35.461 37.108 51.406 25.835 56.827 5.866 56.879 5.672 51.297 2 49.81 2c-.758 0-3.934 14.269-43.753 46.955z"
  }));
};

var _default = SvgRunningShirt;
exports["default"] = _default;