"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgScorpio = function SvgScorpio(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "scorpio_svg__a",
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
    fill: "url(#scorpio_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M51.213 41.88l-4.243-4.364c-1.912-1.969-4.464.656-2.551 2.625l1.51 1.555c-2.552.007-4.93.178-5.256-3.536V20.961c0-2.059-.81-3.852-2.284-5.048-1.234-1.003-2.895-1.555-4.673-1.555-1.997 0-4.062.719-5.502 2.094a6.138 6.138 0 0 0-.576-.539c-1.236-1.003-2.896-1.555-4.676-1.555-1.933 0-3.925.676-5.357 1.964-.856-1.1-2.008-1.918-3.363-2.267-.964-.247-1.945.356-2.188 1.351-.242.995.347 2.003 1.313 2.251 1.089.28 2.189 1.505 2.189 3.304v19.168c0 1.025.809 1.856 1.805 1.856.996 0 1.805-.831 1.805-1.856V20.961c0-2.105 2.329-2.891 3.797-2.891.958 0 1.848.276 2.441.759.614.497.912 1.195.912 2.132v19.168c0 1.025.808 1.856 1.804 1.856s1.805-.831 1.805-1.856V20.961c0-2.105 2.326-2.891 3.792-2.891.957 0 1.846.276 2.438.758.613.497.91 1.195.91 2.133l-.041 16.28c0 7.142 2.808 8.121 8.634 8.163l-1.238 1.274c-1.914 1.968.639 4.594 2.551 2.624l4.243-4.364c1.05-1.082 1.05-1.975-.001-3.058z"
  }));
};

var _default = SvgScorpio;
exports["default"] = _default;