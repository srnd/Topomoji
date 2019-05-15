"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOkButton = function SvgOkButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ok-button_svg__a",
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
    fill: "url(#ok-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11 32c0-6.338 5.014-11.267 11.267-11.267S33.533 25.662 33.533 32s-5.014 11.267-11.267 11.267S11 38.338 11 32zm18.271 0c0-4.168-3.069-7.113-7.005-7.113S15.262 27.832 15.262 32s3.068 7.113 7.004 7.113 7.005-2.945 7.005-7.113zM52.379 42.848h-3.262c-.379 0-.674-.132-.891-.449l-7.416-9.742v9.455c0 .473-.262.736-.736.736h-2.789c-.473 0-.734-.264-.734-.736V21.888c0-.473.262-.736.734-.736h2.789c.475 0 .736.263.736.736v8.854l7.105-9.141c.24-.31.504-.449.883-.449h3.262c.598 0 .83.402.459.891l-7.363 9.665 7.672 10.249c.35.495.149.891-.449.891z"
  }));
};

var _default = SvgOkButton;
exports["default"] = _default;