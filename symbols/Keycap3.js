"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap3 = function SvgKeycap3(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap-3_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
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
    fill: "url(#keycap-3_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M43.191 37.718C43.191 44.456 37.899 48 31.979 48c-5.584 0-10.618-3.162-11.167-9.172-.045-.729.37-1.11 1.054-1.11h4.082c.639 0 .953.348 1.099.997.404 2.02 2.164 3.274 4.934 3.274 3.24 0 5.045-1.737 5.045-4.271s-1.805-4.272-5.045-4.272h-2.287c-.684 0-1.065-.381-1.065-1.064v-2.287c0-.505.157-.897.46-1.323l5.258-6.985h-11.27c-.684 0-1.065-.382-1.065-1.065v-3.655c0-.684.381-1.064 1.065-1.064h17.604c.684 0 1.064.381 1.064 1.064v3.319c0 .504-.156.896-.459 1.322l-5.334 7.024c4.125 1.203 7.239 4.331 7.239 8.986z"
  }));
};

var _default = SvgKeycap3;
exports["default"] = _default;