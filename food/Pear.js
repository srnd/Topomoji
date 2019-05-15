"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPear = function SvgPear(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "pear_svg__a",
    cx: -57.078,
    cy: -199.81,
    r: 23.699,
    gradientTransform: "matrix(.9623 -.3287 .448 1.2921 182.68 270.3)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#cbd716"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#c9d414"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#c0cc0c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3bd00"
  })), _react["default"].createElement("path", {
    fill: "url(#pear_svg__a)",
    d: "M52.145 32.697c-3.84-6.365-11.054-10.234-15.979-13.29-6.747-4.183-10.387-15.708-21.38-9.631-10.989 6.074-3.019 15.171-2.622 22.859.29 5.624.187 13.502 4.034 19.875 13.175 21.849 49.122 2.036 35.947-19.813z"
  }), _react["default"].createElement("radialGradient", {
    id: "pear_svg__b",
    cx: -15.666,
    cy: -226.118,
    r: 3.625,
    gradientTransform: "matrix(1.0421 -.5959 .2287 .3923 84.2 92.043)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#98a100"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#97a239",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#pear_svg__b)",
    d: "M15.016 10.283c-2.313 1.285-3.438 2.664-3.895 4.092 2.9-1.076 3.703-.187 5.374-1.143 1.703-.974 1.284-2.131 3.83-4.151-1.42-.28-3.121-.015-5.309 1.202z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M16.936 12.957c-4.103-.687-8.821-9.584-6.11-10.71 3.686-1.531-.834 4.313 6.11 10.71z"
  }), _react["default"].createElement("radialGradient", {
    id: "pear_svg__c",
    cx: 462.204,
    cy: -564.245,
    r: 12.116,
    gradientTransform: "matrix(1.1537 .7293 .4146 -1.0415 -259.917 -886.748)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d3e600"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d3e600",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#pear_svg__c)",
    d: "M53.346 46.86c2.775-6.969-1.235-16.575-8.953-21.453-7.723-4.883-16.23-3.191-19.006 3.778-2.776 6.969 1.235 16.576 8.956 21.457 7.721 4.882 16.227 3.188 19.003-3.782z"
  }), _react["default"].createElement("radialGradient", {
    id: "pear_svg__d",
    cx: 445.65,
    cy: -554.023,
    r: 4.752,
    gradientTransform: "matrix(1.1537 .7293 .4146 -1.0415 -259.917 -886.748)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#daed00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d3e600",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#pear_svg__d)",
    d: "M29.988 18.77c1.09-2.732-.483-6.5-3.511-8.413-3.029-1.915-6.364-1.251-7.453 1.482-1.088 2.733.485 6.5 3.513 8.414 3.027 1.914 6.363 1.25 7.451-1.483z"
  }));
};

var _default = SvgPear;
exports["default"] = _default;