"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFullMoonFace = function SvgFullMoonFace(props) {
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
    d: "M43.494 49.846c-5.648 1.652 9.158 5.998 2.855 5.699-9.76-.465-16.75-2.861-5.5 3.148-7.352 3.15-7.701-4.35-12.336-2.201-6.779 3.141-12.201-1.688-13.258-6.895 9.668 6.785 9.342-5.652 17.234.451 3.359-8.052 18.21-2.308 11.005-.202zM41.07 5.004c1.486 1.795-3.051 2.059-3.602 0-.411-1.545 2.581-1.231 3.602 0zM11.014 37.154c0 2.479-5.213 2.625-4.063.053.94-2.096 4.063-2.348 4.063-.053zM29.934 38.711c0 6.42-12.148 7.422-12.148 1-.001-6.783 12.148-7.783 12.148-1zM59.75 20.58c-1.838-4.881-5.576-9.58-9.705-12.551 3.404 3.871 4.703 6.871 4.703 6.871-11.25-12.451-24.25 8.85-18.049-4.15-5.301-4.551-12.301 2.201-8.945 6.93-7.1-.23-8.805 14.07 6.895 7.955-.438-2.672-5.406.891-4.773-3.18 3.133 2.699 5.283-2.264 6.895 1.059 2.354 4.848-6.158 7.061-2.65 11.139 2.68-7.861 6.932 2.973 1.061 4.242 3.563 3.424 7.24-2.361 6.363-5.303 1.713 1.197 3.756 3.402 5.832 2.65 1.354 12.619 13.039 1.369 9.547-6.363-1.453-3.215-7.842-9.297-3.18-12.199 2.078 3.047 1.482 7.721 5.301 10.076 1.322-2.276-5.221-14.055.705-7.176zm-17.889 6.211c0-2.398 3.863-2.592 4.537 1.16.426 2.362-4.537 1.24-4.537-1.16zm-1.115-9.949c1.395-5.576 6.629-2.992 7.723 1.734.812 3.506-8.85 2.774-7.723-1.734z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FD0",
    d: "M54.137 43.701c1.592 2.107-23.861 15.621-.578 3.791 1.793-.91-15.186 20.619 2.592.344 5.139-5.861 6.406-24.855 1.287-5.453-1.063 4.033-18.762-19.166-3.301 1.318z"
  }), _react["default"].createElement("radialGradient", {
    id: "full-moon-face_svg__a",
    cx: 27.875,
    cy: 28,
    r: 30,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.248,
    stopColor: "#fff",
    stopOpacity: 0.2
  }), _react["default"].createElement("stop", {
    offset: 0.528,
    stopColor: "#b8ac95",
    stopOpacity: 0.498
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#826d45",
    stopOpacity: 0.743
  }), _react["default"].createElement("stop", {
    offset: 0.92,
    stopColor: "#614613",
    stopOpacity: 0.915
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#543700"
  })), _react["default"].createElement("circle", {
    opacity: 0.2,
    fill: "url(#full-moon-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M53.748 27.33c-2.838 7.44-14.398 6.35-16.518 1.145 1.61-8.36 14.959-9.077 16.518-1.145zM10.252 27.33c2.846 7.439 14.406 6.35 16.521 1.145-1.607-8.368-14.953-9.08-16.521-1.145z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M40.182 26.541c0 6.527 9.439 6.527 9.439 0 0-6.059-9.439-6.059-9.439 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M41.115 28.629c0 3.742 7.572 3.742 7.572 0 .001-3.477-7.572-3.477-7.572 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M42.941 26.643c0 2.711 3.918 2.711 3.918 0 0-2.514-3.918-2.514-3.918 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M41.605 25.852c0 1.367 1.98 1.367 1.98 0 .001-1.27-1.98-1.27-1.98 0z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M14.385 26.537c0 6.529 9.443 6.529 9.443 0 0-6.058-9.443-6.058-9.443 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M15.318 28.627c0 3.742 7.574 3.742 7.574 0 .001-3.475-7.574-3.475-7.574 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M17.146 26.641c0 2.709 3.92 2.709 3.92 0 0-2.516-3.92-2.516-3.92 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M15.809 25.85c0 1.369 1.98 1.369 1.98 0 0-1.27-1.98-1.27-1.98 0z"
  }), _react["default"].createElement("path", {
    fill: "#E09500",
    d: "M53.748 27.275c0-7.986-16.518-7.986-16.518 1.266 2.362-7.59 14.161-7.59 16.518-1.266zM10.252 27.275c0-7.986 16.521-7.986 16.521 1.264-2.357-7.594-14.158-7.594-16.521-1.264zM32 45.074c-4.104-1.205-10.178.572-10.178.572 2.314 2.521 4.01 5.789 10.178 5.789 7.064 0 8.266-3.711 10.176-5.789 0 0-6.08-1.785-10.176-.572z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.375 46.07c4.297 3.607 12.98 3.631 17.303 0-4.582.2-12.69.2-17.303 0z"
  }), _react["default"].createElement("path", {
    fill: "#E09500",
    d: "M37.654 38.293c0 3.68-11.309 3.68-11.309 0 .001-.846 11.309-.846 11.309 0z"
  }));
};

var _default = SvgFullMoonFace;
exports["default"] = _default;