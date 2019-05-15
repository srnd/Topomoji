"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVulcanSalute = function SvgVulcanSalute(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "vulcan-salute_svg__a",
    cx: 29.889,
    cy: 30.213,
    r: 42.138,
    gradientTransform: "matrix(0 1.0447 -.779 0 52.114 -10.47)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.797,
    stopColor: "#fac65d"
  }), _react["default"].createElement("stop", {
    offset: 0.88,
    stopColor: "#f4bd50"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#vulcan-salute_svg__a)",
    d: "M52.711 31.238c-7.864.17-8.557 8.044-10.846 6.153-.471-.392-.65-2.309-.402-3.168 1.91-6.613 4.647-18.057 5.354-20.808 1.5-5.822-6.362-8.014-7.859-2.191l.729-2.834c1.499-5.822-6.362-8.015-7.86-2.191-.855 3.333-4.597 17.867-6.388 24.831-.223.012-.441.025-.662.041-1.274-7.536-3.354-19.821-3.821-22.57-1.004-5.937-9-4.467-7.996 1.47.176 1.039.528 3.125.968 5.711-.897-5.262-7.996-3.957-7.102 1.311.457 2.705 2.072 12.186 3.054 18.054.402 2.393-.064 7.285-.186 9.709-.477 9.583 5.034 16.467 15.89 16.482 23.727.032 17.047-17.187 30.974-25.88 1.726-1.078.076-4.2-3.847-4.12z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M41.648 36.595c-4.011.171-10.265 7.078-9.945 14.758.49-6.952 7.395-13.239 11.253-13.193l-1.308-1.565z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M52.695 30.482c-7.538.083-9.356 7.392-10.318 6.36-.335-.358-.53-1.165-.193-2.409 1.405-5.204 5.19-20.165 5.36-20.826 1.258-4.888-3.394-8.03-6.962-5.925.668-6.122-7.767-8.2-9.482-1.673l-5.913 22.987c-1.277-7.542-3.063-18.1-3.491-20.622-1.214-7.18-10.736-5.021-9.477 1.724l.357 2.1c-2.994-1.842-7.231.556-6.491 4.922 0 0 2.328 13.701 3.056 18.052.303 1.807-.17 9.036-.194 9.546C8.378 56.122 15.239 61.977 25.582 62c24.175.055 17.857-17.565 31.373-26.002 2.415-1.509.5-5.568-4.26-5.516zm3.468 4.234c-14.314 8.934-7.369 25.81-30.579 25.775-9.965-.015-15.623-5.969-15.141-15.699.023-.501.508-7.891.176-9.872-.729-4.351-3.056-18.054-3.056-18.054-.716-4.251 4.888-5.401 5.624-1.057l2.921 17.265 1.479-.254-3.89-22.977c-.845-4.901 5.683-6.159 6.521-1.214.467 2.749 3.935 23.239 3.935 23.239l1.877-.116 6.524-25.364c1.261-4.896 7.638-2.958 6.407 1.814L32.98 31.453l1.45.38 5.256-20.42c1.264-4.925 7.644-2.986 6.408 1.814-.172.665-3.905 15.781-5.349 20.785-.439 1.52-.355 3.135.645 3.964 3.284 2.723 3.702-5.901 11.338-5.982 3.188-.035 4.411 2.115 3.435 2.722z"
  }));
};

var _default = SvgVulcanSalute;
exports["default"] = _default;