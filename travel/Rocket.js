"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRocket = function SvgRocket(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 133.645,
    y1: 81.666,
    x2: 133.645,
    y2: 50.304,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7b00"
  }), _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#fb6b00"
  }), _react["default"].createElement("stop", {
    offset: 0.711,
    stopColor: "#f04200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e82500"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__a)",
    d: "M18.942 34.59C6.561 40.933 3.04 55.003 3.04 55.003s1.469-1.807 4.212-4.242C3.598 57.079 2 62 2 62s4.912-1.586 11.232-5.242C10.802 59.496 9 60.962 9 60.962s14.067-3.521 20.409-15.904L18.942 34.59z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 133.644,
    y1: 73.101,
    x2: 133.644,
    y2: 51.672,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.175,
    stopColor: "#ffa400"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff9200"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff4d00"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__b)",
    d: "M19.082 36.664c-8.778 4.015-10.63 14.185-10.63 14.185s.986-1.251 2.877-2.899c-2.355 4.458-3.272 7.995-3.272 7.995s3.53-.908 7.99-3.267c-1.646 1.887-2.896 2.87-2.896 2.87s10.169-1.85 14.185-10.63l-8.254-8.254z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 133.647,
    y1: 66.975,
    x2: 133.647,
    y2: 51.672,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb500"
  }), _react["default"].createElement("stop", {
    offset: 0.087,
    stopColor: "#ffba00"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#ffda00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe600"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__c)",
    d: "M19.854 37.437c-5.014 5.236-7.465 14.176-7.465 14.176s8.933-2.445 14.177-7.465l-6.712-6.711z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 141.64,
    y1: 44.097,
    x2: 154.103,
    y2: 44.097,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#005687"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#2289c7"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__d)",
    d: "M43.99 48.097c.568-7.62-.553-13.197-.553-13.197s-12.111 6.819-10.41 8.52c4.692 4.693 5.106 6.923.225 11.805-.234.234.209.549.457.456 5.377-2.026 10.137-5.643 10.281-7.584z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 113.188,
    y1: 44.097,
    x2: 125.652,
    y2: 44.097,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__e)",
    d: "M15.904 20.01c-1.941.145-5.559 4.905-7.583 10.282-.094.248.222.691.456.457 4.881-4.881 7.111-4.468 11.805.226 1.7 1.701 8.52-10.41 8.52-10.41s-5.579-1.122-13.198-.555z"
  }), _react["default"].createElement("radialGradient", {
    id: "rocket_svg__f",
    cx: 133.644,
    cy: 46.926,
    r: 8.768,
    gradientTransform: "rotate(45.001 91.56 -87.079)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#657078"
  }), _react["default"].createElement("stop", {
    offset: 0.265,
    stopColor: "#606b72"
  }), _react["default"].createElement("stop", {
    offset: 0.613,
    stopColor: "#525b62"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#3c4247"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__f)",
    d: "M24.812 25.159c-9.119 9.119-8.739 12.305-3.507 17.537 5.229 5.23 8.417 5.612 17.536-3.508L24.812 25.159z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M30.17 36.718c-3.588 3.59-6.174 6.821-5.776 7.219.401.4 3.632-2.184 7.222-5.774l-1.446-1.445zM34.501 38.161c-3.587 3.592-6.174 6.822-5.774 7.221.399.399 3.632-2.187 7.22-5.775l-1.446-1.446zM25.839 32.387c-3.591 3.589-6.176 6.821-5.777 7.218.4.4 3.631-2.186 7.222-5.773l-1.445-1.445zM24.394 28.054c-3.589 3.589-6.174 6.82-5.774 7.22.399.399 3.632-2.188 7.22-5.777l-1.446-1.443z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 121.78,
    y1: 23.538,
    x2: 145.512,
    y2: 23.538,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#cfdde6"
  }), _react["default"].createElement("stop", {
    offset: 0.472,
    stopColor: "#cad8e1"
  }), _react["default"].createElement("stop", {
    offset: 0.679,
    stopColor: "#bccbd3"
  }), _react["default"].createElement("stop", {
    offset: 0.901,
    stopColor: "#a6b4bb"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__g)",
    d: "M61.979 2.021S46.598.621 26.323 20.897c-9.089 9.089-8.267 12.707-2.098 18.877 6.172 6.172 9.789 6.992 18.879-2.098C63.378 17.401 61.979 2.021 61.979 2.021z"
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 43.103,
    cy: 20.899,
    r: 6.754
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 208.811,
    y1: -44.46,
    x2: 218.462,
    y2: -44.46,
    gradientTransform: "rotate(90 95.69 -97.047)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4ecee6"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#46c9e8"
  }), _react["default"].createElement("stop", {
    offset: 0.504,
    stopColor: "#30baec"
  }), _react["default"].createElement("stop", {
    offset: 0.879,
    stopColor: "#0da3f4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("circle", {
    fill: "url(#rocket_svg__h)",
    cx: 43.103,
    cy: 20.899,
    r: 4.825
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M47.539 17.146c-.456.456-1.139-.227-.684-.682s1.138.227.684.682zM39.352 25.333c-.456.456-1.139-.227-.684-.682s1.138.228.684.682zM46.855 25.334c-.456-.456.227-1.138.683-.682.454.454-.227 1.137-.683.682zM38.668 17.146c-.456-.456.227-1.138.683-.682.454.454-.229 1.137-.683.682zM48.893 21.38c-.643.001-.643-.964 0-.964.642 0 .642.964 0 .964zM37.313 21.381c-.645-.001-.645-.965-.001-.966.644.002.644.966.001.966zM42.62 26.688c.001-.644.966-.644.965 0 .001.644-.964.644-.965 0zM42.62 15.11c0-.645.965-.645.966 0-.001.642-.966.642-.966 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 132.589,
    y1: 50.036,
    x2: 134.701,
    y2: 50.036,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__i)",
    d: "M23.619 38.888c3.707-3.708 7.047-6.379 7.459-5.966.413.413-2.259 3.751-5.966 7.459-3.707 3.707-7.047 6.379-7.46 5.966-.412-.412 2.26-3.752 5.967-7.459z"
  }), _react["default"].createElement("linearGradient", {
    id: "rocket_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 125.757,
    y1: 3.938,
    x2: 141.533,
    y2: 3.938,
    gradientTransform: "rotate(45.001 91.56 -87.079)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#rocket_svg__j)",
    d: "M61.98 2.021s-5.765-.515-14.879 3.722c2.514 4.475 6.681 8.642 11.155 11.156C62.494 7.785 61.98 2.021 61.98 2.021z"
  }));
};

var _default = SvgRocket;
exports["default"] = _default;