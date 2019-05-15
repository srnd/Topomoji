"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNewMoonFace = function SvgNewMoonFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#99A8AE",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#6E8189",
    d: "M43.494 49.848c-5.648 1.65 9.158 5.996 2.855 5.697-9.76-.465-16.75-2.861-5.5 3.148-7.352 3.15-7.701-4.35-12.336-2.203-6.779 3.141-12.201-1.686-13.258-6.893 9.668 6.785 9.342-5.65 17.234.449 3.359-8.05 18.21-2.306 11.005-.198zM41.07 5.004c1.486 1.795-3.051 2.059-3.602 0-.411-1.545 2.581-1.231 3.602 0zM11.012 37.154c0 2.479-5.213 2.625-4.061.053.94-2.096 4.061-2.35 4.061-.053zM29.934 38.711c0 6.42-12.148 7.422-12.148 1-.001-6.783 12.148-7.783 12.148-1zM59.75 20.58c-1.838-4.881-5.576-9.58-9.705-12.551 3.404 3.871 4.703 6.871 4.703 6.871-11.25-12.451-24.25 8.85-18.049-4.15-5.301-4.551-12.301 2.199-8.945 6.93-7.1-.23-8.805 14.07 6.895 7.955-.438-2.672-5.406.891-4.773-3.182 3.133 2.701 5.283-2.262 6.895 1.061 2.354 4.848-6.158 7.061-2.65 11.139 2.68-7.861 6.932 2.973 1.061 4.242 3.561 3.424 7.238-2.361 6.363-5.303 1.713 1.195 3.756 3.4 5.832 2.65 1.354 12.617 13.039 1.369 9.547-6.363-1.453-3.213-7.842-9.299-3.182-12.199 2.08 3.047 1.484 7.721 5.303 10.076 1.322-2.276-5.221-14.057.705-7.176zm-17.889 6.211c0-2.398 3.863-2.592 4.537 1.158.426 2.362-4.537 1.242-4.537-1.158zm-1.115-9.949c1.395-5.574 6.629-2.992 7.723 1.732.812 3.508-8.85 2.776-7.723-1.732z"
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#6E8189",
    d: "M54.135 43.699c1.594 2.109-23.859 15.623-.576 3.793 1.793-.91-15.186 20.619 2.59.344 5.141-5.861 6.408-24.855 1.289-5.453-1.063 4.033-18.764-19.166-3.303 1.316z"
  }), _react["default"].createElement("radialGradient", {
    id: "new-moon-face_svg__a",
    cx: 26.625,
    cy: 25.75,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.292,
    stopColor: "#babac3",
    stopOpacity: 0.434
  }), _react["default"].createElement("stop", {
    offset: 0.782,
    stopColor: "#4b4b63",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1f1f3d"
  })), _react["default"].createElement("circle", {
    opacity: 0.4,
    fill: "url(#new-moon-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M53.747 28.743c-2.838 7.438-14.398 6.35-16.517 1.145 1.61-8.361 14.958-9.077 16.517-1.145zM10.253 28.743c2.844 7.438 14.404 6.35 16.52 1.145-1.606-8.367-14.952-9.08-16.52-1.145z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M40.182 27.953c0 6.527 9.44 6.527 9.44 0 0-6.058-9.44-6.058-9.44 0z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M41.114 30.042c0 3.742 7.574 3.742 7.574 0 0-3.477-7.574-3.477-7.574 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M42.94 28.056c0 2.71 3.919 2.71 3.919 0 0-2.514-3.919-2.514-3.919 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M41.604 27.265c0 1.367 1.98 1.367 1.98 0 .001-1.27-1.98-1.27-1.98 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14.385 27.95c0 6.528 9.443 6.528 9.443 0 0-6.058-9.443-6.058-9.443 0z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M15.318 30.04c0 3.742 7.573 3.742 7.573 0 .001-3.476-7.573-3.476-7.573 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M17.147 28.054c0 2.709 3.918 2.709 3.918 0 0-2.516-3.918-2.516-3.918 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M15.809 27.262c0 1.369 1.979 1.369 1.979 0 0-1.27-1.979-1.27-1.979 0z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M53.747 28.688c0-7.986-16.517-7.986-16.517 1.265 2.361-7.59 14.161-7.59 16.517-1.265zM10.253 28.688c0-7.986 16.52-7.986 16.52 1.264-2.358-7.594-14.157-7.594-16.52-1.264z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.999 46.487c-4.104-1.206-10.178.572-10.178.572 2.314 2.521 4.011 5.788 10.178 5.788 7.065 0 8.267-3.711 10.176-5.788 0 .001-6.08-1.785-10.176-.572z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.374 47.483c4.297 3.607 12.981 3.63 17.303 0-4.582.199-12.69.199-17.303 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M37.653 39.706c0 3.68-11.308 3.68-11.308 0 .001-.846 11.308-.846 11.308 0z"
  }));
};

var _default = SvgNewMoonFace;
exports["default"] = _default;