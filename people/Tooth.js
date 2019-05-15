"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTooth = function SvgTooth(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "tooth_svg__a",
    cx: 41.79,
    cy: 9.56,
    r: 35.619,
    gradientTransform: "matrix(1.0504 0 0 1.2981 -19.413 1.508)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.151,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.394,
    stopColor: "#e2e8ec"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#d7dfe3"
  }), _react["default"].createElement("stop", {
    offset: 0.856,
    stopColor: "#c3cfd3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#tooth_svg__a)",
    d: "M49.795 4.784C41.47-1.133 40.735 4.221 32 4.221c-8.734 0-9.47-5.354-17.795.563-5.693 4.042-4.932 15.051-1.692 20.075 4.612 7.155.595 32.002 11.764 36.952 6.388 2.827-1.902-26.918 7.724-26.918s1.336 29.745 7.724 26.918c11.169-4.949 7.151-29.797 11.764-36.952 3.238-5.024 3.999-16.033-1.694-20.075z"
  }), _react["default"].createElement("radialGradient", {
    id: "tooth_svg__b",
    cx: 48.772,
    cy: 44.367,
    r: 14.193,
    gradientTransform: "matrix(1.0504 0 0 2.0728 -19.413 -42.047)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.721,
    stopColor: "#d5dde1",
    stopOpacity: 0.393
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#tooth_svg__b)",
    d: "M49.795 4.784C41.47-1.133 40.735 4.221 32 4.221c-8.734 0-9.47-5.354-17.795.563-5.693 4.042-4.932 15.051-1.692 20.075 4.612 7.155.595 32.002 11.764 36.952 6.388 2.827-1.902-26.918 7.724-26.918s1.336 29.745 7.724 26.918c11.169-4.949 7.151-29.797 11.764-36.952 3.238-5.024 3.999-16.033-1.694-20.075z"
  }), _react["default"].createElement("linearGradient", {
    id: "tooth_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 17.916,
    y1: 4.865,
    x2: 27.723,
    y2: 19.314
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0.5
  }), _react["default"].createElement("stop", {
    offset: 0.782,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#tooth_svg__c)",
    d: "M30.851 6.617C19.332 1.853 13.8 5.356 12.864 12.808c-2.865 22.813 38.24 2.185 17.987-6.191z"
  }));
};

var _default = SvgTooth;
exports["default"] = _default;