"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOnArrow = function SvgOnArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "on-arrow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 20,
    x2: 62,
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
    fill: "url(#on-arrow_svg__a)",
    d: "M62 20L46 4v10H18V4L2 20l16 16V26h28v10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14.211 52c0-4.501 3.561-8 8.001-8s7.999 3.499 7.999 8c0 4.5-3.559 8-7.999 8s-8.001-3.5-8.001-8zm12.975 0c0-2.961-2.179-5.051-4.974-5.051s-4.974 2.09-4.974 5.051c0 2.96 2.179 5.051 4.974 5.051S27.186 54.96 27.186 52zM41.197 44.297h1.981c.335 0 .522.188.522.523v14.36c0 .335-.188.522-.522.522h-1.37c-.274 0-.5-.105-.645-.336l-5.771-9.183v8.996c0 .335-.188.522-.522.522h-1.98c-.336 0-.522-.188-.522-.522V44.82c0-.336.187-.523.522-.523h1.37c.275 0 .501.104.644.336l5.772 9.184V44.82c0-.336.187-.523.521-.523zM46.9 54.074l-.521-5.375V44.82c0-.336.186-.523.521-.523h2.365c.336 0 .523.188.523.523v3.879l-.523 5.375c-.031.313-.23.457-.527.457h-1.31c-.296 0-.494-.143-.528-.457zm-.384 5.107v-2.092c0-.335.188-.522.523-.522h2.09c.336 0 .522.188.522.522v2.092c0 .335-.187.522-.522.522h-2.09c-.336 0-.523-.187-.523-.522z"
  }));
};

var _default = SvgOnArrow;
exports["default"] = _default;