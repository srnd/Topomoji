"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDroolingFace = function SvgDroolingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "drooling-face_svg__a",
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
    fill: "url(#drooling-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M21.193 42.416c7.875 3.605 18.568 2.865 21.717 2.865.844 0 1.338.305 1.135.92-2.271 6.887-19.297 6.887-23.982-2.703-.522-1.072.408-1.412 1.13-1.082z"
  }), _react["default"].createElement("linearGradient", {
    id: "drooling-face_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 36.116,
    y1: 49.243,
    x2: 39.991,
    y2: 59.931
  }, _react["default"].createElement("stop", {
    offset: 0.03,
    stopColor: "#bdebff"
  }), _react["default"].createElement("stop", {
    offset: 0.17,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#72d5fe"
  }), _react["default"].createElement("stop", {
    offset: 0.55,
    stopColor: "#69d2fa"
  }), _react["default"].createElement("stop", {
    offset: 0.684,
    stopColor: "#5acdf4"
  }), _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#44c6ea"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#29bddf"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0fb4d4"
  })), _react["default"].createElement("path", {
    fill: "url(#drooling-face_svg__b)",
    d: "M29.927 50.588c.801-1.336 5.79-.934 5.79-.934 2.699-1.781 5.75-1.969 6.801-1.168-1.752 5.777 2.367 11.674-1.945 11.674-4.125 0 1.656-10.189-4.25-9.125-3.392.611-6.396-.447-6.396-.447z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M53.344 20.273c-4.158-3.201-10.314-4.814-13.779-3.832-.732.208-1.168 2.92-.535 2.826 4.854-.725 10.158.131 14.184 2.838.538.364.755-1.351.13-1.832zM10.959 19.496c3.537-3.877 9.319-6.534 12.904-6.168.755.076 1.655 2.674 1.016 2.689-4.905.131-9.981 1.893-13.474 5.257-.469.455-.98-1.197-.446-1.778z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.762 32.98c4.281-3.271 10.932-3.272 15.213 0 .654.502 1.045-.041.838-.465-4.16-8.445-12.729-8.445-16.887 0-.211.424.179.967.836.465zM12.025 32.98c4.281-3.271 10.932-3.272 15.212 0 .654.502 1.045-.041.838-.465-4.16-8.445-12.728-8.445-16.886 0-.21.424.18.967.836.465z"
  }));
};

var _default = SvgDroolingFace;
exports["default"] = _default;