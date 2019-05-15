"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFog = function SvgFog(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M2 62.001h60V16.472c-24.666 9.9-39.115-8.91-60 0v45.529z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 62.001H2V23.315c24.664 9.149 39.113-8.236 60 0v38.686z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 62.001h60v-32.1c-24.666 9.899-39.115-8.912-60 0v32.1z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 62.001H2V39.954c24.664 7.986 39.113-7.189 60 0v22.047z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M62 62.001H2V49.419c24.029-7.424 37.937 8.104 60 0v12.582z"
  }));
};

var _default = SvgFog;
exports["default"] = _default;