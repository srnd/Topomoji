"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHole = function SvgHole(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("ellipse", {
    fill: "#CFD8DD",
    cx: 32,
    cy: 47,
    rx: 30,
    ry: 15
  }), _react["default"].createElement("linearGradient", {
    id: "hole_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 60.124,
    x2: 32.002,
    y2: 36.928
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.537,
    stopColor: "#292534"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#hole_svg__a)",
    d: "M61.001 46.375c0 7.593-12.983 13.749-29 13.749s-29-6.156-29-13.749c0-12.596 58-12.596 58 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "hole_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 2.935,
    y1: 41.31,
    x2: 61.065,
    y2: 41.31
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#717b80"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.787,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#hole_svg__b)",
    d: "M32.001 32.417c-16.017 0-29.066 6.407-29.066 14.054 0 1.295.445 2.545 1.142 3.734C7.49 44.371 18.694 40.092 32 40.092s24.511 4.279 27.925 10.113c.695-1.189 1.141-2.439 1.141-3.734-.001-7.647-13.048-14.054-29.065-14.054z"
  }));
};

var _default = SvgHole;
exports["default"] = _default;