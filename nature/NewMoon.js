"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNewMoon = function SvgNewMoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#4E5E67",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#424F57",
    d: "M43.494 49.848c-5.648 1.65 9.158 5.996 2.854 5.697-9.76-.465-16.75-2.861-5.5 3.148-7.35 3.15-7.699-4.35-12.334-2.203-6.781 3.141-12.201-1.686-13.258-6.893 9.668 6.785 9.342-5.65 17.234.449 3.358-8.05 18.207-2.306 11.004-.198zM41.068 5.004c1.488 1.795-3.049 2.059-3.6 0-.411-1.545 2.581-1.231 3.6 0zM11.012 37.154c0 2.479-5.213 2.625-4.061.053.94-2.096 4.061-2.35 4.061-.053zM29.934 38.711c0 6.42-12.148 7.422-12.148 1-.001-6.783 12.148-7.783 12.148-1zM59.75 20.58c-1.84-4.881-5.576-9.58-9.707-12.551 3.404 3.871 4.705 6.871 4.705 6.871-11.25-12.451-24.25 8.85-18.049-4.15-5.301-4.551-12.301 2.199-8.945 6.93-7.1-.23-8.807 14.07 6.895 7.955-.438-2.672-5.406.891-4.773-3.182 3.133 2.701 5.281-2.262 6.895 1.061 2.354 4.848-6.158 7.061-2.652 11.139 2.682-7.861 6.934 2.973 1.061 4.242 3.563 3.424 7.24-2.361 6.363-5.303 1.715 1.195 3.758 3.4 5.834 2.65 1.354 12.617 13.039 1.369 9.545-6.363-1.451-3.213-7.84-9.299-3.182-12.199 2.08 3.047 1.484 7.721 5.303 10.076 1.322-2.276-5.221-14.057.707-7.176zm-17.889 6.211c0-2.398 3.861-2.592 4.537 1.158.426 2.362-4.537 1.242-4.537-1.158zm-1.115-9.949c1.395-5.574 6.629-2.992 7.723 1.732.812 3.508-8.85 2.776-7.723-1.732z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#424F57",
    d: "M54.133 43.699c1.594 2.109-23.857 15.623-.574 3.793 1.793-.91-15.188 20.619 2.59.344 5.139-5.861 6.408-24.855 1.289-5.453-1.063 4.033-18.764-19.166-3.305 1.316z"
  }), _react["default"].createElement("radialGradient", {
    id: "new-moon_svg__a",
    cx: 26.625,
    cy: 25.75,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.088,
    stopColor: "#f5f5f6",
    stopOpacity: 0.271
  }), _react["default"].createElement("stop", {
    offset: 0.24,
    stopColor: "#d9d9df",
    stopOpacity: 0.392
  }), _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#acacb8",
    stopOpacity: 0.549
  }), _react["default"].createElement("stop", {
    offset: 0.67,
    stopColor: "#6e6e83",
    stopOpacity: 0.736
  }), _react["default"].createElement("stop", {
    offset: 0.933,
    stopColor: "#1f1f40",
    stopOpacity: 0.947
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0a0a2e"
  })), _react["default"].createElement("circle", {
    opacity: 0.5,
    fill: "url(#new-moon_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgNewMoon;
exports["default"] = _default;