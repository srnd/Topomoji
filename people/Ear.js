"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEar = function SvgEar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M12.715 34.208C4.102 15.46 17.468 2 31.993 2c10.795 0 19.952 10.177 21.533 20.079 2.048 12.752-2.396 29.079-16.092 31.251-9.104 1.443-11.921 13.5-23.245 6.502-9.068-5.603 4.191-13.289-1.474-25.624z"
  }), _react["default"].createElement("radialGradient", {
    id: "ear_svg__a",
    cx: 39.847,
    cy: 39.632,
    r: 32.535,
    gradientTransform: "matrix(1 0 0 1.2034 0 -8.061)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.315,
    stopColor: "#d99000",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#c28100",
    stopOpacity: 0.9
  })), _react["default"].createElement("path", {
    fill: "url(#ear_svg__a)",
    d: "M33.63 45.677s6.294-7.199 13.764-7.708c7.605-16.997-7.229-35.235-21.409-30.395-12.418 4.238-13.551 21.235-9.166 23.005 4.938 1.992 7.901 7.033 2.188 10.949-4.051 2.777.827 11.98 4.232 7.949 3.464-4.105 5.907-5.346 10.391-3.8z"
  }), _react["default"].createElement("path", {
    opacity: 0.25,
    fill: "#8A1E1E",
    d: "M33.63 45.677s-1.882-2.825-6.011-2.386c-1.263.137 3.411-3.75-1.835-7.415-.716-7.993-7.079-7.682-6.219-9.838 1.191-2.96 8.284-1.9 11.822 4.363.053-11.037-14.999-6.828-12.232-12.582 6.424-13.348 32.853-5.904 28.239 20.149 7.605-16.997-7.229-35.234-21.409-30.395-12.418 4.238-13.551 21.235-9.166 23.005 4.938 1.992 7.901 7.033 2.188 10.949-4.051 2.777.827 11.98 4.232 7.949 3.464-4.104 5.907-5.345 10.391-3.799z"
  }));
};

var _default = SvgEar;
exports["default"] = _default;