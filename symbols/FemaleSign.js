"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFemaleSign = function SvgFemaleSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "female-sign_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 19.564,
    y1: 6.083,
    x2: 47.686,
    y2: 54.791
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#female-sign_svg__a)",
    d: "M52 22c0-11.045-8.955-20-20-20s-20 8.955-20 20c0 9.954 7.28 18.185 16.8 19.72v6.08H21v6.4h7.8V62h6.4v-7.8H43v-6.4h-7.8v-6.08C44.72 40.186 52 31.954 52 22zm-33.6 0c0-7.511 6.089-13.6 13.6-13.6 7.511 0 13.6 6.089 13.6 13.6S39.511 35.6 32 35.6c-7.511 0-13.6-6.089-13.6-13.6z"
  }));
};

var _default = SvgFemaleSign;
exports["default"] = _default;