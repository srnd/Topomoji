"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOpticalDisk = function SvgOpticalDisk(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M32 2C15.431 2 2 15.432 2 32s13.432 30 30 30c16.569 0 30-13.432 30-30S48.568 2 32 2zm0 33.502a3.502 3.502 0 0 1 0-7.003A3.5 3.5 0 0 1 35.5 32a3.5 3.5 0 0 1-3.5 3.502z"
  }), _react["default"].createElement("path", {
    fill: "#F0ECE9",
    d: "M32 2.5C15.708 2.5 2.5 15.708 2.5 32c0 16.293 13.209 29.5 29.5 29.5 16.293 0 29.5-13.207 29.5-29.5C61.5 15.708 48.293 2.5 32 2.5zm0 33.436a3.935 3.935 0 0 1 0-7.87 3.935 3.935 0 0 1 0 7.87z"
  }), _react["default"].createElement("radialGradient", {
    id: "optical-disk_svg__a",
    cx: -166.362,
    cy: -165.899,
    r: 38.386,
    gradientTransform: "matrix(-.6835 -.6835 .3853 -.3853 2.636 -125.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8aebef",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 0.26,
    stopColor: "#a8def6",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 0.582,
    stopColor: "#d2ccff",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d2ccff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#optical-disk_svg__a)",
    d: "M11.496 11.494C.169 22.818.169 41.182 11.494 52.506c11.326 11.326 29.688 11.326 41.014 0 11.324-11.324 11.324-29.688-.002-41.012C41.184.169 22.82.169 11.496 11.494zm23.24 23.242a3.87 3.87 0 0 1-5.471-5.471 3.87 3.87 0 0 1 5.471 5.471z"
  }), _react["default"].createElement("radialGradient", {
    id: "optical-disk_svg__b",
    cx: 718.398,
    cy: -327.11,
    r: 38.386,
    gradientTransform: "matrix(.6835 .6835 -.3853 .3853 -605.483 -353.41)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8aebef",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 0.26,
    stopColor: "#a8def6",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 0.582,
    stopColor: "#d2ccff",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d2ccff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#optical-disk_svg__b)",
    d: "M52.506 52.508c11.326-11.326 11.326-29.688.002-41.014C41.182.17 22.82.17 11.494 11.494.169 22.819.169 41.182 11.496 52.506c11.322 11.326 29.686 11.326 41.01.002zM29.265 29.267a3.87 3.87 0 0 1 5.471 0 3.872 3.872 0 0 1 0 5.47 3.869 3.869 0 0 1-5.471-5.47z"
  }), _react["default"].createElement("linearGradient", {
    id: "optical-disk_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 25,
    y1: 32,
    x2: 39,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.008,
    stopColor: "#5b656e"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#3c3c49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#optical-disk_svg__c)",
    d: "M32 25a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 11.75a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 1 1 0 9.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "optical-disk_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 24.575,
    y1: 24.575,
    x2: 39.426,
    y2: 39.426
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c2d0d6",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#858c8f",
    stopOpacity: 0.6
  })), _react["default"].createElement("path", {
    fill: "url(#optical-disk_svg__d)",
    d: "M32 21.5c-5.8 0-10.5 4.7-10.5 10.5 0 5.801 4.7 10.5 10.5 10.5 5.801 0 10.5-4.699 10.5-10.5 0-5.8-4.699-10.5-10.5-10.5zm0 18.501A8 8 0 0 1 24 32a8 8 0 1 1 16 0 8 8 0 0 1-8 8.001z"
  }));
};

var _default = SvgOpticalDisk;
exports["default"] = _default;