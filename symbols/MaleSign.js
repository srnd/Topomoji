"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMaleSign = function SvgMaleSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "male-sign_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 25.483,
    y1: 13.588,
    x2: 46.018,
    y2: 49.155
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
    fill: "url(#male-sign_svg__a)",
    d: "M53.592 6H38.627l-.002 6.23 8.735.001-10.513 10.512a19.357 19.357 0 0 0-11.374-3.688C14.719 19.052 6 27.772 6 38.529 6 49.282 14.719 58 25.473 58.001 36.227 58 44.948 49.282 44.948 38.529c0-4.254-1.38-8.177-3.694-11.381l10.514-10.514v8.74l6.23-.002L58 6h-4.408zM25.473 51.768c-7.313 0-13.242-5.927-13.242-13.24s5.93-13.243 13.242-13.241c7.313 0 13.242 5.929 13.242 13.241s-5.93 13.243-13.242 13.24z"
  }));
};

var _default = SvgMaleSign;
exports["default"] = _default;