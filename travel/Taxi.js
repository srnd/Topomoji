"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTaxi = function SvgTaxi(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M33.673 21h-1.876v3h3.953s-.455-3-2.077-3z"
  }), _react["default"].createElement("path", {
    fill: "#AB5110",
    d: "M32.291 21.502h-.494V24h.494v-2.498z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M56.596 56.075h-46.45C2.438 56.075 2 52.999 2 52.999h59.234s-.892 3.076-4.638 3.076z"
  }), _react["default"].createElement("linearGradient", {
    id: "taxi_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 55,
    x2: 32.001,
    y2: 24
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe600"
  })), _react["default"].createElement("path", {
    fill: "url(#taxi_svg__a)",
    d: "M60.563 43.35s-.832-2.141-.063-3.65c0 0 .322-1.709-.541-2.679-.867-.656-3.064-.677-3.646-1.599-1.281-2.031-4.596-7.643-5.688-9.451-.537-.89-2.051-1.971-3.75-1.971H30.813c-1.885 0-3.182 1.242-3.938 1.971-1.779 1.713-10.125 10.513-10.125 10.513-11.844 2.313-13.762 5.834-13.762 5.834v2.13c0 .778-.988 1.76-.988 2.792v5.759S2.144 55 7.933 55h50.206c5.598 0 3.867-10.595 2.44-10.595-.28-.489-.016-1.055-.016-1.055z"
  }), _react["default"].createElement("linearGradient", {
    id: "taxi_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 77.471,
    y1: -568.97,
    x2: 78.653,
    y2: -568.97,
    gradientTransform: "rotate(-90 363.831 -241.878)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe600"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f9c802"
  })), _react["default"].createElement("path", {
    fill: "url(#taxi_svg__b)",
    d: "M60.579 44.405l-.016-1.056s-36.93-.298-47.664.562c10.757.86 47.68.494 47.68.494z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.5 39.699h-2.031l-.744 3.65h2.839c-.001.001 1.135-1.2-.064-3.65z"
  }), _react["default"].createElement("linearGradient", {
    id: "taxi_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 37.152,
    y1: 37.02,
    x2: 37.152,
    y2: 25.971
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#454754"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#636d78"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#taxi_svg__c)",
    d: "M22.36 35.413c-.655.884-.29 1.607.81 1.607h27.758c1.1 0 1.632-.821 1.184-1.825l-3.311-7.398c-.449-1.005-1.717-1.826-2.816-1.826h-14.63c-1.101 0-2.2.692-2.854 1.576l-6.141 7.866z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M40.5 25.971h-1.803l-.417 11.05h2.56z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M41.574 53.626H21.482l-.018-.104c-.505-3.107-.923-5.602-1.26-7.611-1.224-7.305-1.381-8.243-.75-8.972.28-.324 1.303-1.562 2.598-3.128 1.854-2.245 4.163-5.04 5.455-6.557 1.215-1.427 2.307-2.253 4.289-2.253H46.04c1.894 0 3.134.785 3.902 2.47.23.504 4.522 9.384 4.522 10.822v9.27c-1.185-1.438-10.763-3.406-12.871 5.964l-.019.099zm-19.879-.25h19.676c2.078-9.556 11.738-7.485 12.845-6.3v-8.783c0-1.382-4.269-10.212-4.499-10.719-.725-1.585-1.893-2.323-3.676-2.323H31.797c-1.896 0-2.903.761-4.1 2.165-1.29 1.516-3.598 4.309-5.453 6.554-1.295 1.568-2.318 2.807-2.601 3.133-.554.64-.372 1.722.808 8.766.334 1.987.746 4.448 1.244 7.507z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M39.436 25.126h.25v28.375h-.25z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2.988 42.318h3.286v2.13H2.988z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M7.261 42.318h-.987v2.13h2.2s-.077-1.583-1.213-2.13z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M4.07 50.166H2.514v2.727h3.468s-.121-2.026-1.912-2.727z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M4.968 50.75H2.216v.5h3.18a2.945 2.945 0 0 0-.428-.5zM2.216 52.365h3.67a3.593 3.593 0 0 0-.163-.5H2.216v.5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M39.414 40.891h2.967v3h-2.967zM36.449 43.891h2.965v3h-2.965zM33.482 40.891h2.967v3h-2.967zM30.518 43.891h2.965v3h-2.965zM27.551 40.891h2.967v3h-2.967zM24.586 43.891h2.965v3h-2.965zM21.62 40.891h2.966v3H21.62z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M25.172 37.263V34.82c.002-1.03-4.256-.189-4.256.682v1.742c0 .365 4.256.866 4.256.019zM37.436 39.099c0-.475 0-.861-1.212-.861h-1.271c-1.213 0-1.213.387-1.213.861 0 .286 3.696.286 3.696 0zM52.117 39.099c0-.475 0-.861-1.211-.861h-1.271c-1.213 0-1.213.387-1.213.861 0 .286 3.695.286 3.695 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M58.024 55.002a7.996 7.996 0 0 0-8-8.002c-4.414-.002-7.996 3.586-8 8.002h16z"
  }), _react["default"].createElement("radialGradient", {
    id: "taxi_svg__d",
    cx: 3.978,
    cy: 96.626,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.644,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("circle", {
    fill: "url(#taxi_svg__d)",
    cx: 50.024,
    cy: 55,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 50.025,
    cy: 55,
    r: 4.841
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M53.554 56.198a3.69 3.69 0 0 0 0-2.395L51.478 55l2.076 1.198zM50.751 53.74l2.074-1.196a3.73 3.73 0 0 0-2.074-1.201v2.397zM46.497 53.802c-.127.377-.201.779-.201 1.198s.074.821.201 1.197L48.573 55l-2.076-1.198zM50.751 56.259v2.398a3.735 3.735 0 0 0 2.076-1.201l-2.076-1.197zM49.298 53.741v-2.398a3.73 3.73 0 0 0-2.074 1.201l2.074 1.197zM49.298 56.26l-2.074 1.196a3.736 3.736 0 0 0 2.074 1.201V56.26z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 50.024,
    cy: 55,
    r: 1.902
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 50.025,
    cy: 55,
    r: 0.632
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M50.298 53.861c0 .361-.545.361-.545 0s.545-.361.545 0zM50.298 56.139c0 .361-.545.361-.545 0s.545-.362.545 0zM51.147 54.665c-.314.183-.586-.288-.271-.47.312-.18.584.29.271.47zM49.175 55.805c-.313.181-.584-.29-.271-.471.314-.182.585.289.271.471zM50.874 55.805c-.313-.182-.041-.652.273-.471.313.181.041.651-.273.471zM48.903 54.665c-.314-.18-.041-.65.271-.47.315.182.044.653-.271.47z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M21.975 55.002A7.997 7.997 0 0 0 13.974 47c-4.412-.002-7.994 3.586-7.998 8.002h15.999z"
  }), _react["default"].createElement("radialGradient", {
    id: "taxi_svg__e",
    cx: -27.298,
    cy: 96.628,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.644,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("circle", {
    fill: "url(#taxi_svg__e)",
    cx: 13.975,
    cy: 55.002,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 13.976,
    cy: 55.002,
    r: 4.841
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M17.504 56.201a3.675 3.675 0 0 0 0-2.396l-2.074 1.197 2.074 1.199zM14.702 53.742l2.074-1.197a3.741 3.741 0 0 0-2.074-1.201v2.398zM10.448 53.803c-.127.378-.199.779-.199 1.199s.072.821.199 1.198l2.076-1.198-2.076-1.199zM14.702 56.261v2.399a3.734 3.734 0 0 0 2.076-1.201l-2.076-1.198zM13.249 53.743v-2.399a3.741 3.741 0 0 0-2.074 1.201l2.074 1.198zM13.249 56.262l-2.074 1.197a3.742 3.742 0 0 0 2.074 1.201v-2.398z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 13.975,
    cy: 55.002,
    r: 1.902
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 13.977,
    cy: 55.002,
    r: 0.633
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M14.249 53.864c0 .36-.545.36-.545 0 0-.363.545-.363.545 0zM14.249 56.14c0 .363-.545.363-.545 0 0-.361.545-.361.545 0zM15.098 54.668c-.314.182-.584-.289-.27-.471.311-.18.583.289.27.471zM13.125 55.807c-.313.181-.584-.289-.271-.471.314-.182.586.29.271.471zM14.825 55.807c-.311-.181-.041-.652.273-.471.313.182.041.651-.273.471zM12.854 54.668c-.314-.182-.041-.651.271-.471.315.182.043.653-.271.471z"
  }));
};

var _default = SvgTaxi;
exports["default"] = _default;