"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBallotBoxWithBallot = function SvgBallotBoxWithBallot(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ballot-box-with-ballot_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 43.913,
    y1: 62,
    x2: 43.913,
    y2: 23.71
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#abbdc5"
  }), _react["default"].createElement("stop", {
    offset: 0.542,
    stopColor: "#adbfc7"
  }), _react["default"].createElement("stop", {
    offset: 0.786,
    stopColor: "#b3c6ce"
  }), _react["default"].createElement("stop", {
    offset: 0.97,
    stopColor: "#bed2db"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c1d5de"
  })), _react["default"].createElement("path", {
    fill: "url(#ballot-box-with-ballot_svg__a)",
    d: "M31.911 36.562c-2.441 3.73 0 25.438 0 25.438 1.857 0 22.793-12.875 23.465-13.571.813-.846 2.279-23.7 1.297-24.719 0 0-21.205 7.415-24.762 12.852z"
  }), _react["default"].createElement("linearGradient", {
    id: "ballot-box-with-ballot_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 31.911,
    y1: 36.562,
    x2: 31.911,
    y2: 10.856
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#abbdc5"
  }), _react["default"].createElement("stop", {
    offset: 0.233,
    stopColor: "#a4b6be"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#8fa1a9"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ballot-box-with-ballot_svg__b)",
    d: "M31.911 10.855S8.39 22.408 7.147 23.697c0 0 7.938 11.721 24.764 12.864L56.673 23.71c-1.582-1.643-24.762-12.855-24.762-12.855z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M41.056 28.466l-19.569-10.18-1.065.59 19.303 10.259z"
  }), _react["default"].createElement("linearGradient", {
    id: "ballot-box-with-ballot_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 29.225,
    y1: 23.245,
    x2: 39.366,
    y2: 5.681
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f7b91d"
  }), _react["default"].createElement("stop", {
    offset: 0.009,
    stopColor: "#f7bb1d"
  }), _react["default"].createElement("stop", {
    offset: 0.096,
    stopColor: "#f7cf1d"
  }), _react["default"].createElement("stop", {
    offset: 0.196,
    stopColor: "#f8dd1c"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#f8e51c"
  }), _react["default"].createElement("stop", {
    offset: 0.545,
    stopColor: "#f8e71c"
  })), _react["default"].createElement("path", {
    fill: "url(#ballot-box-with-ballot_svg__c)",
    d: "M31.495 2c-10.754 8.459-9.222 17.231-9.222 17.231l16.64 8.757s-.373-9.054 9.51-17.078L31.495 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "ballot-box-with-ballot_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 11.001,
    y1: 51.379,
    x2: 28.865,
    y2: 33.515
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.415,
    stopColor: "#8fa1a9"
  }), _react["default"].createElement("stop", {
    offset: 0.767,
    stopColor: "#a4b6be"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#abbdc5"
  })), _react["default"].createElement("path", {
    fill: "url(#ballot-box-with-ballot_svg__d)",
    d: "M7.147 23.697c-.625.648.9 24.706 1.473 25.301C9.026 49.418 29.634 62 31.911 62V36.562L7.147 23.697z"
  }), _react["default"].createElement("path", {
    opacity: 0.1,
    fill: "#1A1626",
    d: "M31.911 41.562L7.067 28.689v.439l24.844 12.871 25.084-13.365v-.439z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M28.14 15.121c1.277 2.964 2.875 5.692 3.273 5.034 2.381-3.94 4.797-7.098 8.771-11.709.504-.583-3.727 1.684-8.92 8.689-.383-.788-.791-2.263-.807-2.556-.026-.463-2.499.126-2.317.542z"
  }));
};

var _default = SvgBallotBoxWithBallot;
exports["default"] = _default;