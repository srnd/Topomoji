"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPageFacingUp = function SvgPageFacingUp(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M56 62V23.702C56 17.245 42.543 2 38.867 2H8v60h48z"
  }), _react["default"].createElement("linearGradient", {
    id: "page-facing-up_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 53.781,
    y1: 11.482,
    x2: 38.896,
    y2: 21.432
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.041,
    stopColor: "#5b6a72"
  }), _react["default"].createElement("stop", {
    offset: 0.195,
    stopColor: "#859198"
  }), _react["default"].createElement("stop", {
    offset: 0.352,
    stopColor: "#a8b1b7"
  }), _react["default"].createElement("stop", {
    offset: 0.51,
    stopColor: "#c3cbd0"
  }), _react["default"].createElement("stop", {
    offset: 0.669,
    stopColor: "#d7dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.832,
    stopColor: "#e2e7ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#page-facing-up_svg__a)",
    d: "M38.867 2.015C42.313 2.015 56 15.62 56 23.702V45.5S2.521 38.63 14.854 2l24.013.015z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M13 9h12v1H13zM13 17h38v1H13zM13 21h38v1H13zM13 25h38v1H13zM13 29h38v1H13zM13 33h33v1H13zM13 41h21v1H13zM13 45h38v1H13zM13 49h38v1H13zM13 53h13v1H13zM13 57h6v1h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "page-facing-up_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 547.054,
    y1: 124.959,
    x2: 539.513,
    y2: 117.418,
    gradientTransform: "rotate(-90 241.193 316.13)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d3d7db"
  }), _react["default"].createElement("stop", {
    offset: 0.02,
    stopColor: "#d6dade"
  }), _react["default"].createElement("stop", {
    offset: 0.159,
    stopColor: "#e9ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.324,
    stopColor: "#f5f6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.54,
    stopColor: "#fdfdfd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#page-facing-up_svg__b)",
    d: "M38.867 2.015C43.459 2.015 56 14.954 56 23.702c0 0-1.375-8.331-14.207-6.581 1.582-10-1.355-14.876-2.926-15.106z"
  }));
};

var _default = SvgPageFacingUp;
exports["default"] = _default;