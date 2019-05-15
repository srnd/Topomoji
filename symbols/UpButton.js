"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUpButton = function SvgUpButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "up-button_svg__a",
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
    fill: "url(#up-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11 35.979v-14.23c0-.47.262-.731.731-.731h2.771c.47 0 .731.262.731.731v13.907c0 2.001 1.108 3.202 3.617 3.202s3.617-1.201 3.617-3.202V21.748c0-.47.262-.731.731-.731h2.771c.469 0 .731.262.731.731v14.23c0 4.564-3.502 7.004-7.85 7.004-4.349 0-7.85-2.439-7.85-7.003zM45.711 28.175c0 3.956-3.193 7.157-7.273 7.157h-3.809v6.504c0 .469-.262.73-.732.73h-2.77c-.47 0-.731-.262-.731-.73V21.748c0-.47.262-.731.731-.731h7.311c4.08 0 7.273 3.194 7.273 7.158zm-4.232 0c0-1.794-1.316-3.187-3.041-3.187h-3.809v6.373h3.809c1.724 0 3.041-1.401 3.041-3.186zM48.959 34.693l-.73-7.52v-5.426c0-.47.262-.731.73-.731h3.311c.469 0 .73.262.73.731v5.426l-.73 7.52c-.047.438-.324.639-.74.639h-1.832c-.415 0-.692-.2-.739-.639zm-.539 7.143V38.91c0-.469.262-.73.732-.73h2.924c.471 0 .732.262.732.73v2.926c0 .469-.262.73-.732.73h-2.924c-.47 0-.732-.261-.732-.73z"
  }));
};

var _default = SvgUpButton;
exports["default"] = _default;