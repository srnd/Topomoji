"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBustInSilhouette = function SvgBustInSilhouette(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bust-in-silhouette_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#424e57"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b6d78"
  })), _react["default"].createElement("path", {
    fill: "url(#bust-in-silhouette_svg__a)",
    d: "M51.799 49.273c-2.054-1.178-9.696-4-11.797-4.768v-3.512c2.123-1.73 4.156-3.967 5.005-5.663.525-1.048 1.061-2.802 1.533-4.709 3.306-.507 5.656-11.116 1.518-10.784C47.862 9.329 42.443 2 32.002 2c-10.443 0-15.86 7.329-16.057 17.838-4.142-.333-1.788 10.277 1.519 10.784.473 1.907 1.009 3.661 1.533 4.709.848 1.696 2.881 3.935 5.005 5.666v3.536c-2.204.808-9.704 3.584-11.745 4.744C8.775 51.254 8 62 8 62h48s-.731-10.74-4.201-12.727z"
  }));
};

var _default = SvgBustInSilhouette;
exports["default"] = _default;