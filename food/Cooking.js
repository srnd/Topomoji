"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCooking = function SvgCooking(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M42.262 45.339l3.079-3.079 2.799 2.8-3.08 3.079z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.463 43.764l-3.7 3.699c7.1 5.474 10.526 13.491 14.442 14.442 2.281.555 4.256-1.421 3.701-3.7-.951-3.917-8.97-7.345-14.443-14.441zm12.821 14.904c.009.595-1.021 1.624-1.615 1.614-1.447-.023-4.16-3.784-4.099-4.438.039-.412.863-1.236 1.275-1.276.653-.06 4.415 2.652 4.439 4.1z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 27,
    cy: 27.001,
    r: 25
  }), _react["default"].createElement("radialGradient", {
    id: "cooking_svg__a",
    cx: 26.999,
    cy: 27,
    r: 25.87,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.527,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.603,
    stopColor: "#4b5862"
  }), _react["default"].createElement("stop", {
    offset: 0.702,
    stopColor: "#414854"
  }), _react["default"].createElement("stop", {
    offset: 0.811,
    stopColor: "#312e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#302c3b"
  })), _react["default"].createElement("circle", {
    fill: "url(#cooking_svg__a)",
    cx: 27,
    cy: 27,
    r: 24.039
  }), _react["default"].createElement("radialGradient", {
    id: "cooking_svg__b",
    cx: 38.693,
    cy: 27.474,
    r: 15.629,
    gradientTransform: "translate(-10.205 .584) scale(.9615)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.679,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.793,
    stopColor: "#f4f6f6"
  }), _react["default"].createElement("stop", {
    offset: 0.964,
    stopColor: "#dce1e3"
  })), _react["default"].createElement("path", {
    fill: "url(#cooking_svg__b)",
    d: "M34.012 14.467c-8.28.575-9.967-5.058-17.197-.222-3.394 2.269-2.48 6.55-4.327 11.754-3.14 8.842 3.373 13.98 11.076 15.535 6.85 1.38 9.214-4.819 15.784-8.146 5.259-2.667 3.572-19.541-5.336-18.921z"
  }), _react["default"].createElement("radialGradient", {
    id: "cooking_svg__c",
    cx: 22.745,
    cy: 26.222,
    r: 8.461,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#f5c001"
  }), _react["default"].createElement("stop", {
    offset: 0.696,
    stopColor: "#f4b905"
  }), _react["default"].createElement("stop", {
    offset: 0.999,
    stopColor: "#f0a611"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f0a611"
  })), _react["default"].createElement("circle", {
    fill: "url(#cooking_svg__c)",
    cx: 24.417,
    cy: 27.997,
    r: 7.52
  }), _react["default"].createElement("linearGradient", {
    id: "cooking_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 24.418,
    y1: 27.409,
    x2: 24.418,
    y2: 21.729
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#cooking_svg__d)",
    d: "M28.779 23.475c4.704 5.244-13.426 5.246-8.723 0 2.086-2.329 6.635-2.328 8.723 0z"
  }));
};

var _default = SvgCooking;
exports["default"] = _default;