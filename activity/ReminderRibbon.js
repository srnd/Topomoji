"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgReminderRibbon = function SvgReminderRibbon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "reminder-ribbon_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.99,
    y1: 9.41,
    x2: 46.592,
    y2: 9.41
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#faa303"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa8003"
  })), _react["default"].createElement("path", {
    fill: "url(#reminder-ribbon_svg__a)",
    d: "M32.102 2h-.016S19.449 2 17.375 6.904c-.816 1.93-.117 7.615.127 9.383 1.701-3.199 7.453-5.553 14.289-5.553 7.209 0 13.213 2.617 14.531 6.086h.27V7.1c0-2.377-6.279-5.1-14.49-5.1z"
  }), _react["default"].createElement("path", {
    fill: "#FFC800",
    d: "M34.117 2.055S52 1.133 52 18.719c0 17.588-31.225 43.186-31.225 43.186l-4.896-11.139S70.036 6.355 34.117 2.055z"
  }), _react["default"].createElement("linearGradient", {
    id: "reminder-ribbon_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 12,
    y1: 32.05,
    x2: 48.123,
    y2: 32.05
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd900"
  })), _react["default"].createElement("path", {
    fill: "url(#reminder-ribbon_svg__b)",
    d: "M29.756 2.107S12 1.228 12 18.814C12 36.402 43.225 62 43.225 62l4.898-11.139S-6.162 6.406 29.756 2.107z"
  }));
};

var _default = SvgReminderRibbon;
exports["default"] = _default;