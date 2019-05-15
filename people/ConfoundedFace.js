"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgConfoundedFace = function SvgConfoundedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "confounded-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 88,
    y1: -142,
    x2: 88,
    y2: -82,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#confounded-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.08 27.324c-.588-.301-1.051.426-.553.844 6.092 5.125 7.024 6.135 7.023 6.584.001.451-.933 1.461-7.023 6.584-.498.418-.035 1.146.553.846 12.752-6.512 14.236-6.979 14.236-7.43s-1.484-.916-14.236-7.428zM48.92 42.182c.588.301 1.051-.426.553-.844-6.092-5.125-7.023-6.135-7.023-6.584 0-.451.934-1.461 7.023-6.584.498-.418.035-1.146-.553-.846-12.752 6.512-14.236 6.98-14.236 7.43 0 .45 1.484.916 14.236 7.428zM42.592 52.642c-1.809 0-2.938-1.424-3.844-2.568-.451-.57-1.133-1.432-1.492-1.432-.348 0-1.008.854-1.445 1.418-.889 1.15-1.998 2.582-3.817 2.582-1.819 0-2.927-1.432-3.816-2.582-.437-.564-1.097-1.418-1.443-1.418-.357 0-1.039.861-1.49 1.431-.906 1.145-2.033 2.569-3.842 2.569-3.122 0-4.647-3.896-4.811-4.341a1.5 1.5 0 0 1 2.814-1.041c.365.974 1.287 2.382 1.997 2.382.357 0 1.039-.861 1.489-1.431.906-1.145 2.033-2.569 3.842-2.569 1.819 0 2.926 1.432 3.816 2.582.437.564 1.097 1.418 1.443 1.418.348 0 1.008-.854 1.446-1.418.889-1.15 1.998-2.582 3.816-2.582 1.809 0 2.938 1.425 3.844 2.568.451.57 1.135 1.432 1.492 1.432.713 0 1.637-1.409 2.002-2.383a1.5 1.5 0 1 1 2.815 1.043c-.164.444-1.693 4.34-4.816 4.34z"
  }));
};

var _default = SvgConfoundedFace;
exports["default"] = _default;