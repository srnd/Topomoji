"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClockwiseVerticalArrows = function SvgClockwiseVerticalArrows(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "clockwise-vertical-arrows_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#clockwise-vertical-arrows_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M37.25 52.354l-4.468-6.092c-.18.008-.36.014-.544.014-3.923 0-7.114-2.512-7.114-5.602V27.071h5.59l-9.857-13.446L11 27.071h5.587v13.604c0 3.294 1.629 6.386 4.585 8.715C24.129 51.719 28.059 53 32.238 53c1.731 0 3.417-.219 5.012-.646zM31.784 17.719c3.918 0 7.106 2.507 7.106 5.593v13.634h-5.582l9.846 13.43L53 36.945h-5.582V23.312c0-3.289-1.626-6.379-4.579-8.705C39.885 12.282 35.959 11 31.784 11c-1.739 0-3.434.225-5.034.652l4.46 6.081c.189-.01.381-.014.574-.014z"
  }));
};

var _default = SvgClockwiseVerticalArrows;
exports["default"] = _default;