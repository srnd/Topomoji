"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceWithRollingEyes = function SvgFaceWithRollingEyes(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "face-with-rolling-eyes_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2
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
    fill: "url(#face-with-rolling-eyes_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29.159 25.411c1.43 5.336-1.739 10.819-7.071 12.247a9.996 9.996 0 0 1-12.247-7.071c-1.429-5.332 1.733-10.817 7.071-12.247 5.331-1.428 10.818 1.739 12.247 7.071z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.19 20.653a4.5 4.5 0 0 1-3.182 5.511 4.497 4.497 0 0 1-5.512-3.182c-.644-2.402 1.012-3.999 3.415-4.643 2.399-.641 4.636-.087 5.279 2.314z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M54.159 25.412c1.43 5.336-1.739 10.819-7.071 12.247a9.997 9.997 0 0 1-12.247-7.07c-1.429-5.333 1.735-10.818 7.071-12.248 5.331-1.429 10.818 1.738 12.247 7.071z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.19 20.654a4.5 4.5 0 0 1-8.694 2.329c-.644-2.401 1.011-3.999 3.415-4.643 2.397-.642 4.636-.088 5.279 2.314zM38.212 46.1c-4.525-.801-10.584.537-13.483 2.717-.736.555-.402 1.166.2 1.029 3.112-.711 8.535-.715 12.881-.064 1.661.245 2.14-3.376.402-3.682z"
  }));
};

var _default = SvgFaceWithRollingEyes;
exports["default"] = _default;