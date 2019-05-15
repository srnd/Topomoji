"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTShirt = function SvgTShirt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "t-shirt_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.683
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0174a8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#019be0"
  })), _react["default"].createElement("path", {
    fill: "url(#t-shirt_svg__a)",
    d: "M50.56 6.572c-.959-1.294-4.44-2.449-8.464-3.761C39.606 1.999 32 5.286 32 5.286s-7.608-3.287-10.096-2.475c-4.023 1.312-7.507 2.467-8.464 3.761C9.847 11.428 2.128 21.726 2.128 21.726c3.109 4.255 12.131 6.998 12.131 6.998l2.742-3.939-1.34 34.964c5.236 3.003 27.441 3.003 32.678 0l-1.34-34.964 2.74 3.939s9.023-2.743 12.134-6.998c0 0-7.722-10.298-11.313-15.154z"
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M32 3.05s-3.727.045-9.143-1.05v2.5L32 9.747 41.143 4.5V2C35.727 3.095 32 3.05 32 3.05z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M32 4.887s-4.411-.062-9.143-1.05l2.666 4.222L32 9.485l6.475-1.427 2.668-4.222C36.411 4.825 32 4.887 32 4.887zM46.999 24.784l1.85 2.66c-.604-5.608.05-12.76.05-12.76s-2.614 4.233-1.9 10.1z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M41.143 2C40.062 5.696 35.79 8.433 32 8.433S23.937 5.696 22.857 2l-1.918 1.126c2.063 5.031 6.358 7.593 11.061 7.593s8.995-2.562 11.059-7.593L41.143 2z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M17.001 24.784l-1.851 2.66c.603-5.608-.051-12.76-.051-12.76s2.615 4.233 1.902 10.1z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M48.073 26.479l1.657 2.398s9.125-2.794 12.27-7.125l-1.655-2.228c-4.298 3.926-12.272 6.955-12.272 6.955zM15.927 26.479l-1.656 2.398S5.145 26.083 2 21.752l1.655-2.228c4.298 3.926 12.272 6.955 12.272 6.955z"
  }));
};

var _default = SvgTShirt;
exports["default"] = _default;