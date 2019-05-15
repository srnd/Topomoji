"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTelephoneReceiver = function SvgTelephoneReceiver(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "telephone-receiver_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20.001,
    y1: 43.1,
    x2: 38.651,
    y2: 27.45
  }, _react["default"].createElement("stop", {
    offset: 0.424,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#464a56"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#565f68"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone-receiver_svg__a)",
    d: "M41.228 38.224c-2.662 1.965-4.615 4.457-5.779 7.098-2.695-2.674-5.408-5.766-8.006-9.197-2.607-3.452-4.844-6.917-6.677-10.243 2.89-.356 5.86-1.499 8.519-3.462C32.752 19.86 17.489-.334 14.021 2.225c-4.856 3.584-7.369 8.92-6.981 13.713.394 6.416 4.878 16.369 12.29 26.176 8.521 11.277 18.332 18.941 24.494 19.719 4.047.627 8.703-.486 12.668-3.41 3.468-2.563-11.796-22.76-15.264-20.199z"
  }));
};

var _default = SvgTelephoneReceiver;
exports["default"] = _default;