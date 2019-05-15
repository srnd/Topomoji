"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSunrise = function SvgSunrise(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "sunrise_svg__a",
    cx: 32.5,
    cy: 33.195,
    r: 31.302,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.342,
    stopColor: "#ffa700"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#ff9d00"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#ff8d00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff7b00"
  })), _react["default"].createElement("path", {
    fill: "url(#sunrise_svg__a)",
    d: "M2 2h60v33H2z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunrise_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 48,
    x2: 32.001,
    y2: 22
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 0.285,
    stopColor: "#ffc700"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("circle", {
    fill: "url(#sunrise_svg__b)",
    cx: 32,
    cy: 35,
    r: 13
  }), _react["default"].createElement("radialGradient", {
    id: "sunrise_svg__c",
    cx: 32.375,
    cy: 31.85,
    r: 50.525,
    gradientTransform: "matrix(1 0 0 .6624 0 10.754)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#fee29a"
  }), _react["default"].createElement("stop", {
    offset: 0.098,
    stopColor: "#f8e09c"
  }), _react["default"].createElement("stop", {
    offset: 0.148,
    stopColor: "#e6daa1"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#cacfaa"
  }), _react["default"].createElement("stop", {
    offset: 0.269,
    stopColor: "#a2c1b6"
  }), _react["default"].createElement("stop", {
    offset: 0.338,
    stopColor: "#6fafc6"
  }), _react["default"].createElement("stop", {
    offset: 0.409,
    stopColor: "#3199d9"
  }), _react["default"].createElement("stop", {
    offset: 0.461,
    stopColor: "#0087e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#004c78"
  })), _react["default"].createElement("path", {
    fill: "url(#sunrise_svg__c)",
    d: "M2 35h60v27H2z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "#FEEC9A",
    d: "M29 49.875c0 1.688 6 0 6 0s-6-1.687-6 0zM26.75 46.875s10.5 1.688 10.5 0-10.5 0-10.5 0zM33.5 44.625s7.5 1.688 7.5 0-7.5 0-7.5 0zM44 37.875s-24-3.375-24 0 24 0 24 0zM23 41.625s19.5 3.375 19.5 0-19.5 0-19.5 0zM23 44.625c0 1.688 9 0 9 0s-9-1.687-9 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M6.625 25.02c2.175-1.23 4.364-2.833 7.435-2.379 3.527.522 5.153 1.202 7.034-.316 1.88-1.518 3.417 1.784 6 2.391 2.584.607 8.337 1.082 5.031 1.43-4.09.431-29.781 1.417-28.713 0 .366-.488 1.999-.44 3.213-1.126zM56.03 31.027c-1.717-.545-3.443-1.257-5.865-1.055-2.781.231-4.064.533-5.549-.141-1.483-.674-2.695.791-4.732 1.061s-6.576.48-3.969.635c3.227.191 23.492.629 22.65 0-.291-.216-1.578-.195-2.535-.5zM24.366 31.38c.707-1.218 1.92-1.515 2.88-.675-.44-1.265-2.296-1.326-2.88-.188-.582-1.143-2.44-1.08-2.881.186.96-.841 2.176-.543 2.881.677zM21.485 32.896c.425-.732 1.156-.912 1.733-.406-.266-.762-1.381-.798-1.733-.113-.35-.687-1.468-.649-1.733.111.577-.506 1.309-.326 1.733.408zM27.247 32.742c.277-.479.754-.596 1.131-.265-.174-.497-.902-.521-1.131-.073-.229-.449-.959-.425-1.133.072.377-.33.856-.213 1.133.266z"
  }), _react["default"].createElement("path", {
    fill: "#FFE463",
    d: "M16.302 30.428c.381-.656 1.034-.816 1.552-.363-.238-.682-1.237-.715-1.552-.102-.313-.615-1.314-.582-1.552.1.518-.454 1.173-.293 1.552.365zM17.543 31.769c.242-.417.656-.518.984-.23-.151-.433-.785-.453-.984-.064-.199-.39-.834-.369-.985.063.329-.288.745-.186.985.231z"
  }));
};

var _default = SvgSunrise;
exports["default"] = _default;