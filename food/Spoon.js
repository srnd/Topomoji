"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpoon = function SvgSpoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "spoon_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 127.238,
    y1: 31.791,
    x2: 146.519,
    y2: 31.791,
    gradientTransform: "rotate(-45.001 85.185 158.29)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.286,
    stopColor: "#e2e8ec"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#d7dfe3"
  }), _react["default"].createElement("stop", {
    offset: 0.83,
    stopColor: "#c3cfd3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#spoon_svg__a)",
    d: "M3.775 3.776c-4.827 4.827.797 17.524 9.564 21.827 4.092 2.008 9.746 1.266 12.446 2.859 10.312 6.092 27.056 40.307 35.02 32.342 7.965-7.963-26.25-24.709-32.342-35.02-1.596-2.699-.853-8.354-2.859-12.445C21.301 4.571 8.602-1.052 3.775 3.776z"
  }), _react["default"].createElement("radialGradient", {
    id: "spoon_svg__b",
    cx: 13.218,
    cy: 10.908,
    r: 8.831,
    gradientTransform: "rotate(-45.001 5.822 13.972) scale(1 1.5616)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#dadfe3"
  }), _react["default"].createElement("stop", {
    offset: 0.439,
    stopColor: "#d6dce0"
  }), _react["default"].createElement("stop", {
    offset: 0.86,
    stopColor: "#cbd3d6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c5ced1"
  })), _react["default"].createElement("path", {
    fill: "url(#spoon_svg__b)",
    d: "M23.769 12.438C20.108 4.65 8.816-.104 4.356 4.356c-4.461 4.46.294 15.751 8.08 19.411 10.682 5.024 16.36-.647 11.333-11.329z"
  }), _react["default"].createElement("radialGradient", {
    id: "spoon_svg__c",
    cx: 461.567,
    cy: -27.119,
    r: 7.693,
    gradientTransform: "matrix(.8757 .8352 -.2253 .2603 -358.378 -324.197)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "url(#spoon_svg__c)",
    d: "M58.929 60.895c-2.627 3.036-16.588-10.278-13.958-13.313 2.625-3.035 16.587 10.279 13.958 13.313z"
  }));
};

var _default = SvgSpoon;
exports["default"] = _default;