"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCompass = function SvgCompass(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "compass_svg__a",
    cx: 31.625,
    cy: 7.585,
    r: 6,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#7a3c00"
  }), _react["default"].createElement("stop", {
    offset: 0.689,
    stopColor: "#9e570f"
  }), _react["default"].createElement("stop", {
    offset: 0.819,
    stopColor: "#f79c35"
  }), _react["default"].createElement("stop", {
    offset: 0.83,
    stopColor: "#ffa238"
  }), _react["default"].createElement("stop", {
    offset: 0.853,
    stopColor: "#f79c35"
  }), _react["default"].createElement("stop", {
    offset: 0.888,
    stopColor: "#e28c2c"
  }), _react["default"].createElement("stop", {
    offset: 0.931,
    stopColor: "#bf711d"
  }), _react["default"].createElement("stop", {
    offset: 0.98,
    stopColor: "#904d09"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7a3c00"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__a)",
    d: "M25.999 8a6 6 0 1 0 12 0 6 6 0 0 0-12 0zm2.002 0a3.999 3.999 0 1 1 7.998 0 3.998 3.998 0 0 1-4 3.999A3.998 3.998 0 0 1 28.001 8z"
  }), _react["default"].createElement("linearGradient", {
    id: "compass_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 30,
    y1: 10.5,
    x2: 34,
    y2: 10.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa238"
  }), _react["default"].createElement("stop", {
    offset: 0.136,
    stopColor: "#f79c35"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#e28c2c"
  }), _react["default"].createElement("stop", {
    offset: 0.596,
    stopColor: "#bf711d"
  }), _react["default"].createElement("stop", {
    offset: 0.882,
    stopColor: "#904d09"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7a3c00"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__b)",
    d: "M30 13h4V8.837c0-1.116-4-1.116-4 0V13z"
  }), _react["default"].createElement("radialGradient", {
    id: "compass_svg__c",
    cx: 31.415,
    cy: 36.25,
    r: 25.474,
    gradientTransform: "translate(.001)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#7a3c00"
  }), _react["default"].createElement("stop", {
    offset: 0.84,
    stopColor: "#9e570f"
  }), _react["default"].createElement("stop", {
    offset: 0.915,
    stopColor: "#f79c35"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#ffa238"
  }), _react["default"].createElement("stop", {
    offset: 0.932,
    stopColor: "#f79c35"
  }), _react["default"].createElement("stop", {
    offset: 0.948,
    stopColor: "#e28c2c"
  }), _react["default"].createElement("stop", {
    offset: 0.968,
    stopColor: "#bf711d"
  }), _react["default"].createElement("stop", {
    offset: 0.991,
    stopColor: "#904d09"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7a3c00"
  })), _react["default"].createElement("circle", {
    fill: "url(#compass_svg__c)",
    cx: 32,
    cy: 37,
    r: 25
  }), _react["default"].createElement("radialGradient", {
    id: "compass_svg__d",
    cx: 31.999,
    cy: 36.999,
    r: 21,
    gradientTransform: "translate(.001)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff8e0"
  }), _react["default"].createElement("stop", {
    offset: 0.307,
    stopColor: "#fff7de"
  }), _react["default"].createElement("stop", {
    offset: 0.484,
    stopColor: "#fff5d5"
  }), _react["default"].createElement("stop", {
    offset: 0.629,
    stopColor: "#fef1c7"
  }), _react["default"].createElement("stop", {
    offset: 0.755,
    stopColor: "#fdecb3"
  }), _react["default"].createElement("stop", {
    offset: 0.871,
    stopColor: "#fce59a"
  }), _react["default"].createElement("stop", {
    offset: 0.976,
    stopColor: "#fadc7a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fada72"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__d)",
    d: "M11 37c0 11.596 9.403 21 20.999 21C43.595 58 53 48.597 53 37c0-11.598-9.405-21-21.001-21C20.405 16 11 25.402 11 37z"
  }), _react["default"].createElement("path", {
    fill: "#AB8D47",
    d: "M33.085 18h.482c.1 0 .154.055.154.155v4.511c0 .1-.055.155-.154.155h-.341c-.083 0-.148-.031-.189-.101l-1.967-3.17v3.116c.001.1-.055.155-.155.155h-.48c-.101 0-.156-.055-.156-.156v-4.51c0-.1.056-.155.156-.155h.34c.083 0 .148.031.189.1l1.966 3.171v-3.116c0-.1.055-.155.155-.155zM51.001 38.809v.446c0 .101-.055.155-.154.155h-2.515c-.1 0-.155-.055-.155-.155v-4.511c0-.1.056-.155.155-.155h2.48c.1 0 .155.056.155.155v.447c0 .101-.055.156-.155.156l-1.842-.001v1.257h1.67c.1 0 .155.056.155.154v.436c0 .1-.056.154-.155.154h-1.67v1.305h1.877c.099 0 .154.056.154.157zM30.325 54.615c-.007-.106.052-.161.151-.161h.485c.094 0 .145.052.158.151.063.409.406.623.934.623.521 0 .83-.244.83-.604 0-.402-.428-.577-.923-.756-.706-.256-1.54-.521-1.54-1.516 0-.883.744-1.354 1.529-1.354s1.505.438 1.581 1.332c.007.107-.052.162-.151.162h-.485c-.093 0-.146-.052-.159-.148-.058-.381-.357-.574-.785-.574-.438 0-.736.228-.736.581 0 .421.382.597.871.778.709.262 1.591.52 1.591 1.494 0 .886-.755 1.375-1.622 1.375-.885.002-1.653-.453-1.729-1.383zM18.897 34.765l-1.326 4.515c-.024.09-.086.131-.172.131h-.641c-.086 0-.147-.041-.171-.131l-.632-2.152-.635 2.152c-.024.09-.087.131-.173.131h-.641c-.086 0-.148-.041-.172-.131l-1.326-4.515c-.031-.109.021-.176.131-.176l.496.001c.09-.001.148.048.169.134l1.057 3.72.737-2.529-.337-1.149c-.031-.109.02-.176.131-.176h.427c.089 0 .148.049.168.135l1.058 3.72 1.058-3.72c.02-.086.079-.135.169-.135l.495.001c.109-.002.161.064.13.174z"
  }), _react["default"].createElement("path", {
    fill: "#E5BC5E",
    d: "M36.001 21.009A16.5 16.5 0 0 1 47.991 33h.516A17.003 17.003 0 0 0 36 20.493l.001.516zM16.009 33A16.502 16.502 0 0 1 28 21.009v-.516A17.003 17.003 0 0 0 15.493 33h.516zM28 52.99A16.494 16.494 0 0 1 16.009 41h-.516A17.002 17.002 0 0 0 28 53.507v-.517zM47.991 41A16.502 16.502 0 0 1 36 52.99v.517A17.007 17.007 0 0 0 48.507 41h-.516z"
  }), _react["default"].createElement("path", {
    fill: "#FFE7B5",
    d: "M32.001 24.749c-6.766 0-12.25 5.484-12.25 12.25 0 6.767 5.484 12.25 12.25 12.25s12.25-5.483 12.25-12.25c0-6.766-5.484-12.25-12.25-12.25zm0 24.26c-6.633 0-12.01-5.377-12.01-12.01 0-6.632 5.377-12.01 12.01-12.01s12.01 5.377 12.01 12.01-5.377 12.01-12.01 12.01z"
  }), _react["default"].createElement("path", {
    fill: "#FFE7B5",
    d: "M27.632 33.139l-5.188-1.656 4.025 3.662a5.81 5.81 0 0 1 1.163-2.006zM36.37 33.139c.512.578.91 1.256 1.162 2.004l4.023-3.659-5.185 1.655zM30.146 31.469l-3.663-4.025 1.657 5.187a5.808 5.808 0 0 1 2.006-1.162zM35.861 32.629l1.656-5.184-3.661 4.024a5.833 5.833 0 0 1 2.005 1.16zM26.469 38.855l-4.024 3.66 5.185-1.655a5.801 5.801 0 0 1-1.161-2.005zM36.372 40.861l5.184 1.656-4.023-3.66a5.822 5.822 0 0 1-1.161 2.004zM28.138 41.37l-1.655 5.185 3.661-4.023a5.843 5.843 0 0 1-2.006-1.162zM33.857 42.532l3.659 4.023-1.654-5.185a5.797 5.797 0 0 1-2.005 1.162z"
  }), _react["default"].createElement("path", {
    fill: "#E5BC5E",
    d: "M37.932 35.672c-.563-2.197-2.407-4.042-4.604-4.604l-1.326-6.089-1.323 6.068c-.999.244-1.997.784-2.919 1.706-.923.924-1.464 1.922-1.708 2.922L19.979 37l6.091 1.327c.563 2.196 2.406 4.038 4.602 4.601l1.327 6.093 1.323-6.071c1-.244 1.999-.785 2.923-1.709.922-.922 1.462-1.918 1.706-2.918L44.021 37l-6.089-1.328zm-2.747 4.509c-4.244 4.243-10.609-2.12-6.365-6.364 4.242-4.243 10.605 2.121 6.365 6.364z"
  }), _react["default"].createElement("linearGradient", {
    id: "compass_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 35.576,
    y1: 29.781,
    x2: 39.219,
    y2: 33.424,
    gradientTransform: "translate(.001)"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#ff2121"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#a30008"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__e)",
    d: "M42.796 26.205l-8.975 12.616-3.642-3.642z"
  }), _react["default"].createElement("linearGradient", {
    id: "compass_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 372.408,
    y1: -139.112,
    x2: 377.56,
    y2: -139.112,
    gradientTransform: "rotate(45.001 -18.314 -468.892)"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#93a1a8"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__f)",
    d: "M21.206 47.795l8.973-12.616 3.642 3.642z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M29.88 34.878c-2.83 2.829 1.414 7.071 4.242 4.242 2.828-2.827-1.414-7.07-4.242-4.242z"
  }), _react["default"].createElement("radialGradient", {
    id: "compass_svg__g",
    cx: 374.255,
    cy: -147.474,
    r: 3.094,
    gradientTransform: "rotate(45.001 -18.314 -468.892)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#cad3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.405,
    stopColor: "#bac3c8"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#a1aaaf"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#7e888d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#compass_svg__g)",
    d: "M30.233 35.23c-2.357 2.357 1.177 5.895 3.535 3.536 2.357-2.356-1.179-5.892-3.535-3.536z"
  }));
};

var _default = SvgCompass;
exports["default"] = _default;