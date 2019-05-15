"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNoLittering = function SvgNoLittering(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "no-littering_svg__a",
    cx: 31.999,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#no-littering_svg__a)",
    d: "M7.368 23.676c-11.1 32.841 38.163 49.489 49.262 16.648C67.73 7.482 18.469-9.166 7.368 23.676z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32.602 20.381h2.594c.957 0 1.73-.617 1.73-1.379v-3.439c0-.762-.774-1.379-1.73-1.379h-2.594c-.957 0-1.731.617-1.731 1.379v3.439c0 .762.774 1.379 1.731 1.379zM39.486 21.93H27.961c-.816 0-1.479.521-1.479 1.162v5.81l-3.688 2.975v1.34l5.75-2.928.746-6.035v25.562h2.955l1.477-11.619 1.479 11.619h2.955V24.254l1.33 11.619h1.479V23.092c0-.641-.662-1.162-1.479-1.162zM19.924 34.231h2.816v3.754h-2.816z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.785 38.863h2.814v3.756h-2.814zM19.162 43.147h2.816v3.754h-2.816z"
  }), _react["default"].createElement("linearGradient", {
    id: "no-littering_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#no-littering_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm24 30a23.89 23.89 0 0 1-5.045 14.713L17.288 13.045A23.885 23.885 0 0 1 32 8c13.254 0 24 10.746 24 24zM8 32a23.887 23.887 0 0 1 5.045-14.712l33.666 33.668A23.89 23.89 0 0 1 32 56C18.744 56 8 45.256 8 32z"
  }));
};

var _default = SvgNoLittering;
exports["default"] = _default;