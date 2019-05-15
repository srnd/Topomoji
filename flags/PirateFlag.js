"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPirateFlag = function SvgPirateFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.357 44.303c-1.484-1.152-2.232.17-3.008.232 0 0-1.148.51-10.838-3.16 9.689-3.676 10.838-3.15 10.838-3.15.775.08 1.523 1.355 3.008.225 1.484-1.145 1.584-3.08.232-3.83-1.361-.768.064-1.553-.658-2.561-.703-1.027-3.436-1.02-3.805.945C44.779 34.939 42.775 35.717 32 40c-10.775-4.283-12.779-5.061-13.127-6.996-.367-1.965-3.102-1.973-3.803-.945-.723 1.008.701 1.793-.658 2.561-1.352.75-1.254 2.686.23 3.83 1.484 1.131 2.232-.145 3.01-.225 0 0 1.146-.525 10.836 3.15-9.689 3.67-10.836 3.16-10.836 3.16-.777-.063-1.525-1.385-3.01-.232s-1.582 3.107-.23 3.873c1.359.742-.064 1.52.658 2.545.701 1 3.436.982 3.803-.98.348-1.902 2.352-2.697 13.127-6.992 10.775 4.295 12.779 5.09 13.127 6.992.369 1.963 3.102 1.98 3.805.98.723-1.025-.703-1.803.658-2.545 1.351-.766 1.252-2.721-.233-3.873z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M41.867 26.148C45.543 15.334 37.961 9.498 32 9.498c-5.959 0-13.543 5.836-9.867 16.65-3.531 4.439 3.521 4.172 3.521 6.77 0 2.121 2.795 2.205 2.795 1.033 0-1.377.42-1.377.42 0 0 1.172 2.922 1.176 2.922 0 0-1.377.418-1.377.418 0 0 1.176 2.924 1.172 2.924 0 0-1.377.418-1.377.418 0 0 1.172 2.795 1.088 2.795-1.033 0-2.598 7.054-2.33 3.521-6.77zm-7.117-4.32c1.1-.836 5.025-.229 5.422 1.609 1.025 4.773-4.049 3.5-6.146 1.555-.284-.262-.542-2.201.724-3.164zM32 25.68c1.93 0 3.041 6.32 0 3.5-3.041 2.82-1.93-3.5 0-3.5zm-8.17-2.242c.395-1.838 4.32-2.445 5.42-1.609 1.264.963 1.008 2.902.727 3.164-2.1 1.945-7.174 3.218-6.147-1.555z"
  }), _react["default"].createElement("linearGradient", {
    id: "pirate-flag_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#pirate-flag_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPirateFlag;
exports["default"] = _default;