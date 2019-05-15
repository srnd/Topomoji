"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDigitThree = function SvgDigitThree(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "digit-three_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#digit-three_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.573 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M43.191 37.719C43.191 44.457 37.9 48 31.98 48c-5.584 0-10.619-3.162-11.168-9.172-.045-.729.37-1.109 1.054-1.109h4.082c.639 0 .953.348 1.099.997.404 2.019 2.165 3.274 4.934 3.274 3.241 0 5.045-1.738 5.045-4.271 0-2.535-1.805-4.272-5.045-4.272h-2.287c-.685 0-1.066-.382-1.066-1.065v-2.287c0-.504.158-.897.461-1.323l5.258-6.985h-11.27c-.684 0-1.065-.382-1.065-1.065v-3.655c0-.684.381-1.065 1.065-1.065H40.68c.684 0 1.066.381 1.066 1.065v3.319c0 .504-.158.897-.461 1.323l-5.332 7.024c4.123 1.202 7.238 4.331 7.238 8.986z"
  }));
};

var _default = SvgDigitThree;
exports["default"] = _default;