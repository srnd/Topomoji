"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOden = function SvgOden(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#D99025",
    d: "M43.607 46.876l14.576 14.781c1.42 1.449 4.903-2.082 3.481-3.531L47.09 43.343l-3.483 3.533z"
  }), _react["default"].createElement("radialGradient", {
    id: "oden_svg__a",
    cx: 109.033,
    cy: -19.945,
    r: 16.969,
    gradientTransform: "matrix(.7071 -.7171 .4891 .496 -25.224 124.68)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff3db"
  }), _react["default"].createElement("stop", {
    offset: 0.254,
    stopColor: "#fef1d7"
  }), _react["default"].createElement("stop", {
    offset: 0.49,
    stopColor: "#faebcc"
  }), _react["default"].createElement("stop", {
    offset: 0.72,
    stopColor: "#f4e0b9"
  }), _react["default"].createElement("stop", {
    offset: 0.944,
    stopColor: "#ebd19f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e8cd97"
  })), _react["default"].createElement("path", {
    fill: "url(#oden_svg__a)",
    d: "M43.349 29.97c-4.088 4.146-9.142 9.306-12.378 12.585-7.771 7.88 3.101 19.364 11.099 11.255 3.185-3.227 8.09-8.201 12.178-12.35 6.986-7.087-3.279-19.219-10.899-11.49z"
  }), _react["default"].createElement("radialGradient", {
    id: "oden_svg__b",
    cx: 108.781,
    cy: -38.001,
    r: 16.228,
    gradientTransform: "scale(1 1.0141) rotate(-45 143.216 88.844)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f0c581"
  }), _react["default"].createElement("stop", {
    offset: 0.178,
    stopColor: "#e9bd7b"
  }), _react["default"].createElement("stop", {
    offset: 0.452,
    stopColor: "#d5a76c"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#b48453"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9c6a41"
  })), _react["default"].createElement("path", {
    fill: "url(#oden_svg__b)",
    d: "M19.629 19.023c-6.155 6.246-6.78 15.734-1.394 21.197 5.388 5.46 14.743 4.829 20.9-1.414 6.154-6.24 6.777-15.729 1.393-21.19-5.386-5.468-14.744-4.831-20.899 1.407z"
  }), _react["default"].createElement("radialGradient", {
    id: "oden_svg__c",
    cx: 106.794,
    cy: -59.966,
    r: 16.638,
    gradientTransform: "scale(1 1.0141) rotate(-45 143.216 88.844)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.285,
    stopColor: "#6b7e85"
  }), _react["default"].createElement("stop", {
    offset: 0.551,
    stopColor: "#62737a"
  }), _react["default"].createElement("stop", {
    offset: 0.809,
    stopColor: "#536167"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#444f54"
  })), _react["default"].createElement("path", {
    fill: "url(#oden_svg__c)",
    d: "M3.096 3.28C-.133 6.556 4.522 25.292 7.401 28.214c5.39 5.46 9.731.381 15.196-5.16 5.462-5.537 11.476-10.964 6.092-16.429C25.807 3.706 6.326.007 3.096 3.28z"
  }));
};

var _default = SvgOden;
exports["default"] = _default;