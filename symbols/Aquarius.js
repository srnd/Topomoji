"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAquarius = function SvgAquarius(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "aquarius_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#aquarius_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.947 17c-.37 0-.726.122-1.026.353L39.98 24.15v-5.02c0-1.114-.977-2.129-2.052-2.129-.37 0-.727.122-1.029.353l-8.938 6.797v-5.02c0-1.114-.977-2.129-2.054-2.129-.368 0-.725.122-1.027.353l-12.018 9.141c-.762.578-1.05 1.563-.735 2.509.288.865.996 1.446 1.767 1.446.382 0 .753-.135 1.102-.4l8.936-6.797v5.02c0 1.114.979 2.129 2.055 2.129a1.68 1.68 0 0 0 1.027-.353l8.936-6.797v5.02c0 1.114.98 2.129 2.057 2.129.367 0 .724-.122 1.026-.353l8.938-6.797v5.02c0 2.685 4.03 2.685 4.03 0v-9.143C52 18.016 51.02 17 49.947 17zM49.947 33.551c-.37 0-.726.122-1.026.353L39.979 40.7v-5.02c0-1.114-.977-2.129-2.052-2.129-.37 0-.727.122-1.029.353L27.961 40.7v-5.02c0-1.114-.977-2.129-2.054-2.129-.368 0-.725.122-1.027.353l-12.018 9.14c-.762.578-1.05 1.563-.735 2.509.287.865.995 1.447 1.765 1.447.382 0 .753-.135 1.102-.4l8.936-6.796v5.02c0 1.114.979 2.129 2.055 2.129.369 0 .726-.122 1.027-.352l8.936-6.796v5.02c0 1.114.98 2.129 2.057 2.129.367 0 .724-.122 1.026-.352l8.938-6.796v5.02c0 2.685 4.03 2.685 4.03 0v-9.142c.001-1.118-.979-2.133-2.052-2.133z"
  }));
};

var _default = SvgAquarius;
exports["default"] = _default;