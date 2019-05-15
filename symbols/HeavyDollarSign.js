"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeavyDollarSign = function SvgHeavyDollarSign(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "heavy-dollar-sign_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 18.378,
    y1: 8.421,
    x2: 45.176,
    y2: 54.837
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#heavy-dollar-sign_svg__a)",
    d: "M38.052 29.336c-1.728-.861-3.567-1.644-5.282-2.428V15.83c3.264.396 5.733 3.046 5.932 6.217H48c0-8.032-6.758-14.591-15.23-15.006V2h-3.271v5.18C21.911 8.201 16 13.926 16 21.439c0 6.075 4.036 10.393 8.286 12.62 1.664.9 3.469 1.674 5.213 2.418v11.295c-2.394-.93-4.093-3.182-4.203-5.751H16c0 7.452 5.911 13.67 13.499 14.784V62h3.271v-5.036C41.242 56.587 48 50.598 48 42.695c0-6.815-5.117-10.863-9.948-13.359zM25.8 20.835c0-2.56 1.413-4.147 3.699-4.765v9.193c-2.18-1.254-3.699-2.635-3.699-4.428zm6.97 27.351V37.924c3.053 1.447 5.355 3.008 5.355 5.379 0 2.669-2.198 4.591-5.355 4.883z"
  }));
};

var _default = SvgHeavyDollarSign;
exports["default"] = _default;