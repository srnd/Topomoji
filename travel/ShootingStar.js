"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShootingStar = function SvgShootingStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "shooting-star_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 30.011,
    x2: 22.041,
    y2: 30.011
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#ffeb93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#shooting-star_svg__a)",
    d: "M11.188 36.316s4.232-10.5 10.854-18.332C7.957 27.508 2 42.037 2 42.037l9.188-5.721z"
  }), _react["default"].createElement("linearGradient", {
    id: "shooting-star_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 26.068,
    y1: 19.015,
    x2: 62,
    y2: 19.015
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#ffeb93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#shooting-star_svg__b)",
    d: "M37.077 36.03S55.125 8.318 62 2C48.541 9.65 26.068 26.046 26.068 26.046l11.009 9.984z"
  }), _react["default"].createElement("linearGradient", {
    id: "shooting-star_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 13.837,
    y1: 12.411,
    x2: 62,
    y2: 12.411
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#ffeb93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#shooting-star_svg__c)",
    d: "M62 2C35.74 2 13.837 15 13.837 15l7.425 7.821S43.361 2 62 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "shooting-star_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 41.261,
    y1: 26.896,
    x2: 62,
    y2: 26.896
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#ffeb93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#shooting-star_svg__d)",
    d: "M49.456 47.309S59.707 23.819 62 6.485c-4.043 13-20.739 35.553-20.739 35.553l8.195 5.271z"
  }), _react["default"].createElement("linearGradient", {
    id: "shooting-star_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 49.59,
    y1: -8.22,
    x2: 49.59,
    y2: -54.045,
    gradientTransform: "rotate(-30 160.636 47.37)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#shooting-star_svg__e)",
    d: "M13.541 16.683c-.382-1.763.399-2.214 1.736-1.002L27.429 26.71l13.902-8.036c1.617-.934 2.336-.315 1.597 1.371l-6.49 14.84L48.581 45.9c1.339 1.213.933 2.038-.899 1.834l-16.087-1.786-6.496 14.824c-.739 1.689-1.657 1.627-2.039-.138L19.592 44.61 3.496 42.812c-1.83-.204-2.007-1.135-.39-2.068l13.911-8.021-3.476-16.04z"
  }));
};

var _default = SvgShootingStar;
exports["default"] = _default;