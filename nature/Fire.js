"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFire = function SvgFire(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "fire_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7b00"
  }), _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#fb6b00"
  }), _react["default"].createElement("stop", {
    offset: 0.711,
    stopColor: "#f04200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e82500"
  })), _react["default"].createElement("path", {
    fill: "url(#fire_svg__a)",
    d: "M53.371 19.292c-1.205 5.751-6.008 7.191-6.008 7.191S46.16 9.876 32.3 2c.548 8.376-7.366 12.563-10.825 19.622-.932-5.322-4.067-9.917-9.763-13 1.465 5.667-2.357 10.119-5.043 20C-.15 53.704 15.047 62 31.982 62c28.892 0 32.083-27.243 21.389-42.708z"
  }), _react["default"].createElement("linearGradient", {
    id: "fire_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.529,
    y1: 62,
    x2: 32.529,
    y2: 10.198
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.175,
    stopColor: "#ffa400"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff9200"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff4d00"
  })), _react["default"].createElement("path", {
    fill: "url(#fire_svg__b)",
    d: "M53.496 26.717c-3.733 6.06-8.798 6.076-8.798 6.076s-1.217-12.834-10.055-22.596C32.065 21.225 23.419 21.588 19.454 32c-1.491-4.5.643-8.878-4.813-15.795 1.627 8.833-3.955 12.667-5.354 22.583C7.485 51.578 19.517 62 31.982 62c21.623 0 28.089-20.808 21.514-35.283z"
  }), _react["default"].createElement("linearGradient", {
    id: "fire_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -318.325,
    y1: 62,
    x2: -318.325,
    y2: 17.544,
    gradientTransform: "matrix(-1 0 0 1 -286.236 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb500"
  }), _react["default"].createElement("stop", {
    offset: 0.087,
    stopColor: "#ffba00"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#ffda00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe600"
  })), _react["default"].createElement("path", {
    fill: "url(#fire_svg__c)",
    d: "M31.982 62C20.021 62 7.837 46.459 14.949 31.376c.73 6.438 5.783 6.875 5.783 6.875 3.592-12.438 11.797-12.875 14.733-20.708 4.625 7.834 6.568 21.516 6.568 21.516s4.693-.307 8.753-4.474C53.425 46.46 46.501 62 31.982 62z"
  }), _react["default"].createElement("linearGradient", {
    id: "fire_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -317.58,
    y1: 60,
    x2: -317.58,
    y2: 25.752,
    gradientTransform: "matrix(-1 0 0 1 -286.236 0)"
  }, _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#fff2ab"
  }), _react["default"].createElement("stop", {
    offset: 0.36,
    stopColor: "#fff1a5"
  }), _react["default"].createElement("stop", {
    offset: 0.524,
    stopColor: "#ffef92"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#ffec74"
  }), _react["default"].createElement("stop", {
    offset: 0.926,
    stopColor: "#ffe74b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe53b"
  })), _react["default"].createElement("path", {
    fill: "url(#fire_svg__d)",
    d: "M32.32 60c-9.443 0-15.849-11.312-15.199-16.937 0 0 6.97 7.689 7.132.636.133-5.823 3.299-12.761 11.151-17.948-1.644 6.874 3.744 10.614 2.808 20 0 0 3.495 1.728 6.689-2.438C47.329 49.597 43.618 60 32.32 60z"
  }));
};

var _default = SvgFire;
exports["default"] = _default;