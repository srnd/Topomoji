"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBald = function SvgBald(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M12.137 33.464c-6.642-1.199-1.454 17.375 3.745 12.252 2.409-2.375-.639-11.691-3.745-12.252zM51.864 33.464c-3.107.562-6.155 9.877-3.745 12.252 5.201 5.123 10.384-13.451 3.745-12.252z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M32 11.687c-13.734 0-20.352 10.392-19.522 24.839.166 2.906 1.967 12.39 3.668 15.789h31.709c1.702-3.399 3.503-12.883 3.668-15.789.83-14.448-5.787-24.839-19.523-24.839z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M62 62h-5.5v-3H59v-2.5h3zM49.5 62h-7v-3h7v3zm-14 0h-7v-3h7v3zm-14 0h-7v-3h7v3zM7.5 62H2v-5.5h3V59h2.5zM5 49.5H2v-7h3v7zm0-14H2v-7h3v7zm0-14H2v-7h3v7zM5 7.5H2V2h5.5v3H5zM49.5 5h-7V2h7v3zm-14 0h-7V2h7v3zm-14 0h-7V2h7v3zM62 7.5h-3V5h-2.5V2H62zM62 49.5h-3v-7h3v7zm0-14h-3v-7h3v7zm0-14h-3v-7h3v7z"
  }));
};

var _default = SvgBald;
exports["default"] = _default;