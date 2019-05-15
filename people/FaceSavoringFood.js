"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceSavoringFood = function SvgFaceSavoringFood(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "face-savoring-food_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
  })), _react["default"].createElement("circle", {
    fill: "url(#face-savoring-food_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.225 29.617c3.775-4.206 9.645-4.208 13.42 0 .58.644.924-.052.74-.598-3.67-10.858-11.23-10.858-14.9 0-.186.546.16 1.242.74.598zM14.355 29.617c3.776-4.206 9.645-4.208 13.419 0 .58.644.924-.052.74-.598-3.669-10.858-11.23-10.858-14.9 0-.183.546.161 1.242.741.598zM14.11 38.096c5.437 16.682 30.343 16.682 35.781 0 .346-1.061-.152-2.302-1.148-.777-7.168 10.938-26.315 10.938-33.484 0-.998-1.525-1.496-.284-1.149.777z"
  }), _react["default"].createElement("linearGradient", {
    id: "face-savoring-food_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 43.008,
    y1: 44.221,
    x2: 52.382,
    y2: 54.22
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
    fill: "url(#face-savoring-food_svg__b)",
    d: "M38.799 49.444s1.889 1.847 2.719 2.675c4.516 4.518 8.861 4.704 11.428 2.143 2.561-2.564 2.371-6.908-2.145-11.426-.83-.829-2.031-2.033-2.031-2.033s-1.92-.541-5.084 3.48c-5.25 2.932-4.887 5.161-4.887 5.161z"
  }), _react["default"].createElement("path", {
    fill: "#B81B1B",
    d: "M44.242 43.606s3.184 2.233 6.686 7.566c-4.67-4.687-8.123-6.373-8.123-6.373s.428-.366.881-.532c.203-.349.556-.661.556-.661z"
  }));
};

var _default = SvgFaceSavoringFood;
exports["default"] = _default;