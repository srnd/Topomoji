"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTradeMark = function SvgTradeMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "trade-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 1.601,
    y1: 2.998,
    x2: 25.426,
    y2: 26.823
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#41444e"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#343240"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#trade-mark_svg__a)",
    d: "M25.025 3.154v4.104c0 .741-.413 1.153-1.15 1.153h-7.03v26.437c0 .738-.41 1.152-1.15 1.152h-4.363c-.738 0-1.151-.414-1.151-1.152V8.411h-7.03C2.413 8.411 2 7.999 2 7.258V3.154C2 2.413 2.413 2 3.151 2h20.724c.737 0 1.15.413 1.15 1.154z"
  }), _react["default"].createElement("linearGradient", {
    id: "trade-mark_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 28.896,
    y1: 2.498,
    x2: 61.901,
    y2: 35.503
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#41444e"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#343240"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#trade-mark_svg__b)",
    d: "M62 3.154v31.693c0 .739-.412 1.153-1.15 1.153h-4.363c-.74 0-1.15-.414-1.15-1.152V13.164l-7.139 16.521c-.242.607-.689.875-1.334.875h-2.932c-.643 0-1.09-.268-1.332-.875l-7.139-16.521v21.684c0 .738-.412 1.152-1.15 1.152h-4.364c-.74 0-1.15-.414-1.15-1.152V3.154c0-.742.41-1.154 1.15-1.154h5.503c.641 0 1.09.267 1.332.874l8.617 19.915 8.615-19.915c.242-.607.691-.874 1.334-.874h5.502c.738 0 1.15.413 1.15 1.154z"
  }));
};

var _default = SvgTradeMark;
exports["default"] = _default;