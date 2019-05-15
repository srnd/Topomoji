"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWritingHand = function SvgWritingHand(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "writing-hand_svg__a",
    cx: 37.677,
    cy: 41.874,
    r: 35.638,
    gradientTransform: "matrix(.9925 .1479 -.0822 .5988 2.97 7.886)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.797,
    stopColor: "#fac65d"
  }), _react["default"].createElement("stop", {
    offset: 0.88,
    stopColor: "#f4bd50"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#writing-hand_svg__a)",
    d: "M58.763 34.396c-1.558 0-6.354-.124-9.194-.583-4.857-.785-12.95-4.709-26.128-9.155-2.187-.737-5.528 4.135-16.808 8.322-3.155 1.171.112 5.437-3.593 17.96-1.664 5.629 4.132 6.396 6.508 4.727.502 5.063 6.267 5.334 6.643 1.875 2.339 3.25 5.302 1.04 5.39-.629 1.941 2.941 5.681 1.17 5.39-1.246 2.631 6.063 17.336 5.396 21.649 1.044 0 0 4.871-.745 9.68-.745 3.371-.001 3.571-21.57.463-21.57z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M27.584 57.465c-.422 1.758-2.605 2.865-5.478.838-1.017 2.077-3.809 2.247-5.608.686-1.611 2.78-6.45 1.923-7.505-2.188-3.325 1.283-8.322-.471-6.665-6.074 3.734-12.627.203-17.024 4.049-18.451 10.584-3.931 13.945-8.443 16.6-8.443 2.021 0 17.091 6.584 25.534 9.006 2.613.749 8.451.807 10.254.807 4.598 0 4.162 23.069-.463 23.069-4.106 0-8.308.558-9.332.702-4.803 4.592-14.327 4.911-21.386.048zm-1.807-3.3c10.138 9.08 20.51 4.424 22.489 1.841 0 0 5.226-.791 10.035-.791 2.77 0 3.043-20.073.287-20.073-.023 0-6.387-.236-9.136-.589-4.214-.541-18.831-6.874-26.247-9.185-1.679-.523-5.271 4.216-16.313 8.314-2.423.899.431 5.416-3.135 17.471-1.419 4.807 3.698 5.717 6.408 3.164-.331 4.803 5.485 7.225 5.495 1.205 2.136 4.379 6.412 3.895 4.732-.722 3.782 4.07 7.032 4.492 5.385-.635z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M11.218 38.33c2.769 4.344-4.676 14.1 2.883 3.449 9.13-12.862.586-1.084-2.883-3.449z"
  }), _react["default"].createElement("linearGradient", {
    id: "writing-hand_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 19.736,
    y1: 30.322,
    x2: 25.652,
    y2: 34.453
  }, _react["default"].createElement("stop", {
    offset: 0.133,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.183,
    stopColor: "#47525c"
  }), _react["default"].createElement("stop", {
    offset: 0.278,
    stopColor: "#3c414d"
  }), _react["default"].createElement("stop", {
    offset: 0.395,
    stopColor: "#353543"
  }), _react["default"].createElement("stop", {
    offset: 0.559,
    stopColor: "#312e3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#writing-hand_svg__b)",
    d: "M43.951 4.476L40.505 2l-3.15 4.736-.873-.626-28.794 43.3-3.095 9.481-1.663 2.502.845.607 1.663-2.502 7.443-6.359 28.792-43.3-.871-.625z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M44.194 54.897c23.691-9.481-7.726-22.24-21.581-16.395-2.58 1.088-8.074 7.048-14.267 10.821-3.338 2.035-1.243 9.225 4.256 7.326 4.842-1.672 5.154-4.234 12.599-5.371 3.611 2.737 8.214 7.933 18.993 3.619z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M7.982 48.683c6.553-4.021 12.466-10.632 17.862-12.39l.461 1.428c-4.904 1.598-11.451 8.547-17.55 12.245-3.129 1.899-.89 7.207 3.666 5.963 4.79-1.309 5.039-4.84 13.054-5.424 4.665 4.253 10.174 7.199 19.336 3.345l.577 1.383c-9.763 4.111-15.598.95-20.411-3.178-6.737.564-6.739 3.753-12.148 5.317-6.605 1.91-9.105-6.076-4.847-8.689z"
  }));
};

var _default = SvgWritingHand;
exports["default"] = _default;