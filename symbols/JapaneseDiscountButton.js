"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseDiscountButton = function SvgJapaneseDiscountButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-discount-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-discount-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M33.144 26.853v-2.951h1.982v-6.68h-8.004V14h-4.346v3.223H15v6.68h1.867v2.951h6.023v1.631h-5.64v3.066h5.641v1.672h-7.775v3.535h19.591v-3.535h-7.661v-1.672h5.564v-3.066h-5.564v-1.631h6.098zm-10.253-5.359v2.098h-3.888v-2.875h11.931v2.875h-3.889v-2.098h-4.154zM17.136 38.078V50h4.077v-1.709h7.585v1.32h4.308V38.078h-15.97zm11.662 6.756h-7.585v-3.301h7.585v3.301zM36.727 17.881h4.308v21.711h-4.308z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49 14.465v29.941c0 2.564-.458 3.848-1.982 4.584-1.486.777-3.85.932-6.976.932-.189-1.32-.839-3.455-1.485-4.777 2.21.117 4.384.078 5.146.078.647 0 .914-.232.914-.853V14.465H49z"
  }));
};

var _default = SvgJapaneseDiscountButton;
exports["default"] = _default;