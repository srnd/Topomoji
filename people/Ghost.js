"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGhost = function SvgGhost(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "ghost_svg__a",
    cx: 32,
    cy: 32,
    r: 32.038,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.567,
    stopColor: "#fcfdfd"
  }), _react["default"].createElement("stop", {
    offset: 0.732,
    stopColor: "#f3f6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.873,
    stopColor: "#e4e9ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#ghost_svg__a)",
    d: "M59.872 23.619c-3.297 5.914-8.046 8.792-7.718 2.438C52.793 13.459 43.263 3 32 3S11.207 13.46 11.846 26.057c.328 6.354-4.421 3.477-7.718-2.438-1.073-1.92-4.231 11.891 8.675 19.602.572 7.02 1.467 14.908 2.861 16.881 2.311 3.26 5.183-3.398 8.9-3.398 3.717 0 3.721 4.191 7.436 4.191s3.719-4.191 7.436-4.191c3.718 0 6.59 6.658 8.9 3.398 1.395-1.973 2.289-9.861 2.861-16.881 12.907-7.711 9.748-21.522 8.675-19.602z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M61.662 24.164c-.316-1.146-.843-1.726-1.563-1.726-.215 0-.749.067-1.099.693-2.372 4.253-5.005 5.914-5.46 5.43-.115-.12-.479-.652-.388-2.454.331-6.526-2.003-12.925-6.404-17.556C42.731 4.327 37.494 2 32 2S21.27 4.327 17.252 8.551c-4.401 4.631-6.735 11.029-6.405 17.556.094 1.802-.271 2.334-.387 2.454-.453.476-3.088-1.176-5.46-5.43-.35-.626-.884-.693-1.099-.693-.722 0-1.248.58-1.563 1.727-.847 3.067-.873 13.164 9.51 19.646 1.072 12.822 2.224 15.77 3.001 16.869.621.875 1.377 1.32 2.247 1.32 1.299 0 2.461-1.016 3.691-2.092 1.18-1.033 2.52-2.205 3.776-2.205 1.409 0 2.099.775 2.971 1.76.963 1.084 2.159 2.432 4.466 2.432s3.503-1.348 4.465-2.432c.873-.984 1.563-1.76 2.972-1.76 1.257 0 2.597 1.172 3.778 2.205C44.443 60.984 45.605 62 46.904 62c.87 0 1.626-.445 2.247-1.32.777-1.1 1.929-4.047 3.002-16.869 10.382-6.483 10.356-16.579 9.509-19.647zm-2.011 6.215c-.731 3.458-3.122 8.734-9.208 12.373-.963 11.768-2.233 15.793-2.924 16.771-.336.475-.543.477-.614.477h-.001c-.547 0-1.517-.848-2.373-1.598-1.446-1.266-3.085-2.699-5.095-2.699-2.309 0-3.506 1.348-4.468 2.432-.872.984-1.562 1.76-2.969 1.76s-2.097-.775-2.969-1.76c-.963-1.084-2.159-2.432-4.468-2.432-2.01 0-3.648 1.434-5.095 2.699-.855.75-1.823 1.598-2.371 1.598-.069 0-.277 0-.614-.477-.691-.979-1.962-5.004-2.925-16.771-6.087-3.639-8.479-8.914-9.208-12.373-.429-2.027-.403-3.751-.248-4.87 1.693 2.607 4.052 5.137 6.143 5.137.65 0 1.228-.245 1.668-.708.726-.764 1.031-2.05.936-3.933-.305-5.981 1.83-11.841 5.854-16.076C22.338 6.106 27.06 4 32 4s9.663 2.106 13.299 5.93c4.024 4.235 6.159 10.095 5.854 16.076-.096 1.883.21 3.17.936 3.934.44.463 1.017.707 1.668.707h.001c2.09 0 4.448-2.529 6.142-5.137.155 1.118.18 2.843-.249 4.869z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M43.684 32.419c-.236 0-4.895 1.473-11.682 1.473-6.789 0-11.447-1.473-11.684-1.473-.539 0-.828.373-.828.737 0 5.352 4.385 11.037 12.512 11.037 8.123 0 12.508-5.686 12.508-11.037 0-.364-.285-.737-.826-.737z"
  }), _react["default"].createElement("linearGradient", {
    id: "ghost_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 35.702,
    x2: 32.002,
    y2: 50.816
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b32e24"
  }), _react["default"].createElement("stop", {
    offset: 0.01,
    stopColor: "#b63026"
  }), _react["default"].createElement("stop", {
    offset: 0.112,
    stopColor: "#d14136"
  }), _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#e54f42"
  }), _react["default"].createElement("stop", {
    offset: 0.35,
    stopColor: "#f4594b"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#fc5e50"
  }), _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#ff6052"
  })), _react["default"].createElement("path", {
    fill: "url(#ghost_svg__b)",
    d: "M24.645 38.195v2.939c0 6.445 3.293 9.678 7.357 9.682 4.063-.004 7.359-3.236 7.359-9.682v-2.939c0-3.85-7.359-2.094-7.359-2.094s-7.357-1.755-7.357 2.094z"
  }), _react["default"].createElement("path", {
    fill: "#B81B1B",
    d: "M30.957 35.904l1.045 9.605 1.043-9.605c-.629.098-1.043.197-1.043.197s-.418-.099-1.045-.197z"
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-70.001 24 21.476)",
    fill: "#302C3B",
    cx: 24,
    cy: 21.476,
    rx: 5.999,
    ry: 3.5
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-70.007 24.646 22.477)",
    fill: "#4E5E67",
    cx: 24.646,
    cy: 22.476,
    rx: 2.862,
    ry: 1.669
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-109.999 39.001 20.476)",
    fill: "#302C3B",
    cx: 39,
    cy: 20.476,
    rx: 8,
    ry: 4.5
  }), _react["default"].createElement("ellipse", {
    transform: "rotate(-109.999 38.418 22.226)",
    fill: "#4E5E67",
    cx: 38.417,
    cy: 22.226,
    rx: 3.909,
    ry: 2.198
  }));
};

var _default = SvgGhost;
exports["default"] = _default;