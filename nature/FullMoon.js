"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFullMoon = function SvgFullMoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FFEB3D",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FD0",
    d: "M43.495 49.846c-5.648 1.652 9.157 5.998 2.855 5.699-9.76-.465-16.75-2.861-5.5 3.148-7.352 3.15-7.701-4.35-12.336-2.201-6.779 3.141-12.201-1.688-13.258-6.895 9.668 6.785 9.342-5.652 17.234.451 3.359-8.052 18.21-2.308 11.005-.202zM41.071 5.004c1.486 1.795-3.051 2.059-3.602 0-.411-1.545 2.581-1.231 3.602 0zM11.015 37.154c0 2.479-5.213 2.625-4.063.053.94-2.096 4.063-2.348 4.063-.053zM29.935 38.711c0 6.42-12.148 7.422-12.148 1-.001-6.783 12.148-7.783 12.148-1zM59.75 20.58c-1.838-4.881-5.576-9.58-9.704-12.551 3.403 3.871 4.702 6.871 4.702 6.871C43.499 2.449 30.499 23.75 36.7 10.75c-5.301-4.551-12.301 2.201-8.945 6.93-7.1-.23-8.805 14.07 6.895 7.955-.438-2.672-5.406.891-4.773-3.18 3.133 2.699 5.283-2.264 6.895 1.059 2.354 4.848-6.158 7.061-2.65 11.139 2.68-7.861 6.932 2.973 1.061 4.242 3.563 3.424 7.24-2.361 6.363-5.303 1.713 1.197 3.756 3.402 5.832 2.65 1.354 12.619 13.038 1.369 9.546-6.363-1.453-3.215-7.841-9.297-3.18-12.199 2.078 3.047 1.482 7.721 5.301 10.076 1.322-2.276-5.221-14.055.705-7.176zm-17.888 6.211c0-2.398 3.863-2.592 4.537 1.16.426 2.362-4.537 1.24-4.537-1.16zm-1.115-9.949c1.395-5.576 6.629-2.992 7.723 1.734.812 3.506-8.85 2.774-7.723-1.734z"
  }), _react["default"].createElement("radialGradient", {
    id: "full-moon_svg__a",
    cx: 27.875,
    cy: 28,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.248,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.49,
    stopColor: "#c6beb0",
    stopOpacity: 0.457
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#452d00"
  })), _react["default"].createElement("circle", {
    opacity: 0.3,
    fill: "url(#full-moon_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgFullMoon;
exports["default"] = _default;