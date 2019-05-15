"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpeakingHead = function SvgSpeakingHead(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "speaking-head_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 25.201,
    y1: 62,
    x2: 25.201,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#424e57"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b6d78"
  })), _react["default"].createElement("path", {
    fill: "url(#speaking-head_svg__a)",
    d: "M43.534 38.395c-5.289-1.643-3.786-2.932 1.258-4.8 2.413-.878.953-2.761 1.011-4.262.029-.694 2.79-.553 2.587-3.215-.13-1.868-4.336-4.53-5.477-5.663-.666-.651 1.344-2.448-.072-4.034-1.938-2.152-2.24-5.905-3.41-8.001 0 0 .896-1.345.217-2.096C33.751-.217 11.768.392 6.147 10.006-.17 20.795-.256 35.718 12.867 43.76 18.704 47.343 7.897 57 11.232 57c15.912 0 23.125 5 23.125 5 0-2.167-2.573-11.926 1.937-11.571 3.931.297 8.729.127 8.295-4.205-.115-1.316-.274-2.492.665-3.582.925-1.076 2.284-3.016-1.72-4.247z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M52.563 36.346l9.436 3.302.001-6.604zM51.88 29.971l9.008-4.337-4.67-4.671zM51.88 42.684l4.337 9.007 4.671-4.67z"
  }));
};

var _default = SvgSpeakingHead;
exports["default"] = _default;