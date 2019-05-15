"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCancer = function SvgCancer(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cancer_svg__a",
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
    fill: "url(#cancer_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M28.279 32.445c2.449-4.043 1.033-9.658-3.154-12.518a20.9 20.9 0 0 1 7-1.198c3.357 0 6.631.772 9.732 2.295 1.34.653 2.979-.206 3.311-1.63.223-.959-.205-1.833-1.115-2.282-3.83-1.879-7.84-2.831-11.922-2.831-6.08 0-11.836 2.125-16.654 6.146a2.325 2.325 0 0 0-.488.572 9.469 9.469 0 0 0-1.578 1.781 2.09 2.09 0 0 0-.309.458 1.885 1.885 0 0 0-.217.483c-1.955 4.491-.6 9.328 3.371 12.037a7.315 7.315 0 0 0 4.193 1.297c3.061.001 6.133-1.809 7.83-4.61zM20.48 23.25c1.42 0 2.881.865 3.719 2.205.895 1.429.963 3.164.186 4.759-.686 1.413-2.047 2.257-3.643 2.257a4.602 4.602 0 0 1-2.199-.57c-2.209-1.211-2.584-4.302-1.574-6.385 1.13-1.873 2.533-2.266 3.511-2.266zM47.742 28.242a7.309 7.309 0 0 0-4.189-1.296c-3.063 0-6.135 1.81-7.828 4.609-2.451 4.046-1.035 9.661 3.152 12.518-5.33 1.888-11.455 1.495-16.732-1.096-1.346-.667-2.981.203-3.313 1.628-.223.959.203 1.833 1.117 2.282 3.826 1.879 7.836 2.831 11.92 2.831 6.078 0 11.84-2.125 16.65-6.143a2.24 2.24 0 0 0 .492-.578 9.345 9.345 0 0 0 1.572-1.775c.141-.16.252-.326.313-.457.1-.162.174-.333.217-.481 1.959-4.491.604-9.33-3.371-12.042zM43.517 40.75c-1.42 0-2.879-.866-3.717-2.206-.895-1.429-.963-3.164-.186-4.759.686-1.412 2.047-2.255 3.643-2.255.758 0 1.52.197 2.201.57 2.207 1.208 2.582 4.299 1.574 6.383-1.134 1.874-2.536 2.267-3.515 2.267z"
  }));
};

var _default = SvgCancer;
exports["default"] = _default;