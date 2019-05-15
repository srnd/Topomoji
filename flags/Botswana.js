"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBotswana = function SvgBotswana(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#75AADB",
    d: "M60.912 24C57.41 11.316 45.797 2 32 2S6.59 11.316 3.088 24v16C6.59 52.684 18.203 62 32 62c13.795 0 25.41-9.316 28.912-22V24z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M61.576 27.012A30.385 30.385 0 0 0 60.912 24H3.088c-.273.984-.494 1.99-.666 3.012h59.154zM2.422 36.988c.172 1.022.392 2.028.666 3.012h57.824c.271-.984.492-1.99.664-3.012H2.422z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M2 32c0 1.705.148 3.373.422 5h59.154c.274-1.627.424-3.295.424-5s-.15-3.373-.424-5H2.422A30.068 30.068 0 0 0 2 32z"
  }), _react["default"].createElement("linearGradient", {
    id: "botswana_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#botswana_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgBotswana;
exports["default"] = _default;