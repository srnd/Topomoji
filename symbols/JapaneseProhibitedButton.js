"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseProhibitedButton = function SvgJapaneseProhibitedButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-prohibited-button_svg__a",
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
    fill: "url(#japanese-prohibited-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M20.127 24.577c-1.533 2.055-3.279 3.894-5.106 5.134-.684-1.025-2.002-2.652-3.021-3.464 2.467-1.369 4.978-3.852 6.766-6.419h-5.107v-4.106h6.469V12h4.68v3.722h5.404v4.106h-5.404v.043c1.703.942 5.32 3.21 6.342 3.894l-2.641 3.422c-.807-.813-2.295-2.009-3.701-3.122v5.562h-4.68v-5.05zM24.766 43.615c-2.086 3.039-5.49 6.076-8.469 7.873-.936-.855-2.852-2.398-3.957-3.123 2.979-1.498 5.957-3.852 7.658-6.248l4.768 1.498z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.404 37.07h37.402v4.277H34.723v5.777c0 2.395-.512 3.508-2.342 4.191-1.744.644-4.084.685-7.19.685-.299-1.367-1.064-3.164-1.703-4.404 2.127.127 4.596.127 5.234.084.68-.041.894-.172.894-.684v-5.649H13.404V37.07zM18.043 30.824h28.508v4.106H18.043zM44.596 19.828c1.998 2.439 4.893 4.964 7.404 6.332-1.023.814-2.428 2.396-3.15 3.466-1.744-1.241-3.617-3.208-5.318-5.305v5.305h-4.768v-5.52c-1.703 2.182-3.701 4.151-5.744 5.436-.682-1.029-2.041-2.611-2.979-3.423 2.641-1.327 5.404-3.765 7.234-6.291h-5.574v-4.106h7.063V12h4.768v3.722h6.979v4.106h-5.915z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M42.211 41.947c2.851 1.84 6.596 4.707 8.469 6.717l-4.34 2.652c-1.619-1.924-5.234-4.963-8.17-6.973l4.041-2.396z"
  }));
};

var _default = SvgJapaneseProhibitedButton;
exports["default"] = _default;