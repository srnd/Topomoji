"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComoros = function SvgComoros(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M11.01 48v5.4C16.42 58.71 23.82 62 32 62c10.68 0 20.06-5.59 25.37-14H11.01z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M11.01 32v16h46.37A29.91 29.91 0 0 0 62 32H11.01z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11.01 32H62c0-5.88-1.7-11.37-4.63-16H11.01v16z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M11.01 16h46.37C52.06 7.59 42.68 2 32 2c-8.18 0-15.58 3.29-20.99 8.6V16z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M11.01 10.58C5.45 16.02 2 23.61 2 32s3.45 15.98 9.01 21.42L32.43 32 11.01 10.58z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M18 41.8c-4.56-.93-8-4.96-8-9.8s3.44-8.87 8-9.8c-.65-.13-1.31-.2-2-.2-5.52 0-10 4.48-10 10s4.48 10 10 10c.69 0 1.35-.07 2-.2z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M16.76 36l1.24-.94 1.24.94-.47-1.53L20 33.5h-1.53L18 32l-.46 1.5H16l1.23.97zM16.76 40l1.24-.94 1.24.94-.47-1.53L20 37.5h-1.53L18 36l-.46 1.5H16l1.23.97zM16.76 28l1.24-.94 1.24.94-.47-1.53L20 25.5h-1.53L18 24l-.46 1.5H16l1.23.97zM16.76 32l1.24-.94 1.24.94-.47-1.53L20 29.5h-1.53L18 28l-.46 1.5H16l1.23.97z"
  }), _react["default"].createElement("linearGradient", {
    id: "comoros_svg__a",
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
    fill: "url(#comoros_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgComoros;
exports["default"] = _default;