"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVerticalTrafficLight = function SvgVerticalTrafficLight(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "vertical-traffic-light_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 18,
    y1: 32,
    x2: 46,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.038,
    stopColor: "#494e59"
  }), _react["default"].createElement("stop", {
    offset: 0.08,
    stopColor: "#3b3b48"
  }), _react["default"].createElement("stop", {
    offset: 0.123,
    stopColor: "#33303e"
  }), _react["default"].createElement("stop", {
    offset: 0.17,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#vertical-traffic-light_svg__a)",
    d: "M46 60c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v56z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M46 4v4l6-2V4zM46 23v4l6-2v-2zM46 42v4l6-2v-2zM18 4v4l-6-2V4zM18 23v4l-6-2v-2zM18 42v4l-6-2v-2z"
  }), _react["default"].createElement("radialGradient", {
    id: "vertical-traffic-light_svg__b",
    cx: 32,
    cy: 13,
    r: 7,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.212,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#f63131"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#de1615"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("circle", {
    fill: "url(#vertical-traffic-light_svg__b)",
    cx: 32,
    cy: 13,
    r: 7
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#FFF",
    d: "M34.98 13.917l2.678 1.911L35.637 13l2.021-2.829-2.676 1.911-.859-1.204-1.203-.86 1.91-2.675L32 9.363l-2.828-2.021 1.91 2.675-1.203.86-.861 1.204-2.674-1.911L28.363 13l-2.019 2.829 2.675-1.911.859 1.204 1.205.86-1.912 2.675L32 16.637l2.83 2.021-1.912-2.676 1.205-.859.857-1.206zm-3.687-.21l-.99-.707.99-.707.707-.99.707.99.99.707-.99.707-.707.99-.707-.99z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M25.884 9.523c2.934-4.674 9.301-4.678 12.233.002.691 1.105 2.418.08 1.721-1.034-3.754-5.99-11.918-5.986-15.674-.001-.7 1.114 1.026 2.139 1.72 1.033z"
  }), _react["default"].createElement("radialGradient", {
    id: "vertical-traffic-light_svg__c",
    cx: 32,
    cy: 32,
    r: 7,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe02e"
  }), _react["default"].createElement("stop", {
    offset: 0.249,
    stopColor: "#ffda29"
  }), _react["default"].createElement("stop", {
    offset: 0.586,
    stopColor: "#ffc91a"
  }), _react["default"].createElement("stop", {
    offset: 0.971,
    stopColor: "#ffac02"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("circle", {
    fill: "url(#vertical-traffic-light_svg__c)",
    cx: 32,
    cy: 32,
    r: 7
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#FFF",
    d: "M34.98 32.918l2.678 1.91L35.637 32l2.021-2.829-2.676 1.911-.859-1.204-1.203-.86 1.91-2.675-2.83 2.02-2.828-2.021 1.91 2.675-1.203.86-.861 1.204-2.674-1.911L28.363 32l-2.019 2.828 2.675-1.91.859 1.203 1.205.859-1.912 2.676L32 35.637l2.83 2.021-1.912-2.676 1.205-.859.857-1.205zm-3.687-.211l-.99-.707.99-.707.707-.99.707.99.99.707-.99.707-.707.99-.707-.99z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M25.884 28.523c2.934-4.674 9.301-4.678 12.233.002.691 1.105 2.418.08 1.721-1.034-3.754-5.99-11.918-5.986-15.674-.001-.7 1.114 1.026 2.139 1.72 1.033z"
  }), _react["default"].createElement("radialGradient", {
    id: "vertical-traffic-light_svg__d",
    cx: 32,
    cy: 51,
    r: 7,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#91d422"
  }), _react["default"].createElement("stop", {
    offset: 0.747,
    stopColor: "#78b423"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69a123"
  })), _react["default"].createElement("circle", {
    fill: "url(#vertical-traffic-light_svg__d)",
    cx: 32,
    cy: 51,
    r: 7
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#FFF",
    d: "M34.98 51.918l2.678 1.91L35.637 51l2.021-2.828-2.676 1.91-.859-1.203-1.203-.859 1.91-2.676L32 47.363l-2.828-2.021 1.91 2.676-1.203.859-.861 1.203-2.674-1.91 2.02 2.83-2.02 2.828 2.676-1.91.859 1.203 1.203.859-1.91 2.676L32 54.637l2.83 2.021-1.912-2.676 1.205-.859.857-1.205zm-3.687-.211l-.99-.707.99-.707.707-.99.707.99.99.707-.99.707-.707.99-.707-.99z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M25.884 47.523c2.934-4.674 9.301-4.679 12.233.002.691 1.104 2.418.08 1.721-1.034-3.754-5.99-11.918-5.985-15.674-.001-.7 1.114 1.026 2.139 1.72 1.033z"
  }));
};

var _default = SvgVerticalTrafficLight;
exports["default"] = _default;