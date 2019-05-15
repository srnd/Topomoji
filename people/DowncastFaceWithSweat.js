"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDowncastFaceWithSweat = function SvgDowncastFaceWithSweat(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "downcast-face-with-sweat_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#downcast-face-with-sweat_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.59 53.347c5.295-3.813 13.525-3.813 18.822 0 .813.582 1.296-.047 1.037-.543-5.148-9.84-15.75-9.84-20.898 0-.259.496.224 1.125 1.039.543z"
  }), _react["default"].createElement("radialGradient", {
    id: "downcast-face-with-sweat_svg__b",
    cx: -69.096,
    cy: -25.337,
    r: 17.213,
    gradientTransform: "matrix(.8863 0 0 .9091 67.738 34.122)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#70d4fd"
  }), _react["default"].createElement("stop", {
    offset: 0.386,
    stopColor: "#62d0f7"
  }), _react["default"].createElement("stop", {
    offset: 0.606,
    stopColor: "#4bc8ed"
  }), _react["default"].createElement("stop", {
    offset: 0.832,
    stopColor: "#2cbee0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0fb4d4"
  })), _react["default"].createElement("path", {
    fill: "url(#downcast-face-with-sweat_svg__b)",
    d: "M12.893 2C7.881 8.855 5 15.166 5 20.345c0 4.403 3.536 7.976 7.896 7.976 4.362 0 7.896-3.572 7.896-7.976.001-5.179-2.966-11.6-7.899-18.345z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.762 36.49c4.281-3.271 10.932-3.271 15.213 0 .654.502 1.045-.041.838-.465-4.16-8.445-12.729-8.445-16.887 0-.211.424.179.967.836.465zM12.025 36.49c4.281-3.271 10.932-3.271 15.213 0 .654.502 1.045-.041.838-.465-4.16-8.445-12.729-8.445-16.887 0-.21.424.18.967.836.465z"
  }));
};

var _default = SvgDowncastFaceWithSweat;
exports["default"] = _default;