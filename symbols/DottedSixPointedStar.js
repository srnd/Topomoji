"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDottedSixPointedStar = function SvgDottedSixPointedStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "dotted-six-pointed-star_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#dotted-six-pointed-star_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M44.173 32l6.494-10.667H37.681L31.999 12l-5.681 9.333H13.333L19.826 32l-6.493 10.666h12.986L31.999 52l5.682-9.334h12.986L44.173 32zm.306-7.334l-2.363 3.952-2.406-3.952h4.769zM40.094 32l-4.387 7.333h-7.415L23.907 32l4.385-7.334h7.415L40.094 32zm-8.095-13.533l1.714 2.866h-3.428l1.714-2.866zm-12.477 6.199h4.768l-2.405 3.951-2.363-3.951zm0 14.667l2.362-3.952 2.405 3.952h-4.767zm12.477 6.199l-1.713-2.866h3.428l-1.715 2.866zM42.116 35.38l2.363 3.953H39.71l2.406-3.953z"
  }), _react["default"].createElement("ellipse", {
    fill: "#FFF",
    cx: 31.999,
    cy: 31.999,
    rx: 2.8,
    ry: 2.857
  }));
};

var _default = SvgDottedSixPointedStar;
exports["default"] = _default;