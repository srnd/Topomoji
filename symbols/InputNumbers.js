"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInputNumbers = function SvgInputNumbers(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "input-numbers_svg__a",
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
    fill: "url(#input-numbers_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.399 0-8-3.6-8-8V10c0-4.399 3.601-8 8-8h44c4.4 0 8 3.601 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M22.175 11.176h2.549c.399 0 .62.222.62.62V28.81c0 .397-.221.619-.62.619h-2.346c-.398 0-.62-.222-.62-.619V14.787l-3.526 1.937c-.424.247-.744.046-.744-.424v-2.274c0-.326.13-.574.423-.743l3.496-1.911c.248-.15.475-.196.768-.196zM35.782 28.985v-1.616c0-.301.098-.542.319-.764l5.881-5.932c1.146-1.167 2.131-2.522 2.131-3.808 0-1.538-.92-2.372-2.27-2.372-1.309 0-2.223.567-2.43 1.851-.066.399-.275.601-.646.601h-2.365c-.398 0-.62-.223-.594-.646.299-3.67 3.097-5.299 5.958-5.299 2.967 0 5.934 1.844 5.934 5.866 0 2.087-1.304 4.14-2.882 5.698l-3.669 3.585h6.224c.398 0 .621.222.621.619v2.217c0 .397-.223.619-.621.619h-10.97c-.399 0-.621-.221-.621-.619zM27.923 47.023c0 3.916-3.077 5.977-6.519 5.977-3.247 0-6.174-1.838-6.493-5.331-.027-.425.214-.646.612-.646h2.373c.372 0 .554.201.639.579.235 1.174 1.258 1.903 2.869 1.903 1.883 0 2.934-1.01 2.934-2.482 0-1.474-1.051-2.484-2.934-2.484h-1.33c-.399 0-.62-.223-.62-.618V42.59c0-.293.092-.521.267-.77l3.058-4.061h-6.551c-.398 0-.619-.222-.619-.621v-2.123c0-.398.221-.621.619-.621h10.235c.397 0 .619.223.619.621v1.929c0 .294-.091.521-.268.771l-3.1 4.082c2.398.7 4.209 2.519 4.209 5.226zM49.091 47.016v2.087c0 .397-.223.618-.62.618h-1.336v2.484c0 .397-.221.619-.619.619h-2.385c-.398 0-.621-.222-.621-.619v-2.484h-8.207c-.397 0-.619-.221-.619-.618v-2.308c0-.274.052-.502.176-.77l5.652-11.01c.15-.301.377-.444.723-.444h2.549c.471 0 .666.3.443.743l-5.678 11.082h4.961v-3.709c0-.397.223-.619.621-.619h2.385c.398 0 .619.222.619.619v3.709h1.336c.397 0 .62.223.62.62z"
  }));
};

var _default = SvgInputNumbers;
exports["default"] = _default;