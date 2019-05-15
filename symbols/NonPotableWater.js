"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNonPotableWater = function SvgNonPotableWater(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "non-potable-water_svg__a",
    cx: 32,
    cy: 32,
    r: 26.2,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#312d3d"
  }), _react["default"].createElement("stop", {
    offset: 0.796,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.956,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#non-potable-water_svg__a)",
    d: "M56.631 40.325C45.531 73.166-3.73 56.517 7.369 23.675S67.73 7.483 56.631 40.325z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M35.279 25.273h-5.781l-4.553 1.557a3.187 3.187 0 0 0-3.193 3.182v3.801h4.336s-.109-2.664 1.336-2.664c0 0 5.908 4.952 9.445 0h3.67V26.83h-4.478c-.707 0-.782-1.557-.782-1.557zM26.578 19.305h4.953v1.889h-.777c-1.432 0-1.432 1.517 0 1.517h4.203c1.43 0 1.43-1.517 0-1.517h-.777v-1.889h4.953c1.777 0 1.777-2.748 0-2.748-.127 0-2.227-.014-4.602 0-.639-.82-2.704-.832-3.352 0-2.377-.014-4.476 0-4.601 0-1.777 0-1.777 2.748 0 2.748zM42.248 25.273h1.709v6.832h-1.709zM21.182 46.623h6.264l1.139-10.248h-8.539l1.136 10.248zm6.279-6.57H21.17l-.33-2.971h6.951l-.33 2.971z"
  }), _react["default"].createElement("linearGradient", {
    id: "non-potable-water_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.015,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#non-potable-water_svg__b)",
    d: "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm24 30a23.89 23.89 0 0 1-5.045 14.713L17.289 13.045A23.886 23.886 0 0 1 32 8c13.256 0 24 10.746 24 24zM8 32a23.884 23.884 0 0 1 5.046-14.712l33.666 33.668A23.893 23.893 0 0 1 32 56C18.746 56 8 45.256 8 32z"
  }));
};

var _default = SvgNonPotableWater;
exports["default"] = _default;