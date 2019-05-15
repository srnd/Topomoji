"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDumpling = function SvgDumpling(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE9B0",
    d: "M53.348 5.75c-.475-2.25-3.42-3.291-5.615-.969-1.682 2.374-7.004 5.465-10.297-.251-1.005-3.046-4.718-3.545-6.116-.375-.844 2.803-6.269 6.901-10.124 3.031-1.529-1.983-5.062-.051-4.259 2.19 1.419 5.458-1.835 9.048-7.561 7.561-2.241-.804-4.173 2.729-2.19 4.259 3.87 3.855-.229 9.28-3.031 10.124-3.17 1.396-2.672 5.111.375 6.116 5.717 3.292 2.625 8.615.252 10.297-2.324 2.195-1.282 5.142.968 5.616 4.884-.116 7.196 5.006 4.843 8.651 8.104-3.827 12.25-7.032 28.312-23.095C54.968 22.842 58.172 18.697 62 10.593c-3.646 2.353-8.769.041-8.652-4.843z"
  }), _react["default"].createElement("linearGradient", {
    id: "dumpling_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 174.059,
    y1: 267.958,
    x2: 174.059,
    y2: 238.926,
    gradientTransform: "rotate(-45.001 -163.14 313.728)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebcf8d"
  }), _react["default"].createElement("stop", {
    offset: 0.086,
    stopColor: "#edd290"
  }), _react["default"].createElement("stop", {
    offset: 0.541,
    stopColor: "#f7de9c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fae2a0"
  })), _react["default"].createElement("path", {
    fill: "url(#dumpling_svg__a)",
    d: "M22.401 22.402c-11.076 11.077-5.285 24.938-1.195 33.086 15.664-3.441 30.837-18.619 34.283-34.281-8.149-4.091-22.012-9.883-33.088 1.195z"
  }), _react["default"].createElement("path", {
    fill: "#EBCF8D",
    d: "M7.938 26.775c-.777 2.649-3.783 4.545-3.783 4.545 11.27 2.653 14.301-7.472 3.031-10.124 0 0 1.395 3.381.752 5.579zM6.959 42.299c.045 2.681-2.178 5.435-2.178 5.435 12.059-1.005 11.807-11.302-.251-10.297 0 0 2.391 2.636 2.429 4.862zM10.208 56.399c1.242 2.263.384 5.601.384 5.601 11.808-6.776 6.964-15.428-4.843-8.651.001 0 3.428 1.173 4.459 3.05zM14.833 14.834c-2 2.001-5.456 2.104-5.456 2.104 8.214 8.214 15.774.653 7.561-7.561-.001 0-.104 3.456-2.105 5.457zM26.774 7.938c2.65-.775 4.546-3.782 4.546-3.782 2.653 11.269-7.472 14.301-10.124 3.031 0 0 3.381 1.395 5.578.751zM42.297 6.96c2.682.044 5.436-2.179 5.436-2.179-1.004 12.06-11.302 11.808-10.297-.251 0 0 2.636 2.392 4.861 2.43zM56.398 10.208c2.262 1.243 5.602.385 5.602.385-6.732 11.729-15.386 6.886-8.652-4.843 0 0 1.173 3.428 3.05 4.458z"
  }));
};

var _default = SvgDumpling;
exports["default"] = _default;