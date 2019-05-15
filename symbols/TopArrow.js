"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTopArrow = function SvgTopArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "top-arrow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16,
    y1: 20,
    x2: 48,
    y2: 20
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
    fill: "url(#top-arrow_svg__a)",
    d: "M32 4l16 16H38v16H26V20H16z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.616 44.82v1.859c0 .336-.187.521-.521.521h-3.191v11.979c0 .335-.187.522-.522.522h-1.981c-.335 0-.522-.188-.522-.522V47.201h-3.191c-.335 0-.522-.186-.522-.521v-1.86c0-.336.188-.523.522-.523H22.097c.333 0 .519.187.519.523zM22.732 52c0-4.501 3.56-8 8.001-8 4.439 0 7.999 3.499 7.999 8 0 4.5-3.56 8-7.999 8-4.441 0-8.001-3.5-8.001-8zm12.974 0c0-2.961-2.179-5.051-4.973-5.051-2.796 0-4.975 2.09-4.975 5.051 0 2.96 2.179 5.051 4.975 5.051 2.794 0 4.973-2.091 4.973-5.051zM51.837 49.414c0 2.828-2.283 5.117-5.199 5.117h-2.724v4.649c0 .335-.188.522-.522.522H41.41c-.336 0-.522-.188-.522-.522V44.82c0-.336.187-.523.522-.523h5.228c2.916 0 5.199 2.284 5.199 5.117zm-3.026 0c0-1.282-.94-2.277-2.173-2.277h-2.724v4.555h2.724c1.232-.001 2.173-1.002 2.173-2.278z"
  }));
};

var _default = SvgTopArrow;
exports["default"] = _default;