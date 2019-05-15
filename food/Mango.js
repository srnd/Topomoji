"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMango = function SvgMango(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "mango_svg__a",
    cx: 44.751,
    cy: 36.706,
    r: 37.498,
    gradientTransform: "matrix(1 0 0 1.3 0 -11.012)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cc00"
  }), _react["default"].createElement("stop", {
    offset: 0.142,
    stopColor: "#f7b800"
  }), _react["default"].createElement("stop", {
    offset: 0.431,
    stopColor: "#fb8300"
  }), _react["default"].createElement("stop", {
    offset: 0.703,
    stopColor: "#ff4d00"
  })), _react["default"].createElement("path", {
    fill: "url(#mango_svg__a)",
    d: "M23.868 7.117C49.654-8.866 68.306 39.275 60.003 55.553c-3.656 7.17-23.98 11.678-40.195-4.969-19.14-19.651-8.543-40.36 4.06-43.467z"
  }), _react["default"].createElement("linearGradient", {
    id: "mango_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 24.975,
    y1: 55.394,
    x2: 50.688,
    y2: 10.856
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#829600"
  }), _react["default"].createElement("stop", {
    offset: 0.132,
    stopColor: "#a3af00",
    stopOpacity: 0.868
  }), _react["default"].createElement("stop", {
    offset: 0.292,
    stopColor: "#c4c900",
    stopOpacity: 0.708
  }), _react["default"].createElement("stop", {
    offset: 0.458,
    stopColor: "#dedd00",
    stopOpacity: 0.542
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#f0eb00",
    stopOpacity: 0.373
  }), _react["default"].createElement("stop", {
    offset: 0.804,
    stopColor: "#fbf300",
    stopOpacity: 0.196
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff600",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#mango_svg__b)",
    d: "M23.868 7.117C49.654-8.866 68.306 39.275 60.003 55.553c-3.656 7.17-23.98 11.678-40.195-4.969-19.14-19.651-8.543-40.36 4.06-43.467z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#1A1626",
    d: "M23.868 7.117c1.714-1.254 4.007 1.491-.758 3.586 1.753 9.604-4.153 24.489-10.35 30.385-8.628-16.367.534-31.364 11.108-33.971z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M24.478 3.283c-.951-1.783-3.701-.678-2.775 1.064 1.086 2.041.455 3.359 1.037 4.455.729 1.371 3.891-.084 3.117-1.541-.772-1.443-.094-1.56-1.379-3.978z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M23.384 3.599c2.088-1.172-3.215-1.814-1.848.754 1.086 2.041.168 3.799 1.498 4.783.424-2.496-1.846-4.304.35-5.537z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M22.142 3.542c-2.719-1.291-3.809-.088-3.809-.088l-.555-.65s1.588-1.684 4.748-.18c.469.225-.005 1.1-.384.918z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M2 43.807C16.028 36.924 27.089 14.265 17.94 2.68.332 15.578 5.986 30.419 2 43.807z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M2 43.807C16.028 36.924 27.089 14.265 17.94 2.68 8.311 14.919 11.642 29.169 2 43.807z"
  }));
};

var _default = SvgMango;
exports["default"] = _default;