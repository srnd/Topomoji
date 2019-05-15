"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCloudWithSnow = function SvgCloudWithSnow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cloud-with-snow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 36.286,
    x2: 32.001,
    y2: 3.714
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9f5ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-snow_svg__a)",
    d: "M15.795 36.286c-.959 0-1.91-.145-2.824-.436-3.688-1.161-6.17-4.432-6.17-8.136 0-2.472 1.127-4.824 3.084-6.454a8.927 8.927 0 0 1 1.646-1.089l-.03-.003.599-1.983c1.488-4.949 6.299-8.405 11.697-8.405.539 0 1.092.041 1.739.129.495.068.984.163 1.464.288l.236-.411c2.18-3.745 6.323-6.072 10.808-6.072 6.812 0 12.353 5.281 12.353 11.772 0 .319-.021.627-.05.938l-.017.229c.523.189 1.034.424 1.53.696 3.292 1.809 5.34 5.177 5.34 8.787 0 4.755-3.396 8.821-8.257 9.883-.794.176-1.601.266-2.389.266H15.795z"
  }), _react["default"].createElement("linearGradient", {
    id: "cloud-with-snow_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 38,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8fbacc"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#9cc6d8"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#abd4e6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b0d9eb"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-snow_svg__b)",
    d: "M38.044 5.428c5.827 0 10.552 4.504 10.552 10.059 0 .272-.021.535-.044.798a11.322 11.322 0 0 0-6.396 2.547 9.128 9.128 0 0 1 4.397-1.121c.593 0 1.172.057 1.734.16a9.077 9.077 0 0 1 2.672.966c2.654 1.456 4.441 4.176 4.441 7.302 0 4.003-2.932 7.354-6.859 8.213a9.213 9.213 0 0 1-1.986.224H15.795a7.421 7.421 0 0 1-2.255-.353c-2.867-.899-4.937-3.471-4.937-6.507 0-2.064.954-3.909 2.466-5.164a7.36 7.36 0 0 1 2.358-1.309 7.56 7.56 0 0 1 2.367-.386c2.32 0 4.377 1.049 5.693 2.675h.067c-1.528-2.68-4.384-4.571-7.728-4.873 1.244-4.134 5.232-7.164 9.969-7.164.507 0 .998.046 1.483.112.964.134 1.879.384 2.737.747 3.191 1.357 5.522 4.202 6.042 7.608l.002-.058c0-3.881-2.089-7.296-5.253-9.287 1.807-3.092 5.261-5.189 9.238-5.189m0-3.428c-4.853 0-9.355 2.377-11.947 6.256-.099-.017-.199-.029-.3-.044a14.68 14.68 0 0 0-2-.146c-6.196 0-11.718 3.966-13.428 9.647l-.409 1.353c-.44.27-.862.572-1.261.904C6.351 21.925 5 24.747 5 27.715c0 4.446 2.979 8.369 7.411 9.763 1.089.346 2.23.522 3.384.522h30.758c.927 0 1.869-.102 2.801-.31C55.032 36.447 59 31.698 59 26.138c0-4.224-2.391-8.161-6.24-10.274a13.657 13.657 0 0 0-.564-.291v-.086C52.195 8.051 45.846 2 38.044 2z"
  }), _react["default"].createElement("path", {
    fill: "#75D6FF",
    d: "M33.801 48.456l1.912-2.865-2.947 1.858-.768-5.054-.767 5.054-2.944-1.858 1.91 2.862-5.197.749 5.199.745-1.912 2.862 2.942-1.859.769 5.055.771-5.055 2.944 1.859-1.915-2.865L39 49.202zM51.8 45.456l1.913-2.865-2.947 1.858-.767-5.055-.768 5.055-2.944-1.858 1.91 2.862-5.197.749 5.2.745-1.913 2.862 2.942-1.859.77 5.055.769-5.055 2.945 1.859-1.915-2.865L57 46.202zM15.803 45.456l1.91-2.866-2.945 1.858-.767-5.054-.767 5.056-2.95-1.86 1.913 2.863L7 46.199l5.2.748-1.916 2.863 2.947-1.862.77 5.059.77-5.059 2.942 1.862-1.913-2.866 5.2-.745zM22.289 56.609l1.363-2.05-2.103 1.329L21 52.277l-.546 3.611-2.106-1.329 1.365 2.046-3.713.533 3.716.534-1.368 2.044 2.103-1.327L21 62l.549-3.611 2.103 1.327-1.365-2.045L26 57.138zM44.289 56.609l1.363-2.05-2.103 1.329L43 52.277l-.546 3.611-2.106-1.329 1.365 2.046-3.713.533 3.716.534-1.368 2.044 2.103-1.327L43 62l.549-3.611 2.103 1.327-1.365-2.045L48 57.138z"
  }));
};

var _default = SvgCloudWithSnow;
exports["default"] = _default;