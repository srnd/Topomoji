"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTaurus = function SvgTaurus(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "taurus_svg__a",
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
    fill: "url(#taurus_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.67 13.221c-3.884.044-6.695.831-8.596 2.408-1.181.979-2.177 2.346-3.142 3.669-1.738 2.384-3.424 4.313-5.933 4.496-2.597-.184-4.195-2.113-5.933-4.498-.964-1.321-1.961-2.688-3.14-3.667-1.901-1.577-4.714-2.364-8.633-2.408-1.496 0-2.288 1.199-2.295 2.384-.007 1.209.784 2.443 2.315 2.463 4.534.054 6.872 2.142 9.174 5.494.593.863 1.179 1.59 1.773 2.218-3.988 2.325-6.676 6.637-6.676 11.585 0 7.408 6.006 13.414 13.414 13.414s13.413-6.005 13.413-13.414c0-4.951-2.689-9.265-6.681-11.589a19.3 19.3 0 0 0 1.774-2.209c2.415-3.442 4.691-5.446 9.178-5.499 1.529-.02 2.322-1.254 2.315-2.463-.006-1.185-.796-2.384-2.327-2.384zM32 45.785a8.42 8.42 0 1 1 0-16.84 8.42 8.42 0 0 1 0 16.84z"
  }));
};

var _default = SvgTaurus;
exports["default"] = _default;