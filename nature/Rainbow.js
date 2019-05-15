"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRainbow = function SvgRainbow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 58,
    y1: -112,
    x2: 118,
    y2: -112,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "red"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d40100"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__a)",
    d: "M62 7.557V2C28.865 2 2 28.864 2 62h5.555S14.396 16.342 62 7.557z"
  }), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 63.555,
    y1: -114.778,
    x2: 118,
    y2: -114.778,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#eb7d00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f90"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__b)",
    d: "M7.555 62h5.557s9.203-41.242 48.889-48.889V7.557C31.934 7.557 7.555 31.932 7.555 62z"
  }), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 69.11,
    y1: -117.556,
    x2: 118,
    y2: -117.556,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffec45"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f9c802"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__c)",
    d: "M62 18.665v-5.554c-26.998 0-48.89 21.892-48.89 48.889h5.555c.001 0 7.648-34.825 43.335-43.335z"
  }), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 74.666,
    y1: -120.332,
    x2: 118,
    y2: -120.332,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#649c2b"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__d)",
    d: "M18.666 62h5.557S30.481 32.842 62 24.223v-5.558c-23.932 0-43.334 19.401-43.334 43.335z"
  }), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 80.223,
    y1: -123.111,
    x2: 118,
    y2: -123.111,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00a4d6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0061a6"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__e)",
    d: "M62 30.174v-5.951c-20.861 0-37.777 16.914-37.777 37.777h5.924C38.941 40.756 62 30.174 62 30.174z"
  }), _react["default"].createElement("linearGradient", {
    id: "rainbow_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 86.147,
    y1: -126.073,
    x2: 118,
    y2: -126.073,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d414cf"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7d0c7a"
  })), _react["default"].createElement("path", {
    fill: "url(#rainbow_svg__f)",
    d: "M62 36.151v-6.005c-17.59 0-31.853 14.262-31.853 31.854h5.984C36.129 48.178 47.596 36.151 62 36.151z"
  }));
};

var _default = SvgRainbow;
exports["default"] = _default;