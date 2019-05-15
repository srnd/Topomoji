"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeartWithRibbon = function SvgHeartWithRibbon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "heart-with-ribbon_svg__a",
    cx: -486.619,
    cy: -420.25,
    r: 11.15,
    gradientTransform: "matrix(2.9058 0 0 3.0887 1446.185 1308.938)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#heart-with-ribbon_svg__a)",
    d: "M31.997 14.334C24.034 1.392 2 6.446 2 22.701 2 33.605 12.163 40.9 31.997 57 51.831 40.9 62 33.605 62 22.701c0-16.255-22.037-21.309-30.003-8.367z"
  }), _react["default"].createElement("radialGradient", {
    id: "heart-with-ribbon_svg__b",
    cx: 32,
    cy: 32.951,
    r: 21.348,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe72e"
  }), _react["default"].createElement("stop", {
    offset: 0.077,
    stopColor: "#ffe327"
  }), _react["default"].createElement("stop", {
    offset: 0.463,
    stopColor: "#ffd30b"
  }), _react["default"].createElement("stop", {
    offset: 0.685,
    stopColor: "#ffcd00"
  })), _react["default"].createElement("path", {
    fill: "url(#heart-with-ribbon_svg__b)",
    d: "M54.264 38.084a211.33 211.33 0 0 1-44.527 0c-6.883-5.422-7.26-11.441-7.26-11.441a200.813 200.813 0 0 0 59.047 0c-.001-.001-.264 5.357-7.26 11.441z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M11.402 36.871s3.043 5.605-.955 15.059l6.383-2.977 3.662 7.854s4.189-8.386-2.609-22.966l-6.481 3.03zM27.754 29.246s2.338 5.936 12.148 8.95L33.52 41.17l3.664 7.854s-9.117-2.181-15.916-16.761l6.486-3.017z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M19.121 33.793c1.758 3.771.691 8.734-2.375 11.029l-2.451 1.838c-3.063 2.295-6.131 1.689-6.814-1.344-.682-3.033-2.785-7.541-4.668-10.014-1.885-2.475-.377-5.212 3.35-6.083l2.984-.697c3.726-.873 8.216 1.501 9.974 5.271z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M8.5 45.336c-.086.51.412.777.59.916.535.42 1.645.621 3.15-.08a7.285 7.285 0 0 0 1.295-.789l2.453-1.837c1.717-1.285 2.74-3.552 2.844-5.827 0 0-9.303 1.583-10.332 7.617z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M20.436 33.18c1.758 3.771 6.246 6.145 9.973 5.271l2.984-.697c3.729-.871 5.234-3.609 3.35-6.083-1.883-2.474-3.984-6.981-4.668-10.014-.684-3.034-3.75-3.639-6.813-1.344l-2.453 1.838c-3.065 2.295-4.131 7.259-2.373 11.029z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M36.104 32.464c.447.262.33.816.322 1.04-.021.682-.58 1.66-2.086 2.361a7.356 7.356 0 0 1-1.438.487l-2.982.698c-2.09.489-4.482-.184-6.293-1.567 0-.001 7.193-6.109 12.477-3.019zM18.896 32.6s-.314 1.453-3.523-.183c-3.656-1.863-5.223 3.602.061 3.233 2.822-.197 3.462-3.05 3.462-3.05zM19.666 32.242s1.313.693 2.123-2.817c.924-3.997 6.117-1.685 2.438 2.125-1.965 2.034-4.561.692-4.561.692z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M22.182 38.641c-1.836.855-1.332 3.119-4.656-4.01-3.326-7.132-1.914-5.291-.08-6.146s1.33-3.119 4.656 4.011c3.324 7.129 1.914 5.289.08 6.145z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M22.242 38.773c-1.486.693-.871 2.969-4.283-4.345-3.41-7.317-2.063-5.382-.576-6.076 1.488-.693.873-2.97 4.285 4.346 3.41 7.316 2.062 5.382.574 6.075z"
  }));
};

var _default = SvgHeartWithRibbon;
exports["default"] = _default;