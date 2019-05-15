"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMedicalSymbol = function SvgMedicalSymbol(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "medical-symbol_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 21.727,
    y1: 3.456,
    x2: 50.933,
    y2: 54.043
  }, _react["default"].createElement("stop", {
    offset: 0.076,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.226,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.468,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.695,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#medical-symbol_svg__a)",
    d: "M46.301 19.327c-2.672-1.881-7.305-2.73-11.838-3.365-4.658-.656-9.989-.869-12.818-2.526-.98-.575-2.428-1.69-2.017-3.153.81-2.876 5.313-4.277 21.33-.579.915 1.379 5.468 2.663 5.96 1.822-.902-.604-2.371-.996-2.858-1.682 1.603-.096 3.542 1.26 3.869 1.332 1.398.312.437-1.767-.26-2.735-1.48-2.064-4.636-3.451-6.47-2.478-22.536-5.208-26.603.696-26.169 5.158.514 5.286 6.747 7.228 12.575 7.913 3.523.416 7.221.785 9.227 1.205 2.803.586 6.985 1.416 7.104 4.137.163 3.719-5.331 4.422-8.41 5.541-.021-3.01.244-8.566.244-8.566l-3.911-.643s.26 6.439.358 10.133c-5.212 1.666-6.636 3.293-7.226 3.916-.968 1.02-1.389 2.084-1.389 3.297 0 2.758 2.24 4.461 6.043 5.961 4.176 1.645 9.635 2.441 9.635 4.629 0 1.291-2.339 1.783-4.49 2.525l.24-4.342-2.332-.727.207 5.543c-4.064 1.149-4.205 2.178-4.32 2.82-.072.391.008.75.162 1.123.594 1.438 2.516 1.973 4.446 2.622.048 1.62.105 2.835.135 3.321.029.579 1.035.646 1.059.07.021-.455.045-1.477.075-2.932.278.109.557.225.817.354 1.446.715 2.031 1.591 2.776 2.456-.418-1.243-1.124-2.389-2.613-3.295-.223-.138-.561-.282-.96-.437.008-.356.253-4.78.253-4.78 7.605-1.507 8.547-4.07 6.34-6.849-1.162-1.465-3.861-2.473-6.521-3.43-2.338-.846-6.342-2.082-6.95-3.514-1.167-2.734 2.677-3.904 4.735-4.629l.26 6.408 2.521.896.299-8.041c3.668-1.027 7.243-2.469 7.782-2.699 2.983-1.289 5.778-3.035 5.798-6.805.011-2.323-1.228-3.946-2.698-4.975zM44.585 8.158c.211-.719 1.583.405 1.423.798-.197.477-1.631-.095-1.423-.798zM30.219 55.097c0-1.037 1.585-1.465 2.775-1.824 0 0 .162 3.611.172 3.975-1.439-.556-2.947-1.241-2.947-2.151z"
  }), _react["default"].createElement("linearGradient", {
    id: "medical-symbol_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 30.828,
    y1: 2.912,
    x2: 37.291,
    y2: 14.107
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 0.902,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#medical-symbol_svg__b)",
    d: "M36.015 14.843s.198-5.588.408-11.837c.046-1.325-5.206-1.356-5.145 0 .258 5.794.492 11.282.492 11.282l4.245.555z"
  }));
};

var _default = SvgMedicalSymbol;
exports["default"] = _default;