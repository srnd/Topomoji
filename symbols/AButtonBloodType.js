"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAButtonBloodType = function SvgAButtonBloodType(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "a-button-blood-type_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#a-button-blood-type_svg__a)",
    d: "M62 54c0 4.399-3.601 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.399 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M46.389 46.777c.262.777-.115 1.223-.904 1.223h-4.582c-.605 0-1.04-.274-1.223-.903l-1.541-4.834H25.86l-1.541 4.834c-.182.629-.616.903-1.222.903h-4.583c-.788 0-1.166-.446-.902-1.223l10.171-29.875c.183-.593.652-.902 1.257-.902h5.92c.605 0 1.074.309 1.257.903l10.172 29.874zM36.261 36.365L32 22.995l-4.261 13.371h8.522z"
  }));
};

var _default = SvgAButtonBloodType;
exports["default"] = _default;