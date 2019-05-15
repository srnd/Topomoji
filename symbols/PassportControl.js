"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPassportControl = function SvgPassportControl(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "passport-control_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
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
    fill: "url(#passport-control_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M35.26 22.973c0 4.764 9.555 4.764 9.555 0v-4.75H35.26l-3.801 2.85h3.801v1.9zM44.814 17.271v-3.8H34.311l.949 3.8zM25.639 25.609l-10.321-2.185v9.836l10.321 2.185zM25.639 19.055l-10.321 2.183 10.321 2.186z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M31.891 43.084l14.392-14.41H31.881l-6.653 11.972-1.9-3.419h-5.701l4.752 8.55h5.701l3.811-6.859zM33.57 43.805h15.112V28.674zM31.891 45.486h16.791v5.043H31.891z"
  }));
};

var _default = SvgPassportControl;
exports["default"] = _default;