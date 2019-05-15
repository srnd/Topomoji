"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWhiteHeavyCheckMark = function SvgWhiteHeavyCheckMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "white-heavy-check-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#47de00"
  }), _react["default"].createElement("stop", {
    offset: 0.281,
    stopColor: "#45da00"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#41cd00"
  }), _react["default"].createElement("stop", {
    offset: 0.868,
    stopColor: "#39b900"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#35ad00"
  })), _react["default"].createElement("path", {
    fill: "url(#white-heavy-check-mark_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48.799 11l-26.04 28.637L15.2 33.91H11L22.759 53 53 11z"
  }));
};

var _default = SvgWhiteHeavyCheckMark;
exports["default"] = _default;