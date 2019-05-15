"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPostbox = function SvgPostbox(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FF000E",
    d: "M52.121 49.832h5l-1 6.223h-4z"
  }), _react["default"].createElement("linearGradient", {
    id: "postbox_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 28.561,
    y1: 62,
    x2: 28.561,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#postbox_svg__a)",
    d: "M52.121 2H14.002C9.584 2 5 8.52 5 26.377V62h4.002v-5.621h30V62h4l9.119-60z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M33.861 31.309c2.205 0 4 1.683 4 3.75v12.639c0 2.067-1.795 3.75-4 3.75h-19.72c-2.205 0-3.998-1.683-3.998-3.75V35.059c0-2.067 1.793-3.75 3.998-3.75h19.72m0-.5h-19.72c-2.48 0-4.498 1.906-4.498 4.25v12.639c0 2.344 2.018 4.25 4.498 4.25h19.721c2.48 0 4.5-1.906 4.5-4.25V35.059c-.001-2.344-2.02-4.25-4.501-4.25z"
  }), _react["default"].createElement("linearGradient", {
    id: "postbox_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 30.065,
    y1: 19.918,
    x2: 30.065,
    y2: 5.293
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b80000"
  })), _react["default"].createElement("path", {
    fill: "url(#postbox_svg__b)",
    d: "M43.023 5.293H17.105v14.625H39.23c.536-7.137 1.971-11.838 3.793-14.625z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M22.217 19.918c-3 .4-11.682 3.17-11.682 3.17h28.523c.037-1.107.096-2.162.172-3.17H22.217z"
  }), _react["default"].createElement("linearGradient", {
    id: "postbox_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 51.001,
    y1: 62,
    x2: 51.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#870000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b30000"
  })), _react["default"].createElement("path", {
    fill: "url(#postbox_svg__c)",
    d: "M52 2c-4.416 0-8.998 6.52-8.998 24.377V62l2.879-1.357V55.03l10.24-4.801v5.826L59 54.445V20.752C59 10.396 56.42 2 52 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M20.369 38.265v6.225c0 .141-.076.215-.213.215h-.665c-.139 0-.215-.074-.215-.215v-4.625l-1.592 3.584c-.047.115-.127.164-.247.164h-.503c-.119 0-.2-.049-.247-.164l-1.592-3.584v4.625c0 .141-.076.215-.215.215h-.665c-.138 0-.213-.074-.213-.215v-6.225c0-.137.075-.213.213-.213h.884c.12 0 .2.047.249.162l1.839 4.133 1.839-4.133c.047-.115.127-.162.247-.162h.884c.136 0 .212.076.212.213zM26.854 44.704h-.737a.237.237 0 0 1-.242-.176l-.396-1.166h-2.764l-.395 1.166a.237.237 0 0 1-.243.176h-.736c-.157 0-.228-.09-.176-.244l2.214-6.232a.247.247 0 0 1 .247-.176h.941c.119 0 .209.063.247.176l2.215 6.232c.053.154-.018.244-.175.244zm-1.723-2.367l-1.034-3.039-1.032 3.039h2.066zM28.039 38.052h.665c.138 0 .214.076.214.213v6.225c0 .141-.076.215-.214.215h-.665c-.139 0-.213-.074-.213-.215v-6.225c0-.137.074-.213.213-.213zM34.002 43.872v.617c0 .141-.076.215-.213.215H30.461c-.137 0-.213-.074-.213-.215v-6.225c0-.137.076-.213.213-.213h.666c.137 0 .215.076.215.213v5.395h2.447c.137 0 .213.074.213.213z"
  }), _react["default"].createElement("path", {
    fill: "#910404",
    d: "M37.223 9.565h-5c-.275 0-.275-.5 0-.5h5c.275 0 .275.5 0 .5z"
  }), _react["default"].createElement("linearGradient", {
    id: "postbox_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 16.376,
    y1: 23.088,
    x2: 16.376,
    y2: 5.293
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#870000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b30000"
  })), _react["default"].createElement("path", {
    fill: "url(#postbox_svg__d)",
    d: "M22.217 19.918c0-7.561-1.885-14.625-5.111-14.625-3.225 0-6.57 4.76-6.57 17.795l11.681-3.17z"
  }));
};

var _default = SvgPostbox;
exports["default"] = _default;