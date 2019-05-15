"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAtmSign = function SvgAtmSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "atm-sign_svg__a",
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
    fill: "url(#atm-sign_svg__a)",
    d: "M61.999 54c0 4.4-3.6 8-7.999 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.399 0 7.999 3.6 7.999 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M2 19h60v26H2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.854 41.213h-2.639c-.349 0-.599-.158-.704-.521l-.887-2.783h-7.07l-.887 2.783c-.105.362-.355.521-.704.521H8.325c-.454 0-.672-.258-.521-.705l5.856-17.201c.105-.342.375-.52.725-.52h3.408c.349 0 .618.178.724.52l5.856 17.201c.152.447-.064.705-.519.705zm-5.311-6.699l-2.453-7.699-2.453 7.699h4.906zM36.176 23.413v2.224c0 .401-.224.625-.625.625h-3.816v14.326c0 .4-.225.625-.626.625H28.74c-.401 0-.625-.225-.625-.625V26.262h-3.817c-.401 0-.625-.224-.625-.625v-2.224c0-.401.224-.625.625-.625h11.253c.401 0 .625.223.625.625zM56.242 23.413v17.175c0 .4-.224.625-.625.625h-2.369c-.401 0-.625-.225-.625-.625v-11.75l-3.876 8.953c-.132.328-.375.473-.724.473H46.43c-.349 0-.592-.145-.724-.473l-3.876-8.953v11.75c0 .4-.224.625-.625.625h-2.369c-.401 0-.625-.225-.625-.625V23.413c0-.401.224-.625.625-.625H41.824c.349 0 .592.145.724.474l4.679 10.792 4.679-10.792c.131-.329.375-.474.724-.474h2.988c.401 0 .624.223.624.625z"
  }));
};

var _default = SvgAtmSign;
exports["default"] = _default;