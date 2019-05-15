"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCurlyLoop = function SvgCurlyLoop(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "curly-loop_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 22.936,
    y1: -0.885,
    x2: 49.784,
    y2: 45.617
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
    fill: "url(#curly-loop_svg__a)",
    d: "M61.95 11.231s-19.9-1.6-30 3.1c-10.1-4.7-30-3.1-30-3.1v6.6s12.4-1.5 22.2 1.5c-6.1 5.3-9 11.3-9 16.9 0 22.4 33.7 22.4 33.7 0 0-5.6-2.9-11.6-9-16.9 9.8-3 22.2-1.5 22.2-1.5v-6.6h-.1zm-21.3 24.9c0 12.4-17.4 12.4-17.4 0 0-4.4 2.8-9.1 8.7-13.1 5.9 4 8.7 8.7 8.7 13.1z"
  }));
};

var _default = SvgCurlyLoop;
exports["default"] = _default;