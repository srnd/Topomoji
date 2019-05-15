"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseVacancyButton = function SvgJapaneseVacancyButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-vacancy-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-vacancy-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49 45.713V50H15.117v-4.287H29.56v-5.912H19.182v-4.248h26.527v4.248H34.285v5.912H49zM30.141 21.859c-.697 6.588-2.826 10.756-12.662 12.94-.387-1.111-1.549-3.016-2.478-3.971 8.441-1.508 9.797-4.285 10.416-8.969h-5.344v4.604h-4.529v-8.891h14.018V14h4.725v3.572h14.367v8.215H43.89v-3.928h-5.461v6.271c0 1.07.232 1.231 1.434 1.231h3.445c.969 0 1.162-.397 1.316-2.899.854.674 2.75 1.35 3.951 1.627-.465 4.168-1.705 5.279-4.803 5.279h-4.607c-4.338 0-5.268-1.27-5.268-5.199v-6.311h-3.756z"
  }));
};

var _default = SvgJapaneseVacancyButton;
exports["default"] = _default;