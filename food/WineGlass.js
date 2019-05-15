"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWineGlass = function SvgWineGlass(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M16.195 4.408c3.165-3.208 28.438-3.214 31.609 0C49.254 5.878 59.906 31.284 32 38.963 4.094 31.284 14.746 5.878 16.195 4.408z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M16.93 5.125c2.775-2.814 27.367-2.811 30.152.011.451.526 1.826 3.712 2.494 7.776H14.387c.658-4.207 2.084-7.257 2.543-7.787z"
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M27.84 56.44c2.047-2.068 2.531-2.833 2.734-4.039.641-3.783 0-14.398 0-14.398h2.85s-.48 10.59 0 14.398c.154 1.214.443 1.726 2.734 4.039 4.236.42 7.24 1.461 7.24 2.68C43.398 60.71 38.297 62 32 62s-11.4-1.29-11.4-2.88c0-1.219 3.004-2.26 7.24-2.68z"
  }), _react["default"].createElement("radialGradient", {
    id: "wine-glass_svg__a",
    cx: -255.093,
    cy: 19.01,
    r: 23.327,
    gradientTransform: "matrix(-1 0 0 1.0239 -223.031 -7.733)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#c40505"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#be0505"
  }), _react["default"].createElement("stop", {
    offset: 0.414,
    stopColor: "#ac0505"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#900505"
  }), _react["default"].createElement("stop", {
    offset: 0.798,
    stopColor: "#680404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#380404"
  })), _react["default"].createElement("path", {
    fill: "url(#wine-glass_svg__a)",
    d: "M14.383 12.912h35.191c.316 1.494.475 3.414.475 4.385 0 13.987-13.299 17.059-18.049 17.059-4.748 0-18.051-3.071-18.051-17.058 0-1.411.229-3.186.434-4.386z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M32.475 61.04c7.77 0-10.84-1.016-6.586-3.095 3.469-1.693-3.875.105-3.875.997 0 .976 4.049 2.098 10.461 2.098z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M23.916 33.99c0-.53 3.402 1.228 8.568 1.522 3.461.198 5.088-.818 5.088-.094 0 .313-3.875 2.05-5.854 2.05-2.083.001-7.802-2.624-7.802-3.478zM33.311 54.241c2.42 3.016 4.467 4.472 4.092 4.511-3.655.383-5.196-5.887-4.092-4.511z"
  }), _react["default"].createElement("path", {
    fill: "#CC0100",
    d: "M14.385 12.864c0 1.257 7.885 2.277 17.613 2.277 9.73 0 17.578-1.021 17.578-2.277 0-.87-7.961-1.818-17.578-1.818-9.84 0-17.613.947-17.613 1.818z"
  }), _react["default"].createElement("linearGradient", {
    id: "wine-glass_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 18.75,
    y1: 26.789,
    x2: 18.75,
    y2: 8.27
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "url(#wine-glass_svg__b)",
    d: "M17.176 8.27s1.475.682 3.936 1.131c0 0-3.145 8.264.699 17.389 0 0-2.572-.424-4.23-.92-.001-.001-3.968-7.12-.405-17.6z"
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M16 5.38c0 1.411 7.164 2.56 16 2.56 8.834 0 15.998-1.148 15.998-2.56 0-1.002-7.219-2.56-15.998-2.56-8.895 0-16 1.558-16 2.56z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M16.969 4.828c0 .911 6.707 1.945 15.01 1.945s15.053-1.032 15.053-1.945c0-.842-6.783-2.15-15.031-2.15-8.355 0-15.032 1.308-15.032 2.15z"
  }));
};

var _default = SvgWineGlass;
exports["default"] = _default;