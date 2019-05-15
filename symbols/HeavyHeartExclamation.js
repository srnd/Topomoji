"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyHeartExclamation = function SvgHeavyHeartExclamation(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "heavy-heart-exclamation_svg__a",
    cx: 29.332,
    cy: 48.5,
    r: 12.676,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("circle", {
    fill: "url(#heavy-heart-exclamation_svg__a)",
    cx: 31.999,
    cy: 52,
    r: 10
  }), _react["default"].createElement("radialGradient", {
    id: "heavy-heart-exclamation_svg__b",
    cx: -486.628,
    cy: -398.687,
    r: 9.292,
    gradientTransform: "matrix(2.9058 0 0 2.8169 1446.185 1128.036)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-heart-exclamation_svg__b)",
    d: "M31.997 7.574C25.362-2.262 7 1.579 7 13.932 7 22.219 15.469 27.764 31.997 40 48.526 27.764 57 22.219 57 13.932 57 1.579 38.636-2.262 31.997 7.574z"
  }));
};

var _default = SvgHeavyHeartExclamation;
exports["default"] = _default;