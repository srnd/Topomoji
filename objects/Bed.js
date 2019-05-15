"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBed = function SvgBed(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bed_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 14,
    y1: 49,
    x2: 14,
    y2: 36
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c6cfd4"
  })), _react["default"].createElement("path", {
    fill: "url(#bed_svg__a)",
    d: "M4 36h20v13H4z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M4 54h4v8H4zM56 54h4v8h-4z"
  }), _react["default"].createElement("linearGradient", {
    id: "bed_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 58,
    x2: 32.001,
    y2: 16
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#bed_svg__b)",
    d: "M61 48H6V17c0-.551-.449-1-1-1H3c-.549 0-1 .449-1 1v40c0 .549.451 1 1 1h58c.549 0 1-.451 1-1v-8c0-.551-.451-1-1-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "bed_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 41.52,
    y1: 48,
    x2: 41.52,
    y2: 36
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#bed_svg__c)",
    d: "M59 36H22v12h39s.5-12-2-12z"
  }), _react["default"].createElement("path", {
    fill: "#F46C60",
    d: "M29 36c0-1.689-8-2.053-8 0v12h8V36z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M23.51 36.341c-1.627 4.826-18.512 2.084-19.172-6.65-.273-3.61 3.66-4.766 8.916.984 2.959 3.237 11.744 1.25 10.256 5.666z"
  }));
};

var _default = SvgBed;
exports["default"] = _default;