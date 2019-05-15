"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseServiceChargeButton = function SvgJapaneseServiceChargeButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-service-charge-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
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
    fill: "url(#japanese-service-charge-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M20.144 30.4c-1.783 0-3.306.053-4.144.105v-5.781c.682.105 2.412.316 4.144.316h2.414v-3.154c0-1.313-.157-2.889-.21-3.572h5.928a27.279 27.279 0 0 0-.264 3.627v3.1h8.184v-3.363c0-1.42-.104-2.943-.21-3.678h6.086a29 29 0 0 0-.262 3.678v3.363h2.046c1.835 0 3.198-.158 4.144-.264v5.729c-.734-.053-2.309-.105-4.144-.105H41.81v.42c0 8.986-2.729 15.186-11.961 19.18l-4.356-4.361c6.978-2.365 10.702-5.727 10.702-14.607V30.4h-8.184v4.047c0 1.576.158 3.309.211 4.045h-5.875c.104-.736.21-2.469.21-4.045V30.4h-2.413z"
  }));
};

var _default = SvgJapaneseServiceChargeButton;
exports["default"] = _default;