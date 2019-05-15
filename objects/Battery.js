"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBattery = function SvgBattery(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "battery_svg__a",
    cx: 84.525,
    cy: 15.339,
    r: 27.719,
    gradientTransform: "matrix(1 0 0 20.0008 -59.599 -270.516)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.119,
    stopColor: "#87c622"
  }), _react["default"].createElement("stop", {
    offset: 0.248,
    stopColor: "#76b223"
  }), _react["default"].createElement("stop", {
    offset: 0.376,
    stopColor: "#6ca523"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#69a123"
  }), _react["default"].createElement("stop", {
    offset: 0.724,
    stopColor: "#6ba323"
  }), _react["default"].createElement("stop", {
    offset: 0.819,
    stopColor: "#70aa23"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#7ab723"
  }), _react["default"].createElement("stop", {
    offset: 0.947,
    stopColor: "#88c822"
  }), _react["default"].createElement("stop", {
    offset: 0.998,
    stopColor: "#9adf22"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9be022"
  })), _react["default"].createElement("path", {
    fill: "url(#battery_svg__a)",
    d: "M52 55.345c-.002 7.54-39.998 7.54-40 0V6.808h40v48.537z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32.375 15.022c0 .11-.096.2-.213.2h-.322c-.117 0-.215-.09-.215-.2v-2.6c0-.11.098-.2.215-.2h.322c.117 0 .213.09.213.2v2.6z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M30.701 14.097c-.109 0-.201-.096-.201-.214v-.321c0-.118.092-.214.201-.214h2.6c.109 0 .199.097.199.214v.321c0 .118-.09.214-.199.214h-2.6zM30.701 57.875c-.109 0-.201-.096-.201-.214v-.321c0-.118.092-.215.201-.215h2.6c.109 0 .199.097.199.215v.321c0 .118-.09.214-.199.214h-2.6zM29.131 41.664l.536-.537c.011-.01.024-.018.038-.018.016 0 .029.008.039.018l.537.537a.05.05 0 0 1 .016.037.059.059 0 0 1-.016.039l-.537.536a.055.055 0 0 1-.077 0l-.536-.536a.052.052 0 0 1 0-.076zM30.638 33.402c0-.794.671-1.451 1.536-1.451.867 0 1.537.657 1.537 1.451 0 .461-.188.803-.496 1.025h1.456a.124.124 0 0 1 .099.033.114.114 0 0 1 .033.098v.368a.114.114 0 0 1-.033.097.114.114 0 0 1-.099.033h-3.823a.112.112 0 0 1-.098-.033.12.12 0 0 1-.034-.097v-.368a.112.112 0 0 1 .033-.098.12.12 0 0 1 .097-.035h.289c-.309-.221-.497-.564-.497-1.025v.002zm2.474.103c0-.526-.391-.922-.935-.922-.543 0-.935.396-.935.922s.39.921.931.921c.544 0 .939-.395.939-.921zm.527-2.049c.004.036-.008.071-.034.097s-.062.039-.097.033h-2.662a.11.11 0 0 1-.097-.033.118.118 0 0 1-.035-.097v-.368a.121.121 0 0 1 .035-.098.116.116 0 0 1 .097-.033h2.658a.117.117 0 0 1 .096.033.121.121 0 0 1 .035.098l.004.368zm-.16-3.212c.088-.059.159-.017.159.088v.382a.182.182 0 0 1-.088.158l-.891.569.891.569a.181.181 0 0 1 .088.158v.382c0 .104-.07.146-.159.088l-1.345-.861-1.259.804c-.088.06-.158.019-.158-.087v-.381a.175.175 0 0 1 .087-.157l.803-.514-.803-.515a.178.178 0 0 1-.087-.158v-.382c0-.104.069-.146.158-.088l1.259.806 1.345-.861zm-2.837-1.546c0-.874.702-1.446 1.542-1.446.051 0 .097 0 .143.005a.132.132 0 0 1 .093.042.121.121 0 0 1 .03.096v2.177c.479-.096.725-.452.725-.897a.797.797 0 0 0-.279-.634.215.215 0 0 1-.078-.161v-.373c0-.097.06-.15.141-.112.476.214.764.692.764 1.289 0 .931-.659 1.542-1.535 1.542-.875.001-1.548-.616-1.548-1.529h.002zm1.288.88v-1.69c-.498.083-.713.438-.713.814-.003.471.273.79.709.876h.004zm1.709-2.786a.117.117 0 0 1-.034.097.115.115 0 0 1-.097.034h-3.943a.121.121 0 0 1-.099-.034.117.117 0 0 1-.032-.097v-.368a.116.116 0 0 1 .131-.132h3.943a.12.12 0 0 1 .097.034.117.117 0 0 1 .034.098v.368zm-2.104-1.562c.588 0 .164-1.621 1.279-1.621.575 0 .896.501.896 1.148 0 .598-.287 1.075-.84 1.139a.118.118 0 0 1-.104-.027.114.114 0 0 1-.037-.101v-.362c0-.08.044-.111.117-.14.209-.049.296-.253.296-.508 0-.307-.108-.517-.331-.517-.58 0-.166 1.621-1.279 1.621-.57 0-.896-.502-.896-1.104 0-.546.286-1.017.842-1.081a.113.113 0 0 1 .104.028.119.119 0 0 1 .036.101v.362c0 .079-.044.112-.12.139-.209.047-.293.243-.293.45 0 .261.108.473.33.473zM30.714 41.537a.118.118 0 0 1 .035-.097.118.118 0 0 1 .097-.034h2.905c.766 0 1.14.356 1.135 1.065a.124.124 0 0 1-.136.132h-.347a.121.121 0 0 1-.097-.035.117.117 0 0 1-.037-.097c-.01-.294-.16-.435-.52-.435h-2.904a.122.122 0 0 1-.097-.033.12.12 0 0 1-.035-.098v-.368zm2.997-2.035a1.536 1.536 0 1 1-1.537-1.543 1.53 1.53 0 0 1 1.537 1.543zm-.613 0a.923.923 0 1 0-.924.911.893.893 0 0 0 .656-.259.888.888 0 0 0 .268-.652zm-2.276-3.529a.147.147 0 0 1-.108-.15v-.399c0-.093.056-.139.149-.107l3.834 1.315a.143.143 0 0 1 .105.152v.399c0 .093-.055.14-.148.108l-1.054-.362-2.734 1.079c-.09.033-.152-.007-.152-.104v-.396a.144.144 0 0 1 .103-.149l1.909-.744-1.904-.642zM30.001 46.828a2.086 2.086 0 1 1 4.171 0 2.086 2.086 0 0 1-4.171 0zm-.696 0a2.782 2.782 0 1 0 5.564-.002 2.782 2.782 0 0 0-5.564.002z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32.364 46.271c.005.038-.007.076-.034.104s-.064.04-.104.034h-.279c-.037.006-.076-.006-.104-.034s-.041-.066-.034-.104v-.904a.12.12 0 0 1 .034-.104.124.124 0 0 1 .104-.034h.141a1.6 1.6 0 0 1 1.13 2.729.123.123 0 0 1-.198 0l-.296-.296a.123.123 0 0 1 0-.196.9.9 0 0 0 .238-.85.896.896 0 0 0-.599-.648v.303z"
  }), _react["default"].createElement("path", {
    fill: "#619C37",
    d: "M51.998 6.808C52 2.253 12 2.255 12 6.808s40 4.553 39.998 0z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M48.988 6.35c.002-3.148-33.973-3.147-33.973 0 .001 3.145 33.975 3.145 33.973 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "battery_svg__b",
    cx: 89.544,
    cy: -13.664,
    r: 5.998,
    gradientTransform: "matrix(1 0 0 5.218 -59.599 77.305)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.213,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#battery_svg__b)",
    d: "M39.102 4.325H24.898l-1.111 2.15c0 1.618 16.426 1.618 16.424 0l-1.109-2.15z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M39.102 4.325c0-1.618-14.203-1.618-14.203 0-.001 1.616 14.203 1.616 14.203 0z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M38.482 3.985c0-1.313-12.961-1.313-12.961 0s12.961 1.313 12.961 0z"
  }));
};

var _default = SvgBattery;
exports["default"] = _default;