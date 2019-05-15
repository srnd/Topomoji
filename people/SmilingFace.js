"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSmilingFace = function SvgSmilingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "smiling-face_svg__a",
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
    fill: "url(#smiling-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("radialGradient", {
    id: "smiling-face_svg__b",
    cx: 14.19,
    cy: 38.254,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#smiling-face_svg__b)",
    cx: 14.189,
    cy: 38.254,
    r: 10
  }), _react["default"].createElement("radialGradient", {
    id: "smiling-face_svg__c",
    cx: 49.81,
    cy: 38,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#smiling-face_svg__c)",
    cx: 49.811,
    cy: 38,
    r: 10
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.225 31.834c3.775-4.207 9.645-4.208 13.42 0 .58.643.924-.053.74-.598-3.67-10.859-11.23-10.859-14.9 0-.186.545.16 1.241.74.598zM14.355 31.834c3.776-4.207 9.645-4.208 13.42 0 .58.643.924-.053.74-.598-3.67-10.859-11.23-10.859-14.9 0-.184.545.16 1.241.74.598zM40.946 42.264c-5.449 4.66-12.447 4.658-17.894 0-.771-.658-1.232.054-.985.613 4.183 9.498 15.685 9.496 19.867 0 .246-.56-.213-1.272-.988-.613z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M53.023 20.204c-3.538-3.874-9.321-6.533-12.904-6.167-.757.078-1.656 2.673-1.018 2.69 4.905.13 9.98 1.894 13.475 5.258.47.453.979-1.199.447-1.781zM10.978 20.208c3.537-3.877 9.32-6.535 12.903-6.169.757.076 1.656 2.674 1.018 2.689-4.905.132-9.981 1.893-13.474 5.258-.47.454-.98-1.198-.447-1.778z"
  }));
};

var _default = SvgSmilingFace;
exports["default"] = _default;