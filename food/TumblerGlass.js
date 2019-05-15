"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTumblerGlass = function SvgTumblerGlass(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M2 6.676l4.799 49.971C7.49 59.58 18.109 62 32 62c13.89 0 24.509-2.42 25.201-5.354L62 6.676H2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M4.4 6.676l2.399 25.213h50.402L59.6 6.676z"
  }), _react["default"].createElement("radialGradient", {
    id: "tumbler-glass_svg__a",
    cx: 32.375,
    cy: 47.932,
    r: 28.126,
    gradientTransform: "matrix(1 0 0 .5784 0 20.206)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffac07"
  }), _react["default"].createElement("stop", {
    offset: 0.153,
    stopColor: "#fba807"
  }), _react["default"].createElement("stop", {
    offset: 0.311,
    stopColor: "#f09b06"
  }), _react["default"].createElement("stop", {
    offset: 0.471,
    stopColor: "#dd8705"
  }), _react["default"].createElement("stop", {
    offset: 0.634,
    stopColor: "#c26a04"
  }), _react["default"].createElement("stop", {
    offset: 0.798,
    stopColor: "#a04402"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#761701"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6b0b00"
  })), _react["default"].createElement("path", {
    fill: "url(#tumbler-glass_svg__a)",
    d: "M7.999 45.276c1.166 9.266 46.835 9.266 48.001 0l1.201-13.388H6.799l1.2 13.388z"
  }), _react["default"].createElement("radialGradient", {
    id: "tumbler-glass_svg__b",
    cx: 32,
    cy: 31.889,
    r: 25.178,
    gradientTransform: "matrix(1 0 0 .126 0 27.87)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffac07"
  }), _react["default"].createElement("stop", {
    offset: 0.184,
    stopColor: "#fca807"
  }), _react["default"].createElement("stop", {
    offset: 0.374,
    stopColor: "#f19b06"
  }), _react["default"].createElement("stop", {
    offset: 0.568,
    stopColor: "#e08705"
  }), _react["default"].createElement("stop", {
    offset: 0.764,
    stopColor: "#c86a03"
  }), _react["default"].createElement("stop", {
    offset: 0.96,
    stopColor: "#aa4501"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a33c00"
  })), _react["default"].createElement("path", {
    fill: "url(#tumbler-glass_svg__b)",
    d: "M32 29.211c-13.889 0-25.202 1.19-25.202 2.678C7.4 33.376 18.111 34.566 32 34.566c13.888 0 24.599-1.19 25.201-2.678 0-1.487-11.312-2.677-25.201-2.677z"
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M32 4C15.431 4 2 5.069 2 6.676c.787 1.757 13.431 2.678 30 2.678 16.568 0 28.798-1.07 30-2.678C62 5.271 48.568 4 32 4z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M32 4.785c-18.655 0-27.6.948-27.6 1.861S16.758 8.3 32 8.3s27.6-.74 27.6-1.654S50.654 4.785 32 4.785z"
  }), _react["default"].createElement("path", {
    opacity: 0.35,
    fill: "#FFF",
    d: "M46.992 31.4c-1.033-1.075-8.867-2.012-10.313-2.012-1.688 0-6.443 6.823-6.443 8.321 0 2.705 2.833 10.503 3.751 11.453 1.031 1.069 9.473 1.687 10.914 1.687 1.51 0 7.838-7.825 7.838-9.322.001-.472-4.96-9.302-5.747-10.127z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "#ABD6FF",
    d: "M47.5 32.107c-.227-.347-.404-.599-.508-.707-1.033-1.075-8.867-2.012-10.313-2.012-.625 0-1.672.939-2.742 2.195 4.243 1.016 8.967.95 13.563.524z"
  }), _react["default"].createElement("path", {
    opacity: 0.35,
    fill: "#FFF",
    d: "M28.854 44.271c-1.082 1.076-9.312 2.019-10.828 2.019-1.773 0-6.768-6.851-6.768-8.355 0-2.717 2.977-10.546 3.939-11.497 1.084-1.076 9.949-1.695 11.462-1.695 1.586.001 8.228 7.858 8.228 9.359.002.475-5.207 9.338-6.033 10.169z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "#ABD6FF",
    d: "M26.651 24.742c-1.514 0-10.378.619-11.462 1.695-.382.378-1.082 1.846-1.787 3.642.281 3.719 19.78 3.766 19.587.771-2.619-3.427-5.502-6.107-6.338-6.108z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M8.666 53.697c19.209 4.432 22.963 5.307 44.934-.234-16.612 1.238-29.464 1.873-44.934.234z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M15.676 56.621c12.508 2.919 26.588 2.174 39.658-1.254-13.336.36-26.246 1.774-39.658 1.254z"
  }), _react["default"].createElement("linearGradient", {
    id: "tumbler-glass_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 14.024,
    y1: 49.538,
    x2: 14.024,
    y2: 4.521
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.114,
    stopColor: "#fff",
    stopOpacity: 0.114
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "url(#tumbler-glass_svg__c)",
    d: "M6.799 9.996s2.367 25.271 3.118 35.729c.094 1.313 11.339 5.269 11.333 3.25-.033-11.993-.833-38.063-.833-38.063s-10.229-.208-13.618-.916z"
  }));
};

var _default = SvgTumblerGlass;
exports["default"] = _default;