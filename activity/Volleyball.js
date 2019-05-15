"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVolleyball = function SvgVolleyball(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "volleyball_svg__a",
    cx: 30.894,
    cy: 57.086,
    r: 32.617,
    gradientTransform: "translate(-5.887 -35.018) scale(1.0506)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.273,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.478,
    stopColor: "#e3e8ec"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.799,
    stopColor: "#c8d3d7"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("circle", {
    fill: "url(#volleyball_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M58.675 19.945c-1.996-2.798-4.019-4.478-5.237-5.336.279-.996.482-1.987.598-2.965a29.803 29.803 0 0 0-1.138-1.166c-.378 8.583-9.402 19.325-12.391 22.882l-.435.518c-3.613-.882-7.947-1.834-12.387-2.763 3.197-10.917 9.212-23.178 15.771-26.848a30.522 30.522 0 0 0-1.44-.553c-6.95 4.59-12.615 17.134-15.537 27.148-4.971-1.031-10-2.021-14.232-2.841.461-4.66 1.874-9.872 3.824-14.061 2.652-5.697 6.307-9.657 10.592-11.488a29.92 29.92 0 0 0-4.217 1.081c-2.957 2.275-5.504 5.624-7.492 9.896-1.988 4.271-3.434 9.577-3.92 14.338-1.902-.367-3.611-.694-5.041-.967-.532-.103-1.023-.196-1.47-.281-.169-1.928-.146-6.479 2.829-11.643a29.92 29.92 0 0 0-4.012 8.211 18.022 18.022 0 0 0-.016 3.81c-.461.783-.887 1.758-1.243 2.873a30.426 30.426 0 0 0 .206 6.363c.064-3.447.914-6.495 1.984-8.418l1.488.284c7.766 1.484 23.828 4.555 34.047 7.051 1.141 4.026 2.035 7.689 2.676 10.916-5.407 1.668-14.288 1.837-22.361.402-9.238-1.643-15.645-4.962-17.661-9.13.188 1.066.435 2.112.732 3.137 1.261 1.322 2.96 2.522 5.087 3.589 3.109 1.56 7.129 2.807 11.625 3.605 3.723.662 7.619.987 11.289.987 4.397 0 8.469-.468 11.521-1.385.718 3.882 1.038 7.072.942 9.431-4.011 2.16-10.203 3.306-16.273 2.996-4.901-.249-9.33-1.388-12.922-3.28a29.924 29.924 0 0 0 6.959 3.74c1.873.398 3.848.655 5.9.76a39.98 39.98 0 0 0 2.019.051c5.271 0 10.472-1.034 14.193-2.831-.103.732-.263 1.348-.479 1.839.506-.2 1.005-.416 1.498-.643 1.338-5.546-1.543-17.396-3.57-24.551.138-.166.295-.354.471-.562 1.447-1.723 3.909-4.653 6.281-8.147 4.15 5.227 11.092 14.436 7.513 24.969a30.123 30.123 0 0 0 1.938-2.657c.682-4.016.098-8.201-1.754-12.489-1.955-4.528-4.939-8.328-6.983-10.896 1.837-2.822 3.55-5.951 4.607-9.076 1.087.813 2.872 2.359 4.617 4.806 2.026 2.841 3.464 6.111 4.286 9.736a30.018 30.018 0 0 0-1.229-7.053 27.034 27.034 0 0 0-2.053-3.389z"
  }), _react["default"].createElement("radialGradient", {
    id: "volleyball_svg__b",
    cx: 555.934,
    cy: -16.032,
    r: 22.069,
    gradientTransform: "matrix(.3583 .4654 -.7924 .61 -189.208 -228.648)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#volleyball_svg__b)",
    d: "M30.595 30.575c-9.658 7.434-21.027 8.863-25.393 3.189-4.368-5.673-.08-16.297 9.578-23.732 9.658-7.435 21.026-8.863 25.393-3.19 4.369 5.673.08 16.298-9.578 23.733z"
  }));
};

var _default = SvgVolleyball;
exports["default"] = _default;