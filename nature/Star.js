"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "star_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 61,
    x2: 32.001,
    y2: 3
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#star_svg__a)",
    d: "M30.732 4.631c.697-2.175 1.838-2.175 2.535 0l6.341 19.78 20.324-.011c2.364 0 2.761 1.132.883 2.514L44.311 39.072l6.339 19.759c.698 2.176-.267 2.824-2.146 1.442L32 48.135 15.497 60.273c-1.879 1.382-2.845.733-2.146-1.442l6.339-19.759L3.186 26.914c-1.878-1.382-1.482-2.514.882-2.514l20.324.011 6.34-19.78z"
  }));
};

var _default = SvgStar;
exports["default"] = _default;