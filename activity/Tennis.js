"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTennis = function SvgTennis(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "tennis_svg__a",
    cx: 31.009,
    cy: 57.086,
    r: 32.595,
    gradientTransform: "matrix(1.0521 0 0 1.0506 -6.053 -35.018)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.273,
    stopColor: "#d2f205"
  }), _react["default"].createElement("stop", {
    offset: 0.477,
    stopColor: "#cff006"
  }), _react["default"].createElement("stop", {
    offset: 0.642,
    stopColor: "#c5ea08"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#b4e10c"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#9ed411"
  })), _react["default"].createElement("path", {
    fill: "url(#tennis_svg__a)",
    d: "M62 32c0 16.566-13.45 30-30.042 30-1.013 0-2.014-.051-3-.148-.704-2.117-4.225-3.242-5.923-1.197C12.101 57.262 3.844 47.802 2.211 36.219c.115-1.953 1.398-7.968-.211-6.485C3.16 14.226 16.128 2 31.958 2 48.55 2 62 15.433 62 32z"
  }), _react["default"].createElement("radialGradient", {
    id: "tennis_svg__b",
    cx: 34.313,
    cy: 26.152,
    r: 31.343,
    gradientTransform: "matrix(1.0014 0 0 1 -.396 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#f8ffe8"
  }), _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#f5fce5"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#edf4db"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#dfe5ca"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d7ddc0"
  })), _react["default"].createElement("path", {
    fill: "url(#tennis_svg__b)",
    d: "M55.418 30.305C64.2 13.538 39.6-4.44 19.771 5.755 11.484 10.013 4.47 19.943 2 29.732c.899 2.193.128 5.09.209 6.477C3.679 23.758 12.798 13.06 21.444 7.483c16.219-10.459 40.068 4.492 29.696 20.64-5.813 9.047-29.786 16.406-28.106 32.549 1.178-.371 4.787.051 5.927 1.182-.547-16.446 20.715-20.586 26.457-31.549z"
  }));
};

var _default = SvgTennis;
exports["default"] = _default;