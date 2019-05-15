"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBarChart = function SvgBarChart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2 2h60v60H2z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M55.887 2h.5v60h-.5zM50.521 2h.5v60h-.5zM45.158 2h.5v60h-.5zM39.795 2h.5v60h-.5zM34.432 2h.5v60h-.5zM29.069 2h.5v60h-.5zM23.705 2h.5v60h-.5zM18.341 2h.5v60h-.5zM12.978 2h.5v60h-.5zM7.613 2h.5v60h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 7.613h60v.5H2zM2 12.978h60v.5H2zM2 18.341h60v.5H2zM2 23.705h60v.5H2zM2 29.068h60v.5H2zM2 34.432h60v.5H2zM2 39.795h60v.5H2zM2 45.159h60v.5H2zM2 50.522h60v.5H2zM2 55.887h60v.5H2z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M61 2h1v60h-1zM2 2h1v60H2z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 2h60v1H2zM2 61h60v1H2z"
  }), _react["default"].createElement("linearGradient", {
    id: "bar-chart_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 61,
    x2: 32,
    y2: 34
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cc0100"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#df1616"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#f12b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.744,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff3b3b"
  })), _react["default"].createElement("path", {
    fill: "url(#bar-chart_svg__a)",
    d: "M26 34h12v27H26z"
  }), _react["default"].createElement("linearGradient", {
    id: "bar-chart_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 13.999,
    y1: 61,
    x2: 13.999,
    y2: 22
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#69a123"
  }), _react["default"].createElement("stop", {
    offset: 0.237,
    stopColor: "#7dbb23"
  }), _react["default"].createElement("stop", {
    offset: 0.497,
    stopColor: "#8ecf22"
  }), _react["default"].createElement("stop", {
    offset: 0.753,
    stopColor: "#98dc22"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9be022"
  })), _react["default"].createElement("path", {
    fill: "url(#bar-chart_svg__b)",
    d: "M8 22h12v39H8z"
  }), _react["default"].createElement("linearGradient", {
    id: "bar-chart_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 50,
    y1: 61,
    x2: 50,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#009af7"
  }), _react["default"].createElement("stop", {
    offset: 0.081,
    stopColor: "#0ca2f4"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#29b5ee"
  }), _react["default"].createElement("stop", {
    offset: 0.549,
    stopColor: "#3dc3ea"
  }), _react["default"].createElement("stop", {
    offset: 0.778,
    stopColor: "#4acbe7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4ecee6"
  })), _react["default"].createElement("path", {
    fill: "url(#bar-chart_svg__c)",
    d: "M44 12h12v49H44z"
  }));
};

var _default = SvgBarChart;
exports["default"] = _default;