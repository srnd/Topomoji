"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLibra = function SvgLibra(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "libra_svg__a",
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
    fill: "url(#libra_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.789 46.36H14.211C12.76 46.36 12 47.527 12 48.68c0 1.153.76 2.32 2.211 2.32h35.578C51.24 51 52 49.833 52 48.68c0-1.153-.76-2.32-2.211-2.32zM14.188 42.501h13.701c1.236 0 2.24-1.03 2.24-2.357 0-.723-.395-1.643-1.152-2.005-5.293-2.518-6.631-8.479-5.637-12.954.813-3.647 3.512-7.545 8.66-7.545 4.727 0 7.586 4.096 8.684 7.928 1.521 5.309-1.738 10.246-5.744 12.379-.674.361-1.131 1.162-1.131 1.993v.205c0 1.264 1.008 2.292 2.242 2.292h13.76c1.436 0 2.188-1.154 2.188-2.293 0-1.139-.752-2.292-2.188-2.292h-8.094c1.014-1.159 1.906-2.295 2.111-2.673 1.395-2.578 1.961-6.201 1.449-9.233C43.949 18.081 38.738 13 32 13c-6.76 0-11.928 5.703-13.541 11.335-.834 2.912-.58 6.671.65 9.577.576 1.367 1.219 2.79 2.201 4.001h-7.123c-1.436 0-2.186 1.154-2.186 2.293.001 1.141.751 2.295 2.187 2.295z"
  }));
};

var _default = SvgLibra;
exports["default"] = _default;