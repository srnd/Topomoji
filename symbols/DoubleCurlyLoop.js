"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDoubleCurlyLoop = function SvgDoubleCurlyLoop(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "double-curly-loop_svg__a",
    cx: 32,
    cy: 32,
    r: 24.739,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#double-curly-loop_svg__a)",
    d: "M62 14c-6.014 0-10.995 1.305-15 3.387C42.995 15.305 38.015 14 32 14c-6.014 0-10.995 1.305-15 3.387C12.995 15.305 8.015 14 2 14v6.234c3.429 0 6.434.535 9.024 1.439-4.701 4.553-6.927 10.354-6.927 15.16 0 17.555 25.806 17.555 25.806 0 0-4.807-2.226-10.607-6.928-15.16 2.591-.904 5.596-1.439 9.024-1.439 3.429 0 6.434.535 9.024 1.439-4.701 4.553-6.927 10.354-6.927 15.16 0 17.555 25.806 17.555 25.806 0 0-4.807-2.226-10.607-6.928-15.16 2.591-.904 5.596-1.439 9.024-1.439V14zM23.649 36.834c0 9.783-13.298 9.783-13.298 0 0-3.748 2.157-8.504 6.648-11.963 4.492 3.459 6.65 8.215 6.65 11.963zm30 0c0 9.783-13.298 9.783-13.298 0 0-3.748 2.157-8.504 6.648-11.963 4.492 3.459 6.65 8.215 6.65 11.963z"
  }));
};

var _default = SvgDoubleCurlyLoop;
exports["default"] = _default;