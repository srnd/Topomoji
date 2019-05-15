"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTongue = function SvgTongue(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M60.015 7c-.565 0-11.735 3.486-28.013 3.486C15.721 10.486 4.551 7 3.985 7 2.692 7 2 7.887 2 8.743c0 12.675 10.519 26.146 30.002 26.146C51.484 34.889 62 21.418 62 8.743 62 7.887 61.311 7 60.015 7z"
  }), _react["default"].createElement("linearGradient", {
    id: "tongue_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 13.146,
    x2: 32.002,
    y2: 57.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b32e24"
  }), _react["default"].createElement("stop", {
    offset: 0.01,
    stopColor: "#b63026"
  }), _react["default"].createElement("stop", {
    offset: 0.112,
    stopColor: "#d14136"
  }), _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#e54f42"
  }), _react["default"].createElement("stop", {
    offset: 0.35,
    stopColor: "#f4594b"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#fc5e50"
  }), _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#ff6052"
  })), _react["default"].createElement("path", {
    fill: "url(#tongue_svg__a)",
    d: "M12.114 20.384v8.526c0 18.7 8.907 28.08 19.888 28.09 10.98-.01 19.887-9.39 19.887-28.09v-8.526c0-11.172-19.887-6.079-19.887-6.079s-19.888-5.093-19.888 6.079z"
  }), _react["default"].createElement("path", {
    fill: "#B81B1B",
    d: "M29.174 13.734l2.828 27.869 2.819-27.869c-1.702.285-2.819.57-2.819.57s-1.127-.284-2.828-.57z"
  }));
};

var _default = SvgTongue;
exports["default"] = _default;