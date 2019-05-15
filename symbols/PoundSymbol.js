"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPoundSymbol = function SvgPoundSymbol(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pound-symbol_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#pound-symbol_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M47.938 25.384l-.467 2.833c-.113.822-.652 1.233-1.46 1.233h-4.903l-.852 5.1h4.72c.907 0 1.389.553 1.233 1.46l-.425 2.832c-.114.865-.652 1.233-1.46 1.233h-4.99l-1.285 7.692c-.113.823-.638 1.233-1.445 1.233h-3.06c-.907 0-1.389-.553-1.232-1.459l1.246-7.466h-5.756l-1.284 7.692c-.114.823-.639 1.233-1.447 1.233h-3.06c-.906 0-1.388-.553-1.232-1.459l1.247-7.466h-4.732c-.906 0-1.389-.553-1.231-1.46l.467-2.832c.114-.822.651-1.233 1.46-1.233h4.96l.852-5.1h-4.777c-.906 0-1.388-.553-1.232-1.459l.467-2.833c.114-.822.652-1.233 1.46-1.233h5.005l1.285-7.693c.111-.821.635-1.232 1.442-1.232h3.061c.907 0 1.389.553 1.231 1.459l-1.246 7.465h5.757l1.284-7.693c.113-.82.638-1.231 1.444-1.231h3.062c.905 0 1.388.553 1.231 1.459l-1.246 7.465h4.676c.905.001 1.388.554 1.232 1.46zM35.333 29.45h-5.756l-.852 5.1h5.755l.853-5.1z"
  }));
};

var _default = SvgPoundSymbol;
exports["default"] = _default;