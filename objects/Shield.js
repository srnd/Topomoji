"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShield = function SvgShield(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M51.932 8.902c-4.304-8.391-35.561-8.35-39.867 0-.211.42-5.22 10.425-2.998 23.762 2.674 16.021 22.608 28.711 22.932 28.711.322 0 20.261-12.689 22.933-28.711 2.222-13.337-2.785-23.342-3-23.762z"
  }), _react["default"].createElement("radialGradient", {
    id: "shield_svg__a",
    cx: 31.687,
    cy: 29.63,
    r: 20.378,
    gradientTransform: "matrix(1 0 0 1.5 0 -14.815)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#fcfcfc"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#f2f3f5"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#e1e4e7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d8dce0"
  })), _react["default"].createElement("path", {
    fill: "url(#shield_svg__a)",
    d: "M55.305 29.713C56.414 17.879 52.131 9.289 51.932 8.9c-2.17-4.23-11.192-6.314-20.158-6.273v27.086h23.531z"
  }), _react["default"].createElement("radialGradient", {
    id: "shield_svg__b",
    cx: 31.811,
    cy: 29.692,
    r: 19.883,
    gradientTransform: "matrix(1 0 0 1.5 0 -14.846)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.278,
    stopColor: "#fb1f1f"
  }), _react["default"].createElement("stop", {
    offset: 0.537,
    stopColor: "#f0181b"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#dd0d13"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c7000a"
  })), _react["default"].createElement("path", {
    fill: "url(#shield_svg__b)",
    d: "M31.774 29.713V61.26c.123.07.207.113.225.113.322 0 20.261-12.689 22.933-28.709a40.83 40.83 0 0 0 .373-2.951H31.774z"
  }), _react["default"].createElement("radialGradient", {
    id: "shield_svg__c",
    cx: 31.812,
    cy: 29.692,
    r: 19.883,
    gradientTransform: "matrix(1 0 0 1.5 0 -14.846)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.278,
    stopColor: "#fb1f1f"
  }), _react["default"].createElement("stop", {
    offset: 0.537,
    stopColor: "#f0181b"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#dd0d13"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c7000a"
  })), _react["default"].createElement("path", {
    fill: "url(#shield_svg__c)",
    d: "M31.774 2.627C22.959 2.666 14.2 4.762 12.065 8.9c-.195.389-4.479 8.979-3.37 20.813h23.079V2.627z"
  }), _react["default"].createElement("radialGradient", {
    id: "shield_svg__d",
    cx: 31.688,
    cy: 29.629,
    r: 20.378,
    gradientTransform: "matrix(1 0 0 1.5 0 -14.815)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#fcfcfc"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#f2f3f5"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#e1e4e7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d8dce0"
  })), _react["default"].createElement("path", {
    fill: "url(#shield_svg__d)",
    d: "M8.695 29.713c.091.965.205 1.945.372 2.951 2.531 15.166 20.521 27.34 22.707 28.596V29.713H8.695z"
  }), _react["default"].createElement("linearGradient", {
    id: "shield_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 12.847,
    y1: 6.838,
    x2: 51.154,
    y2: 45.146
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.213,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#shield_svg__e)",
    d: "M32.034 5.945c9.943 0 15.875 2.533 16.753 4.248.047.093 4.746 9.482 2.686 21.846-1.896 11.375-14.312 21.686-19.474 25.283-5.162-3.598-17.573-13.906-19.473-25.283-2.035-12.223 2.507-21.494 2.68-21.84.884-1.715 6.844-4.254 16.828-4.254m0-3.945C22.942 2 13.842 4.141 11.64 8.41c-.215.43-5.33 10.647-3.06 24.27C11.31 49.041 31.668 62 31.999 62c.329 0 20.693-12.959 23.421-29.32 2.27-13.623-2.844-23.84-3.064-24.27C50.16 4.132 41.101 2 32.034 2z"
  }));
};

var _default = SvgShield;
exports["default"] = _default;