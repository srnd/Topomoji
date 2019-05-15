"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSparkles = function SvgSparkles(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sparkles_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -210,
    y1: 275.019,
    x2: -210,
    y2: 276.019,
    gradientTransform: "matrix(42 0 0 -52 8843 14357)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.022,
    stopColor: "#ff9c03"
  }), _react["default"].createElement("stop", {
    offset: 0.274,
    stopColor: "#ffb91d"
  }), _react["default"].createElement("stop", {
    offset: 0.524,
    stopColor: "#ffce31"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#ffdb3c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdf40"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkles_svg__a)",
    d: "M23 4c-1.816 20.226-5.507 23.868-21 26 15.493 2.132 19.184 5.774 21 26 1.816-20.226 5.506-23.868 21-26-15.494-2.132-19.186-5.774-21-26z"
  }), _react["default"].createElement("linearGradient", {
    id: "sparkles_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -205.125,
    y1: 268.038,
    x2: -205.125,
    y2: 269.038,
    gradientTransform: "matrix(24 0 0 -26 4973 6997)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6fad00"
  }), _react["default"].createElement("stop", {
    offset: 0.039,
    stopColor: "#73b202"
  }), _react["default"].createElement("stop", {
    offset: 0.263,
    stopColor: "#87cc0f"
  }), _react["default"].createElement("stop", {
    offset: 0.493,
    stopColor: "#96de17"
  }), _react["default"].createElement("stop", {
    offset: 0.734,
    stopColor: "#9ee91c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a1ed1e"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkles_svg__b)",
    d: "M50 2c-1.037 10.113-3.146 11.935-12 13 8.854 1.065 10.963 2.887 12 13 1.037-10.113 3.146-11.935 12-13-8.854-1.065-10.963-2.887-12-13z"
  }), _react["default"].createElement("linearGradient", {
    id: "sparkles_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -205.125,
    y1: 268.038,
    x2: -205.125,
    y2: 269.038,
    gradientTransform: "matrix(24 0 0 -26 4967 7031)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7d0c7a"
  }), _react["default"].createElement("stop", {
    offset: 0.094,
    stopColor: "#930c90"
  }), _react["default"].createElement("stop", {
    offset: 0.254,
    stopColor: "#b30dae"
  }), _react["default"].createElement("stop", {
    offset: 0.421,
    stopColor: "#cc0dc6"
  }), _react["default"].createElement("stop", {
    offset: 0.595,
    stopColor: "#dd0ed8"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#e80ee2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eb0ee5"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkles_svg__c)",
    d: "M44 36c-1.037 10.113-3.146 11.934-12 13 8.854 1.066 10.963 2.888 12 13 1.037-10.112 3.146-11.934 12-13-8.854-1.066-10.963-2.887-12-13z"
  }));
};

var _default = SvgSparkles;
exports["default"] = _default;