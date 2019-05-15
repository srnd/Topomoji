"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBalloon = function SvgBalloon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M11.691 62l-.191-.725c10.171-2.693 17.743-7.35 20.775-12.773l.654.365C29.799 54.469 22.059 59.256 11.691 62z"
  }), _react["default"].createElement("path", {
    fill: "#DE000C",
    d: "M32.49 48.305c-.69-.031-.539 1.427-1.393 2.865-.148.575 2.555.519 2.811 0-1.266-2.366-.724-2.833-1.418-2.865z"
  }), _react["default"].createElement("path", {
    fill: "#C70000",
    d: "M32.117 48.626s-.084 1.211-.64 2.207c-.198.356.517.313.749-.019.535-.764-.109-2.188-.109-2.188zM33.285 50.454c-.418-.949-.512-2.062-.512-2.062s-.408 1.257-.013 1.992c.174.32.675.41.525.07z"
  }), _react["default"].createElement("radialGradient", {
    id: "balloon_svg__a",
    cx: 25.614,
    cy: 29.757,
    r: 25.552,
    gradientTransform: "matrix(1.0125 0 0 1.1385 .003 -17.78)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7575"
  }), _react["default"].createElement("stop", {
    offset: 0.15,
    stopColor: "#ff6c6d"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#ff5457"
  }), _react["default"].createElement("stop", {
    offset: 0.704,
    stopColor: "#ff2c34"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000d"
  })), _react["default"].createElement("path", {
    fill: "url(#balloon_svg__a)",
    d: "M52.5 23.398c0 14.594-17.053 25.38-20.001 25.38S12.5 37.992 12.5 23.398C12.5 11.581 21.452 2 32.499 2 43.545 2 52.5 11.581 52.5 23.398z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M31.852 48.913c.429.041.868.042 1.296 0 .423-.05.276-.339-.079-.297a6.18 6.18 0 0 1-1.138 0c-.355-.041-.502.247-.079.297z"
  }), _react["default"].createElement("path", {
    fill: "#FF000D",
    d: "M30.973 51.835c.509.22 2.548.22 3.055 0 .5-.129.331-.856-.118-.741-.468.202-2.349.202-2.817 0-.45-.115-.621.613-.12.741z"
  }));
};

var _default = SvgBalloon;
exports["default"] = _default;