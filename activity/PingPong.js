"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPingPong = function SvgPingPong(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ping-pong_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 33.111,
    y1: 55.601,
    x2: 33.111,
    y2: 6.972,
    gradientTransform: "translate(4.535 -4.981)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cc0100"
  }), _react["default"].createElement("stop", {
    offset: 0.29,
    stopColor: "#de1615"
  }), _react["default"].createElement("stop", {
    offset: 0.738,
    stopColor: "#f63131"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff3b3b"
  })), _react["default"].createElement("path", {
    fill: "url(#ping-pong_svg__a)",
    d: "M55.314 8.654C49.111 2.456 34.808-3.253 21.272 10.27c-8.954 8.946-12.157 20.249 0 32.396 12.159 12.145 23.471 8.943 32.418 0 13.54-13.524 7.828-27.818 1.624-34.012z"
  }), _react["default"].createElement("radialGradient", {
    id: "ping-pong_svg__b",
    cx: 49.24,
    cy: 58.461,
    r: 7.899,
    gradientTransform: "translate(4.535 -4.981)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.333,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.61,
    stopColor: "#e1e8ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("circle", {
    fill: "url(#ping-pong_svg__b)",
    cx: 55.016,
    cy: 55.011,
    r: 7
  }), _react["default"].createElement("linearGradient", {
    id: "ping-pong_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -11.368,
    y1: 110.222,
    x2: -11.368,
    y2: 98.755,
    gradientTransform: "rotate(45.001 75.138 111.137)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6b53c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdd674"
  })), _react["default"].createElement("path", {
    fill: "url(#ping-pong_svg__c)",
    d: "M14.615 33.119s3.448 7.975-2.391 13.81l4.784 4.778c5.835-5.834 13.818-2.392 13.818-2.392L14.615 33.119z"
  }), _react["default"].createElement("radialGradient", {
    id: "ping-pong_svg__d",
    cx: -11.292,
    cy: 111.754,
    r: 3.964,
    gradientTransform: "matrix(.7071 .7084 -3.1247 3.1302 370.767 -291.451)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#fdd674"
  }), _react["default"].createElement("stop", {
    offset: 0.465,
    stopColor: "#fad26d"
  }), _react["default"].createElement("stop", {
    offset: 0.72,
    stopColor: "#f2c659"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6b53c"
  })), _react["default"].createElement("path", {
    fill: "url(#ping-pong_svg__d)",
    d: "M24.823 43.301l-4.187-4.187-18.652 17.27s2.055 3.59 5.596 5.605l17.243-18.688z"
  }));
};

var _default = SvgPingPong;
exports["default"] = _default;