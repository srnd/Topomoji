"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPotato = function SvgPotato(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "potato_svg__a",
    cx: 28.834,
    cy: 28.666,
    r: 38.997,
    gradientTransform: "rotate(-45.001 41.87 23.267) scale(1 .6232)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f0c581"
  }), _react["default"].createElement("stop", {
    offset: 0.171,
    stopColor: "#ecbe7b"
  }), _react["default"].createElement("stop", {
    offset: 0.414,
    stopColor: "#dfab69"
  }), _react["default"].createElement("stop", {
    offset: 0.702,
    stopColor: "#cb8d4c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b16527"
  })), _react["default"].createElement("path", {
    fill: "url(#potato_svg__a)",
    d: "M38.896 1.999c-12.408 0-14.693 10.963-24.098 17.127C3.112 26.778-.005 35.643 3.163 45.313c4.093 12.492 15.596 21.129 28.906 14.262 13.31-6.861 18.367-19.199 25.22-25.627 8.408-7.881 7.407-31.949-18.393-31.949z"
  }), _react["default"].createElement("radialGradient", {
    id: "potato_svg__b",
    cx: 48.91,
    cy: 17.092,
    r: 5.765,
    gradientTransform: "matrix(1 0 0 1.3457 0 -5.909)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b16527"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b16527",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.4,
    fill: "url(#potato_svg__b)",
    d: "M42.468 11.56c-1.659 4.23-.682 19.619 9.344 15.465 11.242-4.649-2.985-31.633-9.344-15.465z"
  }), _react["default"].createElement("radialGradient", {
    id: "potato_svg__c",
    cx: 56.315,
    cy: 71.364,
    r: 7.301,
    gradientTransform: "matrix(.6703 -.7421 .9986 .902 -84.292 7.472)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b16527"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b16527",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.4,
    fill: "url(#potato_svg__c)",
    d: "M14.058 31.412c2.564 5.149 17.855 17.295 22.463 4.346 5.173-14.509-32.26-24.046-22.463-4.346z"
  }), _react["default"].createElement("radialGradient", {
    id: "potato_svg__d",
    cx: 39.893,
    cy: 116.072,
    r: 4.757,
    gradientTransform: "matrix(.2286 -.9735 1.31 .3076 -136.455 53.265)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b16527"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b16527",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.4,
    fill: "url(#potato_svg__d)",
    d: "M19.065 54.27c3.084 2.129 15.631 4.248 14.185-4.59-1.613-9.909-25.976-3.569-14.185 4.59z"
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "#B97544",
    d: "M12.356 23.392c.314.479 9.521-1.02 13.248-.021-1.896-2.025-8.386-3.257-13.248.021zM45.663 23.888c-.17.444 4.055 6.359 4.812 9.489.516-2.29-1.101-7.508-4.812-9.489zM36.132 23.062c-.396.638 9.446 6.121 10.01 16.896 2.466-3.688-.743-13.948-10.01-16.896zM32 8.147c.254.455 9.531-1.224 14.942 2.865C45.658 8.096 38.307 5.221 32 8.147zM23.885 44.805c.03-.617-8.683-1.342-16.061-9.799 2.566 5.949 10.739 10.678 16.061 9.799zM11.031 43.457c2.231 2.867 7.563 4.443 10.54 3.369-.058-.33-5.204.279-10.54-3.369zM26.536 50.037c-1.105 1.508-5.156 1.73-4.811-1.096.227-1.855 6.504-1.212 4.811 1.096zM27.349 33.377c-.812 1.723-6.031-.506-5.777-3.735.167-2.12 7.017 1.1 5.777 3.735zM51.089 17.939c-.779 1.654-3.631 1.901-3.387-1.201.16-2.038 4.58-1.33 3.387 1.201z"
  }));
};

var _default = SvgPotato;
exports["default"] = _default;