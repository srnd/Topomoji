"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRedPaperLantern = function SvgRedPaperLantern(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "red-paper-lantern_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20,
    y1: 32,
    x2: 44,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.382,
    stopColor: "#444e59"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#red-paper-lantern_svg__a)",
    d: "M20 3.385v57.23c7.346 1.834 16.557 1.859 24 0V3.385c-7.346-1.833-16.554-1.86-24 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "red-paper-lantern_svg__b",
    cx: 136.38,
    cy: 274.585,
    r: 26.594,
    gradientTransform: "matrix(.6549 0 0 2.3504 -57.315 -613.374)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7136"
  }), _react["default"].createElement("stop", {
    offset: 0.168,
    stopColor: "#f96530"
  }), _react["default"].createElement("stop", {
    offset: 0.471,
    stopColor: "#e74521"
  }), _react["default"].createElement("stop", {
    offset: 0.873,
    stopColor: "#cc1208"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c20000"
  })), _react["default"].createElement("path", {
    fill: "url(#red-paper-lantern_svg__b)",
    d: "M20.028 7.655c-13.181 6.606-13.56 42.784 0 48.884 5.407 2.433 19.019 2.79 24.282 0 13.137-6.966 12.699-41.359 0-48.884-5.171-3.063-18.941-2.676-24.282 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M10.891 29.693c13.558-.95 28.654-.952 42.219 0-13.462-.13-28.766-.13-42.219 0zM11.006 27.375c13.495-1.471 28.486-1.474 41.988 0-13.375-.652-28.621-.653-41.988 0zM11.196 25.055c13.386-1.992 28.216-1.997 41.606 0-13.241-1.175-28.37-1.176-41.606 0zM11.463 22.735c13.225-2.513 27.842-2.52 41.074 0-13.06-1.694-28.021-1.696-41.074 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M12.365 20.306c12.656-2.892 26.607-2.894 39.27 0-12.475-2.072-26.803-2.072-39.27 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M12.77 17.964c12.408-3.384 26.047-3.39 38.461 0-12.206-2.567-26.263-2.567-38.461 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M13.783 15.476c11.768-3.68 24.66-3.687 36.432 0-11.547-2.861-24.889-2.863-36.432 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M15.359 12.792a50.987 50.987 0 0 1 33.281 0c-10.536-2.9-22.748-2.9-33.281 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M17.938 9.734a41.618 41.618 0 0 1 28.122 0c-8.892-2.438-19.234-2.438-28.122 0zM53.148 31.985c-13.572.51-28.721.511-42.299 0 13.499-.471 28.809-.471 42.299 0zM53.109 34.306c-13.559.95-28.656.952-42.219 0 13.461.131 28.764.131 42.219 0zM52.994 36.625c-13.496 1.471-28.487 1.473-41.988 0 13.375.651 28.619.652 41.988 0zM52.803 38.944c-13.385 1.992-28.217 1.998-41.606 0 13.241 1.175 28.371 1.176 41.606 0zM52.537 41.264c-13.227 2.513-27.844 2.52-41.074 0 13.059 1.695 28.021 1.697 41.074 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M51.635 43.693c-12.656 2.893-26.607 2.895-39.27 0 12.475 2.072 26.801 2.072 39.27 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M51.23 46.035c-12.41 3.385-26.047 3.39-38.461 0 12.206 2.567 26.262 2.568 38.461 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M50.215 48.523c-11.766 3.68-24.659 3.688-36.432 0 11.549 2.862 24.891 2.863 36.432 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M48.641 51.206a50.968 50.968 0 0 1-33.281 0c10.536 2.901 22.747 2.901 33.281 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M46.061 54.265a41.618 41.618 0 0 1-28.122 0c8.893 2.437 19.235 2.437 28.122 0z"
  }));
};

var _default = SvgRedPaperLantern;
exports["default"] = _default;