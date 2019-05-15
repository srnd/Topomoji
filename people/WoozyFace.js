"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWoozyFace = function SvgWoozyFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "woozy-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62.001,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("path", {
    fill: "url(#woozy-face_svg__a)",
    d: "M32 1.999c16.571 0 30 13.439 30 30.004 0 16.572-13.43 29.998-30 29.998-16.572 0-29.996-13.426-30-29.998C2 15.438 15.428 1.999 32 1.999z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M53.467 26.669c0 5.521-4.479 9.996-9.998 9.998-5.523 0-10.002-4.479-10.002-10 0-5.52 20-5.52 20 .002z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.469 26.665c0 2.766-2.244 5-5.002 5.002-2.764 0-5-2.24-4.998-5a4.995 4.995 0 0 1 4.998-5 5.003 5.003 0 0 1 5.002 4.998z"
  }), _react["default"].createElement("radialGradient", {
    id: "woozy-face_svg__b",
    cx: 43.467,
    cy: 21.667,
    r: 7.906,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fdc22b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ac00"
  })), _react["default"].createElement("path", {
    fill: "url(#woozy-face_svg__b)",
    d: "M53.467 26.669c-4.58-1.343-16.949-.896-20-.002 0-5.52 4.479-10.002 10-10.002 5.521.002 10 4.482 10 10.004z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29.533 26.667c-.002 4.97-4.03 9-9 9s-8.997-4.03-9-9c.003-4.968 17.998-4.968 18 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25.776 25.604a3.502 3.502 0 0 1-3.5 3.5c-1.935 0-3.5-1.567-3.5-3.5s1.565-3.5 3.5-3.5c1.93 0 3.5 1.568 3.5 3.5z"
  }), _react["default"].createElement("radialGradient", {
    id: "woozy-face_svg__c",
    cx: 20.533,
    cy: 22.167,
    r: 7.115,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fdc22b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ac00"
  })), _react["default"].createElement("path", {
    fill: "url(#woozy-face_svg__c)",
    d: "M29.533 26.667c-3.341-3.423-15.491-3.086-18 0 .002-4.968 4.031-9 9-9a9.005 9.005 0 0 1 9 9z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M53.533 15.962c-2.813-4.43-8.045-8.053-11.639-8.314-.758-.055-2.096 2.346-1.469 2.473 4.809.98 9.5 3.598 12.357 7.518.384.526 1.175-1.011.751-1.677zM11.656 15.597c4.158-3.203 10.314-4.816 13.779-3.834.732.207 1.168 2.922.535 2.826-4.854-.723-10.158.131-14.182 2.838-.54.365-.757-1.35-.132-1.83z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M50.891 39.651c-.102 3.358-2.008 6.476-4.975 8.134-3.25 1.817-7.162 1.6-11.014-.613-3.993-2.293-7.422-1.334-10.45-.487-3.834 1.071-6.603 1.85-10.074-3.878-.635-1.049-2.773.247-2.137 1.296 4.454 7.35 8.933 6.098 12.886 4.99 2.801-.783 5.448-1.524 8.529.246 2.463 1.415 5.02 2.134 7.48 2.149 2.115.015 4.156-.489 6-1.521 3.729-2.084 6.125-6.008 6.252-10.241.04-1.274-2.458-1.35-2.497-.075z"
  }));
};

var _default = SvgWoozyFace;
exports["default"] = _default;