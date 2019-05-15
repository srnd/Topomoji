"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNgButton = function SvgNgButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ng-button_svg__a",
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
    fill: "url(#ng-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.814 20.822h2.874c.487 0 .758.271.758.758v20.838c0 .488-.271.76-.758.76h-1.987c-.399 0-.727-.152-.935-.487l-8.375-13.325v13.052c0 .488-.272.76-.759.76h-2.875c-.487 0-.758-.271-.758-.76V21.58c0-.486.271-.758.758-.758h1.988c.399 0 .727.152.934.487l8.375 13.325V21.58c.002-.486.273-.758.76-.758zM53 31.943V42.418c0 .488-.271.76-.759.76h-2.635c-.486 0-.758-.271-.758-.76v-2.08c-1.572 2.164-4.08 3.271-7.162 3.271-6.348 0-11.129-5.078-11.129-11.609s4.877-11.609 11.607-11.609c4.967 0 9.206 3.026 10.58 7.082.184.519-.088.854-.632.854h-3.105c-.423 0-.679-.183-.886-.55-1.021-1.789-3.313-3.106-5.957-3.106-4.343 0-7.217 3.035-7.217 7.33 0 4.535 3.018 7.568 7.217 7.568 2.934 0 5.74-1.352 6.449-4.502H43.14c-.487 0-.758-.271-.758-.76v-2.363c0-.487.271-.758.758-.758h9.102c.487 0 .758.271.758.757z"
  }));
};

var _default = SvgNgButton;
exports["default"] = _default;