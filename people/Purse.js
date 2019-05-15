"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPurse = function SvgPurse(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C29843",
    d: "M29.673 16.944h-4.688c-2.912 0-2.916 3.305 0 3.305h5.354c.826 0 1.334-.634 1.66-.957l-2.326-2.348zM38.448 13.497c0 4.657-7 4.657-7 0 .001-4.663 7-4.663 7 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6B450",
    d: "M30.341 13.012l3.984 3.932h4.689c2.914 0 2.916 3.305 0 3.305H33.66c-.428 0-.853-.157-1.179-.479l-4.488-4.438c-.646-.639 1.7-2.961 2.348-2.32z"
  }), _react["default"].createElement("radialGradient", {
    id: "purse_svg__a",
    cx: 29.052,
    cy: 12.968,
    r: 3.5,
    gradientTransform: "matrix(1 0 0 .9986 0 .545)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd480"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#f1c266"
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#e6b450"
  })), _react["default"].createElement("path", {
    fill: "url(#purse_svg__a)",
    d: "M32.552 13.497c0 4.657-7 4.657-7 0 0-4.663 7-4.663 7 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "purse_svg__b",
    cx: 32,
    cy: 26.022,
    r: 17.293,
    gradientTransform: "matrix(1 0 0 .9986 0 .545)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd480"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#f1c266"
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#e6b450"
  })), _react["default"].createElement("path", {
    fill: "url(#purse_svg__b)",
    d: "M49.301 20.055H14.7c-8.373 0-8.373 12.951 0 12.951h34.601c8.373 0 8.373-12.951 0-12.951z"
  }), _react["default"].createElement("linearGradient", {
    id: "purse_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 61.044,
    x2: 32.001,
    y2: 22.811
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#004066"
  }), _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#006dae"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#00a0ff"
  })), _react["default"].createElement("path", {
    fill: "url(#purse_svg__c)",
    d: "M12.736 24.171C6.89 29.103-.028 45.691 2.558 52.844c1.004 2.771 7.348 5.199 10.178 6.119 9.145 2.973 29.236 2.568 38.503 0 2.867-.793 9.176-3.348 10.178-6.119 2.586-7.152-3.908-24.278-10.178-28.672-2.642-1.851-36.392-1.779-38.503-.001z"
  }), _react["default"].createElement("linearGradient", {
    id: "purse_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 62,
    x2: 32.002,
    y2: 22.731
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#004b78"
  }), _react["default"].createElement("stop", {
    offset: 0.151,
    stopColor: "#006dae"
  }), _react["default"].createElement("stop", {
    offset: 0.215,
    stopColor: "#0676b9"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#1a95df"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#26a9f6"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#2bb0ff"
  })), _react["default"].createElement("path", {
    fill: "url(#purse_svg__d)",
    d: "M50.993 24.015c-.908-.963-10.271-1.382-18.992-1.266-8.721-.116-18.082.303-18.99 1.266 0 0-11.553 29.303 3.596 35.817 6.715 2.891 24.076 2.891 30.789 0 15.15-6.514 3.597-35.817 3.597-35.817z"
  }), _react["default"].createElement("path", {
    fill: "#019EE6",
    d: "M33.788 32.021c1.064 5.23-4.64 5.23-3.576 0 1.934-9.501 1.643-9.501 3.576 0zM24.938 31.316c-2.739 4.499-6.774.223-2.529-2.679 7.711-5.269 7.505-5.488 2.529 2.679zM41.591 28.637c4.246 2.901.21 7.175-2.529 2.679-4.976-8.167-5.182-7.948 2.529-2.679z"
  }));
};

var _default = SvgPurse;
exports["default"] = _default;