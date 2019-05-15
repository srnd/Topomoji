"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyCheckMark = function SvgHeavyCheckMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "heavy-check-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 31.095,
    y1: 19.069,
    x2: 44.996,
    y2: 43.146
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.173,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.412,
    stopColor: "#2b2738"
  }), _react["default"].createElement("stop", {
    offset: 0.555,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-check-mark_svg__a)",
    d: "M51.999 7l-31 34.091L12 34.273H7L20.999 57 57 7z"
  }));
};

var _default = SvgHeavyCheckMark;
exports["default"] = _default;