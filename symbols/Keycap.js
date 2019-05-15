"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap = function SvgKeycap(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#keycap_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.399 0-8-3.6-8-8V10c0-4.399 3.601-8 8-8h44c4.4 0 8 3.601 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48.409 30.794v2.413c0 1.327-.845 2.051-2.172 2.051l-8.809-.241 4.947 7.239c.846 1.207.604 2.172-.604 2.896L39.48 46.6c-1.206.724-2.292.482-3.017-.846L32 37.912l-4.464 7.842c-.724 1.328-1.81 1.569-3.017.846l-2.292-1.328c-1.206-.723-1.448-1.809-.604-3.016l4.947-7.239-8.808.241c-1.327 0-2.171-.724-2.171-2.051v-2.413c0-1.327.845-2.052 2.171-2.052l8.808.242-4.947-7.239c-.844-1.207-.603-2.172.604-2.896l2.292-1.447c1.207-.725 2.292-.483 3.017.845L32 26.088l4.464-7.842c.725-1.328 1.811-1.569 3.017-.845l2.292 1.327c1.207.724 1.449 1.81.604 3.017l-4.947 7.239 8.809-.242c1.325 0 2.17.725 2.17 2.052z"
  }));
};

var _default = SvgKeycap;
exports["default"] = _default;