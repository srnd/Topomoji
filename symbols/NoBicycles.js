"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNoBicycles = function SvgNoBicycles(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "no-bicycles_svg__a",
    cx: 32,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#no-bicycles_svg__a)",
    d: "M56.631 40.325C45.531 73.166-3.73 56.517 7.369 23.675S67.73 7.483 56.631 40.325z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M46.146 28.134a7.92 7.92 0 0 0-3.935 1.045L39.448 25.4l.938-2.376c4.744-3.146 1.957-2.276-3.559-2.276-1.254 0-2.691.12 1.672 2.134l-.633 1.586H26.185c.01-.067.018-.132.024-.199.132-1.263-.413-2.321-1.227-3.554-.212-.32-.737-.965.204-.965h3.602l1.132-1.815-5.746.004c-.554.05-1.308.37-1.597 1.097-.415 1.043.344 2.107.999 2.854 1.42 1.618.76 2.891.063 4.243a288.04 288.04 0 0 1-2.015 2.949 7.967 7.967 0 1 0 4.2 7.02 7.933 7.933 0 0 0-2.643-5.914c.46-.649.785-1.109.842-1.194l7.558 7.692c-.618.902-.147 3.118 1.899 3.105l.398 2.457h-.716v.908h2.493v-.908h-.86l-.414-2.558a2.275 2.275 0 0 0 1.471-1.498l2.538-.298c.813 3.536 3.973 6.175 7.756 6.175a7.968 7.968 0 0 0 0-15.935zm-22.14 7.967a6.15 6.15 0 1 1-6.149-6.15 6.1 6.1 0 0 1 2.726.644c-1.489 2.164-3.046 4.409-3.436 4.941-.638.865.768 2.01 1.459 1.074.192-.263 2.032-2.843 3.517-4.933a6.13 6.13 0 0 1 1.883 4.424zm9.642-.957l-.52-3.237h.713v-.909H31.35v.909h.859l.546 3.387-7.737-7.876.575-1.135H37.15l-3.502 8.861zm1.993 1.244a2.2 2.2 0 0 0-.35-.457l3.372-8.535 2.086 2.857a7.932 7.932 0 0 0-2.568 5.837l-2.54.298zm6.184-4.661l2.649 3.625-4.466.524a6.124 6.124 0 0 1 1.817-4.149zm4.321 10.524c-2.85 0-5.239-1.942-5.938-4.572l7.564-.888-4.483-6.134a6.12 6.12 0 0 1 2.856-.707 6.15 6.15 0 0 1 6.15 6.15 6.149 6.149 0 0 1-6.149 6.151z"
  }), _react["default"].createElement("linearGradient", {
    id: "no-bicycles_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#no-bicycles_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C62 15.432 48.568 2 32 2zm24 30a23.89 23.89 0 0 1-5.045 14.713L17.289 13.045A23.886 23.886 0 0 1 32 8c13.256 0 24 10.746 24 24zM8 32a23.89 23.89 0 0 1 5.046-14.712l33.666 33.668A23.893 23.893 0 0 1 32 56C18.746 56 8 45.256 8 32z"
  }));
};

var _default = SvgNoBicycles;
exports["default"] = _default;