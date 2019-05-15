"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyMinusSign = function SvgHeavyMinusSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "heavy-minus-sign_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 23.585,
    y1: 17.425,
    x2: 40.415,
    y2: 46.575
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.568,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-minus-sign_svg__a)",
    d: "M7 27h50v10H7z"
  }));
};

var _default = SvgHeavyMinusSign;
exports["default"] = _default;