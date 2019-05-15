"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWearyFace = function SvgWearyFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "weary-face_svg__a",
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
    fill: "url(#weary-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M15.193 19.461c5.205-.677 10.699-3.89 12.455-7.034.369-.665-1.24-2.89-1.621-2.377-2.92 3.945-7.275 7.09-12.035 8.022-.638.125.42 1.491 1.201 1.389zM48.805 19.458c-5.205-.675-10.697-3.887-12.455-7.032-.371-.663 1.242-2.891 1.621-2.376 2.92 3.942 7.275 7.09 12.035 8.021.64.125-.42 1.491-1.201 1.387z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M51.719 25.414c-5.105 1.934-11.754.152-15.211-4.076-.527-.646-1.055-.242-.953.215 2.027 9.064 10.598 11.361 16.887 4.523.316-.344.062-.957-.723-.662zM27.491 21.338c-3.455 4.229-10.105 6.01-15.211 4.076-.782-.295-1.037.318-.721.662 6.289 6.838 14.858 4.541 16.887-4.523.103-.457-.425-.862-.955-.215zM32 34c-8.837-.059-15.946 4.945-16 11.168-.033 3.445 1.331 6.604 5.57 6.633 3.077.02 6.483-1.465 10.43-1.438 3.946-.027 7.353 1.457 10.43 1.438 4.239-.029 5.603-3.188 5.569-6.633C47.946 38.945 40.837 33.941 32 34z"
  }), _react["default"].createElement("linearGradient", {
    id: "weary-face_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 49.728,
    x2: 32.001,
    y2: 46.181
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d63324"
  }), _react["default"].createElement("stop", {
    offset: 0.08,
    stopColor: "#dc3f31"
  }), _react["default"].createElement("stop", {
    offset: 0.247,
    stopColor: "#e75346"
  }), _react["default"].createElement("stop", {
    offset: 0.435,
    stopColor: "#ee6155"
  }), _react["default"].createElement("stop", {
    offset: 0.657,
    stopColor: "#f3695d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f46c60"
  })), _react["default"].createElement("path", {
    fill: "url(#weary-face_svg__b)",
    d: "M32 46.646c-4.238-2-8.481 3.082-8.481 3.082S28.8 48.396 32 48.396s8.481 1.332 8.481 1.332-4.243-5.082-8.481-3.082z"
  }), _react["default"].createElement("linearGradient", {
    id: "weary-face_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 21,
    y1: 38,
    x2: 42.999,
    y2: 38
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd7e6"
  }), _react["default"].createElement("stop", {
    offset: 0.037,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 0.126,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.215,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.7,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.785,
    stopColor: "#fbfcfd"
  }), _react["default"].createElement("stop", {
    offset: 0.874,
    stopColor: "#eef1f6"
  }), _react["default"].createElement("stop", {
    offset: 0.963,
    stopColor: "#dae0ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd7e6"
  })), _react["default"].createElement("path", {
    fill: "url(#weary-face_svg__c)",
    d: "M42.721 39.037C40.009 37.156 36.509 36 32 36c-4.507 0-8.012 1.154-10.725 3.037-.436.301-.387.963.382.963H42.339c.77 0 .822-.662.382-.963z"
  }));
};

var _default = SvgWearyFace;
exports["default"] = _default;