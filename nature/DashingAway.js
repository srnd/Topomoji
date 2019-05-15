"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDashingAway = function SvgDashingAway(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "dashing-away_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 33.465,
    x2: 28.828,
    y2: 33.465
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfdde6"
  }), _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#adcbdc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a4c6d9"
  })), _react["default"].createElement("path", {
    fill: "url(#dashing-away_svg__a)",
    d: "M28.828 17.898s-7.414 9.5-21.637 9.529c5.262 1.768 3.174 4.066-5.182 4.797 8.328 2.721 3.066 4.496-.01 5.502 9.775.857 9.076 3.473 5.182 4.795 12.566 1.146 21.646 6.51 21.646 6.51V17.898z"
  }), _react["default"].createElement("path", {
    fill: "#A4C6D9",
    d: "M30.868 27.117c-.401-1.973-7.853 1.082-18.978 3.209 10.087.342 17.802-.752 18.978-3.209zM30.589 32.49c-.317-1.99-8.778.723-21.253 2.34 11.164.801 19.791.063 21.253-2.34zM30.198 36.512c-.325-1.984-7.294.787-17.642 2.494 9.33.719 16.497-.082 17.642-2.494z"
  }), _react["default"].createElement("radialGradient", {
    id: "dashing-away_svg__b",
    cx: 41.198,
    cy: 32,
    r: 20.061,
    gradientTransform: "matrix(1 0 0 1.2774 0 -8.877)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfdde6"
  }), _react["default"].createElement("stop", {
    offset: 0.31,
    stopColor: "#cbdbe5"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#c0d5e1"
  }), _react["default"].createElement("stop", {
    offset: 0.901,
    stopColor: "#accadc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a4c6d9"
  })), _react["default"].createElement("path", {
    fill: "url(#dashing-away_svg__b)",
    d: "M62 34.629c0-3.996-1.783-7.52-4.502-9.648a9.78 9.78 0 0 0 .934-4.195c0-4.713-3.246-8.57-7.369-8.939C49.832 7.307 46.07 4 41.617 4c-3.68 0-6.883 2.26-8.58 5.602a9.265 9.265 0 0 0-2.369-.318c-5.672 0-10.271 5.148-10.271 11.502 0 5.299 3.205 9.75 7.559 11.084-4.1 1.32-7.102 5.541-7.102 10.557 0 6.072 4.395 10.994 9.814 10.994a8.905 8.905 0 0 0 2.887-.484C35.449 57.123 39.322 60 43.801 60c6.348 0 11.494-5.762 11.494-12.869 0-.51-.033-1.01-.086-1.504C59.176 43.943 62 39.66 62 34.629z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M59.162 36.127c1.875-6.531-3.709-13.219-10.25-10.182 4.875.494 8.938 4.182 10.25 10.182zM41.779 43.668c1.875-6.531-3.709-13.217-10.25-10.182 4.875.494 8.938 4.182 10.25 10.182zM56.121 23.793c1.875-6.531-3.711-13.217-10.252-10.182 4.877.494 8.94 4.182 10.252 10.182zM49.99 39.26c2.488-8.672-4.926-17.549-13.609-13.518 6.473.656 11.865 5.551 13.609 13.518zM39.08 22.133c1.875-6.531-3.711-13.219-10.252-10.182 4.877.494 8.94 4.182 10.252 10.182zM48.094 12.326c0-5.002-6.898-8.314-10.922-4.418 3.832-.246 8.697 1.322 10.922 4.418z"
  }));
};

var _default = SvgDashingAway;
exports["default"] = _default;