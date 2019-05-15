"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNewButton = function SvgNewButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "new-button_svg__a",
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
    fill: "url(#new-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M18.944 24.198h2.006c.34 0 .53.189.53.529v14.544c0 .342-.19.53-.53.53h-1.388c-.279 0-.507-.106-.651-.339l-5.846-9.302v9.11c0 .342-.189.53-.529.53H10.53c-.34 0-.529-.188-.529-.53V24.728c0-.34.189-.529.529-.529h1.388c.278 0 .507.105.651.34l5.846 9.301v-9.111c0-.342.189-.531.529-.531zM33.625 37.389v1.883c0 .342-.189.53-.529.53h-8.192c-.34 0-.53-.188-.53-.53V24.728c0-.34.189-.529.53-.529h8.08c.34 0 .529.189.529.529v1.883c0 .341-.189.53-.529.53h-5.545v3.337h4.988c.339 0 .529.189.529.53v1.816c0 .34-.19.53-.529.53h-4.988v3.505h5.656c.341 0 .53.19.53.53zM53.969 24.794l-4.141 14.561c-.084.313-.295.446-.591.446h-2.464c-.295 0-.506-.134-.59-.446l-1.902-6.688-1.909 6.688c-.083.313-.296.446-.591.446h-2.463c-.296 0-.508-.134-.592-.446l-4.14-14.561c-.106-.379.067-.596.445-.596h2.107c.312 0 .507.167.573.463l3.004 11.234 2.224-7.946-.897-3.155c-.105-.379.066-.596.446-.596h1.771c.313 0 .508.167.574.463l3.004 11.234 3.003-11.234c.067-.296.263-.463.574-.463h2.107c.381 0 .553.217.448.596z"
  }));
};

var _default = SvgNewButton;
exports["default"] = _default;