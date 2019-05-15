"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLemon = function SvgLemon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M12.889 13.26c3.222-17.94 27.72-8.853 27.72-8.853-10.587 18.793-27.72 8.853-27.72 8.853z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M13.061 12.933c.006 0 13.104-7.598 27.548-8.525 0 0-24.442-9.275-27.707 8.586"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M19.82 19.854c-.334-4.463-9.917-10.014-11.491-7.146-2.142 3.901 4.984-.675 11.491 7.146z"
  }), _react["default"].createElement("radialGradient", {
    id: "lemon_svg__a",
    cx: -204.667,
    cy: -82.061,
    r: 28.209,
    gradientTransform: "matrix(.7 -.7013 .8542 .8559 259.289 -38.551)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#ffe12c"
  }), _react["default"].createElement("stop", {
    offset: 0.53,
    stopColor: "#ffdf29"
  }), _react["default"].createElement("stop", {
    offset: 0.729,
    stopColor: "#fdd91e"
  }), _react["default"].createElement("stop", {
    offset: 0.911,
    stopColor: "#fbcf0d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f9c802"
  })), _react["default"].createElement("path", {
    fill: "url(#lemon_svg__a)",
    d: "M19.276 13.761c-.72-.563-2.479-.452-4.03 1.117-1.554 1.572-2.309 3.354-1.762 4.088-5.979 9.449-3.585 22.528 6.286 32.514 8.809 8.917 20.887 12.87 30.029 9.09 2.186 1.768 6.004 1.047 8.8-1.786 2.798-2.827 3.514-6.682 1.779-8.896 3.758-9.25.93-21.515-7.886-30.439-10.431-10.47-24.423-11.322-33.216-5.688z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M8.95 14.031c-16.112 13.088.837 34.033.837 34.033 12.989-20.945-.837-34.033-.837-34.033z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M9.787 48.063c14.686-20.944-.837-34.032-.837-34.032s-3.903 15.567.837 34.032z"
  }), _react["default"].createElement("radialGradient", {
    id: "lemon_svg__b",
    cx: 462.664,
    cy: -153.874,
    r: 16.221,
    gradientTransform: "matrix(-.5019 .7239 .913 .7667 413.301 -188.266)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffea80"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffea80",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#lemon_svg__b)",
    d: "M32.467 40.424c8.18 6.869 18.456 7.18 22.949.693 4.499-6.486 1.515-17.312-6.665-24.181-8.182-6.869-18.457-7.179-22.952-.693-4.499 6.486-1.513 17.312 6.668 24.181z"
  }));
};

var _default = SvgLemon;
exports["default"] = _default;