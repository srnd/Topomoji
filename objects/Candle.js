"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCandle = function SvgCandle(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "candle_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20.578,
    y1: 41.743,
    x2: 43.134,
    y2: 41.743
  }, _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.548,
    stopColor: "#c7d2d6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__a)",
    d: "M20.578 21.486v36.368c0 5.527 22.556 5.527 22.556 0V21.486H20.578z"
  }), _react["default"].createElement("radialGradient", {
    id: "candle_svg__b",
    cx: 30.645,
    cy: 23.069,
    r: 12.479,
    gradientTransform: "matrix(1.0037 0 0 .3917 1.14 14.032)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#f7f1ed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9e2e8"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__b)",
    d: "M43.647 22.897c1.359-3.896-18.708-6.321-23.069-1.411-1.48 1.667.428 2.49-.213 4.827-1.767 6.438 3.481-1.958 3.063 2.083-.568 5.489-2.274 13.104.418 12.448 1.411-.344-.031-5.969 1.066-10.406.796-3.219 4.514-3.131 5.269-.979 3.366 9.592 9.517-7.713 10.393-.063.516 4.5-1.326 16.782 1.903 15.438 3.426-1.427-2.01-13.169.656-16.25 2.272-2.625-.794-1.934.514-5.687z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M40.911 22.623c-2.747 4.068-14.928 3.666-17.612.221-1.547-1.982 3.905-3.535 8.557-2.382 5.875 1.456 9.92.876 9.055 2.161z"
  }), _react["default"].createElement("linearGradient", {
    id: "candle_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 31.59,
    y1: 20.301,
    x2: 31.59,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7b00"
  }), _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#fb6b00"
  }), _react["default"].createElement("stop", {
    offset: 0.711,
    stopColor: "#f04200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e82500"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__c)",
    d: "M31.298 2c-1.165 6.547-11.813 18.301-.097 18.301 10.478 0 5.784-14.06.097-18.301z"
  }), _react["default"].createElement("linearGradient", {
    id: "candle_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 31.539,
    y1: 20.301,
    x2: 31.539,
    y2: 4.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.175,
    stopColor: "#ffa400"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff9200"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff4d00"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__d)",
    d: "M32.015 4.5c-.788 3.364-10.333 15.801-.813 15.801 8.797 0 3.519-12.823.813-15.801z"
  }), _react["default"].createElement("linearGradient", {
    id: "candle_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -317.498,
    y1: 20.301,
    x2: -317.498,
    y2: 6.914,
    gradientTransform: "matrix(-1 0 0 1 -286.236 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb500"
  }), _react["default"].createElement("stop", {
    offset: 0.087,
    stopColor: "#ffba00"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#ffda00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe600"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__e)",
    d: "M31.201 20.301c-6.56 0-.997-10.087 1.425-13.387.254 6.253 4.669 13.387-1.425 13.387z"
  }), _react["default"].createElement("linearGradient", {
    id: "candle_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -317.538,
    y1: 19.69,
    x2: -317.538,
    y2: 9.244,
    gradientTransform: "matrix(-1 0 0 1 -286.236 0)"
  }, _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#fff2ab"
  }), _react["default"].createElement("stop", {
    offset: 0.36,
    stopColor: "#fff1a5"
  }), _react["default"].createElement("stop", {
    offset: 0.524,
    stopColor: "#ffef92"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#ffec74"
  }), _react["default"].createElement("stop", {
    offset: 0.926,
    stopColor: "#ffe74b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe53b"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__f)",
    d: "M31.304 19.69c-2.891 0-1.893-6.17.944-10.446-.337 5.067 2.515 10.446-.944 10.446z"
  }), _react["default"].createElement("linearGradient", {
    id: "candle_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 31.539,
    y1: 23.689,
    x2: 31.539,
    y2: 16.518
  }, _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#f3f3f3"
  }), _react["default"].createElement("stop", {
    offset: 0.246,
    stopColor: "#d5d5d7"
  }), _react["default"].createElement("stop", {
    offset: 0.27,
    stopColor: "#afadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.296,
    stopColor: "#8c8a92"
  }), _react["default"].createElement("stop", {
    offset: 0.325,
    stopColor: "#706d77"
  }), _react["default"].createElement("stop", {
    offset: 0.356,
    stopColor: "#585561"
  }), _react["default"].createElement("stop", {
    offset: 0.392,
    stopColor: "#464350"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#393644"
  }), _react["default"].createElement("stop", {
    offset: 0.489,
    stopColor: "#322e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.606,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.624,
    stopColor: "#4e473b"
  }), _react["default"].createElement("stop", {
    offset: 0.651,
    stopColor: "#776c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.682,
    stopColor: "#9c8d3b"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#bba83b"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#d4be3b"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#e7d03b"
  }), _react["default"].createElement("stop", {
    offset: 0.835,
    stopColor: "#f5dc3b"
  }), _react["default"].createElement("stop", {
    offset: 0.892,
    stopColor: "#fde33b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe53b"
  })), _react["default"].createElement("path", {
    fill: "url(#candle_svg__g)",
    d: "M32.329 23.407c-.141.476-.9.306-.8-.18.917-4.399-.803-4.923-1.046-6.148-.072-.369 1.176-.669 1.185-.523.051.841 1.515 3.996.661 6.851z"
  }));
};

var _default = SvgCandle;
exports["default"] = _default;