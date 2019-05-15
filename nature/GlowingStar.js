"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlowingStar = function SvgGlowingStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE463",
    d: "M32 49.088c-.441 0-5.595 12.912-.004 12.912 5.604 0 .447-12.912.004-12.912zM42.893 16.481c.312.312 13.112-5.185 9.157-9.129-3.96-3.949-9.471 8.816-9.157 9.129zM21.107 16.483c.312-.312-5.199-13.078-9.154-9.133-3.96 3.951 8.841 9.445 9.154 9.133zM14.249 37.169c-.164-.409-14.1-.437-12.042 4.751 2.063 5.195 12.204-4.342 12.042-4.751zM49.874 36.996c-.176.404 9.668 10.244 11.886 5.122 2.222-5.128-11.709-5.527-11.886-5.122z"
  }), _react["default"].createElement("linearGradient", {
    id: "glowing-star_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 54.727,
    x2: 32,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#glowing-star_svg__a)",
    d: "M30.844 3.483c.636-1.978 1.676-1.978 2.311 0l5.771 17.981 18.504-.012c2.151 0 2.512 1.032.803 2.289L43.208 34.794l5.77 17.96c.638 1.979-.242 2.568-1.953 1.312L32 43.029 16.975 54.065c-1.711 1.257-2.59.667-1.953-1.312l5.771-17.96L5.767 23.742c-1.71-1.257-1.35-2.289.803-2.289l18.504.012 5.77-17.982z"
  }));
};

var _default = SvgGlowingStar;
exports["default"] = _default;