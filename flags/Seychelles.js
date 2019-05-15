"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSeychelles = function SvgSeychelles(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M62 32c0-5.42-1.44-10.51-3.96-14.9L14.69 54.37 14 56c.13.1.26.19.39.29L61 39.71c.65-2.46 1-5.04 1-7.71z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M58.04 17.1C53.63 9.4 45.9 3.85 36.81 2.38L14 56l44.04-38.9z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M32 2c-8.19 0-15.62 3.29-21.03 8.61C5.44 16.05 2 23.62 2 32c0 9.53 4.44 18.01 11.36 23.51.12.1.25.19.37.29.09.06.17.13.26.2l.69-1.63L36.81 2.38A30.51 30.51 0 0 0 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M14.39 56.29c.06.04.11.08.17.12l40.25-4.92c2.88-3.36 5.02-7.37 6.19-11.77L14.39 56.29z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M32 62c9.13 0 17.3-4.08 22.81-10.51l-40.25 4.92A29.822 29.822 0 0 0 32 62z"
  }), _react["default"].createElement("linearGradient", {
    id: "seychelles_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
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
    fill: "url(#seychelles_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgSeychelles;
exports["default"] = _default;