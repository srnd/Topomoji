"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFreeButton = function SvgFreeButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "free-button_svg__a",
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
    fill: "url(#free-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M18.754 25.034v1.804c0 .326-.182.507-.507.507h-5.312v3.806h5.151c.326 0 .507.182.507.507v1.805c0 .325-.182.506-.507.506h-5.151v4.997c0 .326-.182.508-.507.508h-1.922c-.325 0-.507-.182-.507-.508V25.034c0-.326.182-.508.507-.508h7.741c.325 0 .507.182.507.508zM32.375 39.473h-2.264c-.262 0-.465-.08-.63-.299L25.5 34.295h-1.827v4.671c0 .325-.182.507-.507.507h-1.922c-.326 0-.507-.182-.507-.507V25.033c0-.325.181-.507.507-.507h5.151a4.954 4.954 0 0 1 4.964 4.964c0 1.851-1.136 3.514-2.79 4.31l4.104 5.043c.267.325.13.63-.298.63zm-8.701-7.772h2.722c1.116 0 2.028-.971 2.028-2.21 0-1.243-.912-2.21-2.028-2.21h-2.722v4.42zM43.049 37.162v1.804c0 .326-.182.508-.508.508h-7.846c-.326 0-.508-.182-.508-.508V25.034c0-.326.182-.508.508-.508h7.739c.326 0 .508.182.508.508v1.804c0 .326-.182.507-.508.507h-5.311v3.197H41.9c.326 0 .508.182.508.507v1.74c0 .325-.182.507-.508.507h-4.777v3.357h5.418c.326.001.508.183.508.509zM54 37.162v1.804c0 .326-.182.508-.508.508h-7.846c-.325 0-.507-.182-.507-.508V25.034c0-.326.182-.508.507-.508h7.741c.325 0 .507.182.507.508v1.804c0 .326-.182.507-.507.507h-5.312v3.197h4.777c.326 0 .508.182.508.507v1.74c0 .325-.182.507-.508.507h-4.777v3.357h5.418c.325.001.507.183.507.509z"
  }));
};

var _default = SvgFreeButton;
exports["default"] = _default;