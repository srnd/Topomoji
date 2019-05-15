"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWheelchairSymbol = function SvgWheelchairSymbol(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "wheelchair-symbol_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#wheelchair-symbol_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M45.024 44.454c-.398.082-1.59.307-1.59.307l-2.909-7.566c-.354-.935-1.461-1.699-2.455-1.699h-5.202l-.745-4.657h4.886c2.608 0 2.607-3.772.002-3.695l-5.426.014-.332-2.161c-.612-3.983-6.791-3.17-6.2.739.763 5.054 1.304 8.219 1.941 12.599.145.991.815 1.82 1.81 1.82h8.758l2.821 6.871c.335.943 1.39 1.485 2.344 1.204l2.973-.875c2.148-.634 1.434-3.337-.676-2.901z"
  }), _react["default"].createElement("ellipse", {
    fill: "#FFF",
    cx: 27.737,
    cy: 16.55,
    rx: 4.522,
    ry: 4.55
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29.824 47.707c-4.714 0-8.547-3.854-8.547-8.589a8.58 8.58 0 0 1 2.4-5.961c.934-.972-.486-5.251-2.073-3.917A12.885 12.885 0 0 0 17 39.118C17 46.222 22.755 52 29.824 52c2.978 0 5.721-1.026 7.899-2.745 1.976-1.558-.251-5.61-2.002-3.931a8.48 8.48 0 0 1-5.897 2.383z"
  }));
};

var _default = SvgWheelchairSymbol;
exports["default"] = _default;