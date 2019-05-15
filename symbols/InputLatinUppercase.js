"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInputLatinUppercase = function SvgInputLatinUppercase(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "input-latin-uppercase_svg__a",
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
    fill: "url(#input-latin-uppercase_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M28.371 28.457c.146.428-.063.673-.497.673h-2.525c-.333 0-.573-.151-.673-.498l-.849-2.663h-6.765l-.849 2.663c-.101.347-.34.498-.674.498h-2.525c-.435 0-.643-.246-.498-.673l5.604-16.46c.101-.327.359-.497.692-.497h3.262c.334 0 .592.17.693.497l5.604 16.46zm-5.58-5.736l-2.347-7.367-2.348 7.367h4.695zM51.529 23.526c0 3.173-2.367 5.604-5.564 5.604h-8.76c-.383 0-.598-.214-.598-.598V12.098c0-.384.215-.598.598-.598h6.73c3.018 0 5.201 2.034 5.201 4.76 0 .771-.236 1.516-.639 2.151 1.843.959 3.032 2.836 3.032 5.115zM40.07 14.749v2.985h5.072c.342-.343.531-.816.531-1.284 0-.989-.666-1.7-1.738-1.7l-3.865-.001zm7.996 8.588c0-1.423-.824-2.544-2.518-2.544H40.07v5.088h5.453c1.713 0 2.543-1.127 2.543-2.544zM10.975 43.345c0-5.15 3.847-9.156 9.187-9.156 3.936 0 7.297 2.425 8.381 5.964.106.409-.107.674-.518.674h-2.449c-.334 0-.535-.164-.68-.473-.787-1.712-2.613-2.789-4.735-2.789-3.457 0-5.724 2.393-5.724 5.78s2.267 5.78 5.724 5.78c2.122 0 3.948-1.077 4.735-2.79.145-.309.346-.472.68-.472h2.449c.41 0 .631.245.523.623-1.045 3.546-4.427 6.014-8.387 6.014-5.339 0-9.186-4.005-9.186-9.155zM53.025 43.345c0 4.955-3.641 8.814-8.502 8.814h-6.894c-.383 0-.598-.213-.598-.598V35.128c0-.385.215-.599.598-.599h6.894c4.862 0 8.502 3.861 8.502 8.816zm-3.337 0c0-3.256-2.104-5.49-5.164-5.49h-4.029v10.98h4.029c3.06 0 5.164-2.235 5.164-5.49z"
  }));
};

var _default = SvgInputLatinUppercase;
exports["default"] = _default;