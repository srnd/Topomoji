"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChartIncreasing = function SvgChartIncreasing(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2 2h60v60H2z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M7.613 2h.5v60h-.5zM12.978 2h.5v60h-.5zM18.341 2h.5v60h-.5zM23.705 2h.5v60h-.5zM29.068 2h.5v60h-.5zM34.432 2h.5v60h-.5zM39.795 2h.5v60h-.5zM45.159 2h.5v60h-.5zM50.522 2h.5v60h-.5zM55.887 2h.5v60h-.5z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 7.613h60v.5H2zM2 12.978h60v.5H2zM2 18.341h60v.5H2zM2 23.705h60v.5H2zM2 29.068h60v.5H2zM2 34.432h60v.5H2zM2 39.795h60v.5H2zM2 45.159h60v.5H2zM2 50.522h60v.5H2zM2 55.887h60v.5H2z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M4.402 61.5H2.5v-2.439l14.377-18.443 9.068 6.623 12.489-27.107 13.393 9.439L59.934 2.5H61.5l.193 4.584-8.187 27.343-13.856-9.766-12.513 27.164-9.682-7.07z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 2h1v60H2zM61 2h1v60h-1z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 2h60v1H2zM2 61h60v1H2z"
  }));
};

var _default = SvgChartIncreasing;
exports["default"] = _default;